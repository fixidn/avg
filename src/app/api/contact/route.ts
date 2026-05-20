import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

// In-memory rate limiter: max 5 requests per 15 minutes per IP.
// Note: resets on server restart; use Upstash Redis for multi-instance/serverless deployments.
const RATE_LIMIT_MAX = 5;
const RATE_LIMIT_WINDOW_MS = 15 * 60 * 1000;

const ipRequestMap = new Map<string, { count: number; resetAt: number }>();

function checkRateLimit(ip: string): { allowed: boolean; retryAfterSec: number } {
  const now = Date.now();
  const entry = ipRequestMap.get(ip);

  if (!entry || now > entry.resetAt) {
    ipRequestMap.set(ip, { count: 1, resetAt: now + RATE_LIMIT_WINDOW_MS });
    return { allowed: true, retryAfterSec: 0 };
  }

  if (entry.count >= RATE_LIMIT_MAX) {
    return { allowed: false, retryAfterSec: Math.ceil((entry.resetAt - now) / 1000) };
  }

  entry.count += 1;
  return { allowed: true, retryAfterSec: 0 };
}

type ContactPayload = {
  name: string;
  email: string;
  phone?: string;
  service: string;
  message: string;
};

const escapeCsv = (text: string) => {
  if (!text) return '';
  const escaped = text.replace(/"/g, '""'); 
  if (escaped.includes(',') || escaped.includes('\n') || escaped.includes('"')) {
    return `"${escaped}"`;
  }
  return escaped;
};

const MAX_LENGTH = {
  name: 120,
  email: 254,
  phone: 30,
  service: 120,
  message: 4000,
};

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

function sanitizeText(value: unknown, maxLen: number): string {
  if (typeof value !== 'string') return '';
  return value.trim().slice(0, maxLen);
}

function validatePayload(input: unknown): { ok: true; data: ContactPayload } | { ok: false; error: string } {
  if (!input || typeof input !== 'object') {
    return { ok: false, error: 'Payload tidak valid.' };
  }

  const body = input as Record<string, unknown>;
  const name = sanitizeText(body.name, MAX_LENGTH.name);
  const email = sanitizeText(body.email, MAX_LENGTH.email);
  const phone = sanitizeText(body.phone, MAX_LENGTH.phone);
  const service = sanitizeText(body.service, MAX_LENGTH.service);
  const message = sanitizeText(body.message, MAX_LENGTH.message);

  if (name.length < 3) {
    return { ok: false, error: 'Nama minimal 3 karakter.' };
  }
  if (!EMAIL_REGEX.test(email)) {
    return { ok: false, error: 'Format email tidak valid.' };
  }
  if (!service) {
    return { ok: false, error: 'Layanan wajib diisi.' };
  }
  if (message.length < 10) {
    return { ok: false, error: 'Pesan minimal 10 karakter.' };
  }

  return {
    ok: true,
    data: {
      name,
      email,
      phone,
      service,
      message,
    },
  };
}

export async function POST(request: Request) {
  try {
    const ip =
      request.headers.get('x-forwarded-for')?.split(',')[0].trim() ??
      request.headers.get('x-real-ip') ??
      'unknown';

    const { allowed, retryAfterSec } = checkRateLimit(ip);
    if (!allowed) {
      return NextResponse.json(
        { error: 'Terlalu banyak permintaan. Coba lagi dalam beberapa menit.' },
        {
          status: 429,
          headers: { 'Retry-After': String(retryAfterSec) },
        }
      );
    }

    const rawBody = await request.json();
    const validation = validatePayload(rawBody);

    if (!validation.ok) {
      return NextResponse.json({ error: validation.error }, { status: 400 });
    }

    const { name, email, phone, service, message } = validation.data;
    
    const date = new Date().toLocaleString('id-ID', { timeZone: 'Asia/Jakarta' });

    const { TELEGRAM_BOT_TOKEN, TELEGRAM_CHAT_ID } = process.env;

    if (!TELEGRAM_BOT_TOKEN || !TELEGRAM_CHAT_ID) {
      return NextResponse.json({ error: 'Telegram Config Error' }, { status: 500 });
    }

    const sendToTelegram = async () => {
      const text = `
🚨 **LEAD BARU (CSV SAVED)** 🚨

👤 **Nama:** ${name}
🏢 **Email:** ${email}
📱 **HP:** ${phone || '-'}
🛡️ **Layanan:** ${service}
📝 **Pesan:**
${message}

🕒 *${date}*
      `;
      
      const url = `https://api.telegram.org/bot${TELEGRAM_BOT_TOKEN}/sendMessage`;
      const response = await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text, parse_mode: 'Markdown' }),
      });

      if (!response.ok) {
        throw new Error(`Telegram API error: ${response.status}`);
      }
    };

    const saveToCsv = async () => {
      const dataDir = path.join(process.cwd(), 'data');
      const filePath = path.join(dataDir, 'contacts.csv');

      try {
        await fs.access(dataDir);
      } catch {
        await fs.mkdir(dataDir);
      }

      const csvRow = [
        escapeCsv(date),
        escapeCsv(name),
        escapeCsv(email),
        escapeCsv(phone || '-'),
        escapeCsv(service),
        escapeCsv(message)
      ].join(',') + '\n';

      let fileExists = false;
      try {
        await fs.access(filePath);
        fileExists = true;
      } catch {
        fileExists = false;
      }

      if (!fileExists) {
        const header = 'Tanggal,Nama,Email,HP,Layanan,Pesan\n';
        await fs.writeFile(filePath, header + csvRow, 'utf8');
      } else {
        await fs.appendFile(filePath, csvRow, 'utf8');
      }
    };

    const results = await Promise.allSettled([sendToTelegram(), saveToCsv()]);
    const failed = results.filter((result) => result.status === 'rejected');

    if (failed.length > 0) {
      const failedTasks = results
        .map((result, index) => ({ result, index }))
        .filter((item) => item.result.status === 'rejected')
        .map((item) => (item.index === 0 ? 'telegram' : 'csv'));

      return NextResponse.json(
        {
          error: `Gagal memproses data pada: ${failedTasks.join(', ')}`,
        },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

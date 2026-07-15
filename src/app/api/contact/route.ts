import { NextResponse } from 'next/server';
import { insertLead } from '@/lib/db';

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
🚨 **LEAD BARU** 🚨

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

    const saveToDb = async () => {
      await insertLead({ name, email, phone, service, message, ip });
    };

    const [telegramResult, dbResult] = await Promise.allSettled([
      sendToTelegram(),
      saveToDb(),
    ]);

    // Lead dianggap tersimpan jika MINIMAL salah satu saluran berhasil.
    // Hanya balikkan error ke user kalau keduanya gagal (lead benar-benar hilang).
    if (telegramResult.status === 'rejected') {
      console.error('Telegram notify gagal:', telegramResult.reason);
    }
    if (dbResult.status === 'rejected') {
      console.error('Simpan lead ke DB gagal:', dbResult.reason);
    }

    if (telegramResult.status === 'rejected' && dbResult.status === 'rejected') {
      return NextResponse.json(
        { error: 'Gagal memproses permintaan. Silakan coba lagi.' },
        { status: 502 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}

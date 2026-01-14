import { NextResponse } from 'next/server';
import { promises as fs } from 'fs';
import path from 'path';

const escapeCsv = (text: string) => {
  if (!text) return '';
  const escaped = text.replace(/"/g, '""'); 
  if (escaped.includes(',') || escaped.includes('\n') || escaped.includes('"')) {
    return `"${escaped}"`;
  }
  return escaped;
};

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, service, message } = body;
    
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
      await fetch(url, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ chat_id: TELEGRAM_CHAT_ID, text, parse_mode: 'Markdown' }),
      });
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

    await Promise.allSettled([sendToTelegram(), saveToCsv()]);

    return NextResponse.json({ success: true });

  } catch (error) {
    console.error('API Error:', error);
    return NextResponse.json({ error: 'Internal Server Error' }, { status: 500 });
  }
}
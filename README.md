# Avangard Security — Website

Website resmi [Avangard Security](https://stacopa-avangard.com), anak perusahaan STACOPA Group. Dibangun dengan Next.js App Router dan Sanity CMS.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **CMS:** Sanity v5
- **Styling:** Tailwind CSS v4
- **Runtime:** Node.js v20
- **Deployment:** Proxmox LXC + Cloudflare Tunnel

## Struktur Proyek

```
src/
├── app/              # Halaman & API routes (Next.js App Router)
│   ├── api/contact/  # Form kontak → Telegram + CSV
│   ├── blog/         # Blog listing & detail (dari Sanity)
│   ├── services/     # Halaman layanan (dari Sanity)
│   └── studio/       # Sanity Studio (CMS editor)
├── components/       # Navbar, Footer, ShareButtons, dll
├── lib/sanity.ts     # Sanity client & image URL builder
└── sanity/schemas/   # Schema konten Sanity
```

## Environment Variables

Buat file `.env.local` di root project:

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

## Development

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Sanity Studio tersedia di [http://localhost:3000/studio](http://localhost:3000/studio).

## Build & Deploy

Build dilakukan di lokal, hasil build di-upload ke server:

```bash
# 1. Build
npm run build

# 2. Deploy ke server (192.168.18.102)
python deploy.py
```

Script `deploy.py` akan mengupload `.next/`, `public/`, dan config files ke server, lalu restart service `avangard-next.service` secara otomatis.

### Struktur Server

- **App directory:** `/opt/apps/avangard`
- **Service:** `avangard-next.service` (systemd)
- **Port:** 3000 (diakses via Cloudflare Tunnel)
- **Contacts CSV:** `/opt/apps/avangard/data/contacts.csv`

## Konten (Sanity CMS)

Konten blog dan halaman layanan dikelola via Sanity Studio. Akses di `/studio` setelah login dengan akun Sanity yang terdaftar di project.

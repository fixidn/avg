# Avangard Security

Dibangun dengan Next.js App Router dan Sanity CMS.

## Tech Stack

- **Framework:** Next.js 16 (App Router)
- **CMS:** Sanity v5
- **Styling:** Tailwind CSS v4
- **Runtime:** Node.js v22 (dikunci via `.nvmrc` & `engines`)
- **Hosting:** Hostinger — Node.js Web App (auto-deploy dari GitHub)
- **DNS & SSL:** Cloudflare (proxied, SSL Full strict) + Let's Encrypt

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

Untuk **development lokal**, buat file `.env.local` di root project. Untuk **produksi**, variabel diatur di **panel Hostinger** (hPanel → aplikasi → Environment Variables), bukan lewat file.

```env
NEXT_PUBLIC_SANITY_PROJECT_ID=your_project_id
NEXT_PUBLIC_SANITY_DATASET=production
NEXT_PUBLIC_SANITY_API_VERSION=2024-01-01

TELEGRAM_BOT_TOKEN=your_bot_token
TELEGRAM_CHAT_ID=your_chat_id
```

> **Penting:**
> - Variabel `NEXT_PUBLIC_*` di-*bake* saat build — harus sudah terisi di panel Hostinger **sebelum** deploy.
> - Form kontak (`/api/contact`) membutuhkan env Telegram; jika kosong, endpoint mengembalikan error 500.

## Development

```bash
npm install
npm run dev
```

Buka [http://localhost:3000](http://localhost:3000).

Sanity Studio tersedia di [http://localhost:3000/studio](http://localhost:3000/studio).

## Deploy

Deploy berjalan **otomatis dari GitHub**. Cukup push ke branch `main`:

```bash
git push origin main
```

Hostinger otomatis menjalankan `npm install → npm run build → restart aplikasi`. Pantau progres di **hPanel → aplikasi → Deployments**.

### Referensi setup hosting

- **Platform:** Hostinger Business — Node.js Web App
- **Repo:** `github.com/fixidn/avg` (branch `main`)
- **Node:** 22 · **Build:** `npm run build` · **Output:** `.next`
- **Domain/DNS (Cloudflare):** A record `@` → IP origin Hostinger · CNAME `www` → apex · proxied (oranye) · SSL mode **Full (strict)**
- **Env:** 5 variabel diisi di panel Hostinger (lihat bagian Environment Variables)

Lead dari form kontak dikirim ke **Telegram** (channel utama) dan dicatat ke `data/contacts.csv` (cadangan lokal per-server; folder `data/` di-*gitignore* sehingga tidak tertimpa saat redeploy).

## Konten (Sanity CMS)

Konten blog dan halaman layanan dikelola via Sanity Studio. Akses di `/studio` setelah login dengan akun Sanity yang terdaftar di project.

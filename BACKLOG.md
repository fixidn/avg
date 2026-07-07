# Backlog

Catatan pekerjaan lanjutan untuk proyek Avangard. Diurutkan berdasarkan prioritas.
Status per 2026-07-07.

---

## 🔴 Prioritas 1 — Dependency & Keamanan

- [ ] **Update Next.js `16.1.1` → `16.2.10`** — menutup kerentanan **HIGH** (DoS via Image Optimizer `remotePatterns`). Relevan karena app self-hosted + memakai `remotePatterns` untuk `cdn.sanity.io`. Bawa serta `eslint-config-next` & `@next/third-parties` ke `16.2.10`.
- [ ] **Update patch/minor dalam major yang sama** (risiko rendah):
  - react / react-dom `19.2.3` → `19.2.7`
  - sanity / @sanity/vision `5.2.0` → `5.31.1`
  - next-sanity `12.0.10` → `12.4.5`
  - tailwindcss (+@tailwindcss/postcss) `4.1.18` → `4.3.2`
  - styled-components `6.2.0` → `6.4.3`
  - @portabletext/react, @sanity/image-url, @types/react, @types/node (dalam 20.x)
- [ ] Setelah update: `npm run build` + cek `/`, `/services/*`, `/studio`, `/blog/*`.

## 🟠 Prioritas 2 — Update major (breaking, kerjakan terpisah + uji)

- [ ] **Sanity 5 → 6** (+ @sanity/vision 6, next-sanity 13) — uji Studio `/studio` & schema secara menyeluruh dulu.
- [ ] **TypeScript 5 → 6** — cek error tipe baru.
- [ ] **ESLint 9 → 10** — kemungkinan perubahan flat config.
- [ ] **lucide-react 0.x → 1.x** — verifikasi ikon tidak berubah nama.
- [ ] @types/node → selaraskan ke Node 22 runtime.
- [ ] ⚠️ Jangan `npm audit fix --force` (memaksa major bumps sekaligus → berisiko merusak build).

## 🟡 Prioritas 3 — SEO Konten (pendorong trafik utama)

- [ ] **Kalender konten blog (8–12 artikel)** yang mengisi gap cluster layanan — belum ada artikel selaras money page. Target:
  - "Apa itu VAPT / Penetration Testing?" → `/services/vapt`
  - "Panduan ISO 27001 untuk perusahaan" → `/services/compliance`
  - "Apa itu MDR & bedanya dengan SOC?" → `/services/soc`
  - "Langkah pertama saat terkena ransomware" → `/services/incident-response`
  - "Kepatuhan UU PDP untuk bisnis" → `/services/compliance`
- [ ] **Audit & tambah internal link** dari 9 post yang ada ke halaman layanan:
  - "240 Juta Data Bocor" → Compliance / Incident Response
  - "Tanda Komputer Diretas" → Incident Response
  - "CVE cPanel" → Secure Web Infrastructure / VAPT
- [ ] **Pulihkan kadensi publikasi** (berhenti sejak Mei 2026).
- [ ] Kurangi porsi konten berita/konsumen (malware Android), fokuskan ke topik selaras layanan B2B web.

## 🟢 Prioritas 4 — SEO On-page & Technical (sisa)

- [ ] (Opsional) FAQ homepage + section trust/E-E-A-T + sinyal lokasi (Jakarta/Indonesia).
- [ ] Perbaiki title tag blog yang berpotensi suffix ganda (`${post.title} | Avangard Insight` + template layout `| Avangard Security`).
- [ ] Simpan peta keyword lengkap ke `docs/seo-keyword-map.md` sebagai acuan tim.

## 📋 Aksi manual (Google Search Console)

- [ ] Request Indexing untuk 7 halaman prioritas (home + 6 layanan).
- [ ] Validasi structured data via Rich Results Test (Service, FAQ, Breadcrumb, BlogPosting).
- [ ] Pantau laporan Performance / Pages / Enhancements secara berkala.

## ❓ Keputusan pending

- [ ] **Robots AI (Cloudflare):** saat ini bot AI (GPTBot, ClaudeBot, Google-Extended, dll) diblokir di `robots.txt` (SEO Google aman). Putuskan apakah ingin visibilitas di mesin jawaban AI (ChatGPT/Perplexity/AI Overviews) — jika ya, longgarkan di Cloudflare AI Audit / Bot Management.

# Backlog

Catatan pekerjaan lanjutan untuk proyek Avangard. Diurutkan berdasarkan prioritas.
Status per 2026-07-08.

---

## 🔴 Prioritas 1 — Dependency & Keamanan ✅ SELESAI (2026-07-08, branch `deps/p1-security-updates`)

- [x] **Update Next.js `16.1.1` → `16.2.10`** — menutup kerentanan **HIGH** (DoS via Image Optimizer `remotePatterns`). `eslint-config-next` & `@next/third-parties` ikut ke `16.2.10`.
- [x] **Update patch/minor dalam major yang sama** (risiko rendah):
  - react / react-dom `19.2.3` → `19.2.7`
  - sanity / @sanity/vision `5.2.0` → `5.31.1`
  - next-sanity `12.0.10` → `12.4.5`
  - tailwindcss (+@tailwindcss/postcss) → `4.3.2`
  - styled-components `6.2.0` → `6.4.3`
  - @portabletext/react `6.2.0`, @sanity/image-url `2.1.1`, @types/react `19.2.17`, @types/react-dom `19.2.3`, @types/node `20.19.43`
- [x] Verifikasi: `npm run build` sukses (31 route, TS lolos) + smoke test `/`, `/services/*`, `/studio`, `/blog/*`, sitemap, robots → semua **200**.

**Catatan hasil:**
- `npm audit` masih 18 vuln (16 moderate, 2 high) — **semua di rantai Sanity Studio/build-tool** (`@sanity/cli`, `@vercel/frameworks`, `flatted`, `js-yaml`, DOMPurify, dll), bukan runtime web. Baru tuntas via **Sanity 5→6 (P2)**. **JANGAN** `npm audit fix --force` (memaksa downgrade `sanity@3.70.0` = breaking).
- ⚠️ npm warn: `next-sanity@12.4.5` "not recommended with Next.js v16" (arahnya ke next-sanity 13). Build & runtime tetap OK; tuntas via **next-sanity 12→13 (P2)**.

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

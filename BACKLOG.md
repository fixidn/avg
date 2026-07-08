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

## 🟠 Prioritas 2 — Update major (breaking) — SEBAGIAN BESAR SELESAI (2026-07-08, branch `deps/p1-p2-updates`)

- [x] **Sanity 5 → 6** (+ @sanity/vision 6, next-sanity 13) — build sukses, `/studio` load normal (title "Avangard Studio", mount `#sanity`), blog SSG tetap fetch dari Sanity. Sekaligus menghilangkan warn next-sanity-vs-Next16.
- [x] **TypeScript 5 → 6** (`6.0.3`) — build + typecheck lolos tanpa error tipe baru (`skipLibCheck` membantu).
- [ ] **ESLint 9 → 10** — ⚠️ **DITUNDA (blocker upstream).** ESLint 10 menghapus `context.getFilename()`; `eslint-plugin-react` yang di-bundle `eslint-config-next@16.2.10` masih memakainya → lint crash (`getFilename is not a function`). Tetap di `eslint@^9.39.4`. Tinjau ulang saat `eslint-config-next` merilis plugin react yang ESLint-10-ready.
- [x] **lucide-react 0.x → 1.x** (`1.23.0`) — v1 **menghapus ikon brand** (Twitter/Linkedin/Instagram) + **rename** beberapa ikon. Perbaikan:
  - Ikon brand → komponen SVG lokal baru `src/components/BrandIcons.tsx` (Twitter kini logo X). Dipakai Navbar & Footer.
  - Rename: `AlertTriangle`→`TriangleAlert`, `AlertCircle`→`CircleAlert`, `CheckCircle`→`CircleCheck`, `CheckCircle2`→`CircleCheckBig`, `BarChart3`→`ChartColumn` (di terms/contact/products/services).
- [x] **@types/node → 22** (`22.20.1`) — selaras Node 22 runtime Hostinger.
- [x] `npm audit fix` (aman, **non-force**) menutup high `flatted`. **Sisa: 14 moderate, 0 high** (semua rantai Sanity/build-tool). ⚠️ Tetap **JANGAN** `npm audit fix --force`.

**Catatan lint (pre-existing, di luar scope P2):** `npm run lint` melaporkan ~29 error lama (`react/no-unescaped-entities`, `no-explicit-any`, `prefer-const`, `no-html-link-for-pages`) di file konten yang tak tersentuh upgrade. Build Hostinger hanya `npm run build` (bukan lint) → tak memblokir deploy. Bisa dibersihkan sebagai tugas terpisah.

## 🟡 Prioritas 3 — SEO Konten — SEDANG BERJALAN (2026-07-08, strategi+kode sudah di `main`)

**Strategi & kode selesai:**
- [x] **Kalender konten 12 artikel** cluster layanan → `docs/seo-content-plan.md` (bagian A). Memperluas 5 topik prioritas backlog jadi 12 (tiap artikel dipetakan ke money page + keyword + angle).
- [x] **Peta internal-link 9 post lama** → money page (anchor text + URL presisi) → `docs/seo-content-plan.md` (bagian B). *Eksekusi = tugas Studio* (tambah link di Rich Text Editor tiap post).
- [x] **Baseline internal link otomatis:** section "Layanan Terkait" di tiap halaman post (kode) → tiap post kini menaut ke money page tanpa perlu edit manual.
- [x] Rekomendasi **kadensi** (2 artikel/bulan) & **rebalance** (kurangi berita/konsumen) → `docs/seo-content-plan.md` (bagian C).

**Draf artikel (siap-paste ke Studio):**
- [x] `docs/drafts/01-apa-itu-vapt.md` → `/services/vapt`
- [x] `docs/drafts/02-panduan-iso-27001.md` → `/services/compliance`
- [ ] Draf artikel #3–#12 berikutnya (MDR vs SOC, ransomware, UU PDP, OWASP, dst — lihat kalender).

**Aksi manual (butuh Studio/CMS-mu):**
- [ ] Paste 2 draf di atas ke Sanity Studio + publish (isi field excerpt/seoTitle/relatedServices sesuai header draf).
- [ ] Tambah internal link ke 9 post lama sesuai peta (prioritas fit kuat: CVE cPanel, AI Coding Assistant, 240 Juta Data Bocor, Tanda Komputer Diretas, Ekstensi Chrome).
- [ ] Pulihkan kadensi publikasi (berhenti sejak Mei 2026).

## 🟢 Prioritas 4 — SEO On-page & Technical (sisa)

- [ ] (Opsional) FAQ homepage + section trust/E-E-A-T + sinyal lokasi (Jakarta/Indonesia).
- [x] ~~Perbaiki title tag blog yang berpotensi suffix ganda~~ — SELESAI (bareng P3, di `main`): blog pakai `title.absolute` → `${title} | Avangard Insight` (bypass template layout, tak lagi double suffix).
- [ ] Simpan peta keyword lengkap ke `docs/seo-keyword-map.md` sebagai acuan tim.

## 📋 Aksi manual (Google Search Console)

- [ ] Request Indexing untuk 7 halaman prioritas (home + 6 layanan).
- [ ] Validasi structured data via Rich Results Test (Service, FAQ, Breadcrumb, BlogPosting).
- [ ] Pantau laporan Performance / Pages / Enhancements secara berkala.

## ❓ Keputusan pending

- [ ] **Robots AI (Cloudflare):** saat ini bot AI (GPTBot, ClaudeBot, Google-Extended, dll) diblokir di `robots.txt` (SEO Google aman). Putuskan apakah ingin visibilitas di mesin jawaban AI (ChatGPT/Perplexity/AI Overviews) — jika ya, longgarkan di Cloudflare AI Audit / Bot Management.

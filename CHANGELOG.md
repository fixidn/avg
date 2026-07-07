# Changelog

Semua perubahan penting pada proyek Avangard didokumentasikan di file ini.
Format tanggal: `YYYY-MM-DD`.

## [2026-07-07]

### Infrastruktur & Deploy
- **Migrasi hosting** dari server lokal Proxmox (CT102) ke **Hostinger** (Node.js Web App, Node 22).
- **Deploy otomatis dari GitHub** (`fixidn/avg`, branch `main`) menggantikan `deploy.py`/SSH manual. Setiap push ke `main` memicu build & deploy di Hostinger.
- Pin runtime **Node 22** via `.nvmrc` dan field `engines` di `package.json`.
- `data/` (berisi lead form kontak / PII) di-*untrack* dari git dan di-`.gitignore` agar tidak ikut ke repo dan tidak tertimpa saat redeploy.
- Hapus `deploy.py` (script deploy lama sudah tidak dipakai).
- DNS `stacopa-avangard.com` di Cloudflare diarahkan ke Hostinger (A record + proxy, SSL Full strict).

### SEO — Technical
- Tambah komponen `JsonLd` untuk menyisipkan structured data.
- **Structured data (JSON-LD):** `Organization` & `WebSite` (sitewide), `Service` + `BreadcrumbList` + `FAQPage` (halaman layanan), `BlogPosting` (artikel).
- Tambah `metadataBase` dan canonical URL di seluruh halaman.
- `sitemap.xml` dilengkapi (24 URL): tambah 6 halaman layanan + `/careers`, `/products`, `/terms`.
- Ekstrak data layanan ke `src/lib/servicesData.ts` sebagai sumber tunggal (dipakai halaman & sitemap).

### SEO — On-page
- **6 halaman layanan** (VAPT, Compliance, Incident Response, MDR/SOC, Secure Design, Phishing): H1 & title tag kaya keyword, meta description tertarget, dan blok FAQ + JSON-LD FAQPage.
- Perbaikan bug title tag bersuffix ganda pada halaman layanan.
- **Homepage:** metadata khusus (keyword payung "jasa keamanan siber Indonesia"), H1 seimbang, paragraf hero dioptimasi, dan internal link ke seluruh 6 halaman layanan.

### Dokumentasi
- `README.md` diperbarui untuk mencerminkan setup Hostinger + deploy via GitHub (menggantikan dokumentasi Proxmox + `deploy.py`).
- Tambah `CHANGELOG.md` ini.

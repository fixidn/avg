# Rencana Konten SEO — Avangard

Acuan tim untuk Prioritas 3 (SEO Konten) di `BACKLOG.md`. Status: 2026-07-08.

Tujuan: **organic traffic B2B** yang selaras halaman layanan (money page), bukan trafik berita/konsumen. Strategi: bangun **topic cluster** — tiap artikel edukasi menautkan ke halaman layanan terkait untuk memperkuat relevansi & konversi.

## Peta layanan (target internal link)

| Slug | Judul halaman | Topik inti |
|---|---|---|
| `/services/vapt` | VAPT & Ethical Hacking | Web/API pentest, OWASP Top 10 |
| `/services/soc` | Managed Detection & Response (MDR) | SIEM monitoring aplikasi web & cloud |
| `/services/compliance` | GRC & Compliance | ISO 27001, UU PDP, risk assessment |
| `/services/incident-response` | Incident Response | Ransomware/malware containment, recovery |
| `/services/secure-design` | Secure Web Infrastructure | Hardening, WAF/DDoS, secure deployment |
| `/services/phishing` | Phishing Simulation & Training | Security awareness karyawan |

---

## A. Kalender konten (12 artikel selaras money page)

Diurutkan prioritas. Kolom **Target** = money page utama yang ditautkan; **Sekunder** = link tambahan yang wajar.

| # | Judul kerja | Target | Sekunder | Keyword utama | Angle |
|---|---|---|---|---|---|
| 1 | Apa itu VAPT? Panduan Penetration Testing untuk Pemilik Aplikasi Web | `vapt` | secure-design | "apa itu vapt", "penetration testing adalah" | Edukasi dasar → kenapa web app perlu pentest |
| 2 | Panduan ISO 27001 untuk Perusahaan Indonesia: Langkah & Persiapan | `compliance` | vapt | "iso 27001 indonesia", "sertifikasi iso 27001" | Roadmap sertifikasi + peran kontrol teknis |
| 3 | MDR vs SOC vs SIEM: Apa Bedanya dan Mana yang Bisnis Butuhkan? | `soc` | incident-response | "mdr adalah", "perbedaan mdr dan soc" | Bongkar kebingungan istilah, posisikan MDR |
| 4 | Terkena Ransomware? 7 Langkah Pertama yang Harus Dilakukan | `incident-response` | secure-design | "cara mengatasi ransomware", "langkah ransomware" | Panduan darurat langkah demi langkah |
| 5 | Kepatuhan UU PDP untuk Bisnis: Kewajiban & Sanksi yang Perlu Dipahami | `compliance` | phishing | "uu pdp", "kepatuhan pdp bisnis" | Kewajiban hukum + langkah praktis |
| 6 | OWASP Top 10 Dijelaskan Sederhana untuk Pemilik Website | `vapt` | secure-design | "owasp top 10", "kerentanan web" | Terjemahkan 10 risiko ke bahasa bisnis |
| 7 | Checklist Web Server Hardening: 12 Langkah Mengamankan Situs Bisnis | `secure-design` | vapt | "web server hardening", "mengamankan website" | Checklist actionable |
| 8 | Kenapa Simulasi Phishing Wajib: Karyawan adalah Garis Pertahanan Pertama | `phishing` | compliance | "simulasi phishing", "security awareness" | Data click-rate + ROI training |
| 9 | WAF & Proteksi DDoS: Yang Perlu Diketahui Bisnis Sebelum Diserang | `secure-design` | soc | "apa itu waf", "proteksi ddos" | Edukasi proteksi layer aplikasi |
| 10 | Cara Memilih Vendor Penetration Testing di Indonesia | `vapt` | compliance | "jasa pentest indonesia", "vendor vapt" | Kriteria evaluasi → soft CTA |
| 11 | Kapan Bisnis Butuh MDR? Tanda-tanda Anda Tak Bisa Andalkan Antivirus Saja | `soc` | incident-response | "managed detection response", "monitoring keamanan" | Trigger kebutuhan MDR |
| 12 | Roadmap Keamanan Siber untuk Startup & UKM (Pillar) | semua 6 | — | "keamanan siber ukm", "cybersecurity startup" | **Pillar page** menautkan ke semua cluster |

**Catatan penulisan:**
- Panjang target 900–1.500 kata, 1 keyword utama per artikel (hindari kanibalisasi).
- Struktur: H1 (mengandung keyword) → intro (jawab intent di 2 paragraf pertama) → H2/H3 → **CTA + internal link** ke money page → tutup dengan ajakan konsultasi.
- Sisipkan 1–3 internal link kontekstual ke halaman `Target`/`Sekunder` (anchor text deskriptif, bukan "klik di sini").
- Angle "seimbang": keyword masuk natural, tetap enak dibaca (konsisten dengan on-page layanan).

---

## B. Audit & peta internal link — 9 post lama → money page

Post lama tebal & bergambar tapi **belum menaut ke halaman layanan**. Tambahkan link kontekstual (di Sanity Studio) memakai anchor text natural. Portable text sudah mendukung link internal (render jadi `<Link>`), cukup pilih teks → tambah link → isi URL relatif (mis. `/services/vapt`).

| # | Post | Slug | Link internal disarankan (Target) | Ide anchor text |
|---|---|---|---|---|
| 1 | CVE-2026-41940 Celah cPanel | `cve-2026-41940-celah-berbahaya-di-cpanel-...` | `secure-design`, `vapt` | "hardening web server", "uji kerentanan aplikasi web" |
| 2 | Taiwan Perkuat Keamanan Siber | `taiwan-perkuat-keamanan-siber-...` | `compliance`, `soc` | "tata kelola keamanan (GRC)", "monitoring keamanan (MDR)" |
| 3 | 10 Tips Keamanan Siber 2026 | `10-tips-keamanan-siber-...` | `phishing`, `secure-design`, `vapt` | "pelatihan kesadaran phishing", "mengamankan infrastruktur web", "penetration testing" |
| 4 | AI Coding Assistant Bisa Dibobol | `ai-coding-assistant-juga-bisa-dibobol-...` | `vapt`, `secure-design` | "pengujian keamanan aplikasi", "secure deployment" |
| 5 | 240 Juta Data Penduduk Bocor | `benarkah-240-juta-data-penduduk-indonesia-bocor-...` | `compliance`, `incident-response` | "kepatuhan UU PDP", "respons insiden kebocoran data" |
| 6 | Tanda Komputer Diretas | `tanda-komputer-kamu-mungkin-telah-diretas` | `incident-response`, `soc` | "langkah respons insiden", "deteksi ancaman (MDR)" |
| 7 | Massiv — Malware Android IPTV | `massiv-malware-android-...` | `incident-response` | "penanganan malware" *(fit lemah — lihat catatan)* |
| 8 | Ekstensi Chrome Berbahaya Curi Kredensial | `ekstensi-chrome-berbahaya-...` | `phishing`, `incident-response`, `secure-design` | "pelatihan kesadaran karyawan", "respons pencurian kredensial" |
| 9 | PromptSpy — Malware Android AI | `promptspy-malware-android-...` | `soc`, `vapt` | "monitoring ancaman", "pengujian keamanan" *(fit lemah)* |

**Prioritas link (fit terkuat):** #1, #4, #5, #6, #8 — post ini paling relevan dengan buyer B2B web, kerjakan dulu.

---

## C. Kadensi & positioning

- **Kadensi:** publikasi terhenti sejak Mei 2026. Target realistis **2 artikel/bulan** dari kalender di atas (artikel #1–#5 dulu).
- **Rebalance topik:** kurangi porsi berita/konsumen (malware Android, berita luar negeri) — trafik kurang berkualitas untuk buyer B2B. Fokus ke **keamanan aplikasi web + MDR + compliance**.
- **Pillar-cluster:** setelah #1–#11 terbit, publikasikan #12 (pillar) yang menaut ke semua, dan tambahkan link balik dari tiap cluster ke pillar.

## D. Tindak lanjut teknis (dikerjakan di repo — lihat commit terkait)

- Field SEO di schema post (`excerpt`/meta description, `seoTitle`) → kontrol meta manual, tak lagi auto-truncate.
- Section "Layanan Terkait" di tiap halaman post → internal link otomatis baseline ke money page.
- Fix judul suffix ganda (`… | Avangard Insight | Avangard Security`).

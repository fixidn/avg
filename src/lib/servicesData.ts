// Sumber tunggal data layanan Avangard.
// Dipakai oleh halaman /services/[slug] dan sitemap.ts.

export type ServiceFeature = { title: string; desc: string };
export type ServiceProcess = { step: string; name: string; desc: string };
export type ServiceFaq = { q: string; a: string };

export type Service = {
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  iconColor: string;
  features: ServiceFeature[];
  process: ServiceProcess[];
  // SEO on-page (opsional, diisi per layanan)
  h1?: string;          // override judul H1 yang tampil; fallback ke `title`
  seoTitle?: string;    // override title tag; fallback ke `subtitle` (template menambah "| Stacopa Avangard")
  seoDescription?: string; // override meta description; fallback ke `description`
  faq?: ServiceFaq[];   // jika ada, dirender + JSON-LD FAQPage
};

export const servicesData: Record<string, Service> = {
  "vapt": {
    title: "VAPT & Ethical Hacking",
    subtitle: "Vulnerability Assessment & Penetration Testing",
    description: "Simulasi serangan siber terkontrol terhadap aplikasi web Anda untuk mengekspos celah keamanan sebelum peretas jahat menemukannya.",
    gradient: "from-red-500 to-orange-500",
    iconColor: "text-red-500",
    features: [
      { title: "Web Application Pentest", desc: "Pengujian menyeluruh berbasis OWASP Top 10: injection, XSS, broken access control, dan lainnya." },
      { title: "API Security Testing", desc: "Menguji keamanan endpoint REST/GraphQL: autentikasi, otorisasi, dan rate limiting." },
      { title: "Authentication & Business Logic", desc: "Menguji manajemen sesi, privilege escalation, dan celah logika bisnis aplikasi." },
      { title: "Detailed Reporting", desc: "Laporan teknis untuk tim IT dan laporan eksekutif untuk manajemen." }
    ],
    process: [
      { step: "01", name: "Reconnaissance", desc: "Mengumpulkan informasi intelijen tentang target secara pasif dan aktif." },
      { step: "02", name: "Scanning", desc: "Menggunakan tools otomatis dan manual untuk memetakan permukaan serangan." },
      { step: "03", name: "Exploitation", desc: "Mencoba mengeksploitasi celah untuk membuktikan dampak risiko (Proof of Concept)." },
      { step: "04", name: "Reporting", desc: "Menyusun laporan remediasi dan rekomendasi perbaikan." }
    ],
    h1: "Jasa VAPT & Penetration Testing Aplikasi Web",
    seoTitle: "Jasa Penetration Testing (VAPT) Aplikasi Web",
    seoDescription: "Jasa VAPT & penetration testing aplikasi web berbasis OWASP. Temukan celah keamanan sebelum peretas menemukannya — lengkap dengan laporan teknis & eksekutif. Konsultasikan kebutuhan Anda.",
    faq: [
      {
        q: "Apa itu VAPT?",
        a: "VAPT (Vulnerability Assessment & Penetration Testing) adalah gabungan pemindaian celah keamanan secara menyeluruh (VA) dan simulasi serangan nyata terkontrol (PT) untuk membuktikan dampak risiko pada aplikasi web Anda."
      },
      {
        q: "Apa bedanya Vulnerability Assessment dan Penetration Testing?",
        a: "Vulnerability Assessment memetakan dan mendata potensi celah secara luas, sedangkan Penetration Testing mencoba mengeksploitasi celah tersebut untuk membuktikan sejauh mana risikonya nyata (Proof of Concept)."
      },
      {
        q: "Standar apa yang digunakan Avangard?",
        a: "Pengujian kami mengacu pada standar internasional seperti OWASP Top 10 dan metodologi NIST, mencakup pengujian aplikasi web, API, autentikasi, dan celah logika bisnis."
      },
      {
        q: "Apa yang saya terima setelah pengujian selesai?",
        a: "Anda menerima laporan teknis mendetail (temuan, tingkat risiko, dan langkah remediasi) untuk tim IT, serta laporan ringkas untuk manajemen."
      },
      {
        q: "Berapa biaya dan lama pengerjaan jasa penetration testing?",
        a: "Biaya dan durasi bergantung pada ruang lingkup pengujian (jumlah aplikasi dan kompleksitas fitur). Hubungi kami untuk konsultasi dan penawaran yang sesuai dengan kebutuhan Anda."
      }
    ]
  },
  "soc": {
    title: "Managed Detection & Response (MDR)",
    subtitle: "Security Monitoring untuk Aplikasi Web & Cloud",
    description: "Pemantauan keamanan berkelanjutan berbasis SIEM untuk aplikasi web dan cloud Anda. Sistem kami memantau secara otomatis sepanjang waktu, dengan analisis dan respons oleh tim ahli kami.",
    gradient: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-500",
    features: [
      { title: "Continuous SIEM Monitoring", desc: "Deteksi otomatis sepanjang waktu atas log aplikasi web, web server, WAF, dan cloud." },
      { title: "Expert Alert Triage", desc: "Analis memvalidasi alert (jam kerja + eskalasi kritis) untuk memisahkan ancaman nyata dari false positive." },
      { title: "Threat Detection", desc: "Identifikasi pola serangan dan indikator kompromi (IoC) pada layer aplikasi dan cloud." },
      { title: "Incident Response Support", desc: "Eskalasi dan pendampingan respons cepat saat insiden kritis terdeteksi." }
    ],
    process: [
      { step: "01", name: "Log Ingestion", desc: "Mengumpulkan log dari Firewall, Server, dan Endpoint." },
      { step: "02", name: "Correlation", desc: "Engine SIEM menghubungkan pola-pola aneh yang terdeteksi." },
      { step: "03", name: "Triage & Analysis", desc: "Analis L1/L2 memvalidasi apakah ini ancaman nyata atau false alarm." },
      { step: "04", name: "Response", desc: "Notifikasi ke klien dan tindakan mitigasi awal (blokir IP, isolasi host)." }
    ],
    h1: "Jasa Managed Detection & Response (MDR)",
    seoTitle: "Jasa Managed Detection & Response (MDR)",
    seoDescription: "Jasa MDR (Managed Detection & Response): monitoring keamanan berbasis SIEM untuk aplikasi web & cloud, triase alert oleh analis, dan dukungan incident response. Konsultasikan kebutuhan Anda.",
    faq: [
      {
        q: "Apa itu MDR (Managed Detection & Response)?",
        a: "MDR adalah layanan keamanan terkelola yang menggabungkan pemantauan berkelanjutan berbasis SIEM dengan analisis dan respons oleh tim ahli, sehingga ancaman terdeteksi dan ditangani lebih cepat."
      },
      {
        q: "Apa bedanya MDR dan SOC?",
        a: "SOC (Security Operations Center) adalah pusat operasi keamanan, sedangkan MDR adalah layanan terkelola yang memadukan teknologi, analis, dan respons dalam satu paket — tanpa Anda perlu membangun SOC sendiri."
      },
      {
        q: "Apa itu SIEM?",
        a: "SIEM (Security Information and Event Management) adalah sistem yang mengumpulkan dan mengorelasikan log dari berbagai sumber untuk mendeteksi pola serangan dan indikator kompromi."
      },
      {
        q: "Apakah pemantauannya berjalan sepanjang waktu?",
        a: "Deteksi otomatis berjalan sepanjang waktu. Validasi alert oleh analis dilakukan pada jam kerja dengan eskalasi untuk insiden kritis, sehingga ancaman nyata terpisah dari false positive."
      },
      {
        q: "Sumber log apa saja yang dipantau?",
        a: "Kami memantau log dari aplikasi web, web server, WAF, dan lingkungan cloud Anda untuk mengidentifikasi aktivitas mencurigakan pada layer aplikasi."
      }
    ]
  },
  "compliance": {
    title: "GRC & Compliance",
    subtitle: "Governance, Risk, and Compliance",
    description: "Pastikan bisnis Anda memenuhi standar regulasi global dan nasional. Kami mendampingi Anda dari gap analysis hingga audit readiness.",
    gradient: "from-green-500 to-emerald-500",
    iconColor: "text-green-500",
    features: [
      { title: "ISO 27001 Readiness", desc: "Persiapan dokumen dan kontrol teknis untuk sertifikasi ISO 27001." },
      { title: "UU PDP (Privacy Data)", desc: "Kepatuhan terhadap Undang-Undang Pelindungan Data Pribadi Indonesia." },
      { title: "IT Risk Assessment", desc: "Identifikasi dan valuasi risiko aset informasi perusahaan." },
      { title: "Policy Development", desc: "Penyusunan SOP dan Kebijakan Keamanan Informasi yang solid." }
    ],
    process: [
      { step: "01", name: "Gap Analysis", desc: "Membandingkan kondisi saat ini dengan persyaratan standar (ISO/Regulasi)." },
      { step: "02", name: "Implementation", desc: "Membantu menerapkan kontrol keamanan dan perbaikan proses." },
      { step: "03", name: "Internal Audit", desc: "Simulasi audit untuk memastikan kesiapan organisasi." },
      { step: "04", name: "Certification", desc: "Pendampingan saat audit eksternal berlangsung." }
    ],
    h1: "Konsultan ISO 27001, UU PDP & GRC",
    seoTitle: "Konsultan ISO 27001 & UU PDP (GRC)",
    seoDescription: "Konsultan ISO 27001, UU PDP, dan GRC. Kami dampingi bisnis Anda dari gap analysis hingga audit readiness agar patuh standar keamanan informasi. Konsultasikan kebutuhan compliance Anda.",
    faq: [
      {
        q: "Apa itu ISO 27001?",
        a: "ISO 27001 adalah standar internasional untuk Sistem Manajemen Keamanan Informasi (ISMS) yang membantu organisasi mengelola risiko keamanan informasi secara sistematis."
      },
      {
        q: "Berapa lama proses menuju sertifikasi ISO 27001?",
        a: "Durasinya bergantung pada kesiapan organisasi saat ini. Kami memulai dari gap analysis untuk mengukur jarak menuju standar, lalu menyusun rencana implementasi yang realistis."
      },
      {
        q: "Apa itu UU PDP dan apakah bisnis saya wajib patuh?",
        a: "UU PDP (Undang-Undang Pelindungan Data Pribadi) mengatur pemrosesan data pribadi di Indonesia. Setiap organisasi yang mengumpulkan atau memproses data pribadi wajib mematuhinya."
      },
      {
        q: "Apa saja yang dikerjakan konsultan GRC?",
        a: "Kami melakukan gap analysis, membantu implementasi kontrol keamanan, menyusun kebijakan/SOP, menjalankan internal audit, dan mendampingi organisasi saat audit sertifikasi eksternal."
      },
      {
        q: "Apakah Avangard menerbitkan sertifikat ISO 27001?",
        a: "Kami mendampingi persiapan dan kesiapan audit Anda. Sertifikat ISO 27001 diterbitkan oleh lembaga sertifikasi independen, dan kami membantu memastikan organisasi Anda siap melewati audit tersebut."
      }
    ]
  },
  "incident-response": {
    title: "Incident Response",
    subtitle: "Emergency Response & Recovery",
    description: "Layanan gawat darurat siber. Ketika Anda diserang Ransomware atau Malware, tim kami terjun langsung untuk mengisolasi, menghentikan penyebaran, dan memulihkan operasional sistem Anda.",
    gradient: "from-purple-500 to-pink-500",
    iconColor: "text-purple-500",
    features: [
      { title: "Ransomware & Malware Containment", desc: "Isolasi cepat sistem yang terinfeksi untuk menghentikan penyebaran serangan." },
      { title: "System Recovery", desc: "Pemulihan operasional bisnis dari backup yang bersih secara terkendali." },
      { title: "Root Cause Analysis", desc: "Menentukan bagaimana serangan dapat terjadi untuk menutup celah penyebabnya." },
      { title: "Hardening & Post-Incident Report", desc: "Rekomendasi perbaikan agar serangan serupa tidak terulang." }
    ],
    process: [
      { step: "01", name: "Identification", desc: "Menentukan lingkup insiden dan jenis serangan." },
      { step: "02", name: "Containment", desc: "Mengisolasi sistem yang terinfeksi agar tidak menyebar." },
      { step: "03", name: "Eradication", desc: "Menghapus malware dan menutup celah keamanan." },
      { step: "04", name: "Recovery", desc: "Mengembalikan sistem ke operasional normal secara bertahap." }
    ],
    h1: "Jasa Incident Response & Penanganan Ransomware",
    seoTitle: "Jasa Incident Response & Penanganan Ransomware",
    seoDescription: "Jasa incident response darurat: penanganan ransomware & malware, isolasi penyebaran, pemulihan sistem, dan root cause analysis. Tim kami siap terjun cepat saat insiden terjadi.",
    faq: [
      {
        q: "Apa itu incident response?",
        a: "Incident response adalah layanan penanganan insiden siber untuk mengidentifikasi lingkup serangan, mengisolasi sistem terinfeksi, menghentikan penyebaran, dan memulihkan operasional bisnis Anda."
      },
      {
        q: "Bisnis saya terkena ransomware, apa langkah pertama?",
        a: "Jangan mematikan atau menghapus sistem sembarangan karena dapat menghilangkan barang bukti. Segera isolasi perangkat yang terinfeksi dari jaringan dan hubungi tim incident response untuk penanganan terkontrol."
      },
      {
        q: "Apakah data yang terenkripsi ransomware bisa dipulihkan?",
        a: "Kami memprioritaskan pemulihan dari backup yang bersih secara terkendali. Kemungkinan pemulihan data bergantung pada jenis serangan dan ketersediaan backup — kami akan menilai kondisi Anda secara jujur."
      },
      {
        q: "Seberapa cepat tim dapat merespons?",
        a: "Kecepatan respons bergantung pada kesepakatan layanan dan tingkat kegawatan insiden. Hubungi kami untuk penanganan darurat agar tim dapat segera terjun."
      },
      {
        q: "Apa yang saya terima setelah insiden ditangani?",
        a: "Anda menerima Root Cause Analysis yang menjelaskan bagaimana serangan terjadi, laporan pasca-insiden, serta rekomendasi hardening agar serangan serupa tidak terulang."
      }
    ]
  },
  "secure-design": {
    title: "Secure Web Infrastructure",
    subtitle: "Web Hardening & Secure Deployment",
    description: "Perancangan dan pengerasan infrastruktur web Anda agar aman sejak awal (Security by Design), mulai dari konfigurasi web server hingga proteksi WAF dan secure deployment.",
    gradient: "from-cyan-500 to-blue-500",
    iconColor: "text-cyan-500",
    features: [
      { title: "Web Server Hardening", desc: "Pengerasan konfigurasi web server, OS, dan layanan mengikuti baseline CIS Benchmark." },
      { title: "WAF & DDoS Protection", desc: "Proteksi aplikasi web dari serangan OWASP dan trafik berbahaya pada layer aplikasi." },
      { title: "Secure Deployment & Config", desc: "Konfigurasi hosting/cloud yang aman, TLS/HTTPS, manajemen secret, dan pipeline CI/CD aman." },
      { title: "Zero-Trust Access", desc: "Penerapan prinsip 'never trust, always verify' pada akses aplikasi dan panel admin." }
    ],
    process: [
      { step: "01", name: "Assessment", desc: "Memetakan arsitektur saat ini dan mengidentifikasi titik lemah desain." },
      { step: "02", name: "Design", desc: "Menyusun blueprint arsitektur aman sesuai kebutuhan dan skala bisnis." },
      { step: "03", name: "Implementation", desc: "Menerapkan kontrol hardening, segmentasi, dan perangkat keamanan." },
      { step: "04", name: "Validation", desc: "Menguji efektivitas desain dan menyerahkan dokumentasi arsitektur." }
    ],
    h1: "Jasa Hardening & Keamanan Infrastruktur Web",
    seoTitle: "Jasa Hardening & Keamanan Infrastruktur Web",
    seoDescription: "Jasa hardening server & keamanan infrastruktur web: pengerasan konfigurasi (CIS Benchmark), proteksi WAF & DDoS, secure deployment, dan zero-trust access. Amankan infrastruktur sejak awal.",
    faq: [
      {
        q: "Apa itu web server hardening?",
        a: "Web server hardening adalah proses pengerasan konfigurasi web server, sistem operasi, dan layanan mengikuti baseline keamanan seperti CIS Benchmark untuk mengurangi permukaan serangan."
      },
      {
        q: "Apa itu WAF dan apakah saya membutuhkannya?",
        a: "WAF (Web Application Firewall) menyaring trafik berbahaya sebelum mencapai aplikasi web Anda. WAF penting untuk melindungi dari serangan OWASP dan lalu lintas berbahaya pada layer aplikasi."
      },
      {
        q: "Apa bedanya layanan ini dengan penetration testing?",
        a: "Penetration testing mencari dan membuktikan celah yang sudah ada, sedangkan Secure Web Infrastructure membangun dan mengeraskan pertahanan sejak awal (Security by Design) agar celah tidak muncul."
      },
      {
        q: "Apa itu prinsip Zero-Trust?",
        a: "Zero-Trust menerapkan prinsip 'never trust, always verify' — setiap permintaan akses ke aplikasi maupun panel admin diverifikasi, tidak ada yang otomatis dipercaya berdasarkan lokasi jaringan."
      },
      {
        q: "Standar apa yang digunakan?",
        a: "Kami mengacu pada CIS Benchmark untuk hardening serta praktik secure deployment (TLS/HTTPS, manajemen secret, dan pipeline CI/CD yang aman)."
      }
    ]
  },
  "phishing": {
    title: "Phishing Simulation & Training",
    subtitle: "Security Awareness Program",
    description: "Program edukasi karyawan melalui simulasi serangan phishing nyata untuk meningkatkan kesadaran keamanan dan mengurangi risiko human error sebagai celah masuk serangan.",
    gradient: "from-orange-500 to-amber-500",
    iconColor: "text-orange-500",
    features: [
      { title: "Realistic Phishing Campaign", desc: "Simulasi email phishing terarah yang menyerupai serangan nyata terhadap karyawan." },
      { title: "Awareness Training", desc: "Materi pelatihan interaktif untuk mengenali dan melaporkan upaya social engineering." },
      { title: "Behavior Analytics", desc: "Pengukuran click-rate dan tingkat pelaporan untuk memetakan area berisiko." },
      { title: "Progress Reporting", desc: "Laporan perkembangan kesadaran keamanan dari waktu ke waktu untuk manajemen." }
    ],
    process: [
      { step: "01", name: "Baseline Test", desc: "Mengukur tingkat kerentanan awal karyawan terhadap phishing." },
      { step: "02", name: "Simulation", desc: "Menjalankan kampanye phishing terkontrol di lingkungan nyata." },
      { step: "03", name: "Training", desc: "Memberikan edukasi langsung kepada karyawan yang terindikasi rentan." },
      { step: "04", name: "Re-assessment", desc: "Mengulang pengujian untuk mengukur peningkatan kesadaran keamanan." }
    ],
    h1: "Jasa Simulasi Phishing & Security Awareness Training",
    seoTitle: "Jasa Simulasi Phishing & Security Awareness Training",
    seoDescription: "Jasa simulasi phishing & security awareness training untuk melatih karyawan mengenali serangan phishing dan social engineering. Kurangi risiko human error. Konsultasikan program Anda.",
    faq: [
      {
        q: "Apa itu simulasi phishing?",
        a: "Simulasi phishing adalah pengiriman email phishing tiruan yang terkontrol kepada karyawan untuk menguji dan meningkatkan kewaspadaan mereka terhadap serangan social engineering nyata, tanpa risiko yang sesungguhnya."
      },
      {
        q: "Mengapa perusahaan membutuhkan security awareness training?",
        a: "Sebagian besar serangan siber berhasil karena human error, misalnya karyawan mengeklik tautan berbahaya. Security awareness training menutup celah ini dengan melatih karyawan mengenali dan melaporkan upaya phishing."
      },
      {
        q: "Bagaimana tahapan program di Avangard?",
        a: "Kami mulai dari baseline test untuk mengukur tingkat kerentanan awal, menjalankan kampanye simulasi terkontrol, memberikan pelatihan bagi karyawan yang rentan, lalu melakukan re-assessment untuk mengukur peningkatan kesadaran."
      },
      {
        q: "Apakah karyawan diberi tahu sebelum simulasi dilakukan?",
        a: "Agar hasilnya mencerminkan perilaku nyata, kampanye simulasi umumnya dijalankan tanpa pemberitahuan. Fokus program adalah edukasi — hasilnya digunakan untuk pelatihan, bukan untuk menghukum karyawan."
      },
      {
        q: "Laporan apa yang saya terima?",
        a: "Anda menerima laporan click-rate, tingkat pelaporan, dan pemetaan area berisiko, beserta perkembangan kesadaran keamanan dari waktu ke waktu untuk manajemen."
      }
    ]
  }
};

export const serviceSlugs = Object.keys(servicesData);

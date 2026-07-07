// Sumber tunggal data layanan Avangard.
// Dipakai oleh halaman /services/[slug] dan sitemap.ts.

export type ServiceFeature = { title: string; desc: string };
export type ServiceProcess = { step: string; name: string; desc: string };

export type Service = {
  title: string;
  subtitle: string;
  description: string;
  gradient: string;
  iconColor: string;
  features: ServiceFeature[];
  process: ServiceProcess[];
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
    ]
  }
};

export const serviceSlugs = Object.keys(servicesData);

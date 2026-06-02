import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { 
  ShieldAlert, Search, FileCheck, Activity, 
  CheckCircle2, ArrowRight, Server, Lock, 
  BarChart3, Eye, FileText, Zap 
} from 'lucide-react';

// =========================================================
// 1. DATABASE KONTEN LAYANAN
// =========================================================

const servicesData: any = {
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
    title: "Managed SOC",
    subtitle: "Security Operations Center (Blue Team)",
    description: "Layanan pemantauan keamanan 24/7. Kami bertindak sebagai mata dan telinga digital Anda, mendeteksi ancaman secara real-time dan merespons sebelum kerusakan terjadi.",
    gradient: "from-blue-500 to-cyan-500",
    iconColor: "text-blue-500",
    features: [
      { title: "24/7 Real-time Monitoring", desc: "Analisis log lalu lintas jaringan tanpa henti oleh tim analis manusia dan AI." },
      { title: "Threat Hunting", desc: "Secara proaktif mencari indikator kompromi (IoC) yang tersembunyi di jaringan." },
      { title: "SIEM Management", desc: "Konfigurasi dan tuning dashboard SIEM (Wazuh/Splunk) agar minim false positive." },
      { title: "Incident Response Support", desc: "Eskalasi langsung saat insiden kritis terdeteksi." }
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

// =========================================================
// 2. CONFIG: STATIC PARAMS (Untuk Build Time Optimization)
// =========================================================
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return { title: 'Service Not Found' };
  return {
    title: `${service.subtitle} | Avangard Services`,
    description: service.description,
  };
}

// =========================================================
// 3. MAIN COMPONENT (PAGE)
// =========================================================
export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  
  const service = servicesData[slug];

  if (!service) {
    return notFound();
  }

  return (
    <div className="bg-slate-950 min-h-screen relative overflow-hidden selection:bg-blue-500/30 selection:text-blue-200">
      
      <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b ${service.gradient} opacity-10 blur-[120px] rounded-full pointer-events-none`}></div>

      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 ${service.iconColor} text-xs font-bold tracking-widest uppercase mb-6`}>
             <Activity className="w-3 h-3" />
             Avangard Professional Services
          </div>
          
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            {service.title}
          </h1>
          <h2 className={`text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r ${service.gradient} mb-8`}>
            {service.subtitle}
          </h2>
          
          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {service.description}
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link href="/contact" className={`px-8 py-4 bg-gradient-to-r ${service.gradient} text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all hover:-translate-y-1`}>
              Konsultasi Sekarang
            </Link>
            <Link href="/services" className="px-8 py-4 border border-slate-700 text-slate-300 font-medium rounded-xl hover:bg-slate-900 transition-all">
              Lihat Layanan Lain
            </Link>
          </div>
        </div>
      </div>

      <section className="py-20 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white">Apa yang Kami Tawarkan?</h3>
            <p className="text-slate-400 mt-4">Lingkup pekerjaan dan kapabilitas utama dalam layanan ini.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature: any, idx: number) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-slate-600 transition-colors group">
                <div className={`w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-800`}>
                   <CheckCircle2 className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
               
               <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Metodologi Kami</h3>
                  <p className="text-slate-400 mb-10 text-lg">
                    Kami bekerja dengan standar internasional (NIST / OWASP) untuk memastikan hasil yang terstruktur, terukur, dan dapat dipertanggungjawabkan.
                  </p>
                  
                  <div className="space-y-8">
                     {service.process.map((step: any, idx: number) => (
                        <div key={idx} className="flex gap-6">
                           <div className="flex-none">
                              <span className={`flex items-center justify-center w-12 h-12 rounded-full border-2 bg-slate-900 text-lg font-bold ${service.iconColor} border-slate-700`}>
                                 {step.step}
                              </span>
                           </div>
                           <div>
                              <h4 className="text-xl font-bold text-white mb-2">{step.name}</h4>
                              <p className="text-slate-400">{step.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className={`relative aspect-square lg:aspect-[4/5] bg-gradient-to-br ${service.gradient} rounded-3xl p-1`}>
                  <div className="absolute inset-0 bg-slate-950/90 rounded-[22px] m-[2px] flex items-center justify-center overflow-hidden">
                      <div className="text-center p-8 relative z-10">
                         <div className={`w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl shadow-slate-900`}>
                            <FileCheck className="w-10 h-10 text-white" />
                         </div>
                         <h4 className="text-2xl font-bold text-white mb-2">Enterprise Grade</h4>
                         <p className="text-slate-400 text-sm mb-8">Standardized & Secure Procedure</p>
                         
                         <div className="space-y-3">
                            <div className="h-2 w-48 bg-slate-800 rounded mx-auto overflow-hidden">
                               <div className={`h-full w-2/3 bg-gradient-to-r ${service.gradient} animate-pulse`}></div>
                            </div>
                            <div className="h-2 w-32 bg-slate-800 rounded mx-auto"></div>
                         </div>
                      </div>

                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center bg-slate-900 border border-slate-800 rounded-3xl p-12 relative overflow-hidden">
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`}></div>
          
          <h2 className="text-3xl font-bold text-white mb-6">
             Siap Mengamankan Bisnis Anda?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
             Jangan tunggu sampai insiden terjadi. Hubungi tim ahli Avangard untuk mendapatkan proposal teknis dan penawaran harga.
          </p>
          <Link href="/contact" className={`inline-flex items-center px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition-colors`}>
            Hubungi Sales <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
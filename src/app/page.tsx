import Link from 'next/link';
import type { Metadata } from 'next';
import { ShieldCheck, Target, Terminal, Clock, ArrowRight, Lock, Activity, Globe } from 'lucide-react';

export const metadata: Metadata = {
  title: {
    absolute: 'Jasa Keamanan Siber Indonesia — VAPT, MDR & Compliance | Stacopa Avangard',
  },
  description:
    'Stacopa Avangard — jasa keamanan siber untuk aplikasi web di Indonesia: penetration testing (VAPT), Managed Detection & Response (MDR), incident response, dan konsultasi ISO 27001. Konsultasikan kebutuhan Anda.',
  alternates: { canonical: '/' },
};

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen bg-slate-950 selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* =========================================
          1. HERO SECTION 
      ========================================= */}
      <section className="relative flex flex-col items-center justify-center pt-32 pb-32 px-4 text-center overflow-hidden">
        
        <div className="absolute inset-0 z-0 opacity-10 pointer-events-none" 
             style={{ 
               backgroundImage: 'linear-gradient(#334155 1px, transparent 1px), linear-gradient(to right, #334155 1px, transparent 1px)', 
               backgroundSize: '40px 40px' 
             }}>
        </div>
        
        <div className="absolute inset-0 z-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-slate-900/0 via-slate-950/60 to-slate-950 pointer-events-none"></div>

        <div className="relative z-10 max-w-5xl mx-auto">
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-4 py-1.5 text-sm font-medium text-blue-400 mb-8 backdrop-blur-md shadow-[0_0_15px_rgba(59,130,246,0.2)] animate-fade-in-up">
            <span className="flex h-2 w-2 rounded-full bg-green-400 mr-2 animate-pulse"></span>
            SUBSIDIARY OF STACOPA GROUP — 50+ YEARS OF EXCELLENCE
          </div>

          <h1 className="text-5xl md:text-7xl font-bold mb-8 text-white tracking-tight leading-tight">
            Amankan Aset Digital Anda <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-300 to-blue-400 animate-gradient-x">
              dengan Keamanan Siber Terpercaya
            </span>
          </h1>
          
          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
            Avangard adalah penyedia jasa keamanan siber untuk aplikasi web di Indonesia. Kami fokus pada Penetration Testing (VAPT), Compliance (ISO 27001 & UU PDP), dan Managed Detection & Response (MDR) untuk melindungi bisnis Anda.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link 
              href="/contact" 
              className="px-8 py-4 bg-blue-600 text-white rounded-xl font-semibold hover:bg-blue-500 transition-all shadow-[0_0_20px_rgba(37,99,235,0.3)] hover:shadow-[0_0_30px_rgba(37,99,235,0.5)] hover:-translate-y-1"
            >
              Hubungi Pakar Kami
            </Link>
            <Link 
              href="/services" 
              className="px-8 py-4 border border-slate-700 text-slate-300 rounded-xl font-medium hover:bg-slate-800 hover:text-white transition-all hover:border-slate-500 hover:-translate-y-1"
            >
              Jelajahi Solusi
            </Link>
          </div>
        </div>
      </section>

      {/* =========================================
          2. STATS SECTION (Updated Logic - 3 Items)
      ========================================= */}
      <section className="bg-slate-950 relative z-10 py-12 border-y border-slate-900/50">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          {/* Ubah grid-cols di sini menjadi 1 kolom di HP dan 3 kolom di Desktop */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6"> 
            {[
              { label: 'Tradisi', value: '50+', suffix: 'Tahun', icon: Clock },
              { label: 'Celah Terdeteksi', value: '500+', suffix: 'Vulns', icon: Target },
              { label: 'Monitoring', value: '24/7', suffix: 'Otomatis', icon: Activity },
            ].map((stat, idx) => (
              <div 
                key={idx} 
                className="bg-slate-900/40 backdrop-blur-sm border border-slate-800/60 rounded-2xl p-6 flex flex-col items-center justify-center text-center hover:border-blue-500/30 hover:bg-slate-900/80 transition-all duration-300 group shadow-lg"
              >
                <div className="w-12 h-12 bg-slate-800/50 rounded-full flex items-center justify-center mb-4 group-hover:bg-blue-500/10 group-hover:scale-110 transition-all duration-300 ring-1 ring-slate-700 group-hover:ring-blue-500/30">
                  <stat.icon className="w-6 h-6 text-blue-500 group-hover:text-blue-400" />
                </div>
                
                <div className="text-3xl font-extrabold text-white mb-2 tracking-tight">
                  {stat.value} <span className="text-xl font-medium text-slate-500">{stat.suffix}</span>
                </div>
                <div className="text-xs text-slate-500 uppercase tracking-widest font-bold group-hover:text-slate-400 transition-colors">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* =========================================
          3. FEATURE/SERVICES
      ========================================= */}
      <section className="py-32 px-4 bg-slate-950 relative z-10 overflow-hidden">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none"></div>

        <div className="max-w-7xl mx-auto relative">
          <div className="text-center mb-20">
            <h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Layanan Unggulan</h2>
            <p className="text-slate-400 max-w-2xl mx-auto text-lg">
              Pendekatan holistik untuk keamanan siber, mulai dari pencegahan, deteksi, hingga respon insiden.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            
            {/* Card 1: VAPT / Offensive */}
            <div className="relative group p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-red-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-red-900/10">
              <div className="absolute top-8 left-8 w-20 h-20 bg-red-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
              
              <div className="relative w-14 h-14 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-red-500/50 transition-all duration-300 shadow-lg">
                <Target className="w-7 h-7 text-red-500 group-hover:drop-shadow-[0_0_8px_rgba(239,68,68,0.6)] transition-all" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-red-400 transition-colors">
                Offensive Security (VAPT)
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                Simulasi serangan dunia nyata (Penetration Testing) untuk menguji ketahanan aplikasi Web dan API Anda sebelum peretas sesungguhnya melakukannya.
              </p>
              
              <Link href="/services/vapt" className="inline-flex items-center text-sm font-semibold text-white group/link">
                <span className="border-b-2 border-slate-700 pb-0.5 group-hover/link:border-red-500 transition-all">Lihat Metodologi</span>
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform text-red-500" />
              </Link>
            </div>

            {/* Card 2: Compliance / GRC */}
            <div className="relative group p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-green-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-green-900/10">
              <div className="absolute top-8 left-8 w-20 h-20 bg-green-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative w-14 h-14 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-green-500/50 transition-all duration-300 shadow-lg">
                <ShieldCheck className="w-7 h-7 text-green-500 group-hover:drop-shadow-[0_0_8px_rgba(34,197,94,0.6)] transition-all" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-green-400 transition-colors">
                GRC & Strategic Compliance
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                Harmonisasi regulasi (ISO 27001, GDPR, UU PDP) dengan strategi bisnis. Kami memastikan kepatuhan bukan sekadar checklist, tapi fondasi kepercayaan.
              </p>
              
              <Link href="/services/compliance" className="inline-flex items-center text-sm font-semibold text-white group/link">
                <span className="border-b-2 border-slate-700 pb-0.5 group-hover/link:border-green-500 transition-all">Standar Kami</span>
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform text-green-500" />
              </Link>
            </div>

            {/* Card 3: SOC / Managed Defense */}
            <div className="relative group p-8 rounded-3xl bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl hover:shadow-blue-900/10">
              <div className="absolute top-8 left-8 w-20 h-20 bg-blue-500/20 blur-2xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

              <div className="relative w-14 h-14 bg-slate-900 border border-slate-700 rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 group-hover:border-blue-500/50 transition-all duration-300 shadow-lg">
                <Terminal className="w-7 h-7 text-blue-500 group-hover:drop-shadow-[0_0_8px_rgba(59,130,246,0.6)] transition-all" />
              </div>
              
              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-blue-400 transition-colors">
                Managed Detection & Response
              </h3>
              <p className="text-slate-400 leading-relaxed mb-8 text-sm">
                Monitoring berbasis SIEM untuk aplikasi web & cloud yang memantau otomatis sepanjang waktu, dengan analisis dan respons ancaman oleh tim ahli kami.
              </p>
              
              <Link href="/services/soc" className="inline-flex items-center text-sm font-semibold text-white group/link">
                <span className="border-b-2 border-slate-700 pb-0.5 group-hover/link:border-blue-500 transition-all">Lihat Operasional</span>
                <ArrowRight className="ml-2 w-4 h-4 transform group-hover/link:translate-x-1 transition-transform text-blue-500" />
              </Link>
            </div>
          </div>

          <p className="text-center text-slate-500 mt-12">
            Layanan lainnya:{' '}
            <Link href="/services/incident-response" className="text-slate-300 hover:text-white underline decoration-slate-700 underline-offset-4 transition-colors">Incident Response</Link>
            {' · '}
            <Link href="/services/secure-design" className="text-slate-300 hover:text-white underline decoration-slate-700 underline-offset-4 transition-colors">Secure Web Infrastructure</Link>
            {' · '}
            <Link href="/services/phishing" className="text-slate-300 hover:text-white underline decoration-slate-700 underline-offset-4 transition-colors">Phishing Simulation</Link>
          </p>
        </div>
      </section>

      {/* =========================================
          4. CTA SECTION
      ========================================= */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-b from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-12 relative overflow-hidden group">
          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-600/5 blur-[100px] pointer-events-none group-hover:bg-blue-600/10 transition-all duration-700"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">Lindungi Aset Anda, Mulai Hari Ini.</h2>
          <p className="text-slate-400 mb-8 relative z-10 text-lg max-w-2xl mx-auto">
            Jangan tunggu sampai insiden terjadi. Hubungi kami hari ini untuk asesmen keamanan awal dan dapatkan ketenangan pikiran.
          </p>
          <Link href="/contact" className="relative z-10 inline-block px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200">
            Hubungi Kami Sekarang
          </Link>
        </div>
      </section>

    </div>
  );
}
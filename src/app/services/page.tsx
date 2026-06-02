import React from 'react';
import Link from 'next/link';
import { ShieldAlert, Search, FileCheck, Lock, Server, Activity, ArrowRight, MousePointer2 } from 'lucide-react';

export const metadata = {
  title: "Layanan Keamanan Siber | Avangard",
  description: "Solusi VAPT, SOC, dan Compliance Audit untuk melindungi bisnis Anda.",
};

export default function ServicesPage() {
  
  const services = [
    {
      title: "Vulnerability Assessment & Penetration Testing",
      slug: "vapt",
      description: "Simulasi serangan siber terkontrol (Ethical Hacking) untuk mengekspos celah keamanan pada aplikasi web Anda sebelum peretas menemukannya.",
      icon: <Search className="w-8 h-8" />,
      color: "text-red-500",
      bg: "bg-red-500/10",
      border: "group-hover:border-red-500/50",
      glow: "group-hover:shadow-red-900/20"
    },
    {
      title: "Managed Detection & Response (MDR)",
      slug: "soc",
      description: "Pemantauan keamanan berkelanjutan berbasis SIEM untuk aplikasi web dan cloud, dengan deteksi otomatis dan analisis oleh tim ahli untuk merespons ancaman secara proaktif.",
      icon: <Activity className="w-8 h-8" />,
      color: "text-blue-500",
      bg: "bg-blue-500/10",
      border: "group-hover:border-blue-500/50",
      glow: "group-hover:shadow-blue-900/20"
    },
    {
      title: "Incident Response",
      slug: "incident-response",
      description: "Tim gerak cepat (CSIRT) yang siap menangani insiden peretasan dan ransomware: mengisolasi serangan dan memulihkan operasional bisnis Anda dengan cepat.",
      icon: <ShieldAlert className="w-8 h-8" />,
      color: "text-purple-500",
      bg: "bg-purple-500/10",
      border: "group-hover:border-purple-500/50",
      glow: "group-hover:shadow-purple-900/20"
    },
    {
      title: "GRC & Compliance",
      slug: "compliance",
      description: "Pendampingan persiapan audit ISO 27001 dan kepatuhan terhadap UU PDP (Pelindungan Data Pribadi) agar bisnis Anda memenuhi standar regulasi.",
      icon: <FileCheck className="w-8 h-8" />,
      color: "text-green-500",
      bg: "bg-green-500/10",
      border: "group-hover:border-green-500/50",
      glow: "group-hover:shadow-green-900/20"
    },
    {
      title: "Secure Web Infrastructure",
      slug: "secure-design",
      description: "Perancangan dan pengerasan infrastruktur web yang aman sejak awal (Security by Design): Web Server Hardening, proteksi WAF, dan secure deployment.",
      icon: <Server className="w-8 h-8" />,
      color: "text-cyan-500",
      bg: "bg-cyan-500/10",
      border: "group-hover:border-cyan-500/50",
      glow: "group-hover:shadow-cyan-900/20"
    },
    {
      title: "Phishing Simulation & Training",
      slug: "phishing",
      description: "Program edukasi karyawan melalui simulasi serangan phishing nyata untuk meningkatkan kesadaran keamanan (Security Awareness) dan mencegah human error.",
      icon: <Lock className="w-8 h-8" />,
      color: "text-orange-500",
      bg: "bg-orange-500/10",
      border: "group-hover:border-orange-500/50",
      glow: "group-hover:shadow-orange-900/20"
    }
  ];

  return (
    <div className="bg-slate-950 min-h-screen relative overflow-hidden selection:bg-blue-500/30 selection:text-blue-200">
      
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-blue-500 to-transparent opacity-20"></div>
      <div className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] bg-blue-900/10 rounded-full blur-[100px] pointer-events-none"></div>

      <div className="py-24 px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="max-w-7xl mx-auto text-center mb-20">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-900/50 border border-slate-800 backdrop-blur-sm mb-6">
            <ShieldAlert className="w-4 h-4 text-blue-500" />
            <span className="text-xs font-semibold text-slate-300 uppercase tracking-widest">End-to-End Security</span>
          </div>
          
          <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-white mb-6">
            Solusi Keamanan Siber <br className="hidden md:block"/> 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Tanpa Kompromi</span>
          </h1>
          
          <p className="mt-4 max-w-2xl text-xl text-slate-400 mx-auto leading-relaxed">
            Lindungi aset digital Anda dengan pendekatan holistik: Offensive untuk menemukan celah, Defensive untuk memantau ancaman, dan Compliance untuk kepatuhan regulasi.
          </p>
        </div>

        <div className="max-w-7xl mx-auto grid gap-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <div 
              key={index}
              className={`group relative p-8 bg-slate-900/40 backdrop-blur-sm border border-slate-800 rounded-3xl hover:bg-slate-900/80 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl ${service.border} ${service.glow}`}
            >
              <div className={`w-16 h-16 rounded-2xl ${service.bg} ${service.color} flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ring-1 ring-white/5`}>
                {service.icon}
              </div>

              <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-white transition-colors">
                {service.title}
              </h3>
              
              <p className="text-slate-400 leading-relaxed mb-8 text-sm group-hover:text-slate-300 transition-colors">
                {service.description}
              </p>

              <div className="absolute bottom-8 left-8">
                 <Link 
                    href={`/services/${service.slug}`} 
                    className={`inline-flex items-center text-sm font-bold ${service.color} group-hover:underline decoration-2 underline-offset-4 cursor-pointer`}
                 >
                    Pelajari Teknis <ArrowRight className="ml-2 w-4 h-4 transition-transform group-hover:translate-x-1" />
                 </Link>
              </div>
              
              <div className="h-6"></div>
            </div>
          ))}
        </div>

        <div className="max-w-5xl mx-auto mt-24">
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-b from-blue-900/20 to-slate-900 border border-blue-500/20 p-10 sm:p-16 text-center">
             
             <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-blue-500/5 blur-[80px] pointer-events-none"></div>

             <h3 className="relative z-10 text-3xl font-bold text-white mb-6">
               Kebutuhan Keamanan Spesifik?
             </h3>
             <p className="relative z-10 text-slate-300 text-lg mb-10 max-w-2xl mx-auto">
               Setiap infrastruktur itu unik. Jangan biarkan solusi "satu ukuran untuk semua" membahayakan bisnis Anda. Konsultasikan arsitektur Anda dengan Architect kami.
             </p>
             
             <div className="relative z-10 flex flex-col sm:flex-row gap-4 justify-center">
               <Link 
                 href="/contact" 
                 className="inline-flex items-center justify-center px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl shadow-lg shadow-blue-900/30 transition-all hover:-translate-y-1"
               >
                 <MousePointer2 className="w-5 h-5 mr-2" />
                 Hubungi Sales Engineer
               </Link>
               <Link 
                 href="/about" 
                 className="inline-flex items-center justify-center px-8 py-4 bg-transparent border border-slate-700 hover:border-slate-500 text-slate-300 hover:text-white font-medium rounded-xl transition-all"
               >
                 Lihat Sertifikasi Kami
               </Link>
             </div>

          </div>
        </div>

      </div>
    </div>
  );
}
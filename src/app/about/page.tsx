import React from 'react';
import Image from 'next/image';
import { Target, CheckCircle2, Shield, Users, Lock, ChevronRight } from 'lucide-react';

export const metadata = {
  title: "Tentang Kami | Avangard Security",
  description: "Profil perusahaan Avangard Security, mitra pertahanan siber terpercaya.",
};

export default function AboutPage() {
  return (
    <div className="bg-slate-950 min-h-screen relative overflow-hidden selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* ================================================================================= */}
      {/* 1. HERO SECTION */}
      {/* ================================================================================= */}
      <div className="relative isolate pt-24 pb-20 sm:pt-32 sm:pb-24 overflow-hidden">
        {/* Background Effects */}
        <div className="absolute inset-0 -z-10 bg-[radial-gradient(45rem_50rem_at_top,theme(colors.blue.900),transparent)] opacity-20" />
        <div className="absolute inset-y-0 right-1/2 -z-10 mr-16 w-[200%] origin-bottom-left skew-x-[-30deg] bg-slate-950 shadow-xl shadow-blue-600/10 ring-1 ring-blue-50 sm:mr-28 lg:mr-0 xl:mr-16 xl:origin-center" />
        
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 mb-6 backdrop-blur-sm">
              <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
              Since 2020
            </div>
            
            <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
              Melindungi Masa Depan <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Digital Anda</span>
            </h1>
            
            <p className="mt-6 text-lg leading-8 text-slate-400">
              Avangard bukan sekadar vendor, tapi mitra strategis pertahanan siber kelas enterprise. Kami berdiri di garis depan untuk memastikan integritas data dan keberlangsungan bisnis Anda.
            </p>
          </div>
        </div>
      </div>

      {/* ================================================================================= */}
      {/* 2. CERTIFICATION STRIP (Glassmorphism) */}
      {/* ================================================================================= */}
      <div className="relative z-10 mx-auto max-w-7xl px-6 lg:px-8 -mt-8 mb-20">
        <div className="rounded-3xl bg-slate-900/50 backdrop-blur-xl border border-slate-800 p-8 md:p-10 shadow-2xl">
          <div className="text-center mb-8 border-b border-slate-800 pb-4">
             <span className="text-sm font-semibold text-slate-400 tracking-widest uppercase">Diakui oleh Standar Global</span>
          </div>
          
          <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-6 items-center justify-items-center opacity-60 hover:opacity-100 transition-opacity duration-500">
             {['ISO27001', 'OSCP+', 'EJPT', 'OSWE', 'EMAPT', 'EWPT'].map((cert, idx) => (
                <div key={idx} className="h-12 w-full flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300 cursor-pointer group">
                  <span className="text-slate-500 font-bold group-hover:text-blue-400">{cert}</span>
                  
                  {/* Uncomment baris di bawah ini jika file gambar sudah tersedia */}
                  <Image src={`/certs/${cert}.svg`} alt={cert} width={120} height={60} className="max-h-12 w-auto object-contain" />
                </div>
             ))}
          </div>
        </div>
      </div>

      {/* ================================================================================= */}
      {/* 3. APPROACH SECTION (Split Layout) */}
      {/* ================================================================================= */}
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8 lg:py-24">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2 lg:items-center">
          
          <div>
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl mb-6">
              Pendekatan <span className="text-blue-500">Holistik</span>
            </h2>
            <p className="text-lg leading-relaxed text-slate-400 mb-10">
              Keamanan siber bukan hanya tentang teknologi canggih, tapi juga tentang proses yang ketat dan manusia yang kompeten. Kami menggabungkan ketiganya.
            </p>

            <div className="space-y-6">
              {/* Feature 1 */}
              <div className="flex gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 hover:border-blue-500/30 transition-colors group">
                <div className="flex-none mt-1">
                  <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <Shield className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Analisa Risiko Berbasis Bisnis</h3>
                  <p className="mt-1 text-sm text-slate-400">Kami tidak hanya mencari celah teknis, tapi memahami dampak finansialnya bagi bisnis Anda.</p>
                </div>
              </div>

              {/* Feature 2 */}
              <div className="flex gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 hover:border-blue-500/30 transition-colors group">
                <div className="flex-none mt-1">
                  <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <Users className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Laporan Executive Level (C-Level)</h3>
                  <p className="mt-1 text-sm text-slate-400">Bahasa teknis diterjemahkan menjadi wawasan bisnis yang dapat ditindaklanjuti oleh manajemen.</p>
                </div>
              </div>

              {/* Feature 3 */}
              <div className="flex gap-4 p-4 rounded-xl bg-slate-900/50 border border-slate-800/50 hover:border-blue-500/30 transition-colors group">
                <div className="flex-none mt-1">
                  <div className="h-10 w-10 rounded-lg bg-blue-500/10 flex items-center justify-center border border-blue-500/20 group-hover:bg-blue-500/20 transition-colors">
                    <Lock className="h-5 w-5 text-blue-400" />
                  </div>
                </div>
                <div>
                  <h3 className="font-semibold text-white">Transparansi Total</h3>
                  <p className="mt-1 text-sm text-slate-400">Tidak ada false-positive yang disembunyikan. Anda melihat apa yang kami lihat.</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right Visual (Abstract Representation) */}
          <div className="relative aspect-square lg:aspect-[4/3] rounded-3xl overflow-hidden bg-slate-900 border border-slate-800 flex items-center justify-center group">
              {/* Background Glow */}
              <div className="absolute inset-0 bg-blue-600/5 group-hover:bg-blue-600/10 transition-colors"></div>
              
              {/* Animated Circles */}
              <div className="absolute w-64 h-64 border border-blue-500/20 rounded-full animate-[spin_10s_linear_infinite]"></div>
              <div className="absolute w-48 h-48 border border-dashed border-blue-500/40 rounded-full animate-[spin_15s_linear_infinite_reverse]"></div>
              
              <div className="text-center relative z-10 p-8 bg-slate-950/80 backdrop-blur-md rounded-2xl border border-slate-700 shadow-2xl">
                 <Target className="w-20 h-20 text-blue-500 mx-auto mb-4 drop-shadow-[0_0_15px_rgba(59,130,246,0.5)]" />
                 <p className="text-white font-bold text-xl tracking-widest">PRECISION</p>
                 <p className="text-slate-500 text-xs mt-2 uppercase">Target Acquisition Confirmed</p>
              </div>
          </div>
        </div>
      </div>

      {/* ================================================================================= */}
      {/* 4. TEAM SECTION (Card Style) */}
      {/* ================================================================================= */}
      <div className="bg-slate-950 py-24 sm:py-32 border-t border-slate-900 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center mb-16">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">Meet The Experts</h2>
            <p className="mt-4 text-lg text-slate-400">
              Praktisi berpengalaman dengan sertifikasi internasional dan dedikasi tinggi pada keamanan data Anda.
            </p>
          </div>
          
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-3">
            
            {/* TEAM MEMBER 1 */}
            <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Shield className="w-24 h-24 text-blue-500" />
               </div>
               
               <div className="relative mb-6">
                 <div className="h-24 w-24 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl font-bold text-blue-500 shadow-lg group-hover:scale-105 transition-transform">
                   JD
                 </div>
               </div>
               
               <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">John Doe</h3>
               <p className="text-sm font-semibold text-blue-500 mb-4 uppercase tracking-wider">Principal Consultant</p>
               <div className="h-px w-full bg-slate-800 mb-4 group-hover:bg-blue-500/30 transition-colors"></div>
               <p className="text-sm text-slate-400 leading-relaxed">
                  Spesialis Defensive Security & Incident Response dengan pengalaman 10+ tahun menangani intrusi skala besar.
               </p>
            </div>

            {/* TEAM MEMBER 2 */}
            <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Target className="w-24 h-24 text-blue-500" />
               </div>

               <div className="relative mb-6">
                 <div className="h-24 w-24 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl font-bold text-white shadow-lg group-hover:scale-105 transition-transform">
                   AS
                 </div>
               </div>
               
               <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Ahmad Santoso</h3>
               <p className="text-sm font-semibold text-blue-500 mb-4 uppercase tracking-wider">Senior Pentester</p>
               <div className="h-px w-full bg-slate-800 mb-4 group-hover:bg-blue-500/30 transition-colors"></div>
               <p className="text-sm text-slate-400 leading-relaxed">
                  Fokus pada Offensive Security, Red Teaming Simulation, dan Eksploitasi Web Lanjut (Zero-day research).
               </p>
            </div>

            {/* TEAM MEMBER 3 */}
            <div className="group relative bg-slate-900 border border-slate-800 rounded-2xl p-8 hover:border-blue-500/50 transition-all duration-300 hover:-translate-y-2 overflow-hidden">
               <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                  <Lock className="w-24 h-24 text-blue-500" />
               </div>

               <div className="relative mb-6">
                 <div className="h-24 w-24 rounded-2xl bg-slate-800 border border-slate-700 flex items-center justify-center text-2xl font-bold text-white shadow-lg group-hover:scale-105 transition-transform">
                   SR
                 </div>
               </div>
               
               <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">Siti Rahma</h3>
               <p className="text-sm font-semibold text-blue-500 mb-4 uppercase tracking-wider">GRC Specialist</p>
               <div className="h-px w-full bg-slate-800 mb-4 group-hover:bg-blue-500/30 transition-colors"></div>
               <p className="text-sm text-slate-400 leading-relaxed">
                  Ahli Audit Keamanan, Kepatuhan ISO 27001, dan Manajemen Risiko IT untuk industri perbankan & fintech.
               </p>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
}
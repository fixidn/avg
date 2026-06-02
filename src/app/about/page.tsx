import React from 'react';
import { Shield, Globe, Lock, Activity } from 'lucide-react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: "Tentang Stacopa Avangard | Keamanan Siber Berbasis Intelijen",
  description: "Divisi pertahanan siber dari Grup Stacopa, melindungi aset digital dengan warisan kepercayaan 50 tahun.",
};

export default function AboutPage() {
  return (
    <main className="bg-slate-950 min-h-screen text-slate-300 selection:bg-blue-500/30 selection:text-blue-200 overflow-x-hidden">
      
      {/* ================================================================================= */}
      {/* 1. HERO SECTION - Identitas Utama */}
      {/* ================================================================================= */}
      <section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6">
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[600px] bg-blue-600/20 blur-[120px] rounded-full -z-10 pointer-events-none"></div>
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-[0.03] pointer-events-none"></div>

        <div className="max-w-6xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-900/30 border border-blue-500/30 text-blue-400 text-xs font-bold tracking-widest uppercase mb-8 animate-fade-in-up">
            <span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
            Tentang Stacopa Avangard
          </div>

          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight mb-8 leading-tight">
            Pertahanan Siber <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-cyan-400 to-teal-400">
              Berbasis Intelijen
            </span>
          </h1>

          <p className="text-lg md:text-xl text-slate-400 max-w-3xl mx-auto leading-relaxed mb-16">
            <span className="text-white font-semibold">Stacopa Avangard</span> adalah divisi pertahanan siber dan intelijen dari Grup Stacopa, yang dibangun di atas lebih dari 50 tahun keahlian, kepercayaan, dan keamanan.
          </p>

          <div className="border-t border-slate-800/60 pt-10 max-w-5xl mx-auto">
            <p className="text-xs font-bold text-slate-500 uppercase tracking-[0.3em] mb-10">
              Sertifikasi Tim Kami
            </p>

            <div className="flex flex-wrap items-center justify-center gap-4">
              {[
                { code: 'CISA', label: 'Certified Information Systems Auditor' },
                { code: 'CDSA', label: 'Certified Defensive Security Analyst' },
              ].map((cert) => (
                <div
                  key={cert.code}
                  className="flex items-center gap-3 rounded-xl border border-slate-800 bg-slate-900/50 px-5 py-3 transition-colors hover:border-blue-500/40"
                >
                  <span className="text-lg font-extrabold tracking-wider text-white">{cert.code}</span>
                  <span className="hidden sm:block h-6 w-px bg-slate-700"></span>
                  <span className="hidden sm:block text-xs text-slate-400">{cert.label}</span>
                </div>
              ))}
            </div>
          </div>

        </div>
      </section>

      {/* ================================================================================= */}
      {/* 2. THE LEGACY - Perusahaan Induk */}
      {/* ================================================================================= */}
      <section className="py-20 bg-slate-900/50 border-y border-slate-800 relative">
        <div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
          
          <div className="relative h-full min-h-[400px] rounded-2xl overflow-hidden border border-slate-700 group shadow-2xl">
            <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10"></div>
            
            <div className="absolute inset-0 bg-slate-800 flex items-center justify-center">
               <Shield className="w-40 h-40 text-slate-700/50 group-hover:text-blue-900/30 transition-colors duration-700" />
            </div>
            
            <div className="absolute bottom-0 left-0 p-8 z-20">
              <div className="w-12 h-1 bg-blue-500 mb-4"></div>
              <h3 className="text-3xl font-bold text-white mb-2">Stacopa Raya</h3>
              <p className="text-blue-400 text-sm font-mono tracking-widest uppercase">Parent Company</p>
            </div>
          </div>

          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-8">
              Warisan Presisi & Integritas
            </h2>
            <div className="space-y-6 text-lg text-slate-400 leading-relaxed text-justify">
              <p>
                Perusahaan induk kami, <strong className="text-white">Stacopa Raya</strong>, telah lama menjadi mitra pencetakan keamanan tepercaya bagi Pemerintah Indonesia dan industri perbankan nasional.
              </p>
              
              <div className="relative pl-8 italic text-slate-300 bg-slate-800/20 p-6 rounded-r-xl border-l-4 border-blue-500">
                <span className="absolute top-2 left-2 text-4xl text-blue-500/20 font-serif">"</span>
                Melindungi aset-aset penting dengan disiplin, presisi, dan integritas.
              </div>

              <p>
                Prinsip-prinsip inilah yang kami bawa ke dalam dunia digital. Kami memahami bahwa keamanan bukan hanya soal teknologi, tetapi tentang menjaga kepercayaan yang telah dibangun selama puluhan tahun.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================================================================================= */}
      {/* 3. APPROACH & MISSION - Ekspansi Digital */}
      {/* ================================================================================= */}
      <section className="py-24 px-6 relative">
        <div className="max-w-7xl mx-auto">
          
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Navigasi di Lanskap Ancaman Modern</h2>
            <p className="text-slate-400 text-lg leading-relaxed">
              Memperluas warisan ini ke ranah digital, Stacopa Avangard membantu organisasi menavigasi lanskap ancaman siber yang semakin kompleks.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/20 transition-all group">
              <div className="w-14 h-14 bg-blue-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition group-hover:scale-110 duration-300">
                <Activity className="w-7 h-7 text-blue-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Praktis & Pragmatis</h3>
              <p className="text-slate-400 leading-relaxed">
                Pendekatan kami berlandaskan pada risiko dunia nyata. Kami tidak hanya memberikan teori, tetapi solusi pertahanan yang dapat diterapkan secara efektif.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl hover:border-cyan-500/50 hover:shadow-lg hover:shadow-cyan-900/20 transition-all group">
              <div className="w-14 h-14 bg-cyan-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition group-hover:scale-110 duration-300">
                <Globe className="w-7 h-7 text-cyan-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Ekosistem Luas</h3>
              <p className="text-slate-400 leading-relaxed">
                Diperkuat melalui keterlibatan dengan regulator, akademisi, inovator, penegak hukum, dan praktisi berpengalaman untuk wawasan yang holistik.
              </p>
            </div>

            <div className="bg-slate-900/80 border border-slate-800 p-8 rounded-2xl hover:border-teal-500/50 hover:shadow-lg hover:shadow-teal-900/20 transition-all group">
              <div className="w-14 h-14 bg-teal-500/10 rounded-xl flex items-center justify-center mb-6 group-hover:bg-teal-500/20 transition group-hover:scale-110 duration-300">
                <Lock className="w-7 h-7 text-teal-400" />
              </div>
              <h3 className="text-xl font-bold text-white mb-4">Berbasis Intelijen Ancaman</h3>
              <p className="text-slate-400 leading-relaxed">
                Deteksi dan pengujian kami diperbarui mengikuti threat intelligence terkini — feed CVE kerentanan aktif, pola serangan MITRE ATT&CK, OWASP, dan indikator kompromi (IoC) — agar pertahanan selalu relevan dengan ancaman nyata.
              </p>
            </div>
          </div>

        </div>
      </section>

      {/* ================================================================================= */}
      {/* 4. CLOSING STATEMENT */}
      {/* ================================================================================= */}
      <section className="py-20 px-6 border-t border-slate-800 bg-slate-900/30">
        <div className="max-w-5xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold text-white mb-10 leading-snug">
            "Kami memberikan pertahanan siber berbasis intelijen yang memprioritaskan <span className="text-blue-400">ketahanan</span>, <span className="text-blue-400">relevansi</span>, dan <span className="text-blue-400">kepercayaan</span>."
          </h2>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
             <a href="/contact" className="px-8 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-900/50 hover:shadow-blue-500/40">
               Hubungi Tim Kami
             </a>
             <a href="/services" className="px-8 py-4 bg-slate-800 hover:bg-slate-700 text-white font-bold rounded-lg border border-slate-700 transition-all">
               Lihat Layanan
             </a>
          </div>
        </div>
      </section>

    </main>
  );
}
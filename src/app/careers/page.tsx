import React from 'react';
import Link from 'next/link';
import { Briefcase, MapPin, Clock, ArrowRight, Zap, Shield, Users, Search } from 'lucide-react';

export const metadata = {
  title: "Karir",
  description: "Bergabung dengan tim keamanan siber Stacopa Avangard — posisi Red Team, SOC Analyst, GRC Consultant, dan Security Engineer.",
  alternates: { canonical: "/careers" },
};

// Data Mockup Lowongan (Nanti bisa diganti dengan database/CMS)
const jobOpenings = [
  {
    id: 1,
    title: "Senior Penetration Tester",
    department: "Offensive Security (Red Team)",
    location: "Jakarta (Hybrid)",
    type: "Full-time",
    description: "Kami mencari ethical hacker berpengalaman untuk memimpin simulasi serangan kompleks pada infrastruktur klien enterprise."
  },
  {
    id: 2,
    title: "SOC Analyst (Tier 2)",
    department: "Blue Team Operations",
    location: "Remote / WFH",
    type: "Shift-based",
    description: "Monitor, analisis, dan respon terhadap insiden keamanan secara real-time menggunakan teknologi SIEM terkini."
  },
  {
    id: 3,
    title: "GRC Consultant",
    department: "Compliance",
    location: "Jakarta",
    type: "Full-time",
    description: "Membantu klien mencapai kepatuhan standar ISO 27001 dan UU Pelindungan Data Pribadi (UU PDP)."
  },
  {
    id: 4,
    title: "Security Engineer",
    department: "Infrastructure",
    location: "Jakarta",
    type: "Full-time",
    description: "Merancang dan mengimplementasikan arsitektur keamanan yang kokoh untuk sistem internal dan klien."
  }
];

export default function CareersPage() {
  return (
    <div className="bg-slate-950 min-h-screen">
      
      {/* 1. HERO SECTION */}
      <div className="relative isolate overflow-hidden pt-24 pb-16 text-center px-6">
        {/* Background Gradients */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-blue-900/20 via-slate-950 to-slate-950 -z-10"></div>
        
        <div className="mx-auto max-w-4xl">
          <div className="inline-flex items-center rounded-full border border-blue-500/30 bg-blue-500/10 px-3 py-1 text-sm font-medium text-blue-400 mb-6">
            <span className="flex h-2 w-2 rounded-full bg-blue-400 mr-2 animate-pulse"></span>
            We are Hiring!
          </div>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tight text-white mb-6">
            Bangun Karir di Garis Depan <span className="text-blue-500">Pertahanan Siber</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10">
            Bergabunglah dengan tim elit Avangard. Kami bukan sekadar bekerja, kami melindungi ekonomi digital dari ancaman nyata.
          </p>
          
          <a href="#openings" className="inline-flex items-center px-6 py-3 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-colors">
            Lihat Lowongan <ArrowRight className="ml-2 w-4 h-4" />
          </a>
        </div>
      </div>

      {/* 2. WHY JOIN US (Benefits) */}
      <div className="py-20 bg-slate-900 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12 text-center md:text-left">
            {/* Benefit 1 */}
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Zap className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">High-Impact Projects</h3>
                <p className="text-slate-400 leading-relaxed">
                  Tangani kasus keamanan siber profil tinggi dan bekerja dengan klien Enterprise & Pemerintah.
                </p>
              </div>
            </div>
            
            {/* Benefit 2 */}
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Shield className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Continuous Learning</h3>
                <p className="text-slate-400 leading-relaxed">
                  Dukungan penuh untuk sertifikasi (OSCP, CISSP, dll) dan akses ke lab hacking internal.
                </p>
              </div>
            </div>

            {/* Benefit 3 */}
            <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
              <div className="w-12 h-12 bg-blue-500/10 rounded-lg flex items-center justify-center flex-shrink-0">
                <Users className="w-6 h-6 text-blue-500" />
              </div>
              <div>
                <h3 className="text-xl font-bold text-white mb-2">Flexible Culture</h3>
                <p className="text-slate-400 leading-relaxed">
                  Kami menilai hasil, bukan jam duduk. Opsi Remote & Hybrid tersedia untuk banyak peran.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* 3. OPEN POSITIONS (Job Listing) */}
      <div id="openings" className="py-24 max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div>
            <h2 className="text-3xl font-bold text-white">Posisi Tersedia</h2>
            <p className="text-slate-400 mt-2">Temukan peran yang sesuai dengan keahlian Anda.</p>
          </div>
          
          {/* Mock Search Filter */}
          <div className="relative w-full md:w-64">
             <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
                <Search className="w-4 h-4 text-slate-500" />
             </div>
             <input 
               type="text" 
               className="block w-full p-2.5 pl-10 text-sm text-white bg-slate-900 border border-slate-700 rounded-lg focus:ring-blue-500 focus:border-blue-500 placeholder-slate-500" 
               placeholder="Cari posisi..." 
               disabled
             />
          </div>
        </div>

        <div className="space-y-4">
          {jobOpenings.map((job) => (
            <div 
              key={job.id} 
              className="group bg-slate-900 border border-slate-800 rounded-xl p-6 transition-all hover:border-blue-500/50 hover:shadow-lg hover:shadow-blue-900/20"
            >
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
                
                {/* Job Info */}
                <div className="flex-grow">
                  <div className="flex items-center gap-3 mb-2">
                    <h3 className="text-xl font-bold text-white group-hover:text-blue-400 transition-colors">
                      {job.title}
                    </h3>
                    <span className="inline-flex items-center rounded-md bg-blue-400/10 px-2 py-1 text-xs font-medium text-blue-400 ring-1 ring-inset ring-blue-400/20">
                      {job.department}
                    </span>
                  </div>
                  
                  <p className="text-slate-400 text-sm mb-4 max-w-3xl">
                    {job.description}
                  </p>

                  <div className="flex flex-wrap gap-4 text-sm text-slate-500 font-medium">
                    <div className="flex items-center gap-1.5">
                      <Briefcase className="w-4 h-4" />
                      {job.type}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <MapPin className="w-4 h-4" />
                      {job.location}
                    </div>
                    <div className="flex items-center gap-1.5">
                      <Clock className="w-4 h-4" />
                      Posted 2 days ago
                    </div>
                  </div>
                </div>

                {/* Apply Button */}
                <div className="flex-shrink-0">
                  <Link 
                    href={`/contact?subject=Application for ${job.title}`}
                    className="inline-flex w-full md:w-auto items-center justify-center px-6 py-3 border border-slate-700 rounded-lg text-sm font-semibold text-white hover:bg-blue-600 hover:border-blue-600 transition-all"
                  >
                    Apply Now
                  </Link>
                </div>

              </div>
            </div>
          ))}
        </div>
      </div>

      {/* 4. GENERAL APPLICATION (CTA) */}
      <div className="py-20 px-6">
        <div className="max-w-4xl mx-auto bg-gradient-to-r from-blue-900/40 to-slate-900 border border-blue-500/30 rounded-2xl p-8 md:p-12 text-center">
          <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">
            Tidak menemukan posisi yang cocok?
          </h2>
          <p className="text-slate-300 mb-8 max-w-xl mx-auto">
            Kami selalu terbuka untuk talenta luar biasa. Kirimkan CV Anda dan ceritakan bagaimana Anda bisa berkontribusi pada misi keamanan kami.
          </p>
          <Link 
            href="/contact?subject=General Application" 
            className="inline-block px-8 py-3 bg-white text-slate-950 font-bold rounded-lg hover:bg-slate-200 transition-colors"
          >
            Kirim Open Application
          </Link>
        </div>
      </div>

    </div>
  );
}
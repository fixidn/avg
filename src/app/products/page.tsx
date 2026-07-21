import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Server, Shield, Zap, ChartColumn, Cpu, Globe, ArrowRight, CircleCheckBig } from 'lucide-react';

export const metadata = {
  title: "Produk Keamanan",
  description: "Solusi hardware dan software keamanan siber tingkat militer.",
};

export default function ProductsPage() {
  // Halaman produk disembunyikan dari publik untuk sementara.
  // Hapus baris notFound() di bawah untuk menampilkannya kembali.
  notFound();

  return (
    <div className="bg-slate-950 min-h-screen relative overflow-hidden selection:bg-blue-500/30 selection:text-blue-200">
      
      {/* Background Deep Space Effect */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-900 via-slate-950 to-slate-950 -z-10"></div>
      
      {/* =========================================
          1. HERO SECTION
      ========================================= */}
      <div className="relative pt-24 pb-20 sm:pt-32 sm:pb-24 overflow-hidden">
        <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-xs font-bold tracking-widest uppercase mb-6">
            <Cpu className="w-3 h-3" />
            Proprietary Technology
          </div>
          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            Next-Gen <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-300">Cyber Defense</span>
          </h1>
          <p className="text-lg text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Kami mengembangkan ekosistem produk hardware dan software yang terintegrasi untuk memberikan visibilitas total dan perlindungan real-time.
          </p>
        </div>
      </div>

      {/* =========================================
          2. PRODUCT SHOWCASE: SOFTWARE (SIEM)
      ========================================= */}
      <section className="py-20 relative">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Text Content */}
            <div className="order-2 lg:order-1">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Avangard <span className="text-blue-500">Sentinel X™</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Platform SIEM (Security Information and Event Management) berbasis AI yang menyatukan seluruh log data infrastruktur Anda dalam satu dashboard intuitif. Deteksi anomali lebih cepat, respon insiden lebih akurat.
              </p>
              
              <ul className="space-y-4 mb-10">
                {[
                  "Real-time Threat Detection dengan Machine Learning",
                  "Visualisasi Data Interaktif & Customizable",
                  "Integrasi API dengan 500+ Tools Pihak Ketiga",
                  "Automated Reporting untuk Compliance (ISO/PCI-DSS)"
                ].map((item, idx) => (
                  <li key={idx} className="flex items-start">
                    <CircleCheckBig className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                    <span className="text-slate-300">{item}</span>
                  </li>
                ))}
              </ul>

              <div className="flex gap-4">
                <Link href="/contact" className="px-6 py-3 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-blue-900/20">
                  Request Demo
                </Link>
                <button className="px-6 py-3 border border-slate-700 text-slate-300 hover:text-white hover:border-slate-500 rounded-lg transition-all font-medium">
                  Download Datasheet
                </button>
              </div>
            </div>

            {/* Visual Representation (Abstract Dashboard) */}
            <div className="order-1 lg:order-2 relative group">
              {/* Glow Effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-blue-600 to-cyan-600 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
              
              <div className="relative bg-slate-900 border border-slate-800 rounded-xl p-2 shadow-2xl overflow-hidden">
                {/* Mockup Header */}
                <div className="h-8 bg-slate-950 border-b border-slate-800 flex items-center px-4 gap-2">
                   <div className="w-3 h-3 rounded-full bg-red-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-yellow-500/50"></div>
                   <div className="w-3 h-3 rounded-full bg-green-500/50"></div>
                </div>
                {/* Mockup Body (CSS Generated UI) */}
                <div className="p-6 grid grid-cols-3 gap-4 h-[300px] bg-slate-950/50">
                   {/* Sidebar */}
                   <div className="col-span-1 bg-slate-900/50 rounded-lg border border-slate-800/50 p-3 space-y-2">
                      <div className="h-2 w-1/2 bg-slate-700 rounded mb-4"></div>
                      <div className="h-8 w-full bg-blue-500/20 rounded border border-blue-500/30"></div>
                      <div className="h-8 w-full bg-slate-800/50 rounded"></div>
                      <div className="h-8 w-full bg-slate-800/50 rounded"></div>
                   </div>
                   {/* Main Chart Area */}
                   <div className="col-span-2 space-y-4">
                      <div className="h-32 w-full bg-slate-900/50 rounded-lg border border-slate-800/50 relative overflow-hidden flex items-end px-4 pb-2 gap-2">
                         {/* Fake Bars */}
                         <div className="w-1/6 h-[40%] bg-blue-500/40 rounded-t"></div>
                         <div className="w-1/6 h-[70%] bg-blue-500/60 rounded-t"></div>
                         <div className="w-1/6 h-[50%] bg-blue-500/40 rounded-t"></div>
                         <div className="w-1/6 h-[90%] bg-blue-500 rounded-t shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
                         <div className="w-1/6 h-[60%] bg-blue-500/50 rounded-t"></div>
                         <div className="w-1/6 h-[45%] bg-blue-500/30 rounded-t"></div>
                      </div>
                      <div className="grid grid-cols-2 gap-4">
                         <div className="h-20 bg-slate-900/50 rounded-lg border border-slate-800/50"></div>
                         <div className="h-20 bg-slate-900/50 rounded-lg border border-slate-800/50"></div>
                      </div>
                   </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          3. PRODUCT SHOWCASE: HARDWARE
      ========================================= */}
      <section className="py-20 bg-slate-900/30 border-y border-slate-900">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            
            {/* Visual Representation (Abstract Hardware) */}
            <div className="relative group">
               {/* Abstract Rack Server Graphic */}
               <div className="relative w-full aspect-video bg-slate-950 rounded-xl border border-slate-800 shadow-2xl flex flex-col items-center justify-center overflow-hidden">
                  
                  {/* Decorative Elements */}
                  <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(6,182,212,0.05)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[gradient_4s_linear_infinite]"></div>
                  
                  {/* Server Unit 1 */}
                  <div className="w-[90%] h-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded md flex items-center px-6 justify-between mb-4 shadow-lg relative z-10">
                     <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                     </div>
                     <div className="flex gap-1">
                        {[1,2,3,4,5,6].map(i => <div key={i} className="w-3 h-6 bg-slate-950 border border-slate-600 rounded-sm"></div>)}
                     </div>
                  </div>

                  {/* Server Unit 2 (The Hero) */}
                  <div className="w-[90%] h-24 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-cyan-500/30 rounded md flex items-center px-6 justify-between shadow-2xl relative z-10 ring-1 ring-cyan-500/20">
                     <div className="flex flex-col gap-1">
                        <span className="text-xs font-bold text-cyan-500 tracking-widest">AVANGARD GATEWAY</span>
                        <div className="flex gap-2 mt-1">
                           <div className="w-2 h-2 rounded-full bg-cyan-400 shadow-[0_0_8px_cyan]"></div>
                           <div className="w-2 h-2 rounded-full bg-cyan-400 animate-ping"></div>
                        </div>
                     </div>
                     <div className="flex gap-3 items-center">
                        <div className="h-8 w-24 bg-slate-950 rounded border border-slate-700 flex items-center justify-center">
                            <span className="text-[10px] text-cyan-400 font-mono">10 GBPS</span>
                        </div>
                     </div>
                  </div>

                  {/* Server Unit 3 */}
                  <div className="w-[90%] h-16 bg-gradient-to-r from-slate-900 via-slate-800 to-slate-900 border border-slate-700 rounded md flex items-center px-6 justify-between mt-4 shadow-lg relative z-10 opacity-60">
                     <div className="flex gap-2">
                        <div className="w-2 h-2 rounded-full bg-green-500/50"></div>
                     </div>
                  </div>
               </div>
            </div>

            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
                Avangard <span className="text-cyan-500">Secure Gateway</span>
              </h2>
              <p className="text-lg text-slate-400 mb-8 leading-relaxed">
                Next-Generation Firewall (NGFW) Appliance yang didesain untuk perusahaan dengan trafik tinggi. Dilengkapi dengan chip enkripsi hardware khusus untuk performa VPN tanpa latensi.
              </p>
              
              <div className="grid grid-cols-2 gap-6 mb-10">
                 <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
                    <Zap className="w-6 h-6 text-cyan-500 mb-2" />
                    <h4 className="font-bold text-white">Zero Latency</h4>
                    <p className="text-xs text-slate-400 mt-1">Hardware acceleration</p>
                 </div>
                 <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
                    <Shield className="w-6 h-6 text-cyan-500 mb-2" />
                    <h4 className="font-bold text-white">Deep Inspection</h4>
                    <p className="text-xs text-slate-400 mt-1">L7 Packet Filtering</p>
                 </div>
                 <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
                    <Globe className="w-6 h-6 text-cyan-500 mb-2" />
                    <h4 className="font-bold text-white">SD-WAN Ready</h4>
                    <p className="text-xs text-slate-400 mt-1">Multi-site connect</p>
                 </div>
                 <div className="p-4 bg-slate-900 rounded-lg border border-slate-800">
                    <Server className="w-6 h-6 text-cyan-500 mb-2" />
                    <h4 className="font-bold text-white">1U Rack Mount</h4>
                    <p className="text-xs text-slate-400 mt-1">Enterprise Standard</p>
                 </div>
              </div>

              <div className="flex gap-4">
                <Link href="/contact" className="px-6 py-3 bg-cyan-600 hover:bg-cyan-500 text-white font-bold rounded-lg transition-all shadow-lg shadow-cyan-900/20">
                  Pre-Order Unit
                </Link>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          4. COMPARISON / SPECS (Table)
      ========================================= */}
      <section className="py-24">
         <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="text-center mb-16">
               <h2 className="text-3xl font-bold text-white">Spesifikasi Teknis</h2>
               <p className="text-slate-400 mt-4">Perbandingan kapabilitas antara solusi Cloud vs On-Premise kami.</p>
            </div>

            <div className="overflow-x-auto rounded-xl border border-slate-800">
               <table className="w-full text-left text-sm text-slate-400">
                  <thead className="bg-slate-900 text-white uppercase font-bold text-xs tracking-wider">
                     <tr>
                        <th className="px-6 py-4">Fitur</th>
                        <th className="px-6 py-4 text-blue-400">Sentinel X™ (Cloud)</th>
                        <th className="px-6 py-4 text-cyan-400">Secure Gateway (Hardware)</th>
                     </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-800 bg-slate-950/50">
                     <tr className="hover:bg-slate-900/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-white">Deployment Time</td>
                        <td className="px-6 py-4">Instant (SaaS)</td>
                        <td className="px-6 py-4">Shipping + Rack Install</td>
                     </tr>
                     <tr className="hover:bg-slate-900/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-white">Throughput Capacity</td>
                        <td className="px-6 py-4">Unlimited (Auto-scale)</td>
                        <td className="px-6 py-4">Up to 40 Gbps</td>
                     </tr>
                     <tr className="hover:bg-slate-900/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-white">Threat Intel Feed</td>
                        <td className="px-6 py-4 flex items-center"><CircleCheckBig className="w-4 h-4 text-green-500 mr-2"/> Global Live Feed</td>
                        <td className="px-6 py-4 flex items-center"><CircleCheckBig className="w-4 h-4 text-green-500 mr-2"/> Cached + Live Update</td>
                     </tr>
                     <tr className="hover:bg-slate-900/50 transition-colors">
                        <td className="px-6 py-4 font-medium text-white">Maintenance</td>
                        <td className="px-6 py-4">Fully Managed by Avangard</td>
                        <td className="px-6 py-4">Firmware Updates (OTA)</td>
                     </tr>
                  </tbody>
               </table>
            </div>
         </div>
      </section>

      {/* =========================================
          5. CTA
      ========================================= */}
      <section className="py-20 px-4">
        <div className="max-w-4xl mx-auto text-center bg-gradient-to-br from-slate-900 to-slate-950 border border-slate-800 rounded-3xl p-12 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-blue-600/10 blur-[80px] rounded-full pointer-events-none"></div>
          
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 relative z-10">
            Siap Upgrade Infrastruktur Anda?
          </h2>
          <p className="text-slate-400 mb-8 relative z-10 text-lg max-w-2xl mx-auto">
            Jadwalkan sesi demo produk dengan Engineer kami untuk melihat langsung bagaimana Avangard bekerja di lingkungan Anda.
          </p>
          <Link href="/contact" className="relative z-10 inline-flex items-center px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-blue-50 transition-colors shadow-lg hover:shadow-xl hover:-translate-y-1 transform duration-200">
            Jadwalkan Demo <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}
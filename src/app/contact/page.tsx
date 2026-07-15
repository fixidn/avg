'use client';

import React, { useState } from 'react';
import { Mail, MapPin, CircleCheck, ArrowRight, ShieldCheck, CircleAlert, Phone } from 'lucide-react';

interface FormData {
  name: string;
  email: string;
  phone: string;
  service: string;
  message: string;
  consent: boolean;
}

interface FormErrors {
  name?: string;
  email?: string;
  message?: string;
  consent?: string;
}

export default function ContactPage() {
  const [formStatus, setFormStatus] = useState<'idle' | 'submitting' | 'success'>('idle');
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    email: '',
    phone: '',
    service: 'Penetration Testing (VAPT)',
    message: '',
    consent: false
  });

  const [errors, setErrors] = useState<FormErrors>({});

  const sanitizeInput = (text: string) => {
    const map: { [key: string]: string } = {
      '&': '&amp;',
      '<': '&lt;',
      '>': '&gt;',
      '"': '&quot;',
      "'": '&#x27;',
      "/": '&#x2F;',
    };
    const reg = /[&<>"'/]/ig;
    return text.trim().replace(reg, (match) => (map[match]));
  };

  const validate = (): boolean => {
    let tempErrors: FormErrors = {};
    let isValid = true;

    if (!formData.name.trim()) {
      tempErrors.name = "Nama lengkap wajib diisi";
      isValid = false;
    } else if (formData.name.length < 3) {
      tempErrors.name = "Nama terlalu pendek (min. 3 karakter)";
      isValid = false;
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!formData.email) {
      tempErrors.email = "Email perusahaan wajib diisi";
      isValid = false;
    } else if (!emailRegex.test(formData.email)) {
      tempErrors.email = "Format email tidak valid";
      isValid = false;
    }

    if (!formData.message.trim()) {
      tempErrors.message = "Pesan tidak boleh kosong";
      isValid = false;
    } else if (formData.message.length < 10) {
      tempErrors.message = "Mohon jelaskan kebutuhan Anda lebih detail (min. 10 karakter)";
      isValid = false;
    }

    if (!formData.consent) {
      tempErrors.consent = "Anda harus menyetujui Kebijakan Privasi untuk melanjutkan";
      isValid = false;
    }

    setErrors(tempErrors);
    return isValid;
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value, type } = e.target;
    const fieldValue = type === 'checkbox' ? (e.target as HTMLInputElement).checked : value;
    setFormData(prev => ({ ...prev, [name]: fieldValue }) as FormData);

    if (name !== 'phone' && errors[name as keyof FormErrors]) {
      setErrors(prev => ({ ...prev, [name]: undefined }));
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validate()) return;

    setFormStatus('submitting');

    const cleanData = {
      name: sanitizeInput(formData.name),
      email: sanitizeInput(formData.email),
      phone: sanitizeInput(formData.phone),
      service: sanitizeInput(formData.service),
      message: sanitizeInput(formData.message),
      consent: formData.consent
    };

    try {
      const response = await fetch('/api/contact', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(cleanData),
      });

      if (!response.ok) {
        throw new Error('Gagal mengirim data ke server');
      }

      setFormStatus('success');
      setFormData({
        name: '',
        email: '',
        phone: '',
        service: 'Penetration Testing (VAPT)',
        message: '',
        consent: false
      });

    } catch (error) {
      console.error("Submission Error:", error);
      alert("Maaf, terjadi gangguan koneksi. Silakan coba lagi atau hubungi kami via email langsung.");
      setFormStatus('idle');
    }
  };

  return (
    <div className="bg-slate-950 min-h-screen relative overflow-hidden flex flex-col justify-center py-20 px-4 sm:px-6 lg:px-8 selection:bg-blue-500/30 selection:text-blue-200">
      
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-900/10 blur-[120px] rounded-full pointer-events-none -z-10"></div>
      
      <div className="max-w-7xl mx-auto w-full relative z-10">
        
        <div className="text-center mb-12 lg:mb-16">
          <div className="inline-flex items-center justify-center p-2 bg-slate-900/50 rounded-full mb-6 border border-slate-800 backdrop-blur-sm">
             <span className="w-2 h-2 rounded-full bg-green-500 mr-2 animate-pulse"></span>
             <span className="text-xs font-semibold text-slate-400 uppercase tracking-widest">Open for Consultation</span>
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-white mb-6 tracking-tight">
            Let's Secure <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-cyan-400">Your Future</span>
          </h1>
          <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Diskusikan kebutuhan keamanan siber Anda dengan tim ahli kami. Respon cepat, solusi tepat sasaran.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12 items-start">
          
          <div className="lg:col-span-5 space-y-6 order-2 lg:order-1">
            <div className="bg-slate-900/60 backdrop-blur-md border border-slate-800 rounded-3xl p-8 space-y-8 hover:border-slate-700 transition-colors shadow-xl">
               <div className="flex items-start group">
                  <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 mr-5 group-hover:bg-blue-500/20 transition-colors">
                     <MapPin className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                     <p className="text-white font-bold text-lg mb-1">Headquarters</p>
                     <p className="text-slate-400 leading-relaxed text-sm">
                       Jl. Jend Sudirman<br/>
                       Jakarta Selatan, 12190
                     </p>
                  </div>
               </div>

               <div className="w-full h-px bg-slate-800/50"></div>

               <div className="flex items-start group">
                  <div className="p-3 bg-blue-500/10 rounded-xl border border-blue-500/20 mr-5 group-hover:bg-blue-500/20 transition-colors">
                     <Mail className="h-6 w-6 text-blue-500" />
                  </div>
                  <div>
                     <p className="text-white font-bold text-lg mb-1">Business Inquiry</p>
                     <a href="mailto:sales@stacopa-avangard.com" className="text-blue-400 hover:text-blue-300 font-medium transition-colors">
                       sales@stacopa-avangard.com
                     </a>
                  </div>
               </div>
            </div>
            
            <div className="flex items-center justify-center space-x-2 text-slate-500 text-sm py-4 bg-slate-900/30 rounded-2xl border border-slate-800/50">
              <ShieldCheck className="w-4 h-4 text-green-500" />
              <span>Data Anda dilindungi dengan enkripsi End-to-End.</span>
            </div>
          </div>

          <div className="lg:col-span-7 order-1 lg:order-2">
            <div className="bg-slate-900/80 backdrop-blur-xl border border-slate-800 rounded-3xl p-8 md:p-10 shadow-2xl relative overflow-hidden">
               <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500 opacity-50"></div>

               {formStatus === 'success' ? (
                 <div className="text-center py-20 animate-in fade-in zoom-in duration-500">
                   <div className="w-24 h-24 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6 ring-4 ring-green-500/20">
                     <CircleCheck className="w-12 h-12 text-green-500" />
                   </div>
                   <h3 className="text-3xl font-bold text-white mb-4">Pesan Diterima!</h3>
                   <p className="text-slate-400 max-w-md mx-auto mb-8 text-lg">
                     Terima kasih telah menghubungi Avangard. Tim spesialis kami akan meninjau permintaan Anda dan menghubungi Anda dalam waktu 1x24 jam.
                   </p>
                   <button 
                     onClick={() => setFormStatus('idle')} 
                     className="px-8 py-3 bg-slate-800 hover:bg-slate-700 text-white rounded-xl font-medium transition-all"
                   >
                     Kirim Pesan Lain
                   </button>
                 </div>
               ) : (
                 <form onSubmit={handleSubmit} className="space-y-6" noValidate>
                   
                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label htmlFor="name" className="text-sm font-semibold text-slate-300 ml-1">Nama Lengkap <span className="text-red-500">*</span></label>
                         <input 
                           type="text" id="name" name="name"
                           value={formData.name}
                           onChange={handleChange}
                           placeholder="John Doe"
                           className={`w-full bg-slate-950/50 border text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600 
                             ${errors.name ? 'border-red-500 focus:border-red-500' : 'border-slate-700 focus:border-transparent'}`} 
                         />
                         {errors.name && (
                           <div className="flex items-center text-red-500 text-xs mt-1 ml-1 animate-pulse">
                             <CircleAlert className="w-3 h-3 mr-1" /> {errors.name}
                           </div>
                         )}
                      </div>

                      <div className="space-y-2">
                         <label htmlFor="email" className="text-sm font-semibold text-slate-300 ml-1">Email <span className="text-red-500">*</span></label>
                         <input 
                           type="email" id="email" name="email"
                           value={formData.email}
                           onChange={handleChange}
                           placeholder="name@company.com"
                           className={`w-full bg-slate-950/50 border text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600
                             ${errors.email ? 'border-red-500 focus:border-red-500' : 'border-slate-700 focus:border-transparent'}`} 
                         />
                         {errors.email && (
                            <div className="flex items-center text-red-500 text-xs mt-1 ml-1 animate-pulse">
                              <CircleAlert className="w-3 h-3 mr-1" /> {errors.email}
                            </div>
                         )}
                      </div>
                   </div>

                   <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                      <div className="space-y-2">
                         <label htmlFor="phone" className="text-sm font-semibold text-slate-300 ml-1">
                           Nomor HP <span className="text-slate-500 font-normal text-xs ml-1">(Opsional)</span>
                         </label>
                         <div className="relative">
                            <input 
                              type="tel" id="phone" name="phone"
                              value={formData.phone}
                              onChange={handleChange}
                              placeholder="+62 812..."
                              className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-xl px-5 py-4 pl-12 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600" 
                            />
                            <div className="absolute inset-y-0 left-0 flex items-center pl-4 pointer-events-none text-slate-500">
                              <Phone className="w-5 h-5" />
                            </div>
                         </div>
                      </div>

                      <div className="space-y-2">
                         <label htmlFor="service" className="text-sm font-semibold text-slate-300 ml-1">Layanan yang Diminati</label>
                         <div className="relative">
                           <select 
                             id="service" name="service"
                             value={formData.service}
                             onChange={handleChange}
                             className="w-full bg-slate-950/50 border border-slate-700 text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none transition-all appearance-none cursor-pointer"
                           >
                             <option>Penetration Testing (VAPT)</option>
                             <option>Managed SOC (Security Operations)</option>
                             <option>ISO 27001 / GDPR Compliance</option>
                             <option>Incident Response (Darurat)</option>
                             <option>Lainnya / Konsultasi Umum</option>
                           </select>
                           <div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none text-slate-500">
                             <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7"></path></svg>
                           </div>
                         </div>
                      </div>
                   </div>

                   <div className="space-y-2">
                     <label htmlFor="message" className="text-sm font-semibold text-slate-300 ml-1">Detail Kebutuhan / Pesan <span className="text-red-500">*</span></label>
                     <textarea 
                       id="message" name="message" rows={5}
                       value={formData.message}
                       onChange={handleChange}
                       placeholder="Ceritakan sedikit tentang infrastruktur atau masalah keamanan yang Anda hadapi..."
                       className={`w-full bg-slate-950/50 border text-white rounded-xl px-5 py-4 focus:ring-2 focus:ring-blue-500 outline-none transition-all placeholder:text-slate-600 resize-none
                         ${errors.message ? 'border-red-500 focus:border-red-500' : 'border-slate-700 focus:border-transparent'}`}
                     ></textarea>
                     {errors.message && (
                        <div className="flex items-center text-red-500 text-xs mt-1 ml-1 animate-pulse">
                          <CircleAlert className="w-3 h-3 mr-1" /> {errors.message}
                        </div>
                     )}
                   </div>

                   <div className="space-y-2">
                     <label htmlFor="consent" className="flex items-start gap-3 cursor-pointer group">
                        <input
                          type="checkbox" id="consent" name="consent"
                          checked={formData.consent}
                          onChange={handleChange}
                          className="mt-0.5 h-4 w-4 shrink-0 rounded border-slate-600 bg-slate-950/50 text-blue-600 focus:ring-2 focus:ring-blue-500 cursor-pointer accent-blue-600"
                        />
                        <span className="text-xs text-slate-400 leading-relaxed group-hover:text-slate-300 transition-colors">
                          Saya menyetujui pemrosesan data pribadi saya sesuai{' '}
                          <a href="/privacy" target="_blank" rel="noopener noreferrer" className="text-blue-400 hover:text-blue-300 underline underline-offset-2 font-medium">
                            Kebijakan Privasi
                          </a>{' '}
                          untuk keperluan konsultasi ini. <span className="text-red-500">*</span>
                        </span>
                     </label>
                     {errors.consent && (
                       <div className="flex items-center text-red-500 text-xs mt-1 ml-1 animate-pulse">
                         <CircleAlert className="w-3 h-3 mr-1" /> {errors.consent}
                       </div>
                     )}
                   </div>

                   <button
                     type="submit"
                     disabled={formStatus === 'submitting'}
                     className="w-full py-4 px-6 bg-gradient-to-r from-blue-600 to-blue-500 hover:from-blue-500 hover:to-blue-400 text-white text-lg font-bold rounded-xl shadow-lg shadow-blue-900/20 hover:shadow-blue-500/30 transition-all transform hover:-translate-y-1 disabled:opacity-70 disabled:cursor-not-allowed flex items-center justify-center group"
                   >
                      {formStatus === 'submitting' ? (
                        <span className="flex items-center">
                          <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                            <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                            <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                          </svg>
                          Memproses...
                        </span>
                      ) : (
                        <>
                          Kirim Permintaan Konsultasi 
                          <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-1 transition-transform" />
                        </>
                      )}
                   </button>
                 </form>
               )}
            </div>
          </div>

        </div>
      </div>
    </div>
  );
}
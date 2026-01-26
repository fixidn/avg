import Link from 'next/link';
import Image from 'next/image';
import { Linkedin, Twitter, Instagram, Mail, Phone, MapPin, ArrowRight } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="bg-slate-950 pt-20 pb-10 relative overflow-hidden border-t border-slate-900">
      
      <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-blue-900 to-transparent opacity-50"></div>
      
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[800px] h-[300px] bg-blue-900/5 blur-[100px] pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 lg:gap-8 mb-16">
          
          <div className="lg:col-span-4 space-y-6">
            <Link href="/" className="inline-block">
              <Image 
                src="/white.svg"
                alt="Avangard Logo"
                width={160}           
                height={45}           
                className="h-10 w-auto"
              />
            </Link>
            
            <p className="text-slate-400 text-sm leading-relaxed max-w-sm">
              Mitra strategis keamanan siber untuk bisnis modern. Kami mengamankan aset digital Anda dengan pendekatan Offensive & Defensive yang terintegrasi.
            </p>

            <div className="flex space-x-4 pt-2">
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-all duration-300">
                <Linkedin className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-all duration-300">
                <Twitter className="w-4 h-4" />
              </a>
              <a href="#" className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-slate-400 hover:text-white hover:border-blue-500 hover:bg-blue-600 transition-all duration-300">
                <Instagram className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div className="lg:col-span-2 lg:col-start-6">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Services</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/services/vapt" className="text-slate-400 hover:text-blue-400 transition-colors text-sm flex items-center group">
                  <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 text-blue-500">&rarr;</span>
                  VAPT Service
                </Link>
              </li>
              <li>
                <Link href="/services/soc" className="text-slate-400 hover:text-blue-400 transition-colors text-sm flex items-center group">
                  <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 text-blue-500">&rarr;</span>
                  Managed SOC
                </Link>
              </li>
              <li>
                <Link href="/services/compliance" className="text-slate-400 hover:text-blue-400 transition-colors text-sm flex items-center group">
                  <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 text-blue-500">&rarr;</span>
                  Compliance
                </Link>
              </li>
              <li>
                <Link href="/services/incident-response" className="text-slate-400 hover:text-blue-400 transition-colors text-sm flex items-center group">
                  <span className="w-0 overflow-hidden group-hover:w-3 transition-all duration-300 mr-0 group-hover:mr-2 text-blue-500">&rarr;</span>
                  Incident Response & Forensics
                </Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-2">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Company</h3>
            <ul className="space-y-4">
              <li>
                <Link href="/about" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">About Us</Link>
              </li>
              
              <li>
                <Link href="/contact" className="text-slate-400 hover:text-blue-400 transition-colors text-sm">Contact</Link>
              </li>
            </ul>
          </div>

          <div className="lg:col-span-3">
            <h3 className="text-white font-bold text-sm uppercase tracking-widest mb-6">Headquarters</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 text-blue-500 mr-3 mt-0.5 flex-shrink-0" />
                <span className="text-slate-400 text-sm leading-relaxed">
                  Jl. Jend Sudirman<br/>
                  Jakarta Selatan, 12190
                </span>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 text-blue-500 mr-3 flex-shrink-0" />
                <a href="mailto:support@stacopa-avangard.com" className="text-slate-400 hover:text-white transition-colors text-sm">
                  support@stacopa-avangard.com
                </a>
              </li>
              
            </ul>
          </div>

        </div>

        <div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-slate-500 text-xs">
            &copy; {currentYear} PT Stacopa Avangard. All rights reserved.
          </p>
          
          <div className="flex space-x-6">
            <Link href="/privacy" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-slate-500 hover:text-slate-300 text-xs transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
        
      </div>
    </footer>
  );
};

export default Footer;
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';
import { Menu, X, ArrowRight, Linkedin, Twitter, Instagram, ChevronRight } from 'lucide-react';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) {
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = 'unset';
    }
  }, [isOpen]);

  const navLinks = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
    { name: 'Products', path: '/products' },
    { name: 'About', path: '/about' },
  ];

  return (
    <>
      <nav 
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-300 ${
          scrolled || isOpen 
            ? 'bg-slate-950/80 backdrop-blur-md border-b border-slate-800 py-3 shadow-lg shadow-blue-900/5' 
            : 'bg-transparent border-b border-transparent py-5'
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between">

            <div className="flex-shrink-0 relative z-50"> 
              <Link href="/" onClick={() => setIsOpen(false)}>
                <Image
                  src="/white.svg"
                  alt="Avangard Logo"
                  width={140}
                  height={40}
                  className="h-10 w-auto" 
                  priority
                />
              </Link>
            </div>
            
            <div className="hidden md:flex items-center space-x-8">
              {navLinks.map((link) => (
                <Link 
                  key={link.path}
                  href={link.path}
                  className={`text-sm font-medium transition-all duration-200 relative group ${
                    pathname === link.path ? 'text-white' : 'text-slate-400 hover:text-white'
                  }`}
                >
                  {link.name}
                  <span className={`absolute -bottom-1 left-0 h-0.5 bg-blue-500 transition-all duration-300 ${
                    pathname === link.path ? 'w-full' : 'w-0 group-hover:w-full'
                  }`}></span>
                </Link>
              ))}
            </div>

            <div className="hidden md:flex items-center">
              <Link 
                href="/contact"
                className="inline-flex items-center px-5 py-2.5 bg-blue-600 hover:bg-blue-500 text-white text-sm font-semibold rounded-lg transition-all shadow-[0_0_15px_rgba(37,99,235,0.3)] hover:shadow-[0_0_25px_rgba(37,99,235,0.5)] hover:-translate-y-0.5"
              >
                Konsultasi
                <ArrowRight className="ml-2 w-4 h-4" />
              </Link>
            </div>

            <div className="flex md:hidden z-50">
              <button 
                onClick={() => setIsOpen(!isOpen)}
                className="p-2 text-slate-400 hover:text-white transition-colors focus:outline-none"
                aria-label="Toggle menu"
              >
                {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
              </button>
            </div>

          </div>
        </div> 
      </nav>

      {/* =========================================
          MOBILE SIDEBAR OVERLAY
      ========================================= */}
      
      <div 
        className={`fixed inset-0 bg-black/80 backdrop-blur-sm z-40 transition-opacity duration-300 md:hidden ${
          isOpen ? 'opacity-100 visible' : 'opacity-0 invisible pointer-events-none'
        }`}
        onClick={() => setIsOpen(false)} 
      />

      <div 
        className={`fixed top-0 right-0 bottom-0 w-[85%] max-w-sm bg-slate-950 border-l border-slate-800 z-50 shadow-2xl transform transition-transform duration-300 ease-out md:hidden flex flex-col ${
          isOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
      >
        <div className="h-20 flex items-center justify-between px-6 border-b border-slate-900 bg-slate-950">
           <span className="text-sm font-bold text-slate-500 tracking-widest uppercase">Navigation</span>
        </div>

        <div className="flex-1 overflow-y-auto py-6 px-4 space-y-2">
          {navLinks.map((link) => (
            <Link 
              key={link.path}
              href={link.path} 
              onClick={() => setIsOpen(false)}
              className={`flex items-center justify-between px-4 py-4 rounded-xl text-lg font-medium transition-all ${
                pathname === link.path 
                  ? 'bg-blue-600/10 text-blue-400 border border-blue-500/20' 
                  : 'text-slate-400 hover:text-white hover:bg-slate-900'
              }`}
            >
              {link.name}
              {pathname === link.path && <ChevronRight className="w-5 h-5" />}
            </Link>
          ))}
          
          <div className="pt-6 mt-6 border-t border-slate-900">
             <Link 
                href="/contact"
                onClick={() => setIsOpen(false)}
                className="flex items-center justify-center w-full px-6 py-4 bg-blue-600 hover:bg-blue-500 text-white font-bold rounded-xl transition-all shadow-lg shadow-blue-900/20"
             >
                Hubungi Kami
                <ArrowRight className="ml-2 w-5 h-5" />
             </Link>
          </div>
        </div>

        <div className="p-8 border-t border-slate-900 bg-slate-900/30">
          <div className="flex justify-center space-x-8">
            <a href="#" className="text-slate-500 hover:text-blue-500 transition-colors">
              <Linkedin className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-500 hover:text-white transition-colors">
              <Twitter className="w-6 h-6" />
            </a>
            <a href="#" className="text-slate-500 hover:text-pink-500 transition-colors">
              <Instagram className="w-6 h-6" />
            </a>
          </div>
          <p className="text-center text-xs text-slate-600 mt-6">
            &copy; {new Date().getFullYear()} Avangard Security.
          </p>
        </div>
      </div>
    </>
  );
};

export default Navbar;
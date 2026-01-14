import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* 1. HAPUS baris output: 'export' 
        Agar Next.js berjalan dalam Mode Server (kompatibel dengan PM2) 
  */

  images: {
    /* 2. HAPUS unoptimized: true 
          Agar gambar Anda otomatis dikompres & kencang (fitur Image Optimization)
    */
    
    /* 3. TAMBAHKAN remotePatterns untuk Sanity
          Karena unoptimized dihapus, kita wajib mendaftarkan domain Sanity
          agar tidak error saat load gambar.
    */
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'cdn.sanity.io',
      },
    ],
  }
};

export default nextConfig;
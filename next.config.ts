import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  output: 'export',  // <--- Tambahkan baris ini
  images: { unoptimized: true } // <--- Wajib jika pakai export statis
};

export default nextConfig;

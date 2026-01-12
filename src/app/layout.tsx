import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: {
    default: "Avangard | Cyber Defense Solutions",
    template: "%s | Avangard Security", 
  },
  description: "Layanan VAPT, Incident Response, dan Konsultasi Keamanan Siber Terpercaya.",
  
  openGraph: {
    title: 'Avangard Security',
    description: 'Mitra keamanan siber terpercaya untuk bisnis Anda.',
    url: 'https://stacopa-avangard.com',
    siteName: 'Avangard Security',
    locale: 'id_ID',
    type: 'website',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-slate-950 text-slate-200 min-h-screen flex flex-col`}>
        
        <Navbar />
        
        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
        
      </body>
    </html>
  );
}
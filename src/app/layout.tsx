import { GoogleAnalytics } from '@next/third-parties/google';
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import JsonLd from "@/components/JsonLd";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

const SITE_URL = "https://stacopa-avangard.com";

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: "Stacopa Avangard | Cyber Defense Solutions",
    template: "%s | Stacopa Avangard",
  },
  description: "Layanan VAPT, Incident Response, dan Konsultasi Keamanan Siber Terpercaya.",
  openGraph: {
    title: 'Stacopa Avangard',
    description: 'Mitra keamanan siber terpercaya untuk bisnis Anda.',
    url: SITE_URL,
    siteName: 'Stacopa Avangard',
    locale: 'id_ID',
    type: 'website',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Stacopa Avangard — Cyber Defense Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Stacopa Avangard',
    description: 'Mitra keamanan siber terpercaya untuk bisnis Anda.',
    images: ['/og-image.png'],
  },
};

// Structured data sitewide: identitas perusahaan + situs
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": `${SITE_URL}/#organization`,
  name: "Stacopa Avangard",
  legalName: "PT Stacopa Avangard Raya",
  alternateName: "Avangard",
  url: SITE_URL,
  logo: `${SITE_URL}/white.svg`,
  description:
    "Penyedia layanan keamanan siber: VAPT/penetration testing, Managed Detection & Response (MDR), Incident Response, dan konsultasi GRC/compliance di Indonesia.",
  parentOrganization: {
    "@type": "Organization",
    name: "STACOPA Group",
  },
  areaServed: {
    "@type": "Country",
    name: "Indonesia",
  },
  knowsAbout: [
    "Penetration Testing",
    "Vulnerability Assessment",
    "Managed Detection and Response",
    "Incident Response",
    "ISO 27001",
    "Cyber Security",
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": `${SITE_URL}/#website`,
  url: SITE_URL,
  name: "Stacopa Avangard",
  inLanguage: "id-ID",
  publisher: { "@id": `${SITE_URL}/#organization` },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="id">
      <body className={`${inter.className} bg-slate-950 text-slate-200 min-h-screen flex flex-col`}>
        
        <JsonLd data={organizationSchema} />
        <JsonLd data={websiteSchema} />

        <Navbar />

        <main className="flex-grow">
          {children}
        </main>
        
        <Footer />
        
      </body>
      
      <GoogleAnalytics gaId="G-54JM6XEQ62" />
      
    </html>
  );
}
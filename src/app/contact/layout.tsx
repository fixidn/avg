import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Hubungi Kami", 
  description: "Hubungi tim sales dan support Stacopa Avangard untuk solusi keamanan siber perusahaan Anda.",
  alternates: { canonical: "/contact" },
};

export default function ContactLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return <>{children}</>;
}
import React from 'react';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { Activity, FileCheck, CircleCheckBig, ArrowRight } from 'lucide-react';
import JsonLd from '@/components/JsonLd';
import { servicesData } from '@/lib/servicesData';

const SITE_URL = 'https://stacopa-avangard.com';

// =========================================================
// 1. CONFIG: STATIC PARAMS (Untuk Build Time Optimization)
// =========================================================
export async function generateStaticParams() {
  return Object.keys(servicesData).map((slug) => ({
    slug: slug,
  }));
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;
  const service = servicesData[slug];
  if (!service) return { title: 'Service Not Found' };
  return {
    title: service.seoTitle ?? `${service.subtitle} | Avangard Services`,
    description: service.seoDescription ?? service.description,
    alternates: {
      canonical: `/services/${slug}`,
    },
  };
}

// =========================================================
// 2. MAIN COMPONENT (PAGE)
// =========================================================
export default async function ServiceDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = await params;

  const service = servicesData[slug];

  if (!service) {
    return notFound();
  }

  const serviceUrl = `${SITE_URL}/services/${slug}`;

  const serviceSchema = {
    "@context": "https://schema.org",
    "@type": "Service",
    name: service.title,
    serviceType: service.subtitle,
    description: service.description,
    url: serviceUrl,
    provider: {
      "@type": "Organization",
      name: "Avangard Security",
      url: SITE_URL,
    },
    areaServed: {
      "@type": "Country",
      name: "Indonesia",
    },
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: [
      { "@type": "ListItem", position: 1, name: "Beranda", item: SITE_URL },
      { "@type": "ListItem", position: 2, name: "Layanan", item: `${SITE_URL}/services` },
      { "@type": "ListItem", position: 3, name: service.title, item: serviceUrl },
    ],
  };

  const faqSchema = service.faq?.length
    ? {
        "@context": "https://schema.org",
        "@type": "FAQPage",
        mainEntity: service.faq.map((item) => ({
          "@type": "Question",
          name: item.q,
          acceptedAnswer: { "@type": "Answer", text: item.a },
        })),
      }
    : null;

  return (
    <div className="bg-slate-950 min-h-screen relative overflow-hidden selection:bg-blue-500/30 selection:text-blue-200">

      <JsonLd data={serviceSchema} />
      <JsonLd data={breadcrumbSchema} />
      {faqSchema && <JsonLd data={faqSchema} />}

      <div className={`absolute top-0 right-0 w-[500px] h-[500px] bg-gradient-to-b ${service.gradient} opacity-10 blur-[120px] rounded-full pointer-events-none`}></div>

      <div className="relative pt-32 pb-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <div className={`inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-900 border border-slate-800 ${service.iconColor} text-xs font-bold tracking-widest uppercase mb-6`}>
             <Activity className="w-3 h-3" />
             Avangard Professional Services
          </div>

          <h1 className="text-4xl md:text-6xl font-extrabold text-white tracking-tight mb-6">
            {service.h1 ?? service.title}
          </h1>
          <h2 className={`text-xl md:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r ${service.gradient} mb-8`}>
            {service.subtitle}
          </h2>

          <p className="text-lg text-slate-400 max-w-3xl mx-auto leading-relaxed">
            {service.description}
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <Link href="/contact" className={`px-8 py-4 bg-gradient-to-r ${service.gradient} text-white font-bold rounded-xl shadow-lg hover:opacity-90 transition-all hover:-translate-y-1`}>
              Konsultasi Sekarang
            </Link>
            <Link href="/services" className="px-8 py-4 border border-slate-700 text-slate-300 font-medium rounded-xl hover:bg-slate-900 transition-all">
              Lihat Layanan Lain
            </Link>
          </div>
        </div>
      </div>

      <section className="py-20 bg-slate-900/30 border-y border-slate-900">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h3 className="text-3xl font-bold text-white">Apa yang Kami Tawarkan?</h3>
            <p className="text-slate-400 mt-4">Lingkup pekerjaan dan kapabilitas utama dalam layanan ini.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {service.features.map((feature, idx: number) => (
              <div key={idx} className="bg-slate-950 border border-slate-800 p-8 rounded-2xl hover:border-slate-600 transition-colors group">
                <div className={`w-12 h-12 rounded-lg bg-slate-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 border border-slate-800`}>
                   <CircleCheckBig className={`w-6 h-6 ${service.iconColor}`} />
                </div>
                <h4 className="text-xl font-bold text-white mb-3">{feature.title}</h4>
                <p className="text-slate-400 leading-relaxed">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="py-24 px-4 sm:px-6 lg:px-8">
         <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

               <div>
                  <h3 className="text-3xl font-bold text-white mb-6">Metodologi Kami</h3>
                  <p className="text-slate-400 mb-10 text-lg">
                    Kami bekerja dengan standar internasional (NIST / OWASP) untuk memastikan hasil yang terstruktur, terukur, dan dapat dipertanggungjawabkan.
                  </p>

                  <div className="space-y-8">
                     {service.process.map((step, idx: number) => (
                        <div key={idx} className="flex gap-6">
                           <div className="flex-none">
                              <span className={`flex items-center justify-center w-12 h-12 rounded-full border-2 bg-slate-900 text-lg font-bold ${service.iconColor} border-slate-700`}>
                                 {step.step}
                              </span>
                           </div>
                           <div>
                              <h4 className="text-xl font-bold text-white mb-2">{step.name}</h4>
                              <p className="text-slate-400">{step.desc}</p>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>

               <div className={`relative aspect-square lg:aspect-[4/5] bg-gradient-to-br ${service.gradient} rounded-3xl p-1`}>
                  <div className="absolute inset-0 bg-slate-950/90 rounded-[22px] m-[2px] flex items-center justify-center overflow-hidden">
                      <div className="text-center p-8 relative z-10">
                         <div className={`w-24 h-24 mx-auto mb-8 rounded-2xl bg-gradient-to-br ${service.gradient} flex items-center justify-center shadow-2xl shadow-slate-900`}>
                            <FileCheck className="w-10 h-10 text-white" />
                         </div>
                         <h4 className="text-2xl font-bold text-white mb-2">Enterprise Grade</h4>
                         <p className="text-slate-400 text-sm mb-8">Standardized & Secure Procedure</p>

                         <div className="space-y-3">
                            <div className="h-2 w-48 bg-slate-800 rounded mx-auto overflow-hidden">
                               <div className={`h-full w-2/3 bg-gradient-to-r ${service.gradient} animate-pulse`}></div>
                            </div>
                            <div className="h-2 w-32 bg-slate-800 rounded mx-auto"></div>
                         </div>
                      </div>

                      <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>
                  </div>
               </div>

            </div>
         </div>
      </section>

      {service.faq?.length ? (
        <section className="py-20 px-4 sm:px-6 lg:px-8 border-t border-slate-900">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white">Pertanyaan yang Sering Diajukan</h2>
              <p className="text-slate-400 mt-4">Hal-hal yang umum ditanyakan seputar layanan ini.</p>
            </div>
            <div className="space-y-4">
              {service.faq.map((item, idx: number) => (
                <div key={idx} className="bg-slate-900 border border-slate-800 rounded-2xl p-6">
                  <h3 className="text-lg font-bold text-white mb-3 flex items-start gap-3">
                    <span className={`flex-none mt-1.5 w-1.5 h-5 rounded-sm bg-gradient-to-b ${service.gradient}`}></span>
                    {item.q}
                  </h3>
                  <p className="text-slate-400 leading-relaxed pl-[18px]">{item.a}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ) : null}

      <section className="py-20 px-4">
        <div className="max-w-5xl mx-auto text-center bg-slate-900 border border-slate-800 rounded-3xl p-12 relative overflow-hidden">
          <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${service.gradient}`}></div>

          <h2 className="text-3xl font-bold text-white mb-6">
             Siap Mengamankan Bisnis Anda?
          </h2>
          <p className="text-slate-400 mb-8 max-w-2xl mx-auto">
             Jangan tunggu sampai insiden terjadi. Hubungi tim ahli Avangard untuk mendapatkan proposal teknis dan penawaran harga.
          </p>
          <Link href="/contact" className={`inline-flex items-center px-8 py-4 bg-white text-slate-950 font-bold rounded-xl hover:bg-slate-200 transition-colors`}>
            Hubungi Sales <ArrowRight className="ml-2 w-5 h-5" />
          </Link>
        </div>
      </section>

    </div>
  );
}

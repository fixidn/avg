import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client, urlFor } from '@/lib/sanity';
import { Calendar, ArrowLeft, ArrowRight } from 'lucide-react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import type { Metadata, ResolvingMetadata } from 'next';
import ShareButtons from '@/components/ShareButtons'; // <--- Import Komponen Share
import JsonLd from '@/components/JsonLd';
import { servicesData } from '@/lib/servicesData';

const SITE_URL = 'https://stacopa-avangard.com';

// Layanan default bila post belum menetapkan `relatedServices` di Studio.
const DEFAULT_RELATED_SERVICES = ['vapt', 'soc', 'compliance'];

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const posts = await client.fetch(query);

  return posts.map((post: { slug: string }) => ({
    slug: post.slug,
  }));
}

const RichTextComponents: PortableTextComponents = {
  block: {
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pb-4 border-b border-slate-800 flex items-center">
        <span className="w-2 h-8 bg-blue-500 mr-4 rounded-sm"></span>
        {children}
      </h2>
    ),
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold text-slate-200 mt-8 mb-4">
        {children}
      </h3>
    ),
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 bg-slate-900/50 p-6 my-8 rounded-r-lg italic text-slate-300 shadow-sm">
        "{children}"
      </blockquote>
    ),
    normal: ({ children }) => (
      <p className="mb-6 text-slate-300 leading-8 text-lg">
        {children}
      </p>
    ),
  },
  list: {
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 mb-8 space-y-3 text-slate-300 marker:text-blue-500">
        {children}
      </ul>
    ),
    number: ({ children }) => (
      <ol className="list-decimal ml-6 mb-8 space-y-3 text-slate-300 marker:text-slate-500">
        {children}
      </ol>
    ),
  },
  marks: {
    link: ({ children, value }) => {
      const rel = !value.href.startsWith('/') ? 'noreferrer noopener' : undefined;
      return (
        <Link 
          href={value.href} 
          rel={rel} 
          className="text-blue-400 hover:text-blue-300 underline decoration-blue-500/30 underline-offset-4 transition-colors font-medium"
        >
          {children}
        </Link>
      );
    },
  },
};

async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage,
    publishedAt,
    relatedServices,
    body
  }`;

  if (!slug) return null;
  return client.fetch(query, { slug });
}

export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const { slug } = await params;
  
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    seoTitle,
    "excerpt": coalesce(excerpt, array::join(string::split((pt::text(body)), "")[0..150], "") + "..."),
    mainImage
  }`;
  const post = await client.fetch(query, { slug });

  if (!post) {
    return {
      title: 'Artikel Tidak Ditemukan',
    };
  }

  const displayTitle = post.seoTitle || post.title;

  const postImage = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : null;

  return {
    // `absolute` mem-bypass template layout ("| Stacopa Avangard") agar tidak
    // terjadi suffix ganda; blog memakai sub-brand "Avangard Insight".
    title: { absolute: `${displayTitle} | Avangard Insight` },
    description: post.excerpt,
    alternates: {
      canonical: `/blog/${slug}`,
    },
    openGraph: {
      title: displayTitle,
      description: post.excerpt,
      images: postImage ? [postImage] : [],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: ['Stacopa Avangard'],
    },
    twitter: {
      card: 'summary_large_image',
      title: displayTitle,
      description: post.excerpt,
      images: postImage ? [postImage] : [],
    },
  };
}

export default async function BlogPost({ params }: Props) {
  
  const { slug } = await params; 
  const post = await getPost(slug);

  if (!post) {
    return (
      <div className="min-h-screen bg-slate-950 flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl text-white font-bold mb-4">Artikel Tidak Ditemukan</h1>
          <Link href="/blog" className="text-blue-500 hover:underline">Kembali ke Blog</Link>
        </div>
      </div>
    );
  }

  // --- BUAT URL DINAMIS UNTUK SHARE ---
  const postUrl = `${SITE_URL}/blog/${slug}`;

  const articleImage = post.mainImage
    ? urlFor(post.mainImage).width(1200).height(630).url()
    : undefined;

  // Internal link ke money page: pakai pilihan editor bila ada, jika tidak
  // pakai layanan inti default. Saring slug yang benar-benar ada.
  const relatedSlugs: string[] = (
    post.relatedServices?.length ? post.relatedServices : DEFAULT_RELATED_SERVICES
  ).filter((slug: string) => servicesData[slug]);

  const articleSchema = {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    datePublished: post.publishedAt,
    dateModified: post.publishedAt,
    ...(articleImage ? { image: articleImage } : {}),
    author: {
      "@type": "Organization",
      name: "Stacopa Avangard",
      url: SITE_URL,
    },
    publisher: {
      "@type": "Organization",
      name: "Stacopa Avangard",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/white.svg`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": postUrl,
    },
  };

  return (
    <div className="bg-slate-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <JsonLd data={articleSchema} />
      <article className="max-w-3xl mx-auto">
        
        <Link 
          href="/blog" 
          className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors text-sm font-medium group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
          Kembali ke Blog
        </Link>

        <header className="mb-10 text-center">
          <div className="flex items-center justify-center space-x-4 text-slate-400 text-sm mb-6">
            <span className="flex items-center bg-slate-900 px-3 py-1 rounded-full border border-slate-800">
              <Calendar className="w-3.5 h-3.5 mr-2 text-blue-500" />
              {new Date(post.publishedAt).toLocaleDateString('id-ID', {
                  day: 'numeric', month: 'long', year: 'numeric'
              })}
            </span>
          </div>

          <h1 className="text-3xl sm:text-4xl md:text-5xl font-extrabold text-white mb-6 leading-tight">
            {post.title}
          </h1>
        </header>

        {post.mainImage && (
          <div className="relative w-full aspect-video mb-12 rounded-2xl overflow-hidden border border-slate-800 shadow-2xl">
            <Image
              src={urlFor(post.mainImage).url()}
              alt={post.title}
              fill
              className="object-cover"
              priority
            />
          </div>
        )}

        <div className="max-w-none text-slate-300">
          <PortableText 
            value={post.body} 
            components={RichTextComponents} 
          />
        </div>

        {/* --- KOMPONEN SHARE BUTTONS DITAMPILKAN DI SINI --- */}
        <ShareButtons url={postUrl} title={post.title} />

        <hr className="my-12 border-slate-800" />

        {/* --- LAYANAN TERKAIT (internal link ke money page) --- */}
        {relatedSlugs.length > 0 && (
          <section aria-labelledby="layanan-terkait" className="mt-12">
            <h2
              id="layanan-terkait"
              className="text-xl font-bold text-white mb-6"
            >
              Layanan Terkait
            </h2>
            <div className="grid gap-4 sm:grid-cols-3">
              {relatedSlugs.map((slug) => {
                const service = servicesData[slug];
                return (
                  <Link
                    key={slug}
                    href={`/services/${slug}`}
                    className="group flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-900/50 p-5 transition-colors hover:border-blue-500/50 hover:bg-slate-900"
                  >
                    <div>
                      <h3 className="font-semibold text-white group-hover:text-blue-400 transition-colors">
                        {service.title}
                      </h3>
                      <p className="mt-1 text-sm text-slate-400 leading-relaxed">
                        {service.subtitle}
                      </p>
                    </div>
                    <span className="mt-4 inline-flex items-center text-sm font-medium text-blue-500">
                      Pelajari
                      <ArrowRight className="w-4 h-4 ml-1 group-hover:translate-x-1 transition-transform" />
                    </span>
                  </Link>
                );
              })}
            </div>
          </section>
        )}

      </article>
    </div>
  );
}
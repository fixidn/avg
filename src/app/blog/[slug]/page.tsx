import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { client, urlFor } from '@/lib/sanity';
import { Calendar, ArrowLeft } from 'lucide-react';
import { PortableText, PortableTextComponents } from '@portabletext/react';
import type { Metadata, ResolvingMetadata } from 'next';

type Props = {
  params: Promise<{ slug: string }>;
};

export async function generateStaticParams() {
  const query = `*[_type == "post"]{ "slug": slug.current }`;
  const posts = await client.fetch(query);

  return posts.map((post: any) => ({
    slug: post.slug,
  }));
}

// --- CUSTOM COMPONENTS START ---
const RichTextComponents: PortableTextComponents = {
  block: {
    // Kustomisasi Judul H2 (Sub-bab)
    h2: ({ children }) => (
      <h2 className="text-2xl md:text-3xl font-bold text-white mt-12 mb-6 pb-4 border-b border-slate-800 flex items-center">
        <span className="w-2 h-8 bg-blue-500 mr-4 rounded-sm"></span> {/* Aksen Biru */}
        {children}
      </h2>
    ),
    // Kustomisasi Judul H3
    h3: ({ children }) => (
      <h3 className="text-xl md:text-2xl font-semibold text-slate-200 mt-8 mb-4">
        {children}
      </h3>
    ),
    // Kustomisasi Kutipan (Blockquote)
    blockquote: ({ children }) => (
      <blockquote className="border-l-4 border-blue-500 bg-slate-900/50 p-6 my-8 rounded-r-lg italic text-slate-300 shadow-sm">
        "{children}"
      </blockquote>
    ),
    // Paragraf biasa (agar lebih lega)
    normal: ({ children }) => (
      <p className="mb-6 text-slate-300 leading-8 text-lg">
        {children}
      </p>
    ),
  },
  list: {
    // Bullet points
    bullet: ({ children }) => (
      <ul className="list-disc ml-6 mb-8 space-y-3 text-slate-300 marker:text-blue-500">
        {children}
      </ul>
    ),
    // Numbered list
    number: ({ children }) => (
      <ol className="list-decimal ml-6 mb-8 space-y-3 text-slate-300 marker:text-slate-500">
        {children}
      </ol>
    ),
  },
  marks: {
    // Link dalam teks
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
// --- CUSTOM COMPONENTS END ---

// Fetch Single Post
async function getPost(slug: string) {
  const query = `*[_type == "post" && slug.current == $slug][0] {
    title,
    mainImage,
    publishedAt,
    body
  }`;
  // Debugging: Pastikan slug ada isinya
  if (!slug) throw new Error("Slug is required"); 
  
  return client.fetch(query, { slug });
}

// 1. Fungsi Generate Metadata (SEO)
export async function generateMetadata(
  { params }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  // Await params (Wajib di Next.js 15+)
  const { slug } = await params;
  
  // Ambil data untuk SEO (Judul & Gambar saja)
  const query = `*[_type == "post" && slug.current == $slug][0] { 
    title, 
    "excerpt": array::join(string::split((pt::text(body)), "")[0..150], "") + "...",
    mainImage 
  }`;
  const post = await client.fetch(query, { slug });

  if (!post) {
    return {
      title: 'Artikel Tidak Ditemukan',
    };
  }

  // Ambil URL gambar (jika ada)
  const previousImages = (await parent).openGraph?.images || [];
  const postImage = post.mainImage ? urlFor(post.mainImage).width(1200).height(630).url() : [];

  return {
    title: `${post.title} | Avangard Insight`,
    description: post.excerpt,
    openGraph: {
      title: post.title,
      description: post.excerpt,
      images: [postImage, ...previousImages],
      type: 'article',
      publishedTime: post.publishedAt,
      authors: ['Avangard Security'],
    },
    twitter: {
      card: 'summary_large_image',
      title: post.title,
      description: post.excerpt,
      images: [postImage], // Gambar thumbnail besar di Twitter/X
    },
  };
}

// 2. Update Component Signature
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

  return (
    <div className="bg-slate-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <article className="max-w-3xl mx-auto">
        
        {/* Tombol Back */}
        <Link 
          href="/blog" 
          className="inline-flex items-center text-slate-400 hover:text-white mb-8 transition-colors text-sm font-medium group"
        >
          <ArrowLeft className="w-4 h-4 mr-2 group-hover:-translate-x-1 transition-transform" /> 
          Kembali ke Blog
        </Link>

        {/* Header Artikel */}
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

        {/* Main Image */}
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

        {/* Content Body (Rich Text) */}
<div className="max-w-none text-slate-300">
  <PortableText 
    value={post.body} 
    components={RichTextComponents} 
  />
</div>

        <hr className="my-12 border-slate-800" />
        
      </article>
    </div>
  );
}
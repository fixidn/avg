import React from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { client, urlFor } from '@/lib/sanity';
import { Calendar, ArrowRight, Clock } from 'lucide-react';

// Tipe Data Artikel
interface Post {
  _id: string;
  title: string;
  slug: { current: string };
  mainImage: any;
  publishedAt: string;
  excerpt: string;
}

// Fetch Data dari Sanity
async function getPosts() {
  const query = `*[_type == "post"] | order(publishedAt desc) {
    _id,
    title,
    slug,
    mainImage,
    publishedAt,
    "excerpt": array::join(string::split((pt::text(body)), "")[0..120], "") + "..."
  }`;
  return client.fetch(query);
}

// Agar data selalu fresh (Revalidasi tiap 60 detik)
export const revalidate = 60;

export default async function BlogPage() {
  const posts: Post[] = await getPosts();

  return (
    <div className="bg-slate-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl">
            Avangard Insight
          </h1>
          <p className="mt-4 text-xl text-slate-400 max-w-2xl mx-auto">
            Berita terbaru seputar cybersecurity, update ancaman malware, dan tips pertahanan digital.
          </p>
        </div>

        {/* Grid Artikel */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {posts.length > 0 ? (
            posts.map((post) => (
              <article key={post._id} className="bg-slate-900 border border-slate-800 rounded-xl overflow-hidden hover:border-blue-500 transition-all duration-300 group flex flex-col h-full shadow-lg">
                
                {/* Thumbnail Gambar */}
                <div className="relative h-52 w-full overflow-hidden bg-slate-800">
                  {post.mainImage ? (
                    <Image
                      src={urlFor(post.mainImage).url()}
                      alt={post.title}
                      fill
                      className="object-cover group-hover:scale-110 transition-transform duration-500"
                    />
                  ) : (
                    <div className="flex items-center justify-center h-full text-slate-600">No Image</div>
                  )}
                </div>
                
                {/* Konten Kartu */}
                <div className="p-6 flex flex-col flex-grow">
                  <div className="flex items-center text-xs font-medium text-slate-400 mb-4 space-x-4">
                    <span className="flex items-center">
                      <Calendar className="w-3.5 h-3.5 mr-1.5 text-blue-500" />
                      {new Date(post.publishedAt).toLocaleDateString('id-ID', {
                        day: 'numeric', month: 'short', year: 'numeric'
                      })}
                    </span>
                  </div>
                  
                  <h2 className="text-xl font-bold text-white mb-3 leading-snug group-hover:text-blue-400 transition-colors line-clamp-2">
                    <Link href={`/blog/${post.slug.current}`}>
                      {post.title}
                    </Link>
                  </h2>
                  
                  <p className="text-slate-400 text-sm mb-6 flex-grow line-clamp-3 leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link 
                    href={`/blog/${post.slug.current}`} 
                    className="inline-flex items-center text-sm font-bold text-blue-500 hover:text-blue-400 transition-colors mt-auto"
                  >
                    BACA SELENGKAPNYA <ArrowRight className="ml-2 w-4 h-4" />
                  </Link>
                </div>
              </article>
            ))
          ) : (
            <div className="col-span-full text-center py-20 bg-slate-900/50 rounded-2xl border border-slate-800">
              <p className="text-slate-400 text-lg">Belum ada artikel yang dipublikasikan.</p>
            </div>
          )}
        </div>

      </div>
    </div>
  );
}
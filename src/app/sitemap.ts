import { MetadataRoute } from 'next';
import { client } from '@/lib/sanity';
import { serviceSlugs } from '@/lib/servicesData';

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  const baseUrl = 'https://stacopa-avangard.com';

  const blogQuery = `*[_type == "post"]{ "slug": slug.current, publishedAt }`;
  const posts = await client.fetch(blogQuery);

  const blogUrls = posts.map((post: any) => ({
    url: `${baseUrl}/blog/${post.slug}`,
    lastModified: new Date(post.publishedAt),
    changeFrequency: 'weekly' as const,
    priority: 0.8,
  }));

  // Halaman layanan individual = halaman komersial utama (prioritas lebih tinggi)
  const serviceUrls = serviceSlugs.map((slug) => ({
    url: `${baseUrl}/services/${slug}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: 0.9,
  }));

  const routes = [
    '',
    '/about',
    '/services',
    '/blog',
    '/contact',
    '/careers',
    '/products',
    '/privacy',
    '/terms',
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: 'monthly' as const,
    priority: route === '' ? 1 : 0.8,
  }));

  return [...routes, ...serviceUrls, ...blogUrls];
}

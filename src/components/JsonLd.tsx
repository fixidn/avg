import React from 'react';

/**
 * Menyisipkan structured data (JSON-LD) ke halaman untuk SEO.
 * Dipakai untuk schema Organization, Service, BlogPosting, BreadcrumbList, dll.
 */
export default function JsonLd({ data }: { data: Record<string, unknown> }) {
  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  );
}

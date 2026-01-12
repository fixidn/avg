import { createClient } from 'next-sanity';
import imageUrlBuilder from '@sanity/image-url';

// Konfigurasi Client
export const client = createClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: '2024-01-01', // Tanggal versi API
  useCdn: false, // false = Selalu ambil data terbaru (bagus saat dev)
});

// Helper untuk URL Gambar
const builder = imageUrlBuilder(client);

export function urlFor(source: any) {
  return builder.image(source);
}
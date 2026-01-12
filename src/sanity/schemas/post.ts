export default {
  name: 'post',
  title: 'Blog Post',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Judul Artikel',
      type: 'string',
    },
    {
      name: 'slug',
      title: 'Slug URL',
      type: 'slug',
      options: { source: 'title', maxLength: 96 },
    },
    {
      name: 'mainImage',
      title: 'Gambar Utama',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'publishedAt',
      title: 'Tanggal Publish',
      type: 'datetime',
    },
    {
      name: 'body',
      title: 'Isi Konten',
      type: 'array',
      of: [{ type: 'block' }], // Rich Text Editor
    },
  ],
}
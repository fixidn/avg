const post = {
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
      name: 'excerpt',
      title: 'Ringkasan / Meta Description',
      description:
        'Ringkasan 1–2 kalimat (ideal 120–160 karakter) untuk hasil pencarian Google & kartu blog. Jika kosong, dibuat otomatis dari isi konten.',
      type: 'text',
      rows: 3,
      validation: (Rule: { max: (n: number) => { warning: (msg: string) => unknown } }) =>
        Rule.max(160).warning('Idealnya di bawah 160 karakter agar tidak terpotong di Google.'),
    },
    {
      name: 'seoTitle',
      title: 'SEO Title (opsional)',
      description:
        'Timpa judul untuk tab browser & hasil pencarian. Jika kosong, memakai Judul Artikel. Suffix "| Avangard Insight" ditambahkan otomatis.',
      type: 'string',
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
      name: 'relatedServices',
      title: 'Layanan Terkait',
      description:
        'Pilih layanan yang relevan untuk ditampilkan sebagai internal link di akhir artikel. Jika kosong, ditampilkan layanan inti default.',
      type: 'array',
      of: [{ type: 'string' }],
      options: {
        list: [
          { title: 'VAPT & Ethical Hacking', value: 'vapt' },
          { title: 'Managed Detection & Response (MDR)', value: 'soc' },
          { title: 'GRC & Compliance', value: 'compliance' },
          { title: 'Incident Response', value: 'incident-response' },
          { title: 'Secure Web Infrastructure', value: 'secure-design' },
          { title: 'Phishing Simulation & Training', value: 'phishing' },
        ],
      },
    },
    {
      name: 'body',
      title: 'Isi Konten',
      type: 'array',
      of: [{ type: 'block' }], // Rich Text Editor
    },
  ],
}

export default post

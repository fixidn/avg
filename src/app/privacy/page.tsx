import React from 'react';
import Link from 'next/link';
import { Shield, Lock, Eye, FileText } from 'lucide-react';

export const metadata = {
  title: "Kebijakan Privasi | Avangard",
  description: "Kebijakan privasi Avangard mengenai pengumpulan, penggunaan, dan perlindungan data pribadi Anda.",
};

export default function PrivacyPage() {
  const lastUpdated = "8 Januari 2026";

  return (
    <div className="bg-slate-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        
        <div className="mb-12 border-b border-slate-800 pb-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
            Kebijakan Privasi
          </h1>
          <p className="text-slate-400">
            Terakhir diperbarui: <span className="text-slate-200 font-medium">{lastUpdated}</span>
          </p>
        </div>

        <div className="space-y-12 text-slate-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Shield className="w-6 h-6 mr-3 text-blue-500" />
              1. Pengantar
            </h2>
            <p className="mb-4">
              Di <strong>PT Stacopa Avangard Raya</strong> ("Avangard", "kami", "kita", atau "milik kami"), privasi dan keamanan data Anda adalah prioritas utama kami. Sebagai perusahaan yang bergerak di bidang pertahanan siber, kami berkomitmen untuk melindungi informasi pribadi yang Anda bagikan kepada kami sesuai dengan standar keamanan global dan regulasi yang berlaku di Indonesia (termasuk UU Pelindungan Data Pribadi).
            </p>
            <p>
              Kebijakan Privasi ini menjelaskan bagaimana kami mengumpulkan, menggunakan, mengungkapkan, dan menjaga informasi Anda ketika Anda mengunjungi situs web kami atau menggunakan layanan kami.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-blue-500" />
              2. Informasi yang Kami Kumpulkan
            </h2>
            <p className="mb-4">
              Kami dapat mengumpulkan informasi tentang Anda melalui berbagai cara, antara lain:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
              <li>
                <strong className="text-white">Data Pribadi:</strong> Informasi identifikasi pribadi, seperti nama, alamat email, dan nomor telepon yang Anda berikan secara sukarela saat mengisi formulir "Hubungi Kami".
              </li>
              <li>
                <strong className="text-white">Data Teknis & Log:</strong> Informasi yang dikumpulkan server kami secara otomatis saat Anda mengakses situs, seperti alamat IP, tipe browser, sistem operasi, waktu akses, dan halaman yang dilihat. Data ini digunakan untuk analisis keamanan dan pemantauan ancaman.
              </li>
              <li>
                <strong className="text-white">Cookies:</strong> Kami menggunakan cookies untuk meningkatkan pengalaman pengguna dan menganalisis trafik situs web melalui Google Analytics. Anda dapat mengatur browser Anda untuk menolak semua cookies jika diinginkan.
              </li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Eye className="w-6 h-6 mr-3 text-blue-500" />
              3. Bagaimana Kami Menggunakan Informasi Anda
            </h2>
            <p className="mb-4">
              Informasi yang kami kumpulkan digunakan untuk tujuan-tujuan berikut:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
              <li>Menyediakan, mengoperasikan, dan memelihara layanan keamanan kami.</li>
              <li>Merespons pertanyaan, komentar, atau permintaan layanan (Incident Response/Sales).</li>
              <li>Mendeteksi, mencegah, dan mengatasi masalah teknis atau insiden keamanan pada infrastruktur kami sendiri.</li>
              <li>Mematuhi kewajiban hukum dan peraturan yang berlaku.</li>
            </ul>
            <p className="mt-4">
              <strong className="text-white">Dasar hukum</strong> kami memproses data Anda adalah <strong>persetujuan (consent)</strong> yang Anda berikan saat mengisi formulir, serta <strong>kepentingan yang sah</strong> kami untuk menindaklanjuti permintaan Anda dan mengambil langkah pra-kontrak, sebagaimana diatur dalam UU Pelindungan Data Pribadi. Anda dapat menarik persetujuan tersebut kapan saja.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Lock className="w-6 h-6 mr-3 text-blue-500" />
              4. Keamanan Data
            </h2>
            <p className="mb-4">
              Kami menerapkan langkah-langkah keamanan teknis dan organisasional yang wajar untuk melindungi data pribadi Anda, antara lain enkripsi data saat transit melalui protokol HTTPS/TLS, pembatasan akses hanya kepada personel yang berwenang, dan penggunaan penyedia infrastruktur tepercaya.
            </p>
            <p>
              Namun, perlu diingat bahwa tidak ada metode transmisi melalui internet atau metode penyimpanan elektronik yang 100% aman. Meskipun kami berusaha menggunakan standar komersial terbaik untuk melindungi data Anda, kami tidak dapat menjamin keamanannya secara mutlak.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Pengungkapan kepada Pihak Ketiga
            </h2>
            <p className="mb-4">
              Kami <strong>tidak menjual, memperdagangkan, atau menyewakan</strong> data pribadi Anda kepada pihak lain. Untuk mengoperasikan layanan, kami menggunakan <strong className="text-white">penyedia layanan hosting &amp; infrastruktur</strong> tepercaya (sebagai <em>processor</em>) tempat situs dan data kami disimpan secara aman, yang memproses data hanya atas nama dan berdasarkan instruksi kami.
            </p>
            <p>
              Kami juga dapat mengungkapkan data jika diwajibkan oleh hukum (misalnya untuk penegakan hukum siber).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              6. Retensi dan Penghapusan Data
            </h2>
            <p className="mb-4">
              Kami menyimpan data pribadi Anda hanya selama diperlukan untuk mencapai tujuan pemrosesan, sesuai prinsip pembatasan penyimpanan (<em>storage limitation</em>) dalam UU Pelindungan Data Pribadi.
            </p>
            <p>
              Khusus untuk data yang Anda kirimkan melalui formulir "Hubungi Kami", kami menyimpannya paling lama <strong className="text-white">24 bulan</strong> sejak interaksi terakhir, setelah itu data akan dihapus atau dianonimkan — kecuali terdapat kewajiban hukum yang mengharuskan penyimpanan lebih lama. Anda dapat meminta penghapusan lebih awal kapan saja (lihat Bagian 7).
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              7. Hak Perlindungan Data Anda
            </h2>
            <p className="mb-4">
              Anda memiliki hak untuk meminta akses, koreksi, atau penghapusan data pribadi yang kami simpan tentang Anda, serta menarik persetujuan yang telah diberikan. Jika Anda ingin menggunakan hak ini, silakan hubungi kami melalui detail kontak di bawah ini.
            </p>
          </section>

          <section className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">
              Hubungi Kami
            </h2>
            <p className="mb-6">
              Jika Anda memiliki pertanyaan tentang Kebijakan Privasi ini atau praktik data kami, silakan hubungi kami:
            </p>
            <div className="space-y-2 text-slate-300">
              <p><strong className="text-white">Email:</strong> privacy@stacopa-avangard.com</p>
              <p><strong className="text-white">Alamat:</strong> Jl. Jend Sudirman, Jakarta Selatan</p>
            </div>
            <div className="mt-8">
              <Link href="/contact" className="text-blue-500 hover:text-blue-400 font-semibold hover:underline">
                &larr; Kembali ke Halaman Kontak
              </Link>
            </div>
          </section>

        </div>
      </div>
    </div>
  );
}
import React from 'react';
import Link from 'next/link';
import { FileText, Scale, TriangleAlert, Ban, RefreshCcw } from 'lucide-react';

export const metadata = {
  title: "Syarat & Ketentuan | Avangard",
  description: "Syarat dan ketentuan penggunaan situs web dan layanan Avangard Security.",
};

export default function TermsPage() {
  const lastUpdated = "2 Juni 2026";

  return (
    <div className="bg-slate-950 min-h-screen py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">

        <div className="mb-12 border-b border-slate-800 pb-8">
          <h1 className="text-3xl font-extrabold text-white sm:text-4xl mb-4">
            Syarat & Ketentuan
          </h1>
          <p className="text-slate-400">
            Terakhir diperbarui: <span className="text-slate-200 font-medium">{lastUpdated}</span>
          </p>
        </div>

        <div className="space-y-12 text-slate-300 leading-relaxed">

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <FileText className="w-6 h-6 mr-3 text-blue-500" />
              1. Penerimaan Ketentuan
            </h2>
            <p className="mb-4">
              Selamat datang di <strong>Avangard Security</strong> ("kami", "kita", atau "milik kami"). Dengan mengakses dan menggunakan situs web <strong>stacopa-avangard.com</strong> beserta seluruh layanan yang kami sediakan, Anda dianggap telah membaca, memahami, dan menyetujui untuk terikat oleh Syarat & Ketentuan ini.
            </p>
            <p>
              Jika Anda tidak menyetujui salah satu bagian dari ketentuan ini, mohon untuk tidak menggunakan situs web maupun layanan kami.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Scale className="w-6 h-6 mr-3 text-blue-500" />
              2. Penggunaan Layanan
            </h2>
            <p className="mb-4">
              Anda setuju untuk menggunakan situs web dan layanan kami hanya untuk tujuan yang sah dan sesuai dengan ketentuan berikut:
            </p>
            <ul className="list-disc pl-6 space-y-2 marker:text-blue-500">
              <li>Tidak menggunakan layanan untuk aktivitas yang melanggar hukum yang berlaku di Indonesia.</li>
              <li>Tidak mencoba memperoleh akses tidak sah ke sistem, server, atau jaringan yang terhubung dengan layanan kami.</li>
              <li>Tidak menyalahgunakan, mereproduksi, atau mendistribusikan konten kami tanpa izin tertulis.</li>
              <li>Memberikan informasi yang akurat dan benar saat mengisi formulir atau berkomunikasi dengan kami.</li>
            </ul>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <Ban className="w-6 h-6 mr-3 text-blue-500" />
              3. Kekayaan Intelektual
            </h2>
            <p>
              Seluruh konten yang terdapat pada situs ini — termasuk namun tidak terbatas pada teks, grafik, logo, ikon, gambar, serta nama produk seperti <strong>Sentinel X™</strong> dan <strong>Avangard Secure Gateway</strong> — merupakan milik Avangard Security atau pemberi lisensinya dan dilindungi oleh hukum hak cipta serta merek dagang. Penggunaan tanpa izin dapat melanggar hukum yang berlaku.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <TriangleAlert className="w-6 h-6 mr-3 text-blue-500" />
              4. Batasan Tanggung Jawab
            </h2>
            <p className="mb-4">
              Layanan dan informasi pada situs ini disediakan "sebagaimana adanya" (as is) tanpa jaminan dalam bentuk apa pun. Meskipun kami berkomitmen pada standar keamanan tertinggi, kami tidak menjamin bahwa layanan akan selalu bebas dari gangguan, kesalahan, atau kerentanan.
            </p>
            <p>
              Sepanjang diizinkan oleh hukum, Avangard Security tidak bertanggung jawab atas kerugian langsung maupun tidak langsung yang timbul dari penggunaan atau ketidakmampuan menggunakan situs web maupun layanan kami.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              5. Layanan Pihak Ketiga
            </h2>
            <p>
              Situs kami dapat memuat tautan ke situs atau layanan pihak ketiga yang tidak kami kendalikan. Kami tidak bertanggung jawab atas konten, kebijakan privasi, maupun praktik dari situs pihak ketiga tersebut. Penggunaan layanan pihak ketiga sepenuhnya menjadi risiko Anda.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4 flex items-center">
              <RefreshCcw className="w-6 h-6 mr-3 text-blue-500" />
              6. Perubahan Ketentuan
            </h2>
            <p>
              Kami berhak untuk meninjau dan mengubah Syarat & Ketentuan ini sewaktu-waktu tanpa pemberitahuan sebelumnya. Setiap perubahan akan berlaku segera setelah dipublikasikan pada halaman ini. Dengan terus menggunakan layanan setelah perubahan, Anda dianggap menyetujui ketentuan yang telah diperbarui.
            </p>
          </section>

          <section>
            <h2 className="text-2xl font-bold text-white mb-4">
              7. Hukum yang Berlaku
            </h2>
            <p>
              Syarat & Ketentuan ini diatur dan ditafsirkan berdasarkan hukum yang berlaku di Republik Indonesia. Setiap sengketa yang timbul akan diselesaikan melalui jalur musyawarah, dan apabila tidak tercapai kesepakatan, akan diselesaikan sesuai dengan ketentuan hukum yang berlaku.
            </p>
          </section>

          <section className="bg-slate-900 rounded-2xl p-8 border border-slate-800">
            <h2 className="text-2xl font-bold text-white mb-4">
              Hubungi Kami
            </h2>
            <p className="mb-6">
              Jika Anda memiliki pertanyaan mengenai Syarat & Ketentuan ini, silakan hubungi kami:
            </p>
            <div className="space-y-2 text-slate-300">
              <p><strong className="text-white">Email:</strong> support@stacopa-avangard.com</p>
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

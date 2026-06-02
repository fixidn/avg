"""
Generator PDF: Detail Layanan & Contoh Celah Keamanan Web — Avangard Security.
Menghasilkan: docs/Avangard-Detail-Layanan-dan-Celah-Web.pdf
Jalankan: python docs/generate_pdf.py
"""

from pathlib import Path
from fpdf import FPDF

OUT = Path(__file__).parent / "Avangard-Detail-Layanan-dan-Celah-Web.pdf"

FONT_DIR = Path(r"C:\Windows\Fonts")

# Palet warna
NAVY = (15, 23, 42)       # slate-950
BLUE = (29, 78, 216)      # blue-700
CYAN = (8, 145, 178)      # cyan-600
GRAY = (71, 85, 105)      # slate-600
LIGHT = (241, 245, 249)   # slate-100
RED = (220, 38, 38)
ORANGE = (217, 119, 6)
GREEN = (22, 163, 74)

SEV_COLOR = {
    "Critical": RED,
    "High": ORANGE,
    "Medium": (202, 138, 4),
    "Low": GREEN,
}

# ---------------------------------------------------------------- Data layanan
SERVICES = [
    {
        "title": "1. VAPT & Ethical Hacking",
        "sub": "Vulnerability Assessment & Penetration Testing",
        "desc": "Simulasi serangan siber terkontrol terhadap aplikasi web Anda untuk "
                "mengekspos celah keamanan sebelum peretas jahat menemukannya.",
        "features": [
            ("Web Application Pentest", "Pengujian menyeluruh berbasis OWASP Top 10 (injection, XSS, broken access control, dll.)."),
            ("API Security Testing", "Pengujian keamanan endpoint REST/GraphQL: autentikasi, otorisasi, dan rate limiting."),
            ("Authentication & Business Logic", "Pengujian manajemen sesi, privilege escalation, dan celah logika bisnis aplikasi."),
            ("Detailed Reporting", "Laporan teknis untuk tim IT dan laporan eksekutif untuk manajemen."),
        ],
        "method": "01 Reconnaissance  >  02 Scanning  >  03 Exploitation  >  04 Reporting",
    },
    {
        "title": "2. Managed Detection & Response (MDR)",
        "sub": "Security Monitoring untuk Aplikasi Web & Cloud",
        "desc": "Pemantauan keamanan berkelanjutan berbasis SIEM untuk aplikasi web dan cloud Anda. "
                "Sistem memantau otomatis sepanjang waktu, dengan analisis dan respons oleh tim ahli kami.",
        "features": [
            ("Continuous SIEM Monitoring", "Deteksi otomatis sepanjang waktu atas log aplikasi web, web server, WAF, dan cloud."),
            ("Expert Alert Triage", "Analis memvalidasi alert (jam kerja + eskalasi kritis), memisahkan ancaman nyata dari false positive."),
            ("Threat Detection", "Identifikasi pola serangan & indikator kompromi (IoC) pada layer aplikasi & cloud."),
            ("Incident Response Support", "Eskalasi & pendampingan respons cepat saat insiden kritis terdeteksi."),
        ],
        "method": "01 Log Ingestion  >  02 Correlation  >  03 Triage & Analysis  >  04 Response",
    },
    {
        "title": "3. Incident Response",
        "sub": "Emergency Response & Recovery",
        "desc": "Layanan gawat darurat siber. Ketika Anda diserang ransomware atau malware, tim kami "
                "terjun langsung untuk mengisolasi, menghentikan penyebaran, dan memulihkan operasional sistem.",
        "features": [
            ("Ransomware & Malware Containment", "Isolasi cepat sistem yang terinfeksi untuk menghentikan penyebaran serangan."),
            ("System Recovery", "Pemulihan operasional bisnis dari backup yang bersih secara terkendali."),
            ("Root Cause Analysis", "Menentukan bagaimana serangan dapat terjadi untuk menutup celah penyebabnya."),
            ("Hardening & Post-Incident Report", "Rekomendasi perbaikan agar serangan serupa tidak terulang."),
        ],
        "method": "01 Identification  >  02 Containment  >  03 Eradication  >  04 Recovery",
    },
    {
        "title": "4. GRC & Compliance",
        "sub": "Governance, Risk, and Compliance",
        "desc": "Memastikan bisnis Anda memenuhi standar regulasi global dan nasional. "
                "Kami mendampingi dari gap analysis hingga audit readiness.",
        "features": [
            ("ISO 27001 Readiness", "Persiapan dokumen & kontrol teknis untuk sertifikasi."),
            ("UU PDP (Privacy Data)", "Kepatuhan terhadap Undang-Undang Pelindungan Data Pribadi Indonesia."),
            ("IT Risk Assessment", "Identifikasi & valuasi risiko aset informasi perusahaan."),
            ("Policy Development", "Penyusunan SOP & Kebijakan Keamanan Informasi yang solid."),
        ],
        "method": "01 Gap Analysis  >  02 Implementation  >  03 Internal Audit  >  04 Certification",
    },
    {
        "title": "5. Secure Web Infrastructure",
        "sub": "Web Hardening & Secure Deployment",
        "desc": "Perancangan dan pengerasan infrastruktur web Anda agar aman sejak awal (security by design), "
                "dari konfigurasi web server hingga proteksi WAF dan secure deployment.",
        "features": [
            ("Web Server Hardening", "Pengerasan konfigurasi web server, OS, dan layanan mengikuti CIS Benchmark."),
            ("WAF & DDoS Protection", "Proteksi aplikasi web dari serangan OWASP dan trafik berbahaya pada layer aplikasi."),
            ("Secure Deployment & Config", "Konfigurasi hosting/cloud aman, TLS/HTTPS, manajemen secret, dan pipeline CI/CD aman."),
            ("Zero-Trust Access", "Penerapan prinsip never trust, always verify pada akses aplikasi & panel admin."),
        ],
        "method": "01 Assessment  >  02 Design  >  03 Implementation  >  04 Validation",
    },
    {
        "title": "6. Phishing Simulation & Training",
        "sub": "Security Awareness Program",
        "desc": "Program edukasi karyawan melalui simulasi serangan phishing nyata untuk meningkatkan "
                "kesadaran keamanan dan mengurangi risiko human error - pintu masuk serangan yang paling umum.",
        "features": [
            ("Realistic Phishing Campaign", "Simulasi email phishing terarah menyerupai serangan nyata."),
            ("Awareness Training", "Materi interaktif untuk mengenali & melaporkan social engineering."),
            ("Behavior Analytics", "Pengukuran click-rate & tingkat pelaporan untuk memetakan area berisiko."),
            ("Progress Reporting", "Laporan perkembangan kesadaran keamanan untuk manajemen."),
        ],
        "method": "01 Baseline Test  >  02 Simulation  >  03 Training  >  04 Re-assessment",
    },
]

# ---------------------------------------------------------- 10 contoh celah web
VULNS = [
    {
        "name": "SQL Injection (SQLi)",
        "owasp": "OWASP A03: Injection",
        "sev": "Critical",
        "plain": "Kolom isian di website (misalnya kotak login atau pencarian) bisa disisipi perintah rahasia. "
                 "Karena website tidak memeriksa isian dengan benar, perintah itu ikut dijalankan ke database tempat semua data disimpan.",
        "case": "Pada sebuah halaman login, cukup dengan mengetik kode singkat di kolom username, kami berhasil masuk sebagai admin tanpa tahu password aslinya.",
        "impact": "Seluruh isi database - termasuk data pelanggan dan password - dapat dicuri, bahkan server bisa dikuasai.",
    },
    {
        "name": "Cross-Site Scripting (XSS)",
        "owasp": "OWASP A03: Injection",
        "sev": "High",
        "plain": "Penyerang menitipkan kode tersembunyi melalui kolom yang bisa diisi publik (misalnya kolom komentar). "
                 "Saat orang lain membuka halaman itu, kode tersebut berjalan diam-diam di browser mereka.",
        "case": "Kami menaruh kode tersembunyi di kolom komentar. Ketika admin membuka halaman tersebut, sesi login admin langsung dapat kami ambil alih.",
        "impact": "Akun korban (termasuk admin) bisa dibajak, dan tampilan website bisa diubah.",
    },
    {
        "name": "Broken Access Control (IDOR)",
        "owasp": "OWASP A01: Broken Access Control",
        "sev": "High",
        "plain": "Setiap data biasanya punya nomor urut di alamat web. Bila website tidak mengecek apakah data itu memang milik Anda, "
                 "cukup mengganti nomornya untuk melihat data orang lain.",
        "case": "Dengan mengganti nomor pada alamat halaman tagihan (dari ...id=1001 menjadi ...id=1002), kami bisa melihat tagihan dan data milik pengguna lain.",
        "impact": "Data pribadi antar-pengguna bocor, dan fungsi khusus admin bisa diakses orang tak berwenang.",
    },
    {
        "name": "Autentikasi & Sesi Lemah (Brute Force)",
        "owasp": "OWASP A07: Identification & Auth Failures",
        "sev": "High",
        "plain": "Website tidak membatasi berapa kali seseorang boleh salah memasukkan password. "
                 "Penyerang bisa mencoba ribuan kombinasi password secara otomatis sampai tembus.",
        "case": "Sistem login membiarkan kami mencoba password berkali-kali tanpa diblokir, sehingga akun dengan password lemah berhasil ditembus dalam hitungan menit.",
        "impact": "Banyak akun bisa dibajak sekaligus, terutama yang passwordnya mudah ditebak.",
    },
    {
        "name": "Security Misconfiguration",
        "owasp": "OWASP A05: Security Misconfiguration",
        "sev": "Medium",
        "plain": "Pengaturan bawaan yang tidak dirapikan - seperti halaman admin yang terbuka untuk umum, "
                 "atau pesan error yang membocorkan informasi teknis sistem.",
        "case": "Halaman admin ternyata bisa dibuka siapa saja tanpa login, dan pesan error menampilkan detail teknis sistem yang seharusnya dirahasiakan.",
        "impact": "Penyerang mendapat peta sistem dan jalan masuk ke panel pengelola.",
    },
    {
        "name": "Kebocoran Data Sensitif",
        "owasp": "OWASP A02: Cryptographic Failures",
        "sev": "High",
        "plain": "Data penting dikirim atau disimpan tanpa pengamanan (enkripsi) yang layak, "
                 "atau kunci rahasia tertinggal di dalam kode website.",
        "case": "Kami menemukan website yang belum memakai HTTPS, serta kunci akses (API key) yang tertulis terang-terangan di dalam kode halaman.",
        "impact": "Data bisa disadap di tengah jalan, dan kunci rahasia bisa disalahgunakan.",
    },
    {
        "name": "Cross-Site Request Forgery (CSRF)",
        "owasp": "OWASP A01: Broken Access Control",
        "sev": "Medium",
        "plain": "Penyerang membuat korban yang sedang login tanpa sadar menjalankan sebuah aksi - "
                 "misalnya mengganti email - hanya dengan mengklik tautan jebakan.",
        "case": "Kami membuat sebuah tautan jebakan; saat korban yang sedang login mengkliknya, email akunnya berubah tanpa ia sadari.",
        "impact": "Data akun atau transaksi bisa diubah atas nama korban tanpa sepengetahuannya.",
    },
    {
        "name": "Server-Side Request Forgery (SSRF)",
        "owasp": "OWASP A10: SSRF",
        "sev": "High",
        "plain": "Fitur yang meminta website mengambil data dari sebuah alamat bisa dibelokkan "
                 "untuk mengakses sistem internal yang seharusnya tersembunyi.",
        "case": "Lewat fitur 'ambil gambar dari alamat web', kami arahkan website untuk mengakses alamat internal penyimpan kredensial cloud - dan berhasil.",
        "impact": "Akses ke sistem internal dan pencurian kredensial layanan cloud.",
    },
    {
        "name": "Unggah File Berbahaya (Webshell)",
        "owasp": "OWASP A05 / A03",
        "sev": "Critical",
        "plain": "Fitur unggah file (misalnya foto profil) tidak memeriksa jenis file, "
                 "sehingga file berbahaya bisa diunggah lalu dijalankan di server.",
        "case": "Melalui form unggah foto profil, kami berhasil mengunggah sebuah file program berbahaya, lalu menjalankannya untuk menguasai server.",
        "impact": "Penyerang bisa menjalankan perintah apa pun dan menguasai server sepenuhnya.",
    },
    {
        "name": "Komponen Usang & Rentan",
        "owasp": "OWASP A06: Vulnerable Components",
        "sev": "High",
        "plain": "Website memakai komponen atau plugin versi lama yang kelemahannya sudah diketahui umum, "
                 "dan cara membobolnya tersedia bebas di internet.",
        "case": "Kami menemukan sistem yang memakai plugin versi lama dengan kelemahan publik, yang bisa dibobol memakai alat yang tersedia gratis.",
        "impact": "Mudah diserang otomatis oleh bot, dan menjadi titik masuk awal peretas.",
    },
]


class PDF(FPDF):
    def header(self):
        if self.page_no() == 1:
            return
        self.set_font("Arial", "", 8)
        self.set_text_color(*GRAY)
        self.cell(0, 8, "Avangard Security  -  Detail Layanan & Celah Keamanan Web", align="L")
        self.cell(0, 8, "stacopa-avangard.com", align="R")
        self.ln(10)

    def footer(self):
        if self.page_no() == 1:
            return
        self.set_y(-15)
        self.set_font("Arial", "", 8)
        self.set_text_color(*GRAY)
        self.cell(0, 10, f"Halaman {self.page_no()}", align="C")


def setup_fonts(pdf):
    pdf.add_font("Arial", "", str(FONT_DIR / "arial.ttf"))
    pdf.add_font("Arial", "B", str(FONT_DIR / "arialbd.ttf"))
    pdf.add_font("Arial", "I", str(FONT_DIR / "ariali.ttf"))


def section_title(pdf, text):
    pdf.ln(2)
    pdf.set_fill_color(*BLUE)
    pdf.set_text_color(255, 255, 255)
    pdf.set_font("Arial", "B", 13)
    pdf.cell(0, 9, "  " + text, fill=True, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(3)


def service_block(pdf, s):
    # Judul layanan
    pdf.set_text_color(*NAVY)
    pdf.set_font("Arial", "B", 12)
    pdf.multi_cell(0, 6, s["title"], new_x="LMARGIN", new_y="NEXT")
    pdf.set_text_color(*CYAN)
    pdf.set_font("Arial", "I", 9.5)
    pdf.multi_cell(0, 5, s["sub"], new_x="LMARGIN", new_y="NEXT")
    # Deskripsi
    pdf.set_text_color(*GRAY)
    pdf.set_font("Arial", "", 9.5)
    pdf.multi_cell(0, 5, s["desc"], new_x="LMARGIN", new_y="NEXT")
    pdf.ln(1.5)
    # Fitur
    for title, desc in s["features"]:
        pdf.set_text_color(*BLUE)
        pdf.set_font("Arial", "B", 9.5)
        pdf.cell(4, 5, "-")
        pdf.write(5, title + ": ")
        pdf.set_text_color(*GRAY)
        pdf.set_font("Arial", "", 9.5)
        pdf.write(5, desc)
        pdf.ln(6)
    # Metodologi
    pdf.ln(0.5)
    pdf.set_fill_color(*LIGHT)
    pdf.set_text_color(*NAVY)
    pdf.set_font("Arial", "B", 9)
    pdf.multi_cell(0, 6, "  Metodologi:  " + s["method"], fill=True, new_x="LMARGIN", new_y="NEXT")
    pdf.ln(5)


def vuln_block(pdf, n, v):
    # Bar judul
    pdf.set_fill_color(*NAVY)
    pdf.set_text_color(255, 255, 255)
    pdf.set_font("Arial", "B", 10.5)
    pdf.cell(10, 8, str(n), fill=True, align="C")
    pdf.cell(0, 8, "  " + v["name"], fill=True, new_x="LMARGIN", new_y="NEXT")
    # Baris meta: OWASP + Severity
    pdf.set_font("Arial", "B", 8)
    pdf.set_fill_color(*LIGHT)
    pdf.set_text_color(*GRAY)
    pdf.cell(120, 6, "  " + v["owasp"], fill=True)
    sev = v["sev"]
    pdf.set_text_color(*SEV_COLOR.get(sev, GRAY))
    pdf.cell(0, 6, "Severity: " + sev + "  ", fill=True, align="R", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(1.5)

    def row(label, value, color):
        pdf.set_font("Arial", "B", 8.5)
        pdf.set_text_color(*color)
        pdf.cell(0, 4.5, label, new_x="LMARGIN", new_y="NEXT")
        pdf.set_font("Arial", "", 9)
        pdf.set_text_color(*GRAY)
        pdf.multi_cell(0, 4.8, value, new_x="LMARGIN", new_y="NEXT")
        pdf.ln(1)

    row("Penjelasan", v["plain"], NAVY)
    row("Yang kami temukan", v["case"], BLUE)
    row("Dampaknya", v["impact"], RED)
    pdf.ln(4)


def build():
    pdf = PDF(format="A4", unit="mm")
    setup_fonts(pdf)
    pdf.set_auto_page_break(True, margin=18)
    pdf.set_margins(18, 16, 18)

    # ----------------------------------------------------------------- COVER
    pdf.add_page()
    pdf.set_fill_color(*NAVY)
    pdf.rect(0, 0, 210, 297, style="F")
    pdf.set_y(70)
    pdf.set_text_color(96, 165, 250)
    pdf.set_font("Arial", "B", 11)
    pdf.cell(0, 8, "AVANGARD SECURITY", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(6)
    pdf.set_text_color(255, 255, 255)
    pdf.set_font("Arial", "B", 26)
    pdf.multi_cell(0, 12, "Detail Layanan &\nCelah Keamanan Web", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(6)
    pdf.set_text_color(148, 163, 184)
    pdf.set_font("Arial", "", 12)
    pdf.multi_cell(0, 7, "Cyber Defense untuk Aplikasi Web - dari pengujian, deteksi, "
                         "hingga respons insiden.", align="C", new_x="LMARGIN", new_y="NEXT")
    pdf.ln(20)
    pdf.set_draw_color(59, 130, 246)
    pdf.set_line_width(0.4)
    pdf.line(75, pdf.get_y(), 135, pdf.get_y())
    pdf.ln(8)
    pdf.set_text_color(148, 163, 184)
    pdf.set_font("Arial", "", 10)
    pdf.cell(0, 6, "Juni 2026  -  stacopa-avangard.com", align="C", new_x="LMARGIN", new_y="NEXT")

    # --------------------------------------------------------- BAGIAN LAYANAN
    pdf.add_page()
    pdf.set_text_color(*NAVY)
    pdf.set_font("Arial", "B", 18)
    pdf.cell(0, 10, "Bagian I - Detail Layanan", new_x="LMARGIN", new_y="NEXT")
    pdf.set_text_color(*GRAY)
    pdf.set_font("Arial", "", 10)
    pdf.multi_cell(0, 5.5, "Enam layanan inti Avangard yang difokuskan pada keamanan aplikasi web, "
                           "mencakup siklus pencegahan, deteksi, respons, dan kepatuhan.",
                   new_x="LMARGIN", new_y="NEXT")
    pdf.ln(4)
    for s in SERVICES:
        service_block(pdf, s)

    # ------------------------------------------------------- BAGIAN CELAH WEB
    pdf.add_page()
    pdf.set_text_color(*NAVY)
    pdf.set_font("Arial", "B", 18)
    pdf.cell(0, 10, "Bagian II - 10 Celah Web yang Paling Sering Kami Temukan", new_x="LMARGIN", new_y="NEXT")
    pdf.set_text_color(*GRAY)
    pdf.set_font("Arial", "", 10)
    pdf.multi_cell(0, 5.5,
        "Saat menguji keamanan aplikasi web klien (VAPT), kami telah menemukan 500+ celah keamanan. "
        "Berikut 10 jenis yang paling sering kami jumpai di lapangan, dijelaskan dengan bahasa sederhana "
        "agar mudah dipahami. Seluruhnya mengacu pada OWASP Top 10, standar industri untuk risiko keamanan "
        "aplikasi web. Detail temuan telah dianonimkan.",
        new_x="LMARGIN", new_y="NEXT")
    pdf.ln(5)
    for i, v in enumerate(VULNS, start=1):
        vuln_block(pdf, i, v)

    # Penutup
    pdf.ln(2)
    pdf.set_fill_color(*LIGHT)
    pdf.set_text_color(*NAVY)
    pdf.set_font("Arial", "B", 11)
    pdf.multi_cell(0, 7, "  Temukan celah ini sebelum peretas melakukannya.", fill=True,
                   new_x="LMARGIN", new_y="NEXT")
    pdf.set_text_color(*GRAY)
    pdf.set_font("Arial", "", 9.5)
    pdf.multi_cell(0, 5.5, "Hubungi Avangard Security untuk asesmen keamanan aplikasi web Anda.\n"
                           "Email: support@stacopa-avangard.com  -  Web: stacopa-avangard.com",
                   new_x="LMARGIN", new_y="NEXT")

    pdf.output(str(OUT))
    print(f"PDF dibuat: {OUT}")


if __name__ == "__main__":
    build()

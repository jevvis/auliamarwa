'use client'

const techPalette = ['bg-emerald-600', 'bg-blue-600', 'bg-rose-600', 'bg-indigo-600', 'bg-cyan-600', 'bg-purple-600', 'bg-amber-600', 'bg-teal-600', 'bg-sky-700', 'bg-violet-600', 'bg-orange-600', 'bg-green-700']

// warna lencana dipilih konsisten dari teksnya, jadi tag baru otomatis mendapat warna tanpa perlu didaftarkan
const techColor = (tech: string) => techPalette[tech.split('').reduce((a, c) => a + c.charCodeAt(0), 0) % techPalette.length]

// rincian dari butir-butir pengalaman di CV (magang, volunteer, proyek & kepanitiaan)
const projects = [
  {
    number: '01',
    title: "Pengembangan Formulasi & Pengujian Laboratorium",
    description: "Mengembangkan formulasi dan melakukan pengujian laboratorium produk kosmetik untuk mengevaluasi karakteristik serta kualitas produk.",
    framework: "INDUSTRI KOSMETIK — PT GONDOWANGI TRADISIONAL KOSMETIKA (BUSINESS DEVELOPMENT & R&D, APRIL – MEI 2026)",
    techStack: ["Formulasi", "Pengujian Lab", "Kosmetik"],
    link: '#',
  },
  {
    number: '02',
    title: "Pemantauan 30+ Sampel Stabilitas Harian",
    description: "Memantau lebih dari 30 sampel stabilitas setiap hari guna mengevaluasi kestabilan dan mutu produk.",
    framework: "INDUSTRI KOSMETIK — PT GONDOWANGI TRADISIONAL KOSMETIKA (BUSINESS DEVELOPMENT & R&D, APRIL – MEI 2026)",
    techStack: ["Uji Stabilitas", "30+ Sampel", "Mutu Produk"],
    link: '#',
  },
  {
    number: '03',
    title: "Analisis Tren Kecantikan & Produk Kompetitor",
    description: "Menganalisis tren kecantikan dan produk kompetitor untuk mengidentifikasi peluang pengembangan produk.",
    framework: "INDUSTRI KOSMETIK — PT GONDOWANGI TRADISIONAL KOSMETIKA (BUSINESS DEVELOPMENT & R&D, APRIL – MEI 2026)",
    techStack: ["Tren Kecantikan", "Kompetitor", "Peluang Produk"],
    link: '#',
  },
  {
    number: '04',
    title: "Evaluasi Karakteristik & Potensi Produk",
    description: "Mengevaluasi karakteristik dan potensi produk berdasarkan hasil pengujian sebagai bahan pengembangan formulasi.",
    framework: "INDUSTRI KOSMETIK — PT GONDOWANGI TRADISIONAL KOSMETIKA (BUSINESS DEVELOPMENT & R&D, APRIL – MEI 2026)",
    techStack: ["Evaluasi Produk", "Hasil Pengujian"],
    link: '#',
  },
  {
    number: '05',
    title: "Dokumentasi & Persyaratan Regulasi BPOM",
    description: "Mendukung penyusunan dokumentasi dan pemenuhan persyaratan regulasi produk kosmetik sesuai ketentuan BPOM.",
    framework: "INDUSTRI KOSMETIK — PT GONDOWANGI TRADISIONAL KOSMETIKA (BUSINESS DEVELOPMENT & R&D, APRIL – MEI 2026)",
    techStack: ["Regulasi BPOM", "Dokumentasi"],
    link: '#',
  },
  {
    number: '06',
    title: "Penerapan CDOB pada Penyimpanan & Distribusi",
    description: "Mempelajari penerapan Cara Distribusi Obat yang Baik (CDOB) dalam proses penyimpanan dan distribusi produk farmasi.",
    framework: "DISTRIBUSI FARMASI — PT BINA SAN PRIMA (PULO GADUNG, JANUARI 2026)",
    techStack: ["CDOB", "Penyimpanan", "Distribusi"],
    link: '#',
  },
  {
    number: '07',
    title: "Pemantauan Kondisi Penyimpanan & Prekursor",
    description: "Memantau kondisi penyimpanan produk, termasuk pengendalian suhu, serta mempelajari penanganan prekursor farmasi dan Obat-Obat Tertentu (OOT).",
    framework: "DISTRIBUSI FARMASI — PT BINA SAN PRIMA (PULO GADUNG, JANUARI 2026)",
    techStack: ["Pengendalian Suhu", "Prekursor", "OOT"],
    link: '#',
  },
  {
    number: '08',
    title: "Kesesuaian Penyimpanan terhadap SOP Gudang",
    description: "Menganalisis kesesuaian penyimpanan prekursor farmasi dan OOT terhadap SOP gudang untuk mengidentifikasi potensi ketidaksesuaian.",
    framework: "DISTRIBUSI FARMASI — PT BINA SAN PRIMA (PULO GADUNG, JANUARI 2026)",
    techStack: ["SOP Gudang", "Analisis"],
    link: '#',
  },
  {
    number: '09',
    title: "Penerimaan & Penataan Produk Farmasi",
    description: "Mempelajari proses penerimaan dan penataan produk farmasi sesuai persyaratan penyimpanan dan ketentuan distribusi.",
    framework: "DISTRIBUSI FARMASI — PT BINA SAN PRIMA (PULO GADUNG, JANUARI 2026)",
    techStack: ["Penerimaan", "Penataan"],
    link: '#',
  },
  {
    number: '10',
    title: "Dokumentasi & Pengendalian Persediaan",
    description: "Memahami pengelolaan dokumentasi serta pengendalian persediaan dalam mendukung ketertelusuran produk farmasi.",
    framework: "DISTRIBUSI FARMASI — PT BINA SAN PRIMA (PULO GADUNG, JANUARI 2026)",
    techStack: ["Dokumentasi", "Persediaan", "Ketertelusuran"],
    link: '#',
  },
  {
    number: '11',
    title: "Skrining Resep Administratif, Farmasetik & Klinis",
    description: "Melakukan skrining resep berdasarkan aspek administratif, farmasetik, dan klinis untuk mendukung ketepatan serta keamanan terapi.",
    framework: "FARMASI KLINIS — RS UMUM HERMINA ARCAMANIK (MARET 2026)",
    techStack: ["Skrining Resep", "Keamanan Terapi"],
    link: '#',
  },
  {
    number: '12',
    title: "Penyiapan Obat Sesuai Resep & Standar",
    description: "Menyiapkan obat sesuai resep dan standar pelayanan kefarmasian dengan memperhatikan ketepatan jenis, dosis, dan aturan penggunaan.",
    framework: "FARMASI KLINIS — RS UMUM HERMINA ARCAMANIK (MARET 2026)",
    techStack: ["Penyiapan Obat", "Dosis"],
    link: '#',
  },
  {
    number: '13',
    title: "Rekonsiliasi Obat",
    description: "Melakukan rekonsiliasi obat dengan mencocokkan riwayat penggunaan obat pasien untuk membantu mencegah kesalahan pengobatan.",
    framework: "FARMASI KLINIS — RS UMUM HERMINA ARCAMANIK (MARET 2026)",
    techStack: ["Rekonsiliasi Obat", "Riwayat Obat"],
    link: '#',
  },
  {
    number: '14',
    title: "Informasi Obat kepada Pasien",
    description: "Memberikan informasi obat kepada pasien mengenai aturan pakai dan penggunaan obat yang tepat.",
    framework: "FARMASI KLINIS — RS UMUM HERMINA ARCAMANIK (MARET 2026)",
    techStack: ["Informasi Obat", "Aturan Pakai"],
    link: '#',
  },
  {
    number: '15',
    title: "Standar Pelayanan Kefarmasian Rumah Sakit",
    description: "Mempelajari penerapan standar pelayanan kefarmasian dalam proses pelayanan farmasi rumah sakit.",
    framework: "FARMASI KLINIS — RS UMUM HERMINA ARCAMANIK (MARET 2026)",
    techStack: ["Standar Pelayanan", "Rumah Sakit"],
    link: '#',
  },
  {
    number: '16',
    title: "Skrining Resep di Puskesmas",
    description: "Melakukan skrining resep berdasarkan aspek administratif, farmasetik, dan klinis untuk mendukung ketepatan pelayanan pasien.",
    framework: "PELAYANAN PRIMER — PUSKESMAS MOCH. RAMDAN BANDUNG (FEBRUARI 2026)",
    techStack: ["Skrining Resep", "Puskesmas"],
    link: '#',
  },
  {
    number: '17',
    title: "Penyiapan & Penyerahan Obat",
    description: "Menyiapkan dan menyerahkan obat sesuai resep serta prosedur pelayanan kefarmasian.",
    framework: "PELAYANAN PRIMER — PUSKESMAS MOCH. RAMDAN BANDUNG (FEBRUARI 2026)",
    techStack: ["Penyiapan Obat", "Penyerahan Obat"],
    link: '#',
  },
  {
    number: '18',
    title: "Pengelolaan Persediaan Obat",
    description: "Mengelola penerimaan, penyimpanan, dan pemantauan persediaan obat untuk menjaga ketersediaan stok.",
    framework: "PELAYANAN PRIMER — PUSKESMAS MOCH. RAMDAN BANDUNG (FEBRUARI 2026)",
    techStack: ["Penerimaan", "Penyimpanan", "Stok"],
    link: '#',
  },
  {
    number: '19',
    title: "Stock Opname",
    description: "Melakukan stock opname dengan mencocokkan stok fisik dan catatan persediaan untuk memastikan akurasi data.",
    framework: "PELAYANAN PRIMER — PUSKESMAS MOCH. RAMDAN BANDUNG (FEBRUARI 2026)",
    techStack: ["Stock Opname", "Akurasi Data"],
    link: '#',
  },
  {
    number: '20',
    title: "Informasi & Edukasi Obat kepada Pasien",
    description: "Memberikan informasi dan edukasi obat kepada pasien untuk mendukung penggunaan obat secara tepat dan aman.",
    framework: "PELAYANAN PRIMER — PUSKESMAS MOCH. RAMDAN BANDUNG (FEBRUARI 2026)",
    techStack: ["Edukasi Obat", "Pasien"],
    link: '#',
  },
  {
    number: '21',
    title: "Stock Opname Stok Fisik & Data Sistem",
    description: "Melakukan stock opname dengan mencocokkan stok fisik dan data sistem untuk menjaga akurasi persediaan obat.",
    framework: "FARMASI KOMUNITAS — APOTEK VIVA (CEMPAKA PUTIH, NOVEMBER – DESEMBER 2025)",
    techStack: ["Stock Opname", "Persediaan"],
    link: '#',
  },
  {
    number: '22',
    title: "Pencatatan Penerimaan Produk Farmasi",
    description: "Memeriksa dan mencatat penerimaan produk farmasi guna memastikan ketepatan dokumentasi persediaan.",
    framework: "FARMASI KOMUNITAS — APOTEK VIVA (CEMPAKA PUTIH, NOVEMBER – DESEMBER 2025)",
    techStack: ["Penerimaan", "Dokumentasi"],
    link: '#',
  },
  {
    number: '23',
    title: "Penataan Produk Sesuai Golongan",
    description: "Menata produk farmasi sesuai golongan dan persyaratan penyimpanan untuk menjaga kualitas serta keteraturan stok.",
    framework: "FARMASI KOMUNITAS — APOTEK VIVA (CEMPAKA PUTIH, NOVEMBER – DESEMBER 2025)",
    techStack: ["Penataan Produk", "Penyimpanan"],
    link: '#',
  },
  {
    number: '24',
    title: "Konten Edukasi DAGUSIBU",
    description: "Mengembangkan konten edukasi DAGUSIBU untuk meningkatkan pemahaman masyarakat mengenai pengelolaan obat yang benar.",
    framework: "FARMASI KOMUNITAS — APOTEK VIVA (CEMPAKA PUTIH, NOVEMBER – DESEMBER 2025)",
    techStack: ["DAGUSIBU", "Konten Edukasi"],
    link: '#',
  },
  {
    number: '25',
    title: "Kegiatan Cek GALAU",
    description: "Mendukung kegiatan Cek GALAU melalui edukasi dan skrining kesehatan untuk meningkatkan kesadaran masyarakat terhadap kondisi kesehatannya.",
    framework: "FARMASI KOMUNITAS — APOTEK VIVA (CEMPAKA PUTIH, NOVEMBER – DESEMBER 2025)",
    techStack: ["Cek GALAU", "Skrining Kesehatan"],
    link: '#',
  },
  {
    number: '26',
    title: "Informasi Obat & Edukasi Kesehatan",
    description: "Memberikan informasi obat dan edukasi kesehatan untuk meningkatkan pemahaman masyarakat mengenai penggunaan obat yang tepat.",
    framework: "VOLUNTEER — PENGABDIAN MASYARAKAT CIMAHI (AGUSTUS 2026)",
    techStack: ["Informasi Obat", "Edukasi Kesehatan"],
    link: '#',
  },
  {
    number: '27',
    title: "Edukasi DAGUSIBU",
    description: "Mengedukasi masyarakat mengenai prinsip DAGUSIBU (Dapatkan, Gunakan, Simpan, dan Buang Obat dengan Benar).",
    framework: "VOLUNTEER — PENGABDIAN MASYARAKAT CIMAHI (AGUSTUS 2026)",
    techStack: ["DAGUSIBU", "Edukasi Masyarakat"],
    link: '#',
  },
  {
    number: '28',
    title: "Skrining Kesehatan Dasar",
    description: "Melakukan skrining kesehatan dasar untuk membantu mengidentifikasi kebutuhan kesehatan masyarakat.",
    framework: "VOLUNTEER — PENGABDIAN MASYARAKAT CIMAHI (AGUSTUS 2026)",
    techStack: ["Skrining Kesehatan", "Kebutuhan Masyarakat"],
    link: '#',
  },
  {
    number: '29',
    title: "Materi Edukasi Obat",
    description: "Menyusun materi edukasi obat yang informatif dan mudah dipahami sesuai kebutuhan masyarakat.",
    framework: "VOLUNTEER — PENGABDIAN MASYARAKAT CIMAHI (AGUSTUS 2026)",
    techStack: ["Materi Edukasi", "Komunikasi"],
    link: '#',
  },
  {
    number: '30',
    title: "Kolaborasi Kegiatan Kesehatan Masyarakat",
    description: "Berkolaborasi dalam kegiatan kesehatan masyarakat untuk meningkatkan kesadaran terhadap penggunaan obat yang aman.",
    framework: "VOLUNTEER — PENGABDIAN MASYARAKAT CIMAHI (AGUSTUS 2026)",
    techStack: ["Kolaborasi", "Penggunaan Obat Aman"],
    link: '#',
  },
  {
    number: '31',
    title: "Pemetaan 28+ Produk Hair Mask",
    description: "Menganalisis 28+ produk hair mask berdasarkan harga dan klaim produk untuk memetakan posisi kompetitor di pasar.",
    framework: "PENGALAMAN PROYEK — HAIR MASK COMPETITOR & CONSUMER ANALYSIS",
    techStack: ["Riset Pasar", "28+ Produk", "Harga & Klaim"],
    link: '#',
  },
  {
    number: '32',
    title: "Evaluasi Klaim Kemasan & Materi Pemasaran",
    description: "Mengevaluasi klaim pada kemasan dan materi komunikasi pemasaran untuk mengidentifikasi keunggulan serta kelemahan kompetitor.",
    framework: "PENGALAMAN PROYEK — HAIR MASK COMPETITOR & CONSUMER ANALYSIS",
    techStack: ["Klaim Produk", "Kompetitor"],
    link: '#',
  },
  {
    number: '33',
    title: "Analisis Sentimen Konsumen",
    description: "Menganalisis sentimen konsumen untuk mengidentifikasi persepsi positif dan negatif terhadap atribut produk.",
    framework: "PENGALAMAN PROYEK — HAIR MASK COMPETITOR & CONSUMER ANALYSIS",
    techStack: ["Sentimen Konsumen", "Persepsi"],
    link: '#',
  },
  {
    number: '34',
    title: "Pemetaan Preferensi & Kebutuhan Konsumen",
    description: "Memetakan preferensi dan kebutuhan konsumen untuk mengidentifikasi peluang diferensiasi produk.",
    framework: "PENGALAMAN PROYEK — HAIR MASK COMPETITOR & CONSUMER ANALYSIS",
    techStack: ["Preferensi Konsumen", "Diferensiasi Produk"],
    link: '#',
  },
  {
    number: '35',
    title: "Konsep Produk Setting Spray",
    description: "Mengembangkan konsep produk setting spray berdasarkan riset pasar, tren industri, dan kebutuhan konsumen.",
    framework: "PENGALAMAN PROYEK — SETTING SPRAY PRODUCT DEVELOPMENT",
    techStack: ["Konsep Produk", "Tren Industri"],
    link: '#',
  },
  {
    number: '36',
    title: "Analisis 20+ Merek: PESTEL & Gap Analysis",
    description: "Menganalisis 20+ merek menggunakan metode PESTEL dan gap analysis untuk mengidentifikasi peluang diferensiasi produk.",
    framework: "PENGALAMAN PROYEK — SETTING SPRAY PRODUCT DEVELOPMENT",
    techStack: ["PESTEL", "Gap Analysis", "20+ Merek"],
    link: '#',
  },
  {
    number: '37',
    title: "Rancangan Formulasi Berbasis Jurnal & Regulasi",
    description: "Menyusun rancangan formulasi berdasarkan kajian jurnal ilmiah dan regulasi yang relevan sebagai acuan pengembangan produk.",
    framework: "PENGALAMAN PROYEK — SETTING SPRAY PRODUCT DEVELOPMENT",
    techStack: ["Rancangan Formulasi", "Jurnal Ilmiah", "Regulasi"],
    link: '#',
  },
  {
    number: '38',
    title: "Konsep Kemasan & Regulasi Pelabelan",
    description: "Merancang konsep kemasan dengan mempertimbangkan karakteristik produk dan ketentuan regulasi pelabelan.",
    framework: "PENGALAMAN PROYEK — SETTING SPRAY PRODUCT DEVELOPMENT",
    techStack: ["Konsep Kemasan", "Pelabelan"],
    link: '#',
  },
  {
    number: '39',
    title: "Kesiapan Perlengkapan & Kebutuhan Teknis",
    description: "Mengelola kesiapan perlengkapan dan kebutuhan teknis acara untuk mendukung kelancaran operasional kegiatan.",
    framework: "PENGALAMAN KEPANITIAAN — GEBYAR RAMADHAN (STAF KEAMANAN DAN PERLENGKAPAN ACARA)",
    techStack: ["Perlengkapan", "Kebutuhan Teknis"],
    link: '#',
  },
  {
    number: '40',
    title: "Ketersediaan Perlengkapan Acara",
    description: "Memastikan ketersediaan perlengkapan sesuai kebutuhan pelaksanaan acara.",
    framework: "PENGALAMAN KEPANITIAAN — GEBYAR RAMADHAN (STAF KEAMANAN DAN PERLENGKAPAN ACARA)",
    techStack: ["Ketersediaan", "Pelaksanaan Acara"],
    link: '#',
  },
  {
    number: '41',
    title: "Keamanan & Ketertiban Area Kegiatan",
    description: "Memantau keamanan dan ketertiban area kegiatan untuk menjaga kenyamanan peserta.",
    framework: "PENGALAMAN KEPANITIAAN — GEBYAR RAMADHAN (STAF KEAMANAN DAN PERLENGKAPAN ACARA)",
    techStack: ["Keamanan", "Ketertiban"],
    link: '#',
  },
  {
    number: '42',
    title: "Koordinasi dengan Panitia",
    description: "Berkoordinasi dengan panitia terkait untuk memenuhi kebutuhan teknis dan menangani kendala selama kegiatan.",
    framework: "PENGALAMAN KEPANITIAAN — GEBYAR RAMADHAN (STAF KEAMANAN DAN PERLENGKAPAN ACARA)",
    techStack: ["Koordinasi", "Penanganan Kendala"],
    link: '#',
  },
]

export default function ProjectList() {
  return (
    <section id="technical" className="py-20 px-4 md:px-8">
      <div className="max-w-6xl mx-auto">
        <div className="mb-12">
          <p className="text-xs tracking-[0.3em] uppercase text-[var(--muted)] mb-3">MAGANG, VOLUNTEER & PROYEK</p>
          <h2 className="text-4xl md:text-5xl font-bold mb-3">Pengalaman & Proyek</h2>
          <p className="text-[var(--muted)] text-sm max-w-lg">
            Rincian pengalaman magang di industri kosmetik, distribusi farmasi, rumah sakit, puskesmas, dan apotek, serta volunteer, proyek, dan kepanitiaan.
          </p>
        </div>

        <div className="divide-y divide-[var(--card-border)]">
          {projects.map((project) => (
            <div
              key={project.number}
              className="group flex items-start gap-4 md:gap-8 py-6 hover:bg-[var(--card-bg)] hover:px-4 rounded-lg transition-all duration-300 cursor-pointer"
            >
              {/* Number */}
              <span className="text-[var(--muted)] text-sm font-semibold mt-1 shrink-0 w-8 font-sans">
                {project.number}
              </span>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <h3 className="font-bold text-base mb-1 group-hover:text-[var(--foreground)] transition-colors">
                  {project.title}
                </h3>
                <p className="text-[var(--muted)] text-sm mb-2 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-[var(--muted)] text-xs tracking-wider uppercase mb-3 font-semibold">
                  {project.framework}
                </p>
                {/* Tech stack badges */}
                <div className="flex flex-wrap items-center gap-2">
                  {project.techStack.map((tech) => (
                    <span
                      key={tech}
                      className={`px-2.5 py-1 rounded-md text-white text-[10px] font-semibold tracking-wide ${techColor(tech)}`}
                    >
                      {tech}
                    </span>
                  ))}
                </div>
              </div>

              {/* Status icon */}
              <div className="text-[var(--muted)] group-hover:text-[var(--foreground)] transition-colors mt-1 shrink-0">
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M5 12l5 5l10 -10" />
                </svg>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

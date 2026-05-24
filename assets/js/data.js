// ============================================================
// TEJEKATWO – Data Siswa & Konten
// XII TJKT 2 SMK Ma'arif Kota Mungkid
// ============================================================

const SITE_DATA = {
  className: "TEJEKATWO",
  fullName: "XII TJKT 2",
  school: "SMK Ma'arif Kota Mungkid",
  motto: "Solidarity, Creativity, and Growth Together",
  email: "tejekatwo@smkmaarif.sch.id",
  instagram: "tejekatwo.26",
  instagramUrl: "http://www.instagram.com/tejekatwo.26",
  tiktok: "@tjkt.2.archive",
  tiktokUrl: "http://www.tiktok.com/@tjkt.2.archive",
  address: "Jl. Letnan Tukiyat, Kota Mungkid, Kabupaten Magelang, Jawa Tengah",
  mapsEmbed: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3954.918432408089!2d110.20537827404623!3d-7.583857574925457!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a8c43d18d2bb7%3A0xd0086e63e387dac7!2sSMK%20Ma&#39;arif%20Kota%20Mungkid!5e0!3m2!1sid!2sid!4v1760860917349!5m2!1sid!2sid",
};

const WALI_KELAS = {
  nama: "Eka Wahyu Nurlaili, S.Pd.",
  jabatan: "Wali Kelas XII TJKT 2",
  instagram: "ekawn_44",
  foto: "bueka.jpg",
  pesan: "Selamat datang di website TEJEKATWO – XII TJKT 2. Semoga website ini menjadi wadah untuk berbagi informasi, dokumentasi kegiatan, dan mempererat tali silaturahmi antar siswa. Mari bersama-sama membangun masa depan yang cerah di bidang teknologi."
};

const SISWA_DATA = [
  { nama: "Wildan Surya Anjuba", jabatan: "KETUA", instagram: "_willthejustice", foto: "wildan.jpg" },
  { nama: "Dea Rihadatul Hasna", jabatan: "WAKIL KETUA", instagram: "dearhsn_", foto: "hasna.jpg" },
  { nama: "Asifa Aprilia", jabatan: "SEKRETARIS I", instagram: "itsaprrll", foto: "april.jpg" },
  { nama: "Putri Yulita Sari", jabatan: "SEKRETARIS II", instagram: "clme.ylita", foto: "putri.jpg" },
  { nama: "Ana Habib Khoirul Mawa", jabatan: "BENDAHARA I", instagram: "nna.anaa0", foto: "ana.jpg" },
  { nama: "Isna Nurfadea", jabatan: "BENDAHARA II", instagram: "deyao.o", foto: "dea.jpg" },
  { nama: "Octavia Theresya Rahmadhani", jabatan: "PEMBIASAAN", instagram: "taaavia_._", foto: "octa.jpg" },
  { nama: "Rafi Maulana Aminudin", jabatan: "PEMBIASAAN", instagram: "opqrapiiii", foto: "rafi.jpg" },
  { nama: "Nazuar Keisya Shafira", jabatan: "JURNAL", instagram: "nzrkesyaa__", foto: "keisya.jpg" },
  { nama: "Janitra Hameed Al Khusen", jabatan: "DOKUMENTASI", instagram: "janitrahameed_", foto: "hameed.jpg" },
  { nama: "Adam Aqil Nugroho", jabatan: "KEAMANAN", instagram: "sh1kigamiii", foto: "adam.jpg" },
  { nama: "Rizki Adi Setiawan", jabatan: "KEAMANAN", instagram: "_rizki_adi", foto: "rizki.jpg" },
  { nama: "Alien Syifani", jabatan: "EVENT", instagram: "alinnsyfni", foto: "alien.jpg" },
  { nama: "Dila Septy Ramadhani", jabatan: "EVENT", instagram: "dila.septy", foto: "dila.jpg" },
  { nama: "Faris Ari Fiandani", jabatan: "EVENT", instagram: "fariz_fian", foto: "faris.jpg" },
  { nama: "Mirzatanta Raihajalu Akmadea", jabatan: "EVENT", instagram: "mindof.freiza", foto: "mirza.jpg" },
  { nama: "Yunia Rahmayanti", jabatan: "INFAQ", instagram: "0niiaaa", foto: "nia.jpg" },
  { nama: "Muhammad Latif Ahsan Jauhari", jabatan: "PAIBPNU", instagram: "latifhsn_", foto: "latif.png", portfolio: "https://latifahsan.vercel.app" },
  { nama: "Rifda Wahyuni", jabatan: "PP", instagram: "its.rpda", foto: "rifda.jpg" },
  { nama: "Nabila Citra Maharani", jabatan: "B. INDONESIA", instagram: "bllaywo", foto: "bila.jpg" },
  { nama: "Heri Setiawan", jabatan: "PJOK", instagram: "herisetiaawan_", foto: "heri.jpg" },
  { nama: "Safamia Putri", jabatan: "SEJARAH", instagram: "putrissymm_", foto: "safa.jpg" },
  { nama: "Najwa Fitri Oktavia", jabatan: "B. JAWA", instagram: "n.wwaa__", foto: "najwa.jpg" },
  { nama: "Suci Nurhidayati", jabatan: "MATEMATIKA", instagram: "uci4li", foto: "suci.jpg" },
  { nama: "Selly Novita Sari", jabatan: "B. INGGRIS", instagram: "sellynvtaasrr", foto: "selly.jpg" },
  { nama: "Akhmad Riyadi Satria Al Madani", jabatan: "PKK", instagram: "akhmadriyadi_12", foto: "yadi.jpg" },
  { nama: "Aditya Khoirul Arifin", jabatan: "KK", instagram: "aadhitz_", foto: "adit.jpg" },
  { nama: "Muhammad Faqih Fatkhur Rohman", jabatan: "PRAKTIK", instagram: "fqh.fatkhurr", foto: "faqih.jpg" },
  { nama: "Muhamad Rizqi Ristiawan", jabatan: "PK & P5", instagram: "wwnrzqii", foto: "wawan.jpg" },
  { nama: "Muhammad Alivian Saputra", jabatan: "PK & P5", instagram: "vian_ssd.nvme", foto: "vian.jpg" },
  { nama: "Shihabbuddiin Abdul Fadhiil Ahmad Husaiin", jabatan: "KEBERSIHAN", instagram: "kiraquiin", foto: "shihab.jpg" },
  { nama: "Umi Sumaryani", jabatan: "KEBERSIHAN", instagram: "umisukaanakkecill", foto: "umi.jpg" },
  { nama: "Muhammad Yusril Ilham", jabatan: "KEBERSIHAN", instagram: "yusrililhamm", foto: "yusril.jpg" },
  { nama: "Fatma Maulidya", jabatan: "KEBERSIHAN", instagram: "ftmldya", foto: "fatma.jpg" },
  { nama: "Aulia Indra Pratiwi", jabatan: "KEBERSIHAN", instagram: "tiwinihh", foto: "aulia.jpg" }
];

const GALERI_DATA = [
  { foto: "assets/images/galeri/gerakjalan.jpg", judul: "Gerak Jalan Kemerdekaan", deskripsi: "Memeriahkan kemerdekaan Indonesia dengan mengikuti lomba gerak jalan", kategori: "event" },
  { foto: "assets/images/galeri/maulid.jpg", judul: "Pengajian Maulid Nabi", deskripsi: "Mengikuti pengajian peringatan maulid nabi Muhammad saw. 1445H", kategori: "keagamaan" },
  { foto: "assets/images/galeri/kunjungan.jpg", judul: "Kunjungan Industri & Wisata", deskripsi: "Kunjungan industri ke Universitas Amikom Yogyakarta dan Wisata di Jawa Timur", kategori: "akademik" },
  { foto: "assets/images/galeri/hariguru.jpg", judul: "Hari Guru 2024", deskripsi: "Perayaan Hari Guru Nasional tahun 2024", kategori: "event" },
  { foto: "assets/images/galeri/gelarkarya.jpg", judul: "Gelar Karya", deskripsi: "Mengikuti gelar karya dengan menampilkan drama Doraemon dari Jepang", kategori: "seni" },
  { foto: "assets/images/galeri/fotoalbum.jpg", judul: "Foto Yearbook", deskripsi: "Melakukan sesi pemotretan untuk buku tahunan angkatan", kategori: "dokumentasi" }
];

const BERITA_DATA = [
  { tanggal: "20 Oktober 2025", author: "Admin", judul: "Website TEJEKATWO Resmi Diluncurkan", deskripsi: "Website TEJEKATWO sedang dibuat dan akan digunakan sebagai media dokumentasi dan informasi kelas XII TJKT 2.", kategori: "teknologi", icon: "fa-cogs", warna: "blue" },
  { tanggal: "20 Oktober 2025", author: "Admin", judul: "Persiapan PKL Dimulai", deskripsi: "Siswa kelas XII TJKT 2 mulai mempersiapkan diri untuk Praktik Kerja Lapangan yang akan dimulai Januari 2025.", kategori: "akademik", icon: "fa-briefcase", warna: "green" },
  { tanggal: "20 Oktober 2025", author: "Admin", judul: "Gelar Karya Drama Doraemon", deskripsi: "TEJEKATWO sukses menampilkan drama bertema Doraemon dalam acara Gelar Karya sekolah, mendapat sambutan meriah.", kategori: "seni", icon: "fa-theater-masks", warna: "purple" }
];

const PROYEK_DATA = [
  { judul: "Website E-Commerce", deskripsi: "Platform jual beli online dengan fitur lengkap menggunakan PHP dan MySQL", kategori: "Proyek PKL", icon: "fa-globe", warna: "blue" },
  { judul: "Konfigurasi Server", deskripsi: "Setup dan konfigurasi web server, database server, dan file server untuk jaringan lokal", kategori: "Tugas Praktik", icon: "fa-server", warna: "green" },
  { judul: "Aplikasi Mobile", deskripsi: "Aplikasi Android untuk monitoring jaringan dan sistem komputer berbasis IoT", kategori: "Proyek P5", icon: "fa-mobile-alt", warna: "orange" }
];

const TIMELINE_DATA = [
  { tahun: "Juli 2023", label: "Awal Terbentuk", icon: "fa-flag", warna: "#3b82f6", deskripsi: "Pembentukan kelas, pemilihan pengurus, dan orientasi jurusan TJKT. Perkenalan antar siswa dan guru." },
  { tahun: "Juli 2024", label: "Naik ke Kelas XI", icon: "fa-arrow-up", warna: "#10b981", deskripsi: "Perjalanan berlanjut ke tingkat yang lebih tinggi. Semakin kompak dan solid sebagai satu keluarga." },
  { tahun: "Januari 2025", label: "PKL", icon: "fa-briefcase", warna: "#8b5cf6", deskripsi: "Praktik Kerja Lapangan di berbagai perusahaan dan instansi IT di Magelang dan sekitarnya." },
  { tahun: "Nov 2025 – April 2026", label: "Ujian & Proyek Akhir", icon: "fa-graduation-cap", warna: "#f59e0b", deskripsi: "TKA, ujian praktik, ujian sekolah, dan presentasi proyek akhir jenjang sebagai puncak 3 tahun belajar." },
  { tahun: "Mei 2026", label: "Kelulusan 🎉", icon: "fa-heart", warna: "#ef4444", deskripsi: "Wisuda, perpisahan, dan perayaan kelulusan TEJEKATWO. Sampai jumpa di puncak kesuksesan masing-masing!" }
];

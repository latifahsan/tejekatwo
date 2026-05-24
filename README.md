# TEJEKATWO – Website Resmi Kelas XII TJKT 2

> **Solidarity, Creativity, and Growth Together**  
> SMK Ma'arif Kota Mungkid – Angkatan 2026

---

## 📁 Struktur File

```
/
├── index.html          → Halaman utama (Home)
├── about.html          → Tentang kelas, visi, misi, jurusan
├── students.html       → Daftar siswa + modal detail + search/sort
├── gallery.html        → Galeri foto + lightbox + filter kategori
├── news.html           → Berita & artikel + search + filter
├── projects.html       → Proyek & karya siswa + filter
├── timeline.html       → Linimasa perjalanan kelas
├── contact.html        → Kontak, sosmed, Google Maps embed
│
├── assets/
│   ├── css/
│   │   └── style.css           → Stylesheet utama (design system)
│   ├── js/
│   │   ├── data.js             → Data siswa, galeri, berita, dll.
│   │   └── main.js             → Logic: theme, scroll, modal, gallery
│   └── images/
│       ├── siswa/              → Foto siswa (nama sesuai data.js)
│       ├── galeri/             → Foto kegiatan
│       ├── banners/            → Banner/hero images
│       └── icons/              → App icons
│
├── sitemap.xml
├── robots.txt
├── manifest.json
└── README.md
```

---

## 🖼️ Cara Menambahkan Foto

### Foto Siswa
Letakkan foto di `assets/images/siswa/` dengan nama file sesuai field `foto` di `data.js`:

```
assets/images/siswa/wildan.jpg
assets/images/siswa/hasna.jpg
assets/images/siswa/bueka.jpg
... dst
```

### Foto Galeri
Letakkan foto di `assets/images/galeri/`:
```
assets/images/galeri/gerakjalan.jpg
assets/images/galeri/maulid.jpg
assets/images/galeri/kunjungan.jpg
assets/images/galeri/hariguru.jpg
assets/images/galeri/gelarkarya.jpg
assets/images/galeri/fotoalbum.jpg
```

> **Catatan:** Folder `images/` juga bisa diletakkan di root (sejajar dengan `index.html`) karena HTML mereferensikan `images/siswa/...` dan `assets/images/galeri/...` dari root.

---

## 🚀 Deploy ke GitHub Pages

1. Buat repository baru di GitHub (contoh: `tejekatwo`)
2. Upload semua file ke repository
3. Masuk ke **Settings → Pages**
4. Set **Source** ke `main` branch, folder `/` (root)
5. Klik **Save** — website akan aktif di:  
   `https://[username].github.io/tejekatwo/`

---

## 🌐 Deploy ke Vercel

1. Buat akun di [vercel.com](https://vercel.com)
2. Klik **New Project → Import Git Repository**
3. Pilih repo GitHub kamu
4. Vercel otomatis deploy sebagai static site
5. Domain gratis: `[project-name].vercel.app`

---

## ✏️ Update Data Siswa

Edit file `assets/js/data.js`:

```javascript
const SISWA_DATA = [
  {
    nama: "Nama Lengkap",
    jabatan: "JABATAN",
    instagram: "username_ig",   // tanpa @
    foto: "nama_file.jpg",      // nama file di images/siswa/
    portfolio: "https://..."    // opsional
  },
  // ...
];
```

---

## 🌙 Fitur Dark Mode

Dark mode tersimpan otomatis di `localStorage`. Tombol toggle ada di navbar (🌙/☀️).

---

## 📱 Responsive

Website sudah responsif untuk:
- Desktop (1280px+)
- Tablet (768px–1024px)  
- Mobile (< 768px)

---

## 🔧 Tech Stack

- **HTML5** – Semantic markup
- **CSS3** – Custom properties, Flexbox, Grid, Animations
- **Vanilla JavaScript** – No frameworks
- **Font Awesome 6.5** – Icons
- **Google Fonts** – Plus Jakarta Sans + Syne

---

## 📞 Kontak

- **Instagram:** [@tejekatwo.26](http://www.instagram.com/tejekatwo.26)
- **TikTok:** [@tjkt.2.archive](http://www.tiktok.com/@tjkt.2.archive)
- **Email:** tejekatwo@smkmaarif.sch.id

---

© 2025 TEJEKATWO – XII TJKT 2 SMK Ma'arif Kota Mungkid. Made with ❤️

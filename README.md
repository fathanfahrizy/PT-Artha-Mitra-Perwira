# 🏭 PT ARTHA MITRA PERWIRA — Company Profile Website

Website landing page B2B untuk perusahaan produksi kemasan karton bergelombang
(corrugated box): Karton Box, Pallet Karton, dan Siku Karton.

## 🚀 Tech Stack

| Teknologi      | Keterangan                                        |
|----------------|---------------------------------------------------|
| Vite           | Build tool & dev server                           |
| React 18 (JSX) | UI library (plain JavaScript, tanpa TypeScript)   |
| Tailwind CSS v4| Styling utility-first (`@import "tailwindcss"`)   |
| react-icons    | Ikon (paket `fa6` / Font Awesome 6)               |
| Magic UI pattern | Efek `PixelImage` (implementasi custom lokal)   |

## ⚡ Quick Start

```bash
npm install       # install dependencies
npm run dev       # jalankan dev server (default: http://localhost:5173)
npm run build     # build produksi ke folder dist/
npm run preview   # preview hasil build
```

## 📁 Struktur Project

```
PT-Artha/
├── public/                         # Aset statis (diserve langsung dari root "/")
│   ├── logo-artha.png              # Logo perusahaan (dipakai Navbar)
│   ├── foto-karton.jpg             # Foto produk (card & mega menu)
│   ├── foto-pallet.jpg
│   └── foto-siku.jpg
│
├── src/
│   ├── assets/                     # Aset internal yang di-import via Vite
│   │
│   ├── components/                 # Komponen UI reusable lintas halaman
│   │   ├── ui/                     # Primitif visual / efek (pola Magic UI)
│   │   │   └── pixel-image.jsx     # Efek pixel reveal pada gambar
│   │   ├── Navbar.jsx              # Navbar + mega menu "Produk" (2 tab)
│   │   ├── Footer.jsx              # Footer situs (features strip + copyright)
│   │   ├── ScrollReveal.jsx        # Wrapper animasi fade-in saat scroll
│   │   └── ProductCard.jsx         # Card produk flip 3D (Quick View)
│   │
│   ├── data/                       # SINGLE SOURCE OF TRUTH konten situs
│   │   ├── navigationData.js       # Link nav, kategori mega menu, helper waLink()
│   │   ├── homeData.js             # Hero badges, PRODUCTS (+specs), stats
│   │   ├── contactData.js          # Kontak, sosmed, LOCATIONS_DATA (+map embed)
│   │   └── footerData.js           # Features strip footer
│   │
│   ├── pages/                      # Komponen halaman (1 file = 1 halaman)
│   │   └── Home.jsx                # Landing page: Hero, Produk, Tentang, Kontak
│   │
│   ├── App.jsx                     # Root: komposisi Navbar + <main> + Footer
│   ├── main.jsx                    # Entry point render ReactDOM
│   └── index.css                   # Style global: animasi, scrollbar, flip card
│
├── index.html                      # Template HTML + meta SEO
├── vite.config.js                  # Konfigurasi Vite (+ alias bila diaktifkan)
├── package.json                    # Dependencies & scripts
└── README.md                       # Dokumentasi ini
```

## 🧭 Konvensi Code (WAJIB dibaca contributor)

1. **Data & konten TIDAK boleh hardcode di komponen.**
   Semua teks, produk, kontak, sosmed, dan URL lives di `src/data/*.js`.
   Komponen hanya render + logic UI.
2. **Penempatan komponen:**
   - `components/` → komponen reusable lintas halaman (Navbar, Footer, dll.)
   - `components/ui/` → primitif visual/efek murni (pixel-image, dll.)
   - `pages/` → komponen halaman; 1 file = 1 route/halaman
3. **Naming:**
   - Komponen: `PascalCase.jsx`
   - File data: `camelCase + Data.js` (contoh: `homeData.js`)
   - Export data: `SCREAMING_SNAKE_CASE` (contoh: `CONTACT_ITEMS`)
4. **Setiap file komponen/data punya header comment JSDoc** yang menjelaskan
   fungsi file, dipakai di mana, dan sumber datanya. Ikuti pola yang sudah ada
   di `ScrollReveal.jsx`, `ProductCard.jsx`, dan `Home.jsx`.
5. **CSS custom global** hanya boleh di `src/index.css` (jangan `<style>` inline di JSX).
6. **Animasi scroll reveal** pakai wrapper `<ScrollReveal>` (sekali tampil, tidak repeat).

## 🎨 Brand Guidelines (warna tema)

| Warna            | Hex       | Pemakaian                          |
|------------------|-----------|------------------------------------|
| Biru dongker     | `#0a1428` | Background hero/panel, teks utama  |
| Biru dongker 2   | `#172554` | Gradient partner hero              |
| Merah brand      | `#c2182b` | Aksen, tombol primer, ikon         |
| Merah gelap      | `#a01526` | Hover tombol primer                |
| Kuning aksen     | `#eab308` | Highlight teks di background gelap |
| Abu teks         | `#64748b` | Teks sekunder di background terang |

## 🔗 URL Eksternal Penting

| Keperluan        | URL                                                    |
|------------------|--------------------------------------------------------|
| Pin Google Maps  | https://maps.app.goo.gl/LV73HXgJHfVhTJpi9              |
| WhatsApp marketing | https://wa.me/6281315669699                          |
| Email            | mailto:marketing.arthamitra@gmail.com                  |

> Catatan: link share `maps.app.goo.gl` TIDAK bisa dipakai di `<iframe>`.
> Untuk embed peta gunakan format `?q=...&output=embed` yang ada di
> `src/data/contactData.js` (field `mapUrl`).

## ➕ Cara Update Konten

| Ingin mengubah...                    | Edit file                        |
|--------------------------------------|----------------------------------|
| Produk & spesifikasi (card flip)     | `src/data/homeData.js`           |
| Menu mega "Produk" & tab aplikasi    | `src/data/navigationData.js`     |
| Kontak, sosmed, lokasi & peta        | `src/data/contactData.js`        |
| Features strip footer                | `src/data/footerData.js`         |
| Foto produk                          | ganti file di `public/` (nama tetap) |

## 📦 Aset yang WAJIB ada di `public/`

`logo-artha.png`, `foto-karton.jpg`, `foto-pallet.jpg`, `foto-siku.jpg`
(bila hilang, UI memakai fallback placeholder otomatis).
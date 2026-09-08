/**
 * footerData.js
 * -------------
 * SINGLE SOURCE OF TRUTH untuk konten Footer (src/components/Footer.jsx).
 * Berisi: features strip, quick links navigasi, dan daftar link produk.
 *
 * Catatan: data kontak & sosial media footer TIDAK di sini —
 * ambil dari src/data/contactData.js (FOOTER_CONTACT_INFO & SOCIAL_LINKS)
 * biar tidak ada duplikasi data.
 */
import { FaTruckFast, FaBoxesPacking, FaUserTie, FaHandshake } from 'react-icons/fa6';

// Features strip (4 keunggulan di bagian paling atas footer)
export const FEATURES = [
  { icon: FaTruckFast, title: "PENGIRIMAN", sub: "Cepat & Tepat" },
  { icon: FaBoxesPacking, title: "STOK TERSEDIA", sub: "Siap Kirim" },
  { icon: FaUserTie, title: "LAYANAN", sub: "Profesional" },
  { icon: FaHandshake, title: "KEPUASAN ANDA", sub: "Prioritas Kami" }
];

// Link navigasi cepat (kolom "Navigasi")
export const QUICK_LINKS = [
  { name: 'Beranda', href: '#beranda' },
  { name: 'Produk', href: '#produk' },
  { name: 'Tentang Kami', href: '#tentang' },
  { name: 'Kontak', href: '#kontak' }
];

// Daftar produk perusahaan (kolom "Produk Kami")
export const PRODUCT_LINKS = [
  { name: 'Karton Box', href: '#produk' },
  { name: 'Pallet Karton', href: '#produk' },
  { name: 'Siku Karton', href: '#produk' },
  { name: 'Custom Packaging', href: '#kontak' }
];
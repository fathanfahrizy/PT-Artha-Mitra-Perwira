/**
 * contactData.js
 * --------------
 * SINGLE SOURCE OF TRUTH untuk semua data kontak perusahaan.
 * Dipakai oleh: src/pages/Home.jsx (panel kontak & peta)
 *               src/components/Footer.jsx (kolom "Hubungi Kami" & sosmed)
 *
 * URL PENTING:
 * - maps.app.goo.gl = link share resmi pin perusahaan (untuk semua link klik)
 * - mapUrl (?q=...&output=embed) = format embed untuk iframe (share link
 *   tidak bisa dipakai di iframe karena diblokir Google)
 */
import {
  FaLocationDot, FaPhone, FaWhatsapp, FaEnvelope, FaClock,
  FaFacebookF, FaInstagram, FaLinkedinIn, FaYoutube
} from 'react-icons/fa6';

// Informasi kontak perusahaan (Card Kontak Home - layout korporat 4 kolom)
export const CONTACT_ITEMS = [
  {
    icon: FaLocationDot,
    label: 'Alamat Pabrik',
    value: 'Kp Pelawad, Ciruas, Kabupaten Serang, Banten 42182',
    sub: 'Dekat Jl. Raya Serang - Jakarta',
    href: 'https://maps.app.goo.gl/LV73HXgJHfVhTJpi9',
    external: true
  },
  {
    icon: FaPhone,
    label: 'Telepon Kantor',
    value: '(0254) 282524',
    sub: 'Senin - Sabtu, 08.00 - 17.00 WIB',
    href: 'tel:+62254282524',
    external: false
  },
  {
    icon: FaWhatsapp,
    label: 'WhatsApp Marketing',
    value: '0813-1566-9699',
    sub: 'Respon cepat pada jam kerja',
    href: 'https://wa.me/6281315669699',
    external: true
  },
  {
    icon: FaEnvelope,
    label: 'Email Perusahaan',
    value: 'marketing.arthamitra@gmail.com',
    sub: 'Penawaran & dokumen resmi',
    href: 'mailto:marketing.arthamitra@gmail.com',
    external: false
  }
];

// Sosial media perusahaan (ganti href dengan akun asli nanti)
export const SOCIAL_LINKS = [
  { icon: FaFacebookF, href: 'https://www.facebook.com/', label: 'Facebook' },
  { icon: FaInstagram, href: 'https://www.instagram.com/', label: 'Instagram' },
  { icon: FaLinkedinIn, href: 'https://www.linkedin.com/', label: 'LinkedIn' },
  { icon: FaYoutube, href: 'https://www.youtube.com/', label: 'YouTube' }
];

// List kontak versi FOOTER (kolom "Hubungi Kami" di Footer.jsx)
export const FOOTER_CONTACT_INFO = [
  { icon: FaLocationDot, text: 'Kp Pelawad, Ciruas, Kabupaten Serang, Banten 42182', href: 'https://maps.app.goo.gl/LV73HXgJHfVhTJpi9', external: true },
  { icon: FaPhone, text: '(0254) 282524', href: 'tel:+62254282524', external: false },
  { icon: FaWhatsapp, text: '0813-1566-9699', href: 'https://wa.me/6281315669699', external: true },
  { icon: FaEnvelope, text: 'marketing.arthamitra@gmail.com', href: 'mailto:marketing.arthamitra@gmail.com', external: false },
  { icon: FaClock, text: 'Senin - Sabtu: 08.00 - 17.00 WIB', href: null, external: false }
];

// Data Lokasi Perusahaan (Logic dari Lokasi.jsx)
// mapUrl = format embed untuk iframe (pin sama persis dengan link share)
// directionUrl = link share resmi perusahaan untuk tombol rute
export const LOCATIONS_DATA = [
  {
    id: 1,
    title: "Pabrik & Gudang Utama (Serang)",
    address: "Kp Pelawad, Ciruas, Kabupaten Serang, Banten 42182 (Dekat Jl. Raya Serang - Jakarta)",
    phone: "(0254) 282524",
    mapUrl: "https://www.google.com/maps?q=PT+ARTHA+MITRA+PERWIRA,+RT.002+RW002,+Pelawad,+Ciruas,+Serang+Regency,+Banten+42183&output=embed",
    directionUrl: "https://maps.app.goo.gl/LV73HXgJHfVhTJpi9"
  }
];
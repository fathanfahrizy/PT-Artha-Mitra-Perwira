/**
 * homeData.js
 * -----------
 * SINGLE SOURCE OF TRUTH untuk konten halaman Home.
 * Berisi: HERO_BADGES, PRODUCTS (card flip), STATS, FEATURES_CAROUSEL.
 * Specs didefinisikan SEKALI per produk lalu dipakai bareng oleh
 * PRODUCTS (card flip) dan FEATURES_CAROUSEL (quick view di carousel)
 * biar gak ada duplikasi data.
 */
import {
  FaShieldHalved, FaLeaf, FaAward, FaMedal, FaIndustry, FaUsers, FaBolt,
  FaLayerGroup, FaRulerCombined, FaBoxOpen, FaWeightHanging, FaGlobe,
  FaArrowsLeftRight, FaPrint, FaTruckFast, FaClock
} from 'react-icons/fa6';

// Badges di Hero Section
export const HERO_BADGES = [
  { icon: FaShieldHalved, text: "KUAT & TAHAN LAMA" },
  { icon: FaLeaf, text: "RAMAH LINGKUNGAN" },
  { icon: FaAward, text: "KUALITAS TERJAMIN" }
];

// --- Specs produk (dipakai PRODUCTS & FEATURES_CAROUSEL) ---
const SPECS_KARTON_BOX = [
  { icon: FaLayerGroup, label: 'Material', value: 'Kraft K150 - K350' },
  { icon: FaRulerCombined, label: 'Ketebalan', value: '3 - 7 mm (single / double wall)' },
  { icon: FaBoxOpen, label: 'Ukuran', value: 'Custom sesuai permintaan' }
];

const SPECS_PALLET_KARTON = [
  { icon: FaWeightHanging, label: 'Kapasitas Beban', value: 's/d 1.500 kg' },
  { icon: FaGlobe, label: 'Standar Ekspor', value: 'ISPM 15 (bebas fumigasi)' },
  { icon: FaRulerCombined, label: 'Ukuran', value: '1200 x 1000 mm / custom' }
];

const SPECS_SIKU_KARTON = [
  { icon: FaRulerCombined, label: 'Ketebalan', value: '3 - 5 mm' },
  { icon: FaArrowsLeftRight, label: 'Panjang', value: 's/d 2.400 mm' },
  { icon: FaShieldHalved, label: 'Fungsi', value: 'Edge protection & stacking' }
];

const SPECS_PERCETAKAN = [
  { icon: FaPrint, label: 'Teknologi', value: 'Offset & digital print' },
  { icon: FaLayerGroup, label: 'Material', value: 'Art carton, HVS, kraft' },
  { icon: FaShieldHalved, label: 'Finishing', value: 'Laminasi, UV, pond' }
];

const SPECS_CONSUMABLE = [
  { icon: FaIndustry, label: 'Produk', value: 'PE foam, bubble, roda lory' },
  { icon: FaLayerGroup, label: 'Material', value: 'Grade industri' },
  { icon: FaBoxOpen, label: 'Ketersediaan', value: 'Ready stock' }
];

const SPECS_EKSPOR = [
  { icon: FaGlobe, label: 'Standar', value: 'ISPM 15 internasional' },
  { icon: FaShieldHalved, label: 'Dokumen', value: 'Sertifikat lengkap' },
  { icon: FaTruckFast, label: 'Jangkauan', value: 'Domestik & ekspor' }
];

const SPECS_PENGIRIMAN = [
  { icon: FaTruckFast, label: 'Armada', value: 'Armada sendiri' },
  { icon: FaClock, label: 'Lead Time', value: 'On-time delivery' },
  { icon: FaGlobe, label: 'Area', value: 'Banten, Jakarta & sekitarnya' }
];

// Data produk untuk card flip 3D
export const PRODUCTS = [
  {
    title: "KARTON BOX",
    image: "/images/foto-karton.webp",
    tagline: 'Kuat, presisi, dan siap custom untuk semua kebutuhan pengemasan industri Anda.',
    specs: SPECS_KARTON_BOX
  },
  {
    title: "PALLET KARTON",
    image: "/images/foto-pallet.webp",
    tagline: 'Ringan, tahan beban berat, dan aman untuk kebutuhan ekspor.',
    specs: SPECS_PALLET_KARTON
  },
  {
    title: "SIKU KARTON",
    image: "/images/foto-siku.webp",
    tagline: 'Pelindung sudut produk agar tetap aman selama pengiriman dan stacking.',
    specs: SPECS_SIKU_KARTON
  }
];

// Statistik keunggulan perusahaan
export const STATS = [
  { icon: FaMedal, text: "Pengalaman 10+ Tahun" },
  { icon: FaIndustry, text: "Produksi Berkualitas" },
  { icon: FaUsers, text: "Tim Profesional" },
  { icon: FaBolt, text: "Layanan Cepat" }
];

// Data untuk FeatureCarousel (showcase + quick view flip per slide)
export const FEATURES_CAROUSEL = [
  {
    id: "karton-box",
    label: "Karton Box",
    icon: FaBoxOpen,
    image: "/images/foto-karton.webp",
    description: "Kemasan karton bergelombang berkualitas tinggi, siap custom untuk semua kebutuhan industri Anda.",
    specs: SPECS_KARTON_BOX
  },
  {
    id: "pallet-karton",
    label: "Pallet Karton",
    icon: FaWeightHanging,
    image: "/images/foto-pallet.webp",
    description: "Pallet honeycomb ringan & kuat, bebas fumigasi ISPM 15 untuk kebutuhan ekspor internasional.",
    specs: SPECS_PALLET_KARTON
  },
  {
    id: "siku-karton",
    label: "Siku Karton",
    icon: FaShieldHalved,
    image: "/images/foto-siku.webp",
    description: "Paper angle pelindung sudut produk, menjaga keamanan selama pengiriman dan stacking tinggi.",
    specs: SPECS_SIKU_KARTON
  },
  {
    id: "percetakan",
    label: "Percetakan Umum",
    icon: FaPrint,
    image: "/images/kondisi-gudang.webp",
    description: "Surat jalan, inner box, kartu nama, kop surat, company profile — semua kebutuhan cetak bisnis Anda.",
    specs: SPECS_PERCETAKAN
  },
  {
    id: "consumable",
    label: "Consumable Production",
    icon: FaIndustry,
    image: "/images/foto-pe-foam-besar.webp",
    description: "PE Foam, plastik bubble, roda lory, bucket impraboard — pendukung operasional pabrik Anda.",
    specs: SPECS_CONSUMABLE
  },
  {
    id: "pengiriman",
    label: "Pengiriman Cepat",
    icon: FaTruckFast,
    image: "/images/pengiriman-barang.webp",
    description: "Tepat waktu dengan armada sendiri untuk area Banten, Jakarta, dan sekitarnya.",
    specs: SPECS_PENGIRIMAN
  }
];
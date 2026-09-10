import {
  FaShieldHalved, FaLeaf, FaAward, FaMedal, FaIndustry, FaUsers, FaBolt,
  FaLayerGroup, FaRulerCombined, FaBoxOpen, FaWeightHanging, FaGlobe, FaArrowsLeftRight
} from 'react-icons/fa6';

// Badges di Hero Section
export const HERO_BADGES = [
  { icon: FaShieldHalved, text: "KUAT & TAHAN LAMA" },
  { icon: FaLeaf, text: "RAMAH LINGKUNGAN" },
  { icon: FaAward, text: "KUALITAS TERJAMIN" }
];

// Data produk untuk card flip 3D
export const PRODUCTS = [
  {
    title: "KARTON BOX",
    image: "/foto-karton.jpg",
    tagline: 'Kuat, presisi, dan siap custom untuk semua kebutuhan pengemasan industri Anda.',
    specs: [
      { icon: FaLayerGroup, label: 'Material', value: 'Kraft K150 - K350' },
      { icon: FaRulerCombined, label: 'Ketebalan', value: '3 - 7 mm (single / double wall)' },
      { icon: FaBoxOpen, label: 'Ukuran', value: 'Custom sesuai permintaan' }
    ]
  },
  {
    title: "PALLET KARTON",
    image: "/foto-pallet.jpg",
    tagline: 'Ringan, tahan beban berat, dan aman untuk kebutuhan ekspor.',
    specs: [
      { icon: FaWeightHanging, label: 'Kapasitas Beban', value: 's/d 1.500 kg' },
      { icon: FaGlobe, label: 'Standar Ekspor', value: 'ISPM 15 (bebas fumigasi)' },
      { icon: FaRulerCombined, label: 'Ukuran', value: '1200 x 1000 mm / custom' }
    ]
  },
  {
    title: "SIKU KARTON",
    image: "/foto-siku.jpg",
    tagline: 'Pelindung sudut produk agar tetap aman selama pengiriman dan stacking.',
    specs: [
      { icon: FaRulerCombined, label: 'Ketebalan', value: '3 - 5 mm' },
      { icon: FaArrowsLeftRight, label: 'Panjang', value: 's/d 2.400 mm' },
      { icon: FaShieldHalved, label: 'Fungsi', value: 'Edge protection & stacking' }
    ]
  }
];

// Statistik keunggulan perusahaan
export const STATS = [
  { icon: FaMedal, text: "Pengalaman 10+ Tahun" },
  { icon: FaIndustry, text: "Produksi Berkualitas" },
  { icon: FaUsers, text: "Tim Profesional" },
  { icon: FaBolt, text: "Layanan Cepat" }
];
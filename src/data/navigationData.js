// Helper link WhatsApp dengan nama produk/kebutuhan
export const waLink = (name) =>
  `https://wa.me/6281315669699?text=${encodeURIComponent(`Halo, saya tertarik dengan ${name}. Mohon informasi penawarannya.`)}`;

// Link navigasi biasa (BERANDA DIHAPUS sesuai permintaan)
export const navLinks = [
  { name: 'Tentang', href: '#tentang' },
  { name: 'Kontak', href: '#kontak' },
];

// Data Mega Menu Produk (gaya Range/Application ala Massey Ferguson)
export const MENU_CATEGORIES = [
  {
    id: 'karton-box',
    name: 'Karton Box',
    image: '/foto-karton.jpg',
    models: [
      {
        id: 'rsc',
        name: 'Regular Slotted Container (RSC)',
        tagline: 'Tipe box paling umum untuk pengiriman industri & pergudangan.',
        specs: [
          { label: 'Material', value: 'Kraft K150 - K350' },
          { label: 'Flute', value: 'B / C / BC' },
          { label: 'Ukuran', value: 'Custom' }
        ]
      },
      {
        id: 'die-cut',
        name: 'Die-Cut Box',
        tagline: 'Box presisi dengan potongan khusus untuk tampilan retail.',
        specs: [
          { label: 'Material', value: 'Kraft + Printing' },
          { label: 'Flute', value: 'B / E' },
          { label: 'Finishing', value: 'Custom print' }
        ]
      },
      {
        id: 'telescopic',
        name: 'Telescopic Box',
        tagline: 'Box dua bagian untuk produk dengan tinggi bervariasi.',
        specs: [
          { label: 'Model', value: 'Tutup & dasar terpisah' },
          { label: 'Flute', value: 'C / BC' },
          { label: 'Ukuran', value: 'Custom' }
        ]
      },
      {
        id: 'wrap-around',
        name: 'Wrap Around Box',
        tagline: 'Box pembungkus untuk lini packing kecepatan tinggi.',
        specs: [
          { label: 'Aplikasi', value: 'Machine packing' },
          { label: 'Flute', value: 'B / E' },
          { label: 'Ukuran', value: 'Custom' }
        ]
      }
    ]
  },
  {
    id: 'pallet-karton',
    name: 'Pallet Karton',
    image: '/foto-pallet.jpg',
    models: [
      {
        id: 'pallet-standar',
        name: 'Pallet Karton Standar',
        tagline: 'Pallet ringan dan ekonomis untuk distribusi domestik.',
        specs: [
          { label: 'Kapasitas Beban', value: 's/d 1.000 kg' },
          { label: 'Ukuran', value: '1200 x 1000 mm' },
          { label: 'Berat', value: '± 4 kg' }
        ]
      },
      {
        id: 'pallet-heavy',
        name: 'Pallet Karton Heavy Duty',
        tagline: 'Konstruksi berlapis untuk beban berat & stacking tinggi.',
        specs: [
          { label: 'Kapasitas Beban', value: 's/d 1.500 kg' },
          { label: 'Lapisan', value: 'Multi-wall' },
          { label: 'Ukuran', value: 'Custom' }
        ]
      },
      {
        id: 'pallet-ekspor',
        name: 'Pallet Karton Ekspor',
        tagline: 'Bebas fumigasi, memenuhi standar ekspor internasional.',
        specs: [
          { label: 'Standar', value: 'ISPM 15' },
          { label: 'Kapasitas Beban', value: 's/d 1.200 kg' },
          { label: 'Dokumen', value: 'Sertifikat tersedia' }
        ]
      }
    ]
  },
  {
    id: 'siku-karton',
    name: 'Siku Karton',
    image: '/foto-siku.jpg',
    models: [
      {
        id: 'siku-50',
        name: 'Siku Karton 50 x 50 mm',
        tagline: 'Proteksi sudut standar untuk karton dan palet.',
        specs: [
          { label: 'Ketebalan', value: '3 - 5 mm' },
          { label: 'Panjang', value: 's/d 2.000 mm' },
          { label: 'Warna', value: 'Natural kraft' }
        ]
      },
      {
        id: 'siku-100',
        name: 'Siku Karton 100 x 100 mm',
        tagline: 'Penopang sudut ekstra untuk beban stacking tinggi.',
        specs: [
          { label: 'Ketebalan', value: '4 - 6 mm' },
          { label: 'Panjang', value: 's/d 2.400 mm' },
          { label: 'Warna', value: 'Natural kraft' }
        ]
      },
      {
        id: 'siku-custom',
        name: 'Siku Karton Custom',
        tagline: 'Dimensi dan printing sesuai kebutuhan brand Anda.',
        specs: [
          { label: 'Dimensi', value: 'Sesuai permintaan' },
          { label: 'Printing', value: 'Opsional' },
          { label: 'MOQ', value: 'Fleksibel' }
        ]
      }
    ]
  }
];

// Data tab Aplikasi Industri
export const MENU_APPLICATIONS = [
  {
    id: 'logistik',
    name: 'Logistik & Ekspor',
    desc: 'Pallet dan box karton bebas fumigasi (ISPM 15) untuk kebutuhan pengiriman domestik maupun ekspor, aman untuk kontainer dan stacking gudang.'
  },
  {
    id: 'fnb',
    name: 'Makanan & Minuman',
    desc: 'Kemasan karton food-grade safe dengan ventilasi sesuai kebutuhan produk konsumsi, menjaga kebersihan dan keamanan selama distribusi.'
  },
  {
    id: 'elektronik',
    name: 'Elektronik & Komponen',
    desc: 'Proteksi ganda menggunakan siku karton dan lapisan pelindung untuk barang sensitif terhadap benturan selama pengiriman.'
  },
  {
    id: 'retail',
    name: 'Retail & E-Commerce',
    desc: 'Die-cut box dengan printing brand untuk pengalaman unboxing yang profesional dan meningkatkan citra produk Anda.'
  }
];
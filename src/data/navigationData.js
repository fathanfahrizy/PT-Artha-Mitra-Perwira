// Helper link WhatsApp dengan nama produk/kebutuhan
export const waLink = (name) =>
  `https://wa.me/6281315669699?text=${encodeURIComponent(`Halo, saya tertarik dengan ${name}. Mohon informasi penawarannya.`)}`;

// Link navigasi sampingan (Beranda & Produk ditangani berurutan di Navbar)
export const navLinks = [
  { name: 'Tentang', href: '/#tentang' },
  { name: 'Galeri', href: '/galeri' },
  { name: 'Kontak', href: '/#kontak' },
];

// Data Mega Menu Produk (gaya Range/Application ala Massey Ferguson)
export const MENU_CATEGORIES = [
  {
    id: 'karton-box',
    name: 'Karton Box',
    image: '/images/foto-karton.webp',
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
    image: '/images/foto-pallet.webp',
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
    image: '/images/foto-siku.webp',
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
  },
  {
    id: 'paper-core',
    name: 'Paper Core',
    image: '/images/foto-paper-core.webp',
    models: [
      {
        id: 'paper-core-std',
        name: 'Paper Core Standar',
        tagline: 'Solusi tube lilitan kertas kraft presisi tinggi.',
        specs: [
          { label: 'Material', value: 'Kraft Paper' },
          { label: 'Diameter', value: 'Custom' },
          { label: 'Sifat', value: 'Kuat & Presisi' }
        ]
      }
    ]
  },
  {
    id: 'partisi-karton',
    name: 'Partisi Karton',
    image: '/images/foto-partisi-karton.webp',
    models: [
      {
        id: 'partisi-std',
        name: 'Partisi Karton Grid',
        tagline: 'Sekat pelindung interior box untuk mencegah benturan.',
        specs: [
          { label: 'Bentuk', value: 'Interlock grid' },
          { label: 'Ukuran', value: 'Custom' },
          { label: 'Fungsi', value: 'Proteksi produk' }
        ]
      },
      {
          id: 'partisi-lubang',
          name: 'Partisi Lubang',
          tagline: 'Partisi dengan lubang untuk ventilasi dan mengurangi berat.',
          specs: [
              { label: 'Jenis', value: 'Partisi Lubang' },
              { label: 'Ukuran', value: 'Custom' },
              { label: 'Warna', value: 'Natural kraft' }
          ]
      },
      {
          id: 'partisi-sisip',
          name: 'Partisi Sisip',
          tagline: 'Partisi dengan sisipan untuk mengurangi berat.',
          specs: [
              { label: 'Jenis', value: 'Partisi Sisip' },
              { label: 'Ukuran', value: 'Custom' },
              { label: 'Warna', value: 'Natural kraft' }
          ]
      }
    ]
  },
  {
    id: 'pe-foam',
    name: 'PE Foam',
    image: '/images/foto-pe-foam.webp',
    models: [
      {
        id: 'pe-foam-std',
        name: 'PE Foam Busa Pelindung',
        tagline: 'Busa pelindung elastis anti gores untuk barang presisi.',
        specs: [
          { label: 'Ketebalan', value: '1 mm - 10 mm' },
          { label: 'Format', value: 'Roll / Sheet' },
          { label: 'Sifat', value: 'Peredam benturan' }
        ]
      }
    ]
  },
  {
    id: 'pp-board',
    name: 'PP Board',
    image: '/images/foto-pp-board.webp',
    models: [
      {
        id: 'pp-board-std',
        name: 'PP Board Impraboard',
        tagline: 'Lembaran plastik berongga tangguh, anti air & tahan lama.',
        specs: [
          { label: 'Material', value: 'Polypropylene' },
          { label: 'Keunggulan', value: 'Anti air' },
          { label: 'Sifat', value: 'Reusable' }
        ]
      }
    ]
  }
];

// Data tab Aplikasi Industri
export const MENU_APPLICATIONS = [ 
  {
    id: 'percetakan-umum',
    name: 'Percetakan Umum',
    desc: 'Kami melayani cetak berbagai kebutuhan bisnis dan personal dengan kualitas terbaik dan presisi tinggi, mulai dari perlengkapan logistik dan administrasi seperti surat jalan dan kop surat, hingga solusi kemasan produk seperti inner box dan box makanan yang menarik serta aman. Selain itu, kami juga siap memenuhi kebutuhan identitas perusahaan dan promosi Anda lewat pencetakan kartu nama profesional dan company profile, hingga penyediaan undangan untuk berbagai acara penting Anda.'
  },
  {
    id: 'barang-general',
    name: 'Barang General',
    desc: 'Kami menyediakan berbagai kebutuhan umum untuk mendukung kelancaran operasional bisnis Anda. Mulai dari PE Foam dan Plastik Bubble untuk perlindungan barang selama pengiriman, Roda Lory untuk mobilitas logistik yang efisien, hingga Bucket Impraboard untuk kebutuhan penyimpanan dan presentasi produk yang solid dan profesional.'
  }
];
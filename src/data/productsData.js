import {
    FaShieldHalved, FaLayerGroup, FaRulerCombined, FaBoxOpen, FaWeightHanging, FaGlobe, FaArrowsLeftRight,
    FaCubes, FaWater, FaCompress, FaRecycle
} from 'react-icons/fa6';

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

const SPECS_PAPER_CORE = [
    { icon: FaLayerGroup, label: 'Material', value: 'Kraft Paper Berkualitas' },
    { icon: FaRulerCombined, label: 'Diameter & Ketebalan', value: 'Custom sesuai permintaan' },
    { icon: FaRecycle, label: 'Sifat', value: 'Kuat, presisi, dan ramah lingkungan' }
];

const SPECS_PARTISI_KARTON = [
    { icon: FaCubes, label: 'Bentuk', value: 'Sekat interlock / custom grid' },
    { icon: FaRulerCombined, label: 'Ukuran', value: 'Sesuai dimensi box kemasan' },
    { icon: FaShieldHalved, label: 'Fungsi', value: 'Mencegah gesekan antar produk' }
];

const SPECS_PE_FOAM = [
    { icon: FaRulerCombined, label: 'Ketebalan', value: '1 mm - 10 mm (Custom)' },
    { icon: FaLayerGroup, label: 'Format', value: 'Roll, Lembaran, atau Kantong' },
    { icon: FaCompress, label: 'Sifat', value: 'Peredam benturan & anti gores' }
];

const SPECS_PP_BOARD = [
    { icon: FaLayerGroup, label: 'Material', value: 'Polypropylene (PP) Corrugated' },
    { icon: FaWater, label: 'Keunggulan', value: 'Anti air & tahan bahan kimia' },
    { icon: FaRecycle, label: 'Sifat', value: 'Dapat dicuci dan digunakan berulang' }
];

const SPECS_PERCETAKAN_UMUM = [
    { icon: FaLayerGroup, label: 'Layanan Cetak', value: 'Surat Jalan, Inner Box, Box Makanan, Kop Surat, dll.' },
    { icon: FaRulerCombined, label: 'Mesin & Presisi', value: 'Cetak Offset & Digital Modern' },
    { icon: FaShieldHalved, label: 'Finishing', value: 'Laminasi Doff/Glossy, Foil, Die-cut' }
];

const SPECS_BARANG_GENERAL = [
    { icon: FaCubes, label: 'Varian Produk', value: 'PE Foam, Roda Lory, Bubble Wrap, Bucket Impraboard' },
    { icon: FaLayerGroup, label: 'Aplikasi', value: 'Perlengkapan Kemasan & Logistik Industri' },
    { icon: FaShieldHalved, label: 'Kualitas', value: 'Standar Industri & Daya Tahan Tinggi' }
];

export const PRODUCTS = [
    {
        slug: "karton-box",
        title: "KARTON BOX",
        image: "/images/foto-karton.webp",
        tagline: 'Kuat, presisi, dan siap custom untuk semua kebutuhan pengemasan industri Anda.',
        description: 'Karton Box kami diproduksi menggunakan bahan Kraft berkualitas tinggi yang memberikan perlindungan maksimal terhadap produk Anda. Cocok untuk kebutuhan logistik, distribusi e-commerce, maupun display retail. Kami menyediakan kustomisasi penuh dari segi dimensi, ketebalan (single/double wall), hingga desain printing untuk memperkuat identitas brand Anda.',
        specs: SPECS_KARTON_BOX,
        subCategories: [
            {
                id: 'rsc',
                name: 'Regular Slotted Container (RSC)',
                tagline: 'Tipe box paling umum untuk pengiriman industri & pergudangan.',
                image: '/images/foto-karton-box.webp',
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
                image: '/images/foto-karton.webp',
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
                image: '/images/foto-karton-box.webp',
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
                image: '/images/foto-karton.webp',
                specs: [
                    { label: 'Aplikasi', value: 'Machine packing' },
                    { label: 'Flute', value: 'B / E' },
                    { label: 'Ukuran', value: 'Custom' }
                ]
            }
        ]
    },
    {
        slug: "pallet-karton",
        title: "PALLET KARTON",
        image: "/images/foto-pallet.webp",
        tagline: 'Ringan, tahan beban berat, dan aman untuk kebutuhan ekspor.',
        description: 'Pallet Karton merupakan alternatif ramah lingkungan dan hemat biaya dibandingkan pallet kayu tradisional. Memenuhi standar ISPM 15 karena bebas dari hama dan jamur tanpa perlu perlakuan fumigasi, sehingga sangat ideal untuk kebutuhan ekspor. Desainnya yang ringan memangkas biaya pengiriman namun tetap mampu menahan beban statis hingga 1.500 kg.',
        specs: SPECS_PALLET_KARTON,
        subCategories: [
            {
                id: 'pallet-standar',
                name: 'Pallet Karton Standar',
                tagline: 'Pallet ringan dan ekonomis untuk distribusi domestik.',
                image: '/images/foto-pallet.webp',
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
                image: '/images/foto-paper-pallet.webp',
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
                image: '/images/foto-pallet.webp',
                specs: [
                    { label: 'Standar', value: 'ISPM 15' },
                    { label: 'Kapasitas Beban', value: 's/d 1.200 kg' },
                    { label: 'Dokumen', value: 'Sertifikat tersedia' }
                ]
            }
        ]
    },
    {
        slug: "siku-karton",
        title: "SIKU KARTON",
        image: "/images/foto-siku.webp",
        tagline: 'Pelindung sudut produk agar tetap aman selama pengiriman dan stacking.',
        description: 'Siku Karton (Edge Protector) dirancang untuk melindungi tepian produk dari kerusakan akibat benturan atau ikatan tali strapping yang terlalu kencang. Penggunaan siku karton secara signifikan meningkatkan stabilitas palet saat proses tumpukan (stacking), memastikan produk tiba di tujuan dalam kondisi sempurna tanpa penyok.',
        specs: SPECS_SIKU_KARTON,
        subCategories: [
            {
                id: 'siku-50',
                name: 'Siku Karton 50 x 50 mm',
                tagline: 'Proteksi sudut standar untuk karton dan palet.',
                image: '/images/foto-siku.webp',
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
                image: '/images/foto-siku.webp',
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
                image: '/images/foto-siku.webp',
                specs: [
                    { label: 'Dimensi', value: 'Sesuai permintaan' },
                    { label: 'Printing', value: 'Opsional' },
                    { label: 'MOQ', value: 'Fleksibel' }
                ]
            }
        ]
    },
    {
        slug: "paper-core",
        title: "PAPER CORE",
        image: "/images/foto-paper-core.webp",
        tagline: 'Solusi gulungan (tube) serbaguna untuk benang, kain, lakban, dan plastik.',
        description: 'Paper Core kami terbuat dari lilitan kertas kraft presisi tinggi yang menghasilkan tabung dengan tingkat kepadatan dan kekuatan tekan yang superior. Produk ini sangat esensial sebagai silinder inti untuk penggulungan berbagai material industri seperti tekstil, plastik film, lakban, hingga plat metal ringan.',
        specs: SPECS_PAPER_CORE
    },
    {
        slug: "partisi-karton",
        title: "PARTISI KARTON",
        image: "/images/foto-partisi-karton.webp",
        tagline: 'Sekat pelindung interior box untuk menjaga produk tetap utuh tanpa benturan.',
        description: 'Partisi Karton berfungsi sebagai sekat pemisah di dalam kotak utama untuk mencegah produk saling berbenturan dan lecet selama transit. Sangat direkomendasikan untuk pengemasan produk pecah belah, komponen otomotif presisi, botol kaca, atau barang elektronik. Kami menyesuaikan grid dan ketebalan partisi sesuai dengan dimensi produk Anda.',
        specs: SPECS_PARTISI_KARTON,
        subCategories: [
            {
                id: 'partisi-grid',
                name: 'Partisi Grid',
                tagline: 'Partisi dengan grid untuk mengurangi berat.',
                image: '/images/foto-partisi-karton.webp',
                specs: [
                    { label: 'Jenis', value: 'Partisi Grid' },
                    { label: 'Ukuran', value: 'Custom' },
                    { label: 'Warna', value: 'Natural kraft' }
                ]
            },
            {
                id: 'partisi-lubang',
                name: 'Partisi Lubang',
                tagline: 'Partisi dengan lubang untuk ventilasi dan mengurangi berat.',
                image: '/images/foto-partisi-paper-2.webp',
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
                image: '/images/foto-partisi-paper.webp',
                specs: [
                    { label: 'Jenis', value: 'Partisi Sisip' },
                    { label: 'Ukuran', value: 'Custom' },
                    { label: 'Warna', value: 'Natural kraft' }
                ]
            }
        ]
    },
    {
        slug: "pe-foam",
        title: "PE FOAM",
        image: "/images/foto-pe-foam-besar.webp",
        tagline: 'Busa pelindung ringan dan elastis, anti gores untuk permukaan barang presisi.',
        description: 'Polyethylene (PE) Foam adalah material pelindung superior dengan struktur sel tertutup yang memberikan daya redam kejut yang sangat baik. Permukaannya yang halus tidak abrasif menjadikannya pilihan utama untuk melindungi permukaan sensitif dari goresan, seperti layar elektronik, mebel kayu berpelitur, dan suku cadang presisi.',
        specs: SPECS_PE_FOAM
    },
    {
        slug: "pp-board",
        title: "PP BOARD",
        image: "/images/foto-pp-board.webp",
        tagline: 'Lembaran plastik berongga yang tangguh, anti air, dan tahan lama.',
        description: 'PP Board (Impraboard) adalah lembaran polipropilena berongga bergelombang yang menawarkan daya tahan ekstra terhadap air, minyak, dan zat kimia ringan. Sangat serbaguna untuk berbagai aplikasi industri, mulai dari kemasan yang dapat dipakai ulang (returnable packaging), kotak penyimpan, hingga papan promosi (signage) yang tahan cuaca.',
        specs: SPECS_PP_BOARD
    },
    {
        slug: "percetakan-umum",
        title: "PERCETAKAN UMUM",
        image: "/images/proses-percetakan.webp",
        tagline: 'Layanan percetakan komersial & kemasan cetak berkualitas tinggi untuk berbagai kebutuhan bisnis Anda.',
        description: 'Kami melayani berbagai kebutuhan percetakan umum mulai dari Surat Jalan, Inner Box, Box Makanan, Kartu Nama, Kop Surat, Company Profile, Undangan, hingga cetakan promosi khusus. Menggunakan mesin cetak offset & digital modern untuk menjamin ketajaman warna, kualitas bahan, dan presisi hasil cetakan.',
        specs: SPECS_PERCETAKAN_UMUM,
        subCategories: [
            {
                id: 'inner-box-astons',
                name: 'Inner Box Aston Biru & Putih',
                tagline: 'Dus kemasan cetak presisi untuk obat, retail, & produk komersial.',
                image: '/images/aston-biru.webp',
                specs: [
                    { label: 'Material', value: 'Duplex / Ivory / Kraft' },
                    { label: 'Finishing', value: 'Varnish Glossy / Doff' },
                    { label: 'Cetak', value: 'Offset High Resolution' }
                ]
            },
            {
                id: 'kemasan-bankaesa',
                name: 'Box Branding Bank Aesa',
                tagline: 'Kemasan cetak kustom korporat & merchandise beridentitas kuat.',
                image: '/images/bankaesa.webp',
                specs: [
                    { label: 'Model', value: 'Custom Box Gift / Branding' },
                    { label: 'Cetak', value: 'Full Color Offset Printing' },
                    { label: 'Finishing', value: 'Laminasi Doff & Foil Accent' }
                ]
            },
            {
                id: 'box-emping-laksana',
                name: 'Box Kemasan Emping PD Laksana',
                tagline: 'Dus cetak makanan tradisional & oleh-oleh dengan perlindungan ekstra.',
                image: '/images/emping-pd-laksana.webp',
                specs: [
                    { label: 'Bahan', value: 'Ivory / Duplex Premium' },
                    { label: 'Fitur', value: 'Bahan Kokoh & Higienis' },
                    { label: 'Cetak', value: 'High Detail Graphic' }
                ]
            },
            {
                id: 'kemasan-fresia',
                name: 'Inner Box & Kemasan Retail Fresia',
                tagline: 'Dus produk retail elegan dengan estetika tinggi dan presisi bentuk.',
                image: '/images/fresia.webp',
                specs: [
                    { label: 'Material', value: 'Ivory / Art Carton' },
                    { label: 'Tipe Cut', value: 'Die-Cut Presisi' },
                    { label: 'Laminasi', value: 'Glossy / Matte Varnish' }
                ]
            },
            {
                id: 'box-ice-cream',
                name: 'Box Es Krim & Frozen Food',
                tagline: 'Kemasan khusus produk beku & kuliner tahan dingin bebas bocor.',
                image: '/images/ice-cream.webp',
                specs: [
                    { label: 'Bahan', value: 'Food Grade Moisture-Resistant' },
                    { label: 'Fitur', value: 'Tahan Dingin & Kelembaban' },
                    { label: 'Aplikasi', value: 'Es Krim, Frozen Food, Dessert' }
                ]
            },
            {
                id: 'kemasan-agrokimia',
                name: 'Kemasan Botol & Agrokimia',
                tagline: 'Box pelindung botol cairan pupuk, kimia, & sampel industri.',
                image: '/images/bimagro-50-ml.webp',
                specs: [
                    { label: 'Konstruksi', value: 'Single Wall / Duplex Tebal' },
                    { label: 'Fungsi', value: 'Proteksi botol & cairan' },
                    { label: 'Cetak', value: 'Full Color Offset' }
                ]
            },
            {
                id: 'box-kuliner',
                name: 'Box Makanan & Franchise Kebab',
                tagline: 'Dus makanan food-grade custom desain untuk resto, kebab, & catering.',
                image: '/images/kebab.webp',
                specs: [
                    { label: 'Bahan', value: 'Food Grade Paper (Greaseproof)' },
                    { label: 'Tipe', value: 'Lunch Box / Food Pail / Takeaway' },
                    { label: 'Fitur', value: 'Tahan minyak & cairan' }
                ]
            },
            {
                id: 'box-parfum',
                name: 'Box Kosmetik & Parfum Exclusive',
                tagline: 'Kemasan mewah dengan finishing presisi untuk parfum & kecantikan.',
                image: '/images/parfum.webp',
                specs: [
                    { label: 'Kertas', value: 'Ivory / Art Carton Premium' },
                    { label: 'Finishing', value: 'Foil Gold/Silver, Emboss, Doff' },
                    { label: 'Desain', value: 'Custom cetak eksklusif' }
                ]
            },
            {
                id: 'kemasan-industrial',
                name: 'Kemasan Die-Cut Produk Industri',
                tagline: 'Kemasan karton presisi potongan die-cut untuk suku cadang & barang pabrik.',
                image: '/images/nse-superior.webp',
                specs: [
                    { label: 'Model', value: 'Die-Cut Locking Box' },
                    { label: 'Cetak', value: 'Custom brand & instruksi' },
                    { label: 'Kekuatan', value: 'Tahan tekanan & tumpukan' }
                ]
            },
            {
                id: 'company-profile',
                name: 'Surat Jalan, Kop Surat & Promosi',
                tagline: 'Kertas kopsurat, nota/surat jalan NCR, & brosur perusahaan.',
                image: '/images/proses-percetakan.webp',
                specs: [
                    { label: 'Cetak', value: 'Digital & Offset Modern' },
                    { label: 'Kertas', value: 'NCR / HVS / Art Paper' },
                    { label: 'Finishing', value: 'Jilid / Porporasi / Nomerasi' }
                ]
            }
        ]
    },
    {
        slug: "barang-general",
        title: "BARANG GENERAL",
        image: "/images/kondisi-gudang.webp",
        tagline: 'Penyedia perlengkapan kemasan & aksesoris industri lengkap dan terpercaya.',
        description: 'Kami memenuhi berbagai kebutuhan perlengkapan & pendukung industri seperti PE Foam, Roda Lory, Plastik Bubble Wrap, Bucket Impraboard, dan aksesoris kemasan lainnya. Dirancang untuk meningkatkan efisiensi, keamanan, dan keandalan operasional pabrik mau pun pergudangan Anda.',
        specs: SPECS_BARANG_GENERAL,
        subCategories: [
            {
                id: 'pe-foam-general',
                name: 'PE Foam & Busa Pelindung',
                tagline: 'Material busa pelindung benturan & pelapis anti-gores barang presisi.',
                image: '/images/foto-pe-foam-besar.webp',
                specs: [
                    { label: 'Ketebalan', value: '1 mm - 10 mm (Custom)' },
                    { label: 'Format', value: 'Roll / Lembaran / Kantong' },
                    { label: 'Fungsi', value: 'Peredam kejut & anti gores' }
                ]
            },
            {
                id: 'bubble-wrap',
                name: 'Plastik Bubble Wrap',
                tagline: 'Gelembung udara pelindung ekstra untuk keamanan kargo & e-commerce.',
                image: '/images/foto-pe-foam.webp',
                specs: [
                    { label: 'Ukuran Roll', value: '1.25 m x 50 m / Custom' },
                    { label: 'Tipe', value: 'Single / Double Bubble' },
                    { label: 'Warna', value: 'Transparan / Hitam' }
                ]
            },
            {
                id: 'bucket-impraboard',
                name: 'Bucket & Container Impraboard',
                tagline: 'Wadah penyimpanan & tumpukan part industri anti-air yang tahan lama.',
                image: '/images/foto-pp-board-tumpuk.webp',
                specs: [
                    { label: 'Material', value: 'PP Corrugated Board' },
                    { label: 'Keunggulan', value: 'Anti Air & Kimia (Reusable)' },
                    { label: 'Tipe Box', value: 'Returnable Box / Storage Bucket' }
                ]
            },
            {
                id: 'roda-lory',
                name: 'Roda Lory & Aksesoris Logistik',
                tagline: 'Roda troli & lory beban berat untuk efisiensi mobilitas pergudangan.',
                image: '/images/pengiriman-barang.webp',
                specs: [
                    { label: 'Kapasitas', value: 'Beban Ringan s/d Heavy Duty' },
                    { label: 'Material Roda', value: 'Karet / Nylon / Polyurethane' },
                    { label: 'Aplikasi', value: 'Troli Pabrik & Lory Pergudangan' }
                ]
            }
        ]
    }
];
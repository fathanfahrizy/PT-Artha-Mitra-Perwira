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
        specs: SPECS_KARTON_BOX
    },
    {
        slug: "pallet-karton",
        title: "PALLET KARTON",
        image: "/images/foto-pallet.webp",
        tagline: 'Ringan, tahan beban berat, dan aman untuk kebutuhan ekspor.',
        description: 'Pallet Karton merupakan alternatif ramah lingkungan dan hemat biaya dibandingkan pallet kayu tradisional. Memenuhi standar ISPM 15 karena bebas dari hama dan jamur tanpa perlu perlakuan fumigasi, sehingga sangat ideal untuk kebutuhan ekspor. Desainnya yang ringan memangkas biaya pengiriman namun tetap mampu menahan beban statis hingga 1.500 kg.',
        specs: SPECS_PALLET_KARTON
    },
    {
        slug: "siku-karton",
        title: "SIKU KARTON",
        image: "/images/foto-siku.webp",
        tagline: 'Pelindung sudut produk agar tetap aman selama pengiriman dan stacking.',
        description: 'Siku Karton (Edge Protector) dirancang untuk melindungi tepian produk dari kerusakan akibat benturan atau ikatan tali strapping yang terlalu kencang. Penggunaan siku karton secara signifikan meningkatkan stabilitas palet saat proses tumpukan (stacking), memastikan produk tiba di tujuan dalam kondisi sempurna tanpa penyok.',
        specs: SPECS_SIKU_KARTON
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
        specs: SPECS_PARTISI_KARTON
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
        specs: SPECS_PERCETAKAN_UMUM
    },
    {
        slug: "barang-general",
        title: "BARANG GENERAL",
        image: "/images/kondisi-gudang.webp",
        tagline: 'Penyedia perlengkapan kemasan & aksesoris industri lengkap dan terpercaya.',
        description: 'Kami memenuhi berbagai kebutuhan perlengkapan & pendukung industri seperti PE Foam, Roda Lory, Plastik Bubble Wrap, Bucket Impraboard, dan aksesoris kemasan lainnya. Dirancang untuk meningkatkan efisiensi, keamanan, dan keandalan operasional pabrik mau pun pergudangan Anda.',
        specs: SPECS_BARANG_GENERAL
    }
];
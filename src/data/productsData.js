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

export const PRODUCTS = [
    {
        title: "KARTON BOX",
        image: "/images/foto-karton.png",
        tagline: 'Kuat, presisi, dan siap custom untuk semua kebutuhan pengemasan industri Anda.',
        specs: SPECS_KARTON_BOX
    },
    {
        title: "PALLET KARTON",
        image: "/images/foto-pallet.png",
        tagline: 'Ringan, tahan beban berat, dan aman untuk kebutuhan ekspor.',
        specs: SPECS_PALLET_KARTON
    },
    {
        title: "SIKU KARTON",
        image: "/images/foto-siku.png",
        tagline: 'Pelindung sudut produk agar tetap aman selama pengiriman dan stacking.',
        specs: SPECS_SIKU_KARTON
    },
    {
        title: "PAPER CORE",
        image: "/images/foto-paper-core.png",
        tagline: 'Solusi gulungan (tube) serbaguna untuk benang, kain, lakban, dan plastik.',
        specs: SPECS_PAPER_CORE
    },
    {
        title: "PARTISI KARTON",
        image: "/images/foto-partisi-karton.png",
        tagline: 'Sekat pelindung interior box untuk menjaga produk tetap utuh tanpa benturan.',
        specs: SPECS_PARTISI_KARTON
    },
    {
        title: "PE FOAM",
        image: "/images/foto-pe-foam.png",
        tagline: 'Busa pelindung ringan dan elastis, anti gores untuk permukaan barang presisi.',
        specs: SPECS_PE_FOAM
    },
    {
        title: "PP BOARD",
        image: "/images/foto-pp-board.png",
        tagline: 'Lembaran plastik berongga yang tangguh, anti air, dan tahan lama.',
        specs: SPECS_PP_BOARD
    }
];
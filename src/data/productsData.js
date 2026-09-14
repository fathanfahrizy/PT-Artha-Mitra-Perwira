import {
    FaShieldHalved, FaLayerGroup, FaRulerCombined, FaBoxOpen, FaWeightHanging, FaGlobe, FaArrowsLeftRight
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
    }
];
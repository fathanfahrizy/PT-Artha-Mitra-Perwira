/**
 * ProductCard.jsx
 * ---------------
 * Card produk dengan efek flip 3D — design asli project, UI FOTO DIPERBAGUS:
 * - Foto pakai object-contain → produk utuh, gak ke-crop / kegedean / kekecilan
 * - Area foto flex-1 (fleksibel) → proporsional di grid maupun slot carousel
 * - Background gradient halus + glow merah + drop-shadow → produk "mengambang"
 * - Aksen garis merah di sudut + hover zoom halus biar lebih hidup
 *
 * Sisi DEPAN : foto produk + judul + tagline + tombol Discover & Quick View
 * Sisi BELAKANG : header nama + grid spesifikasi + tombol Close & Discover
 *
 * Props:
 * - prod         : objek produk { title, image, tagline, specs[] }
 * - heightClass  : (opsional) override tinggi root. Default "h-125 sm:h-130".
 * - onFlipChange : (opsional) callback(true/false) saat flip / close.
 *
 * Data : src/data/homeData.js
 * CSS  : class .flip-card dkk. global di src/index.css
 */
import { useState } from 'react';
import { waLink } from '../../data/navigationData';
import { Button } from '../atoms/Button';

export default function ProductCard({ prod, heightClass = "h-125 sm:h-130", onFlipChange = null }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const link = waLink(`produk ${prod.title}`);

  // Setter tunggal biar parent (carousel) bisa tau status flip card
  const setFlip = (val) => {
    setIsFlipped(val);
    if (onFlipChange) onFlipChange(val);
  };

  return (
    <div className={`flip-card ${heightClass} ${isFlipped ? 'flipped' : ''}`}>
      <div className="flip-card-inner">
        {/* SISI DEPAN: foto produk + judul + tagline + tombol */}
        <div className="flip-face bg-white border border-[#e2e8f0] rounded-[10px] overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.12)] hover:border-[#c2182b]/30 transition-all duration-300 group/card">
          
          {/* AREA FOTO: fleksibel (flex-1), object-contain biar produk selalu utuh & proporsional */}
          <div className="relative flex-1 min-h-44 bg-gradient-to-br from-[#f8fafc] via-white to-[#edf1f6] flex items-center justify-center p-5 sm:p-6 overflow-hidden">
            {/* Glow dekoratif di belakang produk */}
            <div className="absolute w-3/5 h-3/5 rounded-full bg-[#c2182b]/6 blur-2xl pointer-events-none" aria-hidden="true"></div>
            {/* Aksen garis merah kecil di sudut kiri atas */}
            <span className="absolute top-3 left-3 w-8 h-1 rounded-full bg-[#c2182b]" aria-hidden="true"></span>
            <img
              src={prod.image}
              alt={prod.title}
              loading="lazy"
              decoding="async"
              draggable={false}
              className="relative w-full h-full object-contain select-none drop-shadow-[0_12px_16px_rgba(10,20,40,0.18)] transition-transform duration-500 group-hover/card:scale-105"
              onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=Foto+Produk+Belum+Tersedia"; }}
            />
          </div>

          {/* INFO + TOMBOL */}
          <div className="p-5 sm:p-6.25 border-t border-[#e2e8f0] bg-[#f8fafc] flex flex-col">
            <h3 className="text-[1.05rem] sm:text-[1.15rem] font-extrabold text-[#0a1428] mb-1.5">{prod.title}</h3>
            <p className="text-[0.85rem] sm:text-[0.9rem] text-[#64748b] mb-3.75 sm:mb-5 leading-[1.6]">{prod.tagline}</p>
            <div className="flex gap-2.5 mt-auto">
              <Button
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 px-2 sm:px-3.75 py-2.5 rounded-sm text-[0.72rem] sm:text-[0.85rem] uppercase tracking-[0.5px]"
              >
                Discover
              </Button>
              <Button
                variant="outline"
                onClick={() => setFlip(true)}
                className="flex-1 px-2 sm:px-3.75 py-2.5 rounded-sm text-[0.72rem] sm:text-[0.85rem] uppercase tracking-[0.5px]"
                aria-label={`Quick view ${prod.title}`}
              >
                Quick View
              </Button>
            </div>
          </div>
        </div>

        {/* SISI BELAKANG: header nama + grid spesifikasi + tombol Close & Discover */}
        <div className="flip-face flip-back bg-white border border-[#e2e8f0] rounded-[10px] overflow-hidden shadow-[0_10px_30px_-10px_rgba(10,20,40,0.2)]">
          <div className="bg-[#ececec] px-5 sm:px-6.25 py-4 sm:py-5">
            <h3 className="text-[1.05rem] sm:text-[1.15rem] font-extrabold text-[#0a1428] m-0">{prod.title}</h3>
          </div>
          <div className="p-5 sm:p-6.25 grid grid-cols-2 gap-3.75 sm:gap-5 grow bg-[#f8fafc] overflow-y-auto">
            {prod.specs.map((spec, i) => (
              <div key={i}>
                <spec.icon className="text-[1.2rem] sm:text-[1.4rem] text-[#0a1428] mb-2 sm:mb-2.5" aria-hidden="true" />
                <p className="text-[0.8rem] sm:text-[0.85rem] font-bold text-[#0a1428] m-0 leading-[1.4]">{spec.label}</p>
                <p className="text-[0.75rem] sm:text-[0.8rem] text-[#64748b] m-0 mt-1">{spec.value}</p>
              </div>
            ))}
          </div>
          <div className="px-5 sm:px-6.25 py-3.5 sm:py-4.5 bg-[#ececec] flex gap-2.5">
            <Button
              variant="outline"
              onClick={() => setFlip(false)}
              className="flex-1 px-2 sm:px-3.75 py-2.5 rounded-sm text-[0.72rem] sm:text-[0.85rem]"
              aria-label={`Tutup quick view ${prod.title}`}
            >
              Close
            </Button>
            <Button
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 px-2 sm:px-3.75 py-2.5 rounded-sm text-[0.72rem] sm:text-[0.85rem]"
            >
              Discover
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
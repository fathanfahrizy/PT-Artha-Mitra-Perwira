/**
 * ProductCard.jsx
 * ---------------
 * Card produk dengan efek flip 3D (pola referensi: Massey Ferguson).
 * - Sisi DEPAN : gambar produk + tagline + tombol Discover & Quick View
 * - Sisi BELAKANG : grid spesifikasi teknis + tombol Close & Discover
 *
 * Dipakai di: src/pages/Home.jsx (section Produk)
 * Data    : src/data/homeData.js (array PRODUCTS)
 * CSS     : class .flip-card dkk. ada di src/index.css
 */
import { useState } from 'react';
import { waLink } from '../../data/navigationData';
import { Button } from '../atoms/Button';

export default function ProductCard({ prod }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const link = waLink(`produk ${prod.title}`);

  return (
    <div className={`flip-card h-125 sm:h-130 ${isFlipped ? 'flipped' : ''}`}>
      <div className="flip-card-inner">
        {/* SISI DEPAN: gambar + nama + tagline + tombol Discover & Quick View */}
        <div className="flip-face bg-[#f8fafc] border border-[#e2e8f0] rounded-[10px] overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] transition-shadow duration-300">
          <div className="bg-white h-50 sm:h-60 flex items-center justify-center p-3.75 sm:p-5 border-b border-[#e2e8f0] overflow-hidden">
            <img 
              src={prod.image} 
              alt={prod.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=Foto+Produk+Belum+Tersedia"; }}
            />
          </div>
          <div className="p-5 sm:p-6.25 flex flex-col grow">
            <h3 className="text-[1.05rem] sm:text-[1.15rem] font-extrabold text-[#0a1428] mb-2">{prod.title}</h3>
            <p className="text-[0.85rem] sm:text-[0.9rem] text-[#64748b] mb-3.75 sm:mb-5 grow leading-[1.6]">{prod.tagline}</p>
            <div className="flex gap-2.5">
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
                onClick={() => setIsFlipped(true)}
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
          <div className="p-5 sm:p-6.25 grid grid-cols-2 gap-3.75 sm:gap-5 grow bg-[#f8fafc]">
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
              onClick={() => setIsFlipped(false)}
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
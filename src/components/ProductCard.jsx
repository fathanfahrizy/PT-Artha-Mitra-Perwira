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
import { waLink } from '../data/navigationData';

export default function ProductCard({ prod }) {
  const [isFlipped, setIsFlipped] = useState(false);
  const link = waLink(`produk ${prod.title}`);

  return (
    <div className={`flip-card h-[500px] sm:h-[520px] ${isFlipped ? 'flipped' : ''}`}>
      <div className="flip-card-inner">
        {/* SISI DEPAN: gambar + nama + tagline + tombol Discover & Quick View */}
        <div className="flip-face bg-[#f8fafc] border border-[#e2e8f0] rounded-[10px] overflow-hidden shadow-[0_4px_6px_-1px_rgba(0,0,0,0.02)] hover:shadow-[0_15px_30px_-5px_rgba(0,0,0,0.1)] transition-shadow duration-300">
          <div className="bg-white h-[200px] sm:h-[240px] flex items-center justify-center p-[15px] sm:p-[20px] border-b border-[#e2e8f0] overflow-hidden">
            <img 
              src={prod.image} 
              alt={prod.title} 
              className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" 
              onError={(e) => { e.target.src = "https://via.placeholder.com/400x300?text=Foto+Produk+Belum+Tersedia"; }}
            />
          </div>
          <div className="p-[20px] sm:p-[25px] flex flex-col flex-grow">
            <h3 className="text-[1.05rem] sm:text-[1.15rem] font-extrabold text-[#0a1428] mb-[8px]">{prod.title}</h3>
            <p className="text-[0.85rem] sm:text-[0.9rem] text-[#64748b] mb-[15px] sm:mb-[20px] flex-grow leading-[1.6]">{prod.tagline}</p>
            <div className="flex gap-[10px]">
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="flex-1 bg-[#c2182b] hover:bg-[#a01526] text-white text-center px-[8px] sm:px-[15px] py-[10px] rounded-[4px] text-[0.72rem] sm:text-[0.85rem] font-bold uppercase tracking-[0.5px] transition-colors"
              >
                Discover
              </a>
              <button
                onClick={() => setIsFlipped(true)}
                className="flex-1 bg-white border border-[#0a1428] text-[#0a1428] hover:bg-[#0a1428] hover:text-white px-[8px] sm:px-[15px] py-[10px] rounded-[4px] text-[0.72rem] sm:text-[0.85rem] font-bold uppercase tracking-[0.5px] transition-colors"
                aria-label={`Quick view ${prod.title}`}
              >
                Quick View
              </button>
            </div>
          </div>
        </div>

        {/* SISI BELAKANG: header nama + grid spesifikasi + tombol Close & Discover */}
        <div className="flip-face flip-back bg-white border border-[#e2e8f0] rounded-[10px] overflow-hidden shadow-[0_10px_30px_-10px_rgba(10,20,40,0.2)]">
          <div className="bg-[#ececec] px-[20px] sm:px-[25px] py-[16px] sm:py-[20px]">
            <h3 className="text-[1.05rem] sm:text-[1.15rem] font-extrabold text-[#0a1428] m-0">{prod.title}</h3>
          </div>
          <div className="p-[20px] sm:p-[25px] grid grid-cols-2 gap-[15px] sm:gap-[20px] flex-grow bg-[#f8fafc]">
            {prod.specs.map((spec, i) => (
              <div key={i}>
                <spec.icon className="text-[1.2rem] sm:text-[1.4rem] text-[#0a1428] mb-[8px] sm:mb-[10px]" aria-hidden="true" />
                <p className="text-[0.8rem] sm:text-[0.85rem] font-bold text-[#0a1428] m-0 leading-[1.4]">{spec.label}</p>
                <p className="text-[0.75rem] sm:text-[0.8rem] text-[#64748b] m-0 mt-[4px]">{spec.value}</p>
              </div>
            ))}
          </div>
          <div className="px-[20px] sm:px-[25px] py-[14px] sm:py-[18px] bg-[#ececec] flex gap-[10px]">
            <button
              onClick={() => setIsFlipped(false)}
              className="flex-1 bg-white border border-[#0a1428] text-[#0a1428] hover:bg-[#0a1428] hover:text-white px-[8px] sm:px-[15px] py-[10px] rounded-[4px] text-[0.72rem] sm:text-[0.85rem] font-bold transition-colors"
              aria-label={`Tutup quick view ${prod.title}`}
            >
              Close
            </button>
            <a
              href={link}
              target="_blank"
              rel="noopener noreferrer"
              className="flex-1 bg-[#c2182b] hover:bg-[#a01526] text-white text-center px-[8px] sm:px-[15px] py-[10px] rounded-[4px] text-[0.72rem] sm:text-[0.85rem] font-bold transition-colors"
            >
              Discover
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
import { useState } from 'react';
import { FaHandshake, FaTableCells, FaArrowsLeftRight, FaCheck } from 'react-icons/fa6';
import { CLIENTS } from '../../data/clientsData';
import ClientLogoCard from '../molecules/ClientLogoCard';
import ScrollReveal from '../atoms/ScrollReveal';

/**
 * ClientsSection.jsx
 * ------------------
 * Organism component untuk menampilkan bagian "Klien Kami" di Homepage.
 * Dilengkapi dengan:
 * 1. Dual-track continuous infinite marquee dengan auto pause on hover.
 * 2. Gradient fade edge mask untuk estetika premium.
 * 3. Toggle switch untuk melihat semua 24 logo dalam bentuk Grid responsif.
 */
export default function ClientsSection() {
  const [viewMode, setViewMode] = useState('marquee'); // 'marquee' | 'grid'

  // Pisahkan 24 logo menjadi 2 baris (masing-masing 12 logo)
  const row1 = CLIENTS.slice(0, 12);
  const row2 = CLIENTS.slice(12, 24);

  // Gandakan item untuk menciptakan animasi loop marquee tanpa patahan
  const marqueeRow1 = [...row1, ...row1];
  const marqueeRow2 = [...row2, ...row2];

  return (
    <ScrollReveal>
      <section
        id="klien"
        className="py-16 md:py-24 bg-linear-to-b from-white via-slate-50/60 to-white border-b border-slate-200/80 relative overflow-hidden"
        aria-label="Klien dan Mitra Kami"
      >
        <div className="max-w-6xl mx-auto px-4 sm:px-6 mb-10 text-center">
          {/* Badge Section */}
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-red-50 border border-red-200/60 text-[#c2182b] text-xs md:text-sm font-bold tracking-wide uppercase mb-3">
            <FaHandshake className="text-sm" />
            <span>KLIEN & MITRA KAMI</span>
          </div>

          {/* Title */}
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold text-[#0a1428] tracking-tight mb-3.5">
            Dipercaya oleh Berbagai <span className="text-[#c2182b]">Perusahaan & Industri</span>
          </h2>

          {/* Subtitle */}
          <p className="max-w-2xl mx-auto text-slate-600 text-sm md:text-base leading-relaxed">
            Menjadi mitra terpercaya penyedia karton box berkualitas, percetakan umum presisi, dan perlengkapan industri bagi berbagai sektor manufaktur, farmasi, retail, serta F&B.
          </p>

          {/* View Mode Toggle Buttons */}
          <div className="flex items-center justify-center gap-2 mt-6">
            <button
              onClick={() => setViewMode('marquee')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                viewMode === 'marquee'
                  ? 'bg-[#0a1428] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
              aria-label="Tampilkan animasi marquee"
            >
              <FaArrowsLeftRight className="text-[11px]" />
              <span>Animasi Berjalan</span>
            </button>
            <button
              onClick={() => setViewMode('grid')}
              className={`inline-flex items-center gap-1.5 px-3.5 py-1.5 text-xs font-semibold rounded-lg transition-all duration-200 cursor-pointer ${
                viewMode === 'grid'
                  ? 'bg-[#0a1428] text-white shadow-xs'
                  : 'bg-white text-slate-600 border border-slate-200 hover:bg-slate-50'
              }`}
              aria-label="Tampilkan semua logo grid"
            >
              <FaTableCells className="text-[11px]" />
              <span>Semua Logo ({CLIENTS.length})</span>
            </button>
          </div>
        </div>

        {/* --- VIEW MODE 1: DUAL-TRACK INFINITE MARQUEE --- */}
        {viewMode === 'marquee' && (
          <div className="relative w-full overflow-hidden py-2 space-y-4">
            {/* Gradient Edge Masks (Kiri & Kanan) */}
            <div className="pointer-events-none absolute inset-y-0 left-0 w-16 sm:w-28 md:w-40 bg-linear-to-r from-white via-white/80 to-transparent z-10" />
            <div className="pointer-events-none absolute inset-y-0 right-0 w-16 sm:w-28 md:w-40 bg-linear-to-l from-white via-white/80 to-transparent z-10" />

            {/* Track 1: Gerak ke Kiri */}
            <div className="flex overflow-hidden select-none">
              <div className="animate-marquee-left pause-hover flex gap-4 sm:gap-5 items-center pr-4 sm:pr-5">
                {marqueeRow1.map((client, idx) => (
                  <ClientLogoCard
                    key={`row1-${client.id}-${idx}`}
                    client={client}
                    className="w-40 sm:w-48 h-20 shrink-0"
                  />
                ))}
              </div>
            </div>

            {/* Track 2: Gerak ke Kanan */}
            <div className="flex overflow-hidden select-none">
              <div className="animate-marquee-right pause-hover flex gap-4 sm:gap-5 items-center pr-4 sm:pr-5">
                {marqueeRow2.map((client, idx) => (
                  <ClientLogoCard
                    key={`row2-${client.id}-${idx}`}
                    client={client}
                    className="w-40 sm:w-48 h-20 shrink-0"
                  />
                ))}
              </div>
            </div>

            <p className="text-center text-xs text-slate-400 mt-4 italic">
              * Arahkan kursor / sentuh logo untuk menghentikan animasi sejenak
            </p>
          </div>
        )}

        {/* --- VIEW MODE 2: RESPONSIVE GRID --- */}
        {viewMode === 'grid' && (
          <div className="max-w-6xl mx-auto px-4 sm:px-6">
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-3 sm:gap-4">
              {CLIENTS.map((client) => (
                <ClientLogoCard
                  key={client.id}
                  client={client}
                  className="w-full h-24"
                />
              ))}
            </div>
          </div>
        )}

        {/* Feature Points Bar */}
        <div className="max-w-4xl mx-auto px-4 mt-12 pt-8 border-t border-slate-200/60">
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center sm:text-left">
            <div className="flex items-center justify-center sm:justify-start gap-2.5 text-slate-700 text-xs md:text-sm font-medium">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 text-xs shrink-0">
                <FaCheck />
              </span>
              <span>24+ Mitra Perusahaan Aktif</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2.5 text-slate-700 text-xs md:text-sm font-medium">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 text-xs shrink-0">
                <FaCheck />
              </span>
              <span>Kapasitas Pasokan Skala Besar</span>
            </div>
            <div className="flex items-center justify-center sm:justify-start gap-2.5 text-slate-700 text-xs md:text-sm font-medium">
              <span className="flex items-center justify-center w-5 h-5 rounded-full bg-emerald-100 text-emerald-600 text-xs shrink-0">
                <FaCheck />
              </span>
              <span>Kustomisasi Dimensi & Desain Presisi</span>
            </div>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

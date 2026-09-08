/**
 * Home.jsx
 * --------
 * Halaman landing page PT Artha Mitra Perwira.
 * Berisi 4 section: Hero, Produk, Tentang, Kontak & Pabrik.
 *
 * Konvensi:
 * - Semua konten/data diambil dari src/data/ (tidak hardcode di sini)
 * - Komponen reusable diambil dari src/components/
 * - CSS custom (flip card, scrollbar) ada di src/index.css
 */
import { useState, useMemo } from 'react';
import { FaMagnifyingGlass, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { PixelImage } from "../components/ui/pixel-image";
import ScrollReveal from "../components/ScrollReveal";
import ProductCard from "../components/ProductCard";
import { HERO_BADGES, PRODUCTS, STATS } from '../data/homeData';
import { CONTACT_ITEMS, SOCIAL_LINKS, LOCATIONS_DATA } from '../data/contactData';

export default function Home() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLocation, setActiveLocation] = useState(LOCATIONS_DATA[0]);

  // Logic pencarian lokasi persis seperti Lokasi.jsx
  const filteredLocations = useMemo(() => {
    return LOCATIONS_DATA.filter(loc =>
      loc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.address.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <div className="bg-white text-[#1e293b] leading-[1.6]">
      {/* --- HERO SECTION --- */}
      <ScrollReveal>
        <section id="beranda" className="pt-[140px] px-[20px] pb-[80px] bg-gradient-to-br from-[#0a1428] to-[#172554] text-white relative overflow-hidden" aria-label="Hero section">
          <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-[40px] items-center">
            <div>
              <h3 className="text-[#eab308] text-[1.1rem] font-bold mb-[15px] uppercase tracking-[1px] animate-fade-in-up">
                Kemasan Aman, Produk Nyaman, Bisnis Berkembang!
              </h3>
              <h1 className="text-[3rem] font-extrabold leading-[1.15] mb-[20px]">
                SOLUSI KEMASAN <span className="text-[#eab308] inline-block hover:scale-110 transition-transform duration-300 cursor-default">KARTON</span> BERKUALITAS UNTUK BISNIS ANDA
              </h1>
              <p className="text-[#cbd5e1] text-[1.05rem] mb-[30px]">
                Kami menyediakan produk karton berkualitas tinggi dengan harga kompetitif dan layanan terbaik untuk mendukung kebutuhan industri Anda.
              </p>
              <div className="grid grid-cols-3 gap-[15px]">
                {HERO_BADGES.map((badge, idx) => (
                  <div key={idx} className="bg-white/10 border border-white/15 p-[15px_10px] rounded-[8px] text-center hover:-translate-y-2 hover:bg-white/20 transition-all duration-300 cursor-default group" role="article" aria-label={badge.text}>
                    <badge.icon className="text-[1.5rem] text-[#c2182b] bg-white w-[40px] h-[40px] p-[8px] rounded-full mx-auto mb-[10px] group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                    <span className="block text-[0.8rem] font-semibold">{badge.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[500px] overflow-hidden rounded-[12px] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3)] border-[3px] border-white/10 group">
              <PixelImage
                src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
                customGrid={{ rows: 4, cols: 6 }}
                grayscaleAnimation
                className="w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* --- PRODUCTS SECTION (Card Flip 3D) --- */}
      <ScrollReveal>
        <section id="produk" className="py-[80px] px-[20px] max-w-[1200px] mx-auto" aria-label="Produk unggulan">
          <h2 className="text-center text-[1.75rem] font-extrabold text-[#0a1428] mb-[50px] relative after:content-[''] after:block after:w-[60px] after:h-[3px] after:bg-[#c2182b] after:mx-auto after:mt-[10px] after:rounded-[2px] hover:after:w-[100px] after:transition-all after:duration-500">
            PRODUK UNGGULAN KAMI
          </h2>
          <div className="grid md:grid-cols-3 gap-[30px]">
            {PRODUCTS.map((prod, idx) => (
              <ProductCard key={idx} prod={prod} />
            ))}
          </div>
        </section>
      </ScrollReveal>

      {/* --- ABOUT SECTION --- */}
      <ScrollReveal>
        <section id="tentang" className="bg-[#f8fafc] border-y border-[#e2e8f0] py-[80px]" aria-label="Tentang kami">
          <div className="max-w-[1200px] mx-auto px-[20px] grid md:grid-cols-2 gap-[50px] items-center">
            <div>
              <h2 className="text-[0.9rem] text-[#c2182b] font-bold uppercase mb-[5px]">TENTANG KAMI</h2>
              <h1 className="text-[2rem] font-extrabold text-[#0a1428] mb-[20px] leading-[1.2]">
                PT ARTHA <span className="text-[#c2182b]">MITRA PERWIRA</span>
              </h1>
              <p className="text-[#64748b] mb-[15px] text-[0.95rem]">
                PT Artha Mitra Perwira adalah perusahaan yang bergerak di bidang produksi kemasan karton bergelombang (corrugated box) dan berbagai produk pendukung lainnya.
              </p>
              <p className="text-[#64748b] mb-[15px] text-[0.95rem]">
                Dengan komitmen terhadap kualitas, ketepatan waktu, dan kepuasan pelanggan, kami siap menjadi partner terpercaya dalam memenuhi kebutuhan kemasan industri Anda.
              </p>
              <div className="grid grid-cols-4 gap-[15px] mt-[30px] text-center">
                {STATS.map((stat, idx) => (
                  <div key={idx} className="bg-white p-[15px_5px] rounded-[8px] border border-[#e2e8f0] hover:-translate-y-2 hover:border-[#c2182b]/50 hover:shadow-lg transition-all duration-300 group" role="article" aria-label={stat.text}>
                    <stat.icon className="text-[1.25rem] text-[#c2182b] mb-[5px] mx-auto group-hover:animate-bounce" aria-hidden="true" />
                    <span className="block text-[0.75rem] font-semibold text-[#1e293b]">{stat.text}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[450px] overflow-hidden rounded-[12px] shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] group">
              <PixelImage
                src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
                customGrid={{ rows: 4, cols: 6 }}
                grayscaleAnimation
                className="w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out"
              />
            </div>
          </div>
        </section>
      </ScrollReveal>

      {/* --- KONTAK & PABRIK (UI KORPORAT / B2B PROFESIONAL) --- */}
      <ScrollReveal>
        <section id="kontak" className="max-w-[1200px] mx-auto py-[80px] px-[20px]" aria-label="Kontak dan lokasi interaktif">
          {/* Header Section - gaya korporat: kiri judul, kanan deskripsi */}
          <div className="mb-[35px] flex flex-col md:flex-row md:items-end md:justify-between gap-[15px]">
            <div>
              <h2 className="text-[0.8rem] text-[#c2182b] font-bold uppercase tracking-[2px] mb-[6px]">Hubungi Kami</h2>
              <h1 className="text-[2rem] font-extrabold text-[#0a1428] m-0">KANTOR & PABRIK</h1>
            </div>
            <p className="text-[0.9rem] text-[#64748b] max-w-[420px] m-0">
              Tim marketing kami siap melayani kebutuhan penawaran harga, spesifikasi produk, dan jadwal kunjungan pabrik Anda.
            </p>
          </div>

          {/* CARD 1: INFORMASI KONTAK (Panel biru dongker, grid 4 kolom) */}
          <div className="bg-gradient-to-br from-[#0a1428] to-[#172554] rounded-[10px] border border-[#1e293b] shadow-[0_20px_40px_-20px_rgba(10,20,40,0.5)] mb-[30px] overflow-hidden">
            <div className="flex items-center justify-between px-[25px] md:px-[30px] py-[16px] border-b border-white/10">
              <h3 className="text-[0.95rem] font-bold text-white uppercase tracking-[1.5px] flex items-center gap-[10px] m-0">
                <span className="w-[4px] h-[18px] bg-[#c2182b] rounded-[1px]" aria-hidden="true"></span>
                Informasi Kontak Perusahaan
              </h3>
              <span className="hidden md:block text-[0.7rem] text-[#94a3b8] uppercase tracking-[1.5px]">PT Artha Mitra Perwira</span>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
              {CONTACT_ITEMS.map((contact, idx) => (
                <div key={idx} className="bg-[#0c1830] p-[25px] hover:bg-[#10203f] transition-colors duration-300 group">
                  <div className="flex items-center gap-[10px] mb-[12px]">
                    <div className="w-[34px] h-[34px] rounded-[6px] bg-[#c2182b] text-white flex items-center justify-center text-[0.9rem] shrink-0 group-hover:bg-[#a01526] transition-colors duration-300">
                      <contact.icon aria-hidden="true" />
                    </div>
                    <span className="text-[0.7rem] font-bold text-[#94a3b8] uppercase tracking-[1.5px]">{contact.label}</span>
                  </div>
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.external ? '_blank' : undefined}
                      rel={contact.external ? 'noopener noreferrer' : undefined}
                      className="block text-[0.95rem] font-semibold text-white leading-[1.5] hover:text-[#eab308] transition-colors"
                    >
                      {contact.value}
                    </a>
                  ) : (
                    <p className="text-[0.95rem] font-semibold text-white leading-[1.5] m-0">{contact.value}</p>
                  )}
                  <p className="text-[0.8rem] text-[#94a3b8] mt-[6px] mb-0 leading-[1.5]">{contact.sub}</p>
                </div>
              ))}
            </div>

            <div className="flex flex-wrap items-center justify-between gap-[15px] px-[25px] md:px-[30px] py-[14px] border-t border-white/10 bg-[#081020]">
              <span className="text-[0.7rem] font-bold text-[#94a3b8] uppercase tracking-[1.5px]">Sosial Media Perusahaan</span>
              <div className="flex gap-[10px]">
                {SOCIAL_LINKS.map((soc, idx) => (
                  <a
                    key={idx}
                    href={soc.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={soc.label}
                    className="w-[34px] h-[34px] rounded-[6px] border border-white/15 bg-white/5 text-[#cbd5e1] flex items-center justify-center text-[0.85rem] hover:bg-[#c2182b] hover:border-[#c2182b] hover:text-white transition-all duration-300"
                  >
                    <soc.icon aria-hidden="true" />
                  </a>
                ))}
              </div>
            </div>
          </div>

          {/* CARD 2: PETA INTERAKTIF (Panel putih gaya dashboard korporat) */}
          <div className="bg-white border border-[#e2e8f0] rounded-[10px] shadow-[0_10px_30px_-15px_rgba(10,20,40,0.15)] overflow-hidden">
            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[15px] px-[25px] py-[16px] border-b border-[#e2e8f0] bg-[#f8fafc]">
              <h3 className="text-[0.95rem] font-bold text-[#0a1428] uppercase tracking-[1.5px] flex items-center gap-[10px] m-0">
                <span className="w-[4px] h-[18px] bg-[#c2182b] rounded-[1px]" aria-hidden="true"></span>
                Peta Lokasi Interaktif
              </h3>
              <div className="relative w-full md:w-[300px]">
                <input 
                  type="text" 
                  placeholder="Cari lokasi kantor / pabrik..." 
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-white border border-[#cbd5e1] rounded-[6px] pl-[35px] pr-[15px] py-[9px] text-[0.85rem] text-[#1e293b] focus:outline-none focus:border-[#0a1428] focus:ring-2 focus:ring-[#0a1428]/10 transition"
                />
                <FaMagnifyingGlass className="absolute left-[12px] top-1/2 -translate-y-1/2 text-[#94a3b8] text-[0.8rem]" aria-hidden="true" />
              </div>
            </div>

            <div className="grid lg:grid-cols-[360px_1fr]">
              {/* List lokasi interaktif */}
              <div className="border-b lg:border-b-0 lg:border-r border-[#e2e8f0] p-[20px] space-y-[12px] lg:max-h-[460px] overflow-y-auto custom-scrollbar">
                {filteredLocations.length > 0 ? (
                  filteredLocations.map((loc) => (
                    <div 
                      key={loc.id}
                      onClick={() => setActiveLocation(loc)}
                      className={`p-[15px] rounded-[6px] border cursor-pointer transition-all duration-200 ${
                        activeLocation.id === loc.id 
                          ? 'border-[#c2182b] bg-[#c2182b]/[0.04] shadow-[inset_3px_0_0_0_#c2182b]' 
                          : 'border-[#e2e8f0] bg-white hover:border-[#94a3b8]'
                      }`}
                    >
                      <div className="flex items-start justify-between gap-[10px]">
                        <p className="font-bold text-[0.95rem] text-[#0a1428] m-0">{loc.title}</p>
                        {activeLocation.id === loc.id && (
                          <span className="text-[0.6rem] font-bold text-white bg-[#c2182b] px-[6px] py-[2px] rounded-[3px] uppercase tracking-[1px] shrink-0">Aktif</span>
                        )}
                      </div>
                      <p className="text-[0.8rem] text-[#64748b] mt-[6px] mb-[4px] flex items-start gap-[8px]">
                        <FaLocationDot className="text-[#c2182b] mt-[3px] shrink-0" aria-hidden="true" /> {loc.address}
                      </p>
                      <p className="text-[0.8rem] text-[#64748b] m-0 flex items-center gap-[8px]">
                        <FaPhone className="text-[#c2182b] shrink-0" aria-hidden="true" /> {loc.phone}
                      </p>
                    </div>
                  ))
                ) : (
                  <p className="text-[#64748b] text-sm py-4 text-center bg-[#f8fafc] border border-dashed border-[#e2e8f0] rounded-[6px]">Lokasi tidak ditemukan.</p>
                )}
              </div>

              {/* Iframe Google Maps */}
              <div className="relative min-h-[420px] bg-[#f1f5f9]">
                {activeLocation ? (
                  <iframe
                    key={activeLocation.id}
                    title={`Peta Lokasi ${activeLocation.title}`}
                    src={activeLocation.mapUrl}
                    className="absolute inset-0 w-full h-full border-0"
                    allowFullScreen=""
                    loading="lazy"
                    referrerPolicy="no-referrer-when-downgrade"
                  ></iframe>
                ) : (
                  <div className="absolute inset-0 flex flex-col items-center justify-center text-[#64748b] p-6 text-center">
                    <p>Pilih lokasi untuk menampilkan peta.</p>
                  </div>
                )}
              </div>
            </div>

            <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[15px] px-[25px] py-[14px] border-t border-[#e2e8f0] bg-[#f8fafc]">
              <p className="text-[0.8rem] text-[#64748b] m-0">
                Kunjungan pabrik dilayani pada jam kerja dengan konfirmasi terlebih dahulu kepada tim marketing.
              </p>
              <a 
                href={activeLocation.directionUrl} 
                target="_blank" 
                rel="noreferrer" 
                className="inline-flex items-center justify-center gap-[8px] bg-[#c2182b] hover:bg-[#a01526] text-white px-[22px] py-[10px] rounded-[6px] text-[0.85rem] font-bold uppercase tracking-[1px] transition-colors shadow-sm shrink-0"
              >
                <FaLocationDot aria-hidden="true" /> Buka Rute Google Maps
              </a>
            </div>
          </div>
        </section>
      </ScrollReveal>
    </div>
  );
}
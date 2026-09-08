import { useState, useMemo } from 'react';
import { FaMagnifyingGlass, FaLocationDot, FaPhone } from 'react-icons/fa6';
import { CONTACT_ITEMS, SOCIAL_LINKS, LOCATIONS_DATA } from '../../data/contactData';
import ScrollReveal from '../atoms/ScrollReveal';
import { Button } from '../atoms/Button';

export default function ContactSection() {
  const [searchQuery, setSearchQuery] = useState("");
  const [activeLocation, setActiveLocation] = useState(LOCATIONS_DATA[0]);

  const filteredLocations = useMemo(() => {
    return LOCATIONS_DATA.filter(loc =>
      loc.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      loc.address.toLowerCase().includes(searchQuery.toLowerCase())
    );
  }, [searchQuery]);

  return (
    <ScrollReveal>
      <section id="kontak" className="max-w-[1200px] mx-auto py-[60px] md:py-[80px] px-[15px] md:px-[20px]" aria-label="Kontak dan lokasi interaktif">
        {/* Header Section - gaya korporat: kiri judul, kanan deskripsi */}
        <div className="mb-[30px] md:mb-[35px] flex flex-col md:flex-row md:items-end md:justify-between gap-[15px]">
          <div>
            <h2 className="text-[0.8rem] text-[#c2182b] font-bold uppercase tracking-[2px] mb-[6px]">Hubungi Kami</h2>
            <h1 className="text-[1.6rem] md:text-[2rem] font-extrabold text-[#0a1428] m-0">KANTOR & PABRIK</h1>
          </div>
        </div>

        {/* CARD 1: INFORMASI KONTAK (Panel biru dongker, grid responsive) */}
        <div className="bg-gradient-to-br from-[#0a1428] to-[#172554] rounded-[10px] border border-[#1e293b] shadow-[0_20px_40px_-20px_rgba(10,20,40,0.5)] mb-[25px] md:mb-[30px] overflow-hidden">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[6px] px-[20px] md:px-[30px] py-[16px] border-b border-white/10">
            <h3 className="text-[0.95rem] font-bold text-white uppercase tracking-[1.5px] flex items-center gap-[10px] m-0">
              <span className="w-[4px] h-[18px] bg-[#c2182b] rounded-[1px]" aria-hidden="true"></span>
              Informasi Kontak Perusahaan
            </h3>
            <span className="hidden md:block text-[0.7rem] text-[#94a3b8] uppercase tracking-[1.5px]">PT Artha Mitra Perwira</span>
          </div>

          {/* 1 kol (phone) / 2 kol (tablet) / 4 kol (desktop) */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-px bg-white/10">
            {CONTACT_ITEMS.map((contact, idx) => (
              <div key={idx} className="bg-[#0c1830] p-[20px] md:p-[25px] hover:bg-[#10203f] transition-colors duration-300 group">
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
                    className="block text-[0.95rem] font-semibold text-white leading-[1.5] hover:text-[#eab308] transition-colors break-words"
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

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-[15px] px-[20px] md:px-[30px] py-[14px] border-t border-white/10 bg-[#081020]">
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
          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[15px] px-[15px] md:px-[25px] py-[16px] border-b border-[#e2e8f0] bg-[#f8fafc]">
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

          {/* Stack di < lg; sidebar 360px + map di >= lg */}
          <div className="grid lg:grid-cols-[360px_1fr]">
            <div className="border-b lg:border-b-0 lg:border-r border-[#e2e8f0] p-[15px] md:p-[20px] space-y-[12px] lg:max-h-[460px] overflow-y-auto custom-scrollbar">
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

            {/* Iframe Google Maps (tinggi responsive) */}
            <div className="relative min-h-[320px] md:min-h-[420px] bg-[#f1f5f9]">
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

          <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-[15px] px-[15px] md:px-[25px] py-[14px] border-t border-[#e2e8f0] bg-[#f8fafc]">
            <p className="text-[0.8rem] text-[#64748b] m-0">
              Kunjungan pabrik dilayani pada jam kerja dengan konfirmasi terlebih dahulu kepada tim marketing.
            </p>
            <Button 
              href={activeLocation.directionUrl} 
              target="_blank" 
              rel="noreferrer" 
              className="gap-[8px] px-[22px] py-[10px] text-[0.85rem] uppercase tracking-[1px] shadow-sm shrink-0 w-full md:w-auto"
            >
              <FaLocationDot aria-hidden="true" /> Buka Rute Google Maps
            </Button>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

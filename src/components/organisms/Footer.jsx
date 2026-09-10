/**
 * Footer.jsx
 * ----------
 * Footer situs PT Artha Mitra Perwira.
 * Struktur: features strip → main footer 4 kolom (brand+sosmed, navigasi,
 * produk, kontak) dengan tombol back-to-top → copyright bar.
 *
 * Data : src/data/footerData.js (FEATURES, QUICK_LINKS, PRODUCT_LINKS)
 *        src/data/contactData.js (FOOTER_CONTACT_INFO, SOCIAL_LINKS)
 * CSS  : class .safe-bottom ada di src/index.css (safe area iPhone)
 */
import { FaArrowUp, FaChevronRight } from 'react-icons/fa6';
import { FEATURES, QUICK_LINKS, PRODUCT_LINKS } from '../../data/footerData';
import { FOOTER_CONTACT_INFO, SOCIAL_LINKS } from '../../data/contactData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  // Fungsi smooth scroll kembali ke atas
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <>
      {/* --- FEATURES STRIP (LAMA - TIDAK DIUBAH) --- */}
      <div className="bg-[#f8fafc] border-t border-[#e2e8f0] py-7.5 md:py-10 px-3.75 md:px-5" role="contentinfo" aria-label="Footer features">
        <div className="max-w-300 mx-auto grid sm:grid-cols-2 md:grid-cols-4 gap-5">
          {FEATURES.map((feat, idx) => (
            <div key={idx} className="group flex items-center gap-3 md:gap-3.75 hover:-translate-y-2 transition-transform duration-300 cursor-default" role="article" aria-label={`${feat.title}: ${feat.sub}`}>
              <feat.icon className="text-[1.7rem] md:text-[2rem] text-[#c2182b] group-hover:text-[#0a1428] group-hover:scale-110 transition-all duration-300 shrink-0" aria-hidden="true" />
              <div>
                <h4 className="text-[0.9rem] font-bold text-[#0a1428] m-0">{feat.title}</h4>
                <p className="text-[0.8rem] text-[#64748b] m-0 group-hover:text-[#c2182b] transition-colors">{feat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- MAIN FOOTER (4 KOLOM) --- */}
      <footer className="bg-[#060a12] text-[#94a3b8] relative" role="contentinfo">
        {/* Tombol Back-to-Top */}
        <button
          onClick={scrollToTop}
          className="absolute -top-6.25 left-1/2 -translate-x-1/2 w-12.5 h-12.5 rounded-full bg-[#c2182b] text-white flex items-center justify-center text-[1.1rem] shadow-lg hover:bg-[#a01526] hover:-translate-y-2 transition-all duration-300 z-10"
          aria-label="Kembali ke atas"
        >
          <FaArrowUp aria-hidden="true" />
        </button>

        <div className="max-w-300 mx-auto px-3.75 md:px-5 pt-15 md:pt-17.5 pb-10 grid sm:grid-cols-2 lg:grid-cols-[1.3fr_0.8fr_0.8fr_1.1fr] gap-7.5 lg:gap-10">
          {/* KOLOM 1: Logo & Brand */}
          <div className="sm:col-span-2 lg:col-span-1">
            <a href="#beranda" className="flex items-center gap-3 group mb-5" aria-label="PT Artha Mitra Perwira Home">
              <img
                src="/logo-artha.png"
                alt="Logo PT Artha Mitra Perwira"
                className="w-11.25 h-11.25 object-contain group-hover:scale-110 transition-transform duration-300"
              />
              <div>
                <h1 className="text-[1.4rem] font-bold text-white leading-[1.1]">PT ARTHA</h1>
                <span className="text-[0.8rem] text-[#94a3b8] font-semibold">MITRA PERWIRA</span>
              </div>
            </a>
            <p className="text-[0.9rem] leading-[1.7] mb-5">
              Perusahaan produksi kemasan karton bergelombang (corrugated box) terpercaya.
              Solusi kemasan aman, kuat, dan ramah lingkungan untuk mendukung pertumbuhan bisnis Anda.
            </p>
            {/* Social Media Icons */}
            <div className="flex gap-2.5">
              {SOCIAL_LINKS.map((soc, idx) => (
                <a
                  key={idx}
                  href={soc.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-9.5 h-9.5 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-[0.9rem] text-[#94a3b8] hover:bg-[#c2182b] hover:text-white hover:border-[#c2182b] hover:-translate-y-1 transition-all duration-300"
                  aria-label={soc.label}
                >
                  <soc.icon aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          {/* KOLOM 2: Navigasi Cepat */}
          <div>
            <h3 className="text-white text-[1rem] font-bold uppercase tracking-[1px] mb-5 relative after:content-[''] after:block after:w-7.5 after:h-0.5 after:bg-[#c2182b] after:mt-2 after:rounded-xs">
              Navigasi
            </h3>
            <ul className="list-none m-0 p-0 space-y-3">
              {QUICK_LINKS.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-[0.9rem] flex items-center gap-2 hover:text-[#eab308] hover:translate-x-2 transition-all duration-300 group/link">
                    <FaChevronRight className="text-[0.65rem] text-[#c2182b] group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLOM 3: Daftar Produk */}
          <div>
            <h3 className="text-white text-[1rem] font-bold uppercase tracking-[1px] mb-5 relative after:content-[''] after:block after:w-7.5 after:h-0.5 after:bg-[#c2182b] after:mt-2 after:rounded-xs">
              Produk Kami
            </h3>
            <ul className="list-none m-0 p-0 space-y-3">
              {PRODUCT_LINKS.map((link, idx) => (
                <li key={idx}>
                  <a href={link.href} className="text-[0.9rem] flex items-center gap-2 hover:text-[#eab308] hover:translate-x-2 transition-all duration-300 group/link">
                    <FaChevronRight className="text-[0.65rem] text-[#c2182b] group-hover/link:translate-x-1 transition-transform" aria-hidden="true" />
                    {link.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* KOLOM 4: Informasi Kontak */}
          <div className="sm:col-span-2 lg:col-span-1">
            <h3 className="text-white text-[1rem] font-bold uppercase tracking-[1px] mb-5 relative after:content-[''] after:block after:w-7.5 after:h-0.5 after:bg-[#c2182b] after:mt-2 after:rounded-xs">
              Hubungi Kami
            </h3>
            <ul className="list-none m-0 p-0 space-y-3.75">
              {FOOTER_CONTACT_INFO.map((contact, idx) => (
                <li key={idx} className="flex items-start gap-3 text-[0.9rem] group/contact">
                  <contact.icon className="text-[#c2182b] mt-1 shrink-0 group-hover/contact:scale-125 transition-transform duration-300" aria-hidden="true" />
                  {contact.href ? (
                    <a
                      href={contact.href}
                      target={contact.external ? '_blank' : undefined}
                      rel={contact.external ? 'noopener noreferrer' : undefined}
                      className="hover:text-white transition-colors duration-300 leading-[1.6] wrap-break-word"
                    >
                      {contact.text}
                    </a>
                  ) : (
                    <span className="leading-[1.6]">{contact.text}</span>
                  )}
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* --- COPYRIGHT BAR (LAMA - TIDAK DIUBAH, + safe-bottom iPhone) --- */}
        <div className="safe-bottom border-t border-white/10 py-7.5 px-3.75 md:px-5 text-center text-[0.85rem]">
          <p className="m-0 hover:text-white transition-colors cursor-default">
            Kami berkomitmen untuk terus memberikan produk dan layanan terbaik demi mendukung pertumbuhan bisnis Anda.
          </p>
          <p className="mt-2.5 m-0">
            &copy; {currentYear} PT Artha Mitra Perwira. <span className="text-white font-semibold hover:text-[#c2182b] transition-colors cursor-pointer">All Rights Reserved.</span>
          </p>
        </div>
      </footer>
    </>
  );
}
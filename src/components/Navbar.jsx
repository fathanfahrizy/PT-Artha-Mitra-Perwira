import { useState, useEffect, useRef } from 'react';
import { FaBars, FaXmark, FaChevronDown } from 'react-icons/fa6';
import { navLinks, MENU_CATEGORIES, MENU_APPLICATIONS, waLink } from '../data/navigationData';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState('range');
  const [activeCategory, setActiveCategory] = useState(MENU_CATEGORIES[0]);
  const [activeModel, setActiveModel] = useState(MENU_CATEGORIES[0].models[0]);
  const [activeApp, setActiveApp] = useState(MENU_APPLICATIONS[0]);
  const navRef = useRef(null);

  // Tutup mega menu kalau klik di luar area navbar
  useEffect(() => {
    const handleOutside = (e) => {
      if (menuOpen && navRef.current && !navRef.current.contains(e.target)) {
        setMenuOpen(false);
      }
    };
    document.addEventListener('mousedown', handleOutside);
    return () => document.removeEventListener('mousedown', handleOutside);
  }, [menuOpen]);

  // Fallback gambar produk kalau file belum ada
  const handleImgError = (e) => {
    e.target.src = "https://via.placeholder.com/120x80?text=Foto+Produk";
  };

  return (
    <nav ref={navRef} className="fixed w-full bg-white/95 backdrop-blur-sm shadow-md z-50 transition-all duration-300" role="navigation" aria-label="Main navigation">
      <div className="max-w-[1200px] mx-auto px-[20px]">
        <div className="flex justify-between items-center h-[80px]">
          {/* LOGO SECTION */}
          <a href="#beranda" className="flex items-center gap-[10px] group" aria-label="PT Artha Mitra Perwira Home">
            <img 
              src="/logo-artha.png" 
              alt="Logo PT Artha Mitra Perwira" 
              className="w-[40px] h-[40px] object-contain group-hover:scale-110 transition-transform duration-300"
            />
            <div>
              <h1 className="text-[1.3rem] font-bold text-[#0a1428] leading-[1.1]">PT ARTHA</h1>
              <span className="text-[0.75rem] text-[#64748b] font-semibold">MITRA PERWIRA</span>
            </div>
          </a>

          {/* Desktop Navigation (Beranda dihapus, Produk jadi mega menu) */}
          <ul className="hidden md:flex items-center gap-[30px]">
            <li>
              <button
                onClick={() => setMenuOpen((o) => !o)}
                className={`text-[0.9rem] font-semibold flex items-center gap-[6px] transition-colors duration-300 ${menuOpen ? 'text-[#c2182b]' : 'text-[#1e293b] hover:text-[#c2182b]'}`}
                aria-expanded={menuOpen}
                aria-label="Buka menu produk"
              >
                Produk
                <FaChevronDown className={`text-[0.7rem] transition-transform duration-300 ${menuOpen ? 'rotate-180' : ''}`} aria-hidden="true" />
              </button>
            </li>
            {navLinks.map((link) => (
              <li key={link.name}>
                <a
                  href={link.href}
                  className="text-[0.9rem] font-semibold text-[#1e293b] hover:text-[#c2182b] transition-colors duration-300 relative group"
                  aria-label={`Navigate to ${link.name}`}
                >
                  {link.name}
                  <span className="absolute -bottom-[5px] left-0 w-0 h-[2px] bg-[#c2182b] transition-all duration-300 group-hover:w-full"></span>
                </a>
              </li>
            ))}
          </ul>

          {/* CTA Button - Desktop */}
          <div className="hidden md:block">
            <a
              href="https://wa.me/6281315669699"
              target="_blank"
              rel="noopener noreferrer"
              className="bg-[#c2182b] text-white px-[20px] py-[10px] rounded-[6px] font-semibold text-[0.9rem] hover:bg-[#a01526] transition-all duration-300 hover:scale-105 hover:shadow-lg"
              aria-label="Contact us via WhatsApp"
            >
              Hubungi Kami
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            className="md:hidden text-[#0a1428] text-[1.5rem] p-[10px]"
            onClick={() => setIsOpen(!isOpen)}
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            {isOpen ? <FaXmark /> : <FaBars />}
          </button>
        </div>

        {/* Mobile Navigation (Beranda dihapus) */}
        {isOpen && (
          <ul className="md:hidden pb-[20px] space-y-[10px]" role="menu">
            <li role="none">
              <a
                href="#produk"
                className="block text-[0.95rem] font-semibold text-[#1e293b] hover:text-[#c2182b] hover:bg-[#f8fafc] px-[15px] py-[10px] rounded-[6px] transition-all duration-300"
                onClick={() => setIsOpen(false)}
                role="menuitem"
              >
                Produk
              </a>
            </li>
            {navLinks.map((link) => (
              <li key={link.name} role="none">
                <a
                  href={link.href}
                  className="block text-[0.95rem] font-semibold text-[#1e293b] hover:text-[#c2182b] hover:bg-[#f8fafc] px-[15px] py-[10px] rounded-[6px] transition-all duration-300"
                  onClick={() => setIsOpen(false)}
                  role="menuitem"
                >
                  {link.name}
                </a>
              </li>
            ))}
            <li className="pt-[10px] px-[15px]">
              <a
                href="https://wa.me/6281315669699"
                target="_blank"
                rel="noopener noreferrer"
                className="block bg-[#c2182b] text-white px-[20px] py-[10px] rounded-[6px] font-semibold text-[0.9rem] text-center hover:bg-[#a01526] transition-all duration-300"
              >
                Hubungi Kami
              </a>
            </li>
          </ul>
        )}
      </div>

      {/* --- MEGA MENU PRODUK (gaya Massey Ferguson, desktop only) --- */}
      {menuOpen && (
        <div className="hidden md:block absolute top-full left-0 w-full bg-white border-t border-[#e2e8f0] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] z-40">
          <div className="max-w-[1200px] mx-auto px-[20px] py-[30px] relative">
            {/* Tombol Close (X) di kanan atas */}
            <button
              onClick={() => setMenuOpen(false)}
              className="absolute top-[20px] right-[20px] text-[#c2182b] text-[1.4rem] hover:rotate-90 transition-transform duration-300"
              aria-label="Tutup menu produk"
            >
              <FaXmark aria-hidden="true" />
            </button>

            {/* Tabs Range / Application */}
            <div className="flex gap-[10px] mb-[25px]">
              <button
                onClick={() => setActiveTab('range')}
                className={`px-[30px] py-[12px] text-[0.9rem] font-bold rounded-[4px] transition-colors ${activeTab === 'range' ? 'bg-[#c2182b] text-white' : 'bg-[#ececec] text-[#0a1428] hover:bg-[#e2e8f0]'}`}
              >
                Range Produk
              </button>
              <button
                onClick={() => setActiveTab('application')}
                className={`px-[30px] py-[12px] text-[0.9rem] font-bold rounded-[4px] transition-colors ${activeTab === 'application' ? 'bg-[#c2182b] text-white' : 'bg-[#ececec] text-[#0a1428] hover:bg-[#e2e8f0]'}`}
              >
                Aplikasi Industri
              </button>
            </div>

            {activeTab === 'range' ? (
              <div className="grid grid-cols-[240px_280px_1fr] gap-[20px]">
                {/* KOLOM 1: Kategori Produk */}
                <div className="space-y-[10px]">
                  {MENU_CATEGORIES.map((cat) => (
                    <button
                      key={cat.id}
                      onClick={() => { setActiveCategory(cat); setActiveModel(cat.models[0]); }}
                      className={`w-full flex items-center justify-between gap-[10px] p-[15px] rounded-[4px] transition-colors ${activeCategory.id === cat.id ? 'bg-white shadow-sm border border-[#e2e8f0] text-[#c2182b] font-bold' : 'bg-[#f4f4f4] text-[#0a1428] hover:bg-[#ececec]'}`}
                    >
                      <span className="text-[0.9rem] text-left">{cat.name}</span>
                      <img src={cat.image} alt={cat.name} className="w-[50px] h-[35px] object-cover rounded-[2px]" onError={handleImgError} />
                    </button>
                  ))}
                </div>

                {/* KOLOM 2: Daftar Model / Varian */}
                <div className="space-y-[10px]">
                  {activeCategory.models.map((model) => (
                    <button
                      key={model.id}
                      onClick={() => setActiveModel(model)}
                      className={`w-full text-left p-[15px] rounded-[4px] transition-colors ${activeModel.id === model.id ? 'bg-white shadow-sm border border-[#e2e8f0] text-[#c2182b] font-bold' : 'bg-[#f4f4f4] text-[#0a1428] hover:bg-[#ececec]'}`}
                    >
                      <span className="text-[0.9rem]">{model.name}</span>
                    </button>
                  ))}
                </div>

                {/* KOLOM 3: Preview Model Aktif */}
                <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[4px] p-[25px] flex flex-col">
                  <div className="flex items-center justify-center h-[160px] mb-[15px] overflow-hidden">
                    <img src={activeCategory.image} alt={activeModel.name} className="max-h-full w-auto object-contain" onError={handleImgError} />
                  </div>
                  <h4 className="text-[1.2rem] font-extrabold text-[#0a1428] mb-[6px]">{activeModel.name}</h4>
                  <p className="text-[0.85rem] text-[#64748b] mb-[15px]">{activeModel.tagline}</p>
                  <div className="space-y-[8px] mb-[20px]">
                    {activeModel.specs.map((s, i) => (
                      <div key={i} className="flex justify-between gap-[15px] text-[0.8rem] border-b border-[#e2e8f0] pb-[6px]">
                        <span className="text-[#64748b]">{s.label}</span>
                        <span className="font-bold text-[#0a1428] text-right">{s.value}</span>
                      </div>
                    ))}
                  </div>
                  <a
                    href={waLink(activeModel.name)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block bg-[#c2182b] hover:bg-[#a01526] text-white text-center px-[20px] py-[10px] rounded-[4px] text-[0.85rem] font-bold uppercase tracking-[0.5px] transition-colors"
                  >
                    Hubungi Marketing
                  </a>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-[300px_1fr] gap-[20px]">
                {/* KOLOM 1: Daftar Aplikasi Industri */}
                <div className="space-y-[10px]">
                  {MENU_APPLICATIONS.map((app) => (
                    <button
                      key={app.id}
                      onClick={() => setActiveApp(app)}
                      className={`w-full text-left p-[15px] rounded-[4px] transition-colors ${activeApp.id === app.id ? 'bg-white shadow-sm border border-[#e2e8f0] text-[#c2182b] font-bold' : 'bg-[#f4f4f4] text-[#0a1428] hover:bg-[#ececec]'}`}
                    >
                      <span className="text-[0.9rem]">{app.name}</span>
                    </button>
                  ))}
                </div>

                {/* KOLOM 2: Preview Aplikasi Aktif */}
                <div className="bg-[#f8fafc] border border-[#e2e8f0] rounded-[4px] p-[30px] flex flex-col">
                  <h4 className="text-[1.3rem] font-extrabold text-[#0a1428] mb-[10px]">{activeApp.name}</h4>
                  <p className="text-[0.9rem] text-[#64748b] leading-[1.7] mb-[20px]">{activeApp.desc}</p>
                  <a
                    href={waLink(`solusi kemasan untuk kebutuhan ${activeApp.name}`)}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-auto inline-block bg-[#c2182b] hover:bg-[#a01526] text-white text-center px-[20px] py-[10px] rounded-[4px] text-[0.85rem] font-bold uppercase tracking-[0.5px] transition-colors w-max"
                  >
                    Hubungi Marketing
                  </a>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
    </nav>
  );
}
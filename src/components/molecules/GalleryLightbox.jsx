import { useEffect } from 'react';
import { FaXmark, FaWhatsapp } from 'react-icons/fa6';
import { Button } from '../atoms/Button';
import { waLink } from '../../data/navigationData';

export default function GalleryLightbox({ item, onClose }) {
  useEffect(() => {
    if (!item) return;

    const handleKeyDown = (e) => {
      if (e.key === 'Escape') onClose();
    };

    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', handleKeyDown);

    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [item, onClose]);

  if (!item) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 md:p-10 bg-black/85 backdrop-blur-md animate-fade-in"
      onClick={onClose}
      role="dialog"
      aria-modal="true"
      aria-label={item.title}
    >
      <div 
        className="relative max-w-4xl w-full bg-slate-900 border border-white/10 rounded-2xl overflow-hidden shadow-2xl flex flex-col md:flex-row max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close Button */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 w-10 h-10 rounded-full bg-black/60 hover:bg-[#c2182b] text-white flex items-center justify-center transition-all duration-300"
          aria-label="Tutup foto"
        >
          <FaXmark className="text-xl" />
        </button>

        {/* Image Preview Container */}
        <div className="w-full md:w-3/5 bg-black flex items-center justify-center min-h-[280px] max-h-[50vh] md:max-h-none overflow-hidden">
          <img
            src={item.image}
            alt={item.title}
            className="w-full h-full object-contain max-h-[75vh]"
          />
        </div>

        {/* Details & Action Sidebar */}
        <div className="w-full md:w-2/5 p-6 md:p-8 flex flex-col justify-between text-white bg-slate-900 overflow-y-auto">
          <div>
            <span className="inline-block uppercase tracking-wider text-xs font-semibold text-[#eab308] bg-white/10 px-3 py-1 rounded-full border border-white/15 mb-3">
              {item.category}
            </span>
            <h3 className="text-xl md:text-2xl font-bold leading-tight mb-3 text-white">
              {item.title}
            </h3>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed mb-6">
              {item.description}
            </p>
          </div>

          <div className="pt-4 border-t border-white/10 mt-auto">
            <Button
              href={waLink(item.title)}
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3 text-sm uppercase tracking-wide gap-2 flex items-center justify-center shadow-lg"
            >
              <FaWhatsapp className="text-lg" /> Tanya Produk Ini
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

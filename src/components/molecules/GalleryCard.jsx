import { FaExpand } from 'react-icons/fa6';

export default function GalleryCard({ item, onClick }) {
  return (
    <div 
      onClick={() => onClick(item)}
      className="break-inside-avoid mb-4 group cursor-pointer bg-white rounded-xl overflow-hidden border border-slate-200/80 shadow-xs hover:shadow-md transition-all duration-300 transform hover:-translate-y-1"
      role="button"
      tabIndex={0}
      aria-label={`Lihat foto ${item.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick(item);
      }}
    >
      {/* Photo Image Container */}
      <div className="relative overflow-hidden bg-slate-100">
        <img
          src={item.image}
          alt={item.title}
          loading="lazy"
          className={`w-full ${item.heightClass || 'h-64'} object-cover object-center group-hover:scale-105 transition-transform duration-500 ease-out`}
        />
        
        {/* Subtle hover overlay with zoom icon */}
        <div className="absolute inset-0 bg-slate-900/30 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
          <span className="bg-white/90 text-slate-900 text-xs font-bold px-3 py-1.5 rounded-full shadow-md flex items-center gap-1.5 transform scale-90 group-hover:scale-100 transition-transform duration-300">
            <FaExpand className="text-xs text-[#c2182b]" /> Lihat Foto
          </span>
        </div>
      </div>

      {/* Card Content Footer */}
      <div className="p-3.5 md:p-4">
        <span className="inline-block text-[0.68rem] font-extrabold uppercase tracking-wider text-[#c2182b] bg-[#c2182b]/10 px-2 py-0.5 rounded-md mb-1.5">
          {item.category}
        </span>
        <h4 className="text-slate-900 text-sm md:text-base font-bold leading-snug line-clamp-2">
          {item.title}
        </h4>
      </div>
    </div>
  );
}

import { FaMagnifyingGlassPlus } from 'react-icons/fa6';

export default function GalleryCard({ item, onClick }) {
  return (
    <div 
      onClick={() => onClick(item)}
      className="break-inside-avoid mb-4 group cursor-pointer relative overflow-hidden rounded-xl bg-slate-900 border border-slate-200/80 shadow-md hover:shadow-xl transition-all duration-500 transform hover:-translate-y-1"
      role="button"
      tabIndex={0}
      aria-label={`Lihat foto ${item.title}`}
      onKeyDown={(e) => {
        if (e.key === 'Enter' || e.key === ' ') onClick(item);
      }}
    >
      {/* Photo Image */}
      <img
        src={item.image}
        alt={item.title}
        loading="lazy"
        className={`w-full ${item.heightClass || 'h-72'} object-cover object-center group-hover:scale-110 transition-transform duration-700 ease-out`}
      />

      {/* Faded Gradient Overlay */}
      <div className="absolute inset-0 bg-linear-to-t from-slate-950/90 via-slate-950/40 to-transparent opacity-80 group-hover:opacity-95 transition-opacity duration-300" />

      {/* Badge Category (Top Left) */}
      <div className="absolute top-3 left-3 z-10">
        <span className="inline-block text-[0.7rem] uppercase tracking-wider font-semibold bg-white/20 backdrop-blur-md text-white px-2.5 py-1 rounded-full border border-white/20">
          {item.category}
        </span>
      </div>

      {/* Zoom Icon (Top Right) */}
      <div className="absolute top-3 right-3 z-10 w-8 h-8 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
        <FaMagnifyingGlassPlus className="text-sm" aria-hidden="true" />
      </div>

      {/* Caption & Title (Bottom) */}
      <div className="absolute bottom-0 left-0 right-0 p-4 z-10 transform translate-y-1 group-hover:translate-y-0 transition-transform duration-300">
        <h4 className="text-white text-base md:text-lg font-bold leading-tight drop-shadow-sm mb-1">
          {item.title}
        </h4>
        <p className="text-slate-300 text-xs line-clamp-2 opacity-90 font-normal">
          {item.description}
        </p>
      </div>
    </div>
  );
}

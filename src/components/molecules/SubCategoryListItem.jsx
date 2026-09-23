import { FaChevronRight } from 'react-icons/fa6';

export default function SubCategoryListItem({ item, isActive, onClick }) {
  return (
    <button
      onClick={() => onClick(item)}
      className={`w-full text-left p-4 md:p-5 rounded-lg border transition-all duration-300 flex items-center justify-between gap-4 cursor-pointer ${
        isActive
          ? 'bg-white border-[#c2182b] shadow-md text-[#0a1428]'
          : 'bg-[#f8fafc] border-[#e2e8f0] text-[#64748b] hover:bg-white hover:border-slate-300 hover:text-[#0a1428]'
      }`}
      aria-selected={isActive}
    >
      <div>
        <h4 className={`text-sm md:text-base font-bold mb-1 ${isActive ? 'text-[#c2182b]' : 'text-[#0a1428]'}`}>
          {item.name}
        </h4>
        {item.tagline && (
          <p className="text-xs md:text-sm text-slate-500 line-clamp-2 leading-relaxed">
            {item.tagline}
          </p>
        )}
      </div>
      <FaChevronRight 
        className={`text-xs md:text-sm shrink-0 transition-transform duration-300 ${
          isActive ? 'text-[#c2182b] translate-x-1' : 'text-slate-400'
        }`} 
      />
    </button>
  );
}

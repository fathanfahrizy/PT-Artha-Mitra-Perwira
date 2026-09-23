export default function GalleryFilterBar({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-2.5 my-6 md:my-8 px-2">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            className={`px-4 py-2 text-xs md:text-sm font-semibold rounded-full transition-all duration-300 cursor-pointer ${
              isActive 
                ? 'bg-[#c2182b] text-white shadow-md scale-105' 
                : 'bg-white text-slate-700 border border-slate-200 hover:border-[#c2182b] hover:text-[#c2182b]'
            }`}
          >
            {cat}
          </button>
        );
      })}
    </div>
  );
}

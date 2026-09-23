import { Button } from '../atoms/Button';

export default function GalleryFilterBar({ categories, activeCategory, onSelectCategory }) {
  return (
    <div className="flex flex-wrap items-center justify-center gap-2 md:gap-3 my-6 md:my-8 px-2">
      {categories.map((cat) => {
        const isActive = activeCategory === cat;
        return (
          <Button
            key={cat}
            onClick={() => onSelectCategory(cat)}
            variant={isActive ? 'active' : 'ghost'}
            className={`px-4 py-2 text-xs md:text-sm rounded-full transition-all duration-300 ${
              isActive 
                ? 'shadow-md scale-105 font-bold' 
                : 'text-slate-600 hover:text-slate-900 hover:bg-slate-100'
            }`}
          >
            {cat}
          </Button>
        );
      })}
    </div>
  );
}

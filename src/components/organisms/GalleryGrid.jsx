import { useState, useMemo } from 'react';
import GalleryFilterBar from '../molecules/GalleryFilterBar';
import GalleryCard from '../molecules/GalleryCard';
import GalleryLightbox from '../molecules/GalleryLightbox';
import ScrollReveal from '../atoms/ScrollReveal';

export default function GalleryGrid({ items, categories }) {
  const [activeCategory, setActiveCategory] = useState("Semua");
  const [selectedItem, setSelectedItem] = useState(null);

  const filteredItems = useMemo(() => {
    if (activeCategory === "Semua") return items;
    return items.filter((item) => item.category === activeCategory);
  }, [items, activeCategory]);

  return (
    <section className="py-8 md:py-12 px-3.75 md:px-5 max-w-300 mx-auto" aria-label="Galeri Produk Pinterest">
      {/* Category Filter Molecule */}
      <GalleryFilterBar 
        categories={categories} 
        activeCategory={activeCategory} 
        onSelectCategory={setActiveCategory} 
      />

      {/* Pinterest-style Multi-column Masonry Layout */}
      <ScrollReveal key={activeCategory}>
        <div className="columns-1 sm:columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4">
          {filteredItems.map((item) => (
            <GalleryCard 
              key={item.id} 
              item={item} 
              onClick={setSelectedItem} 
            />
          ))}
        </div>
      </ScrollReveal>

      {/* Empty State */}
      {filteredItems.length === 0 && (
        <div className="text-center py-16 text-slate-500">
          <p className="text-lg">Tidak ada foto dalam kategori ini.</p>
        </div>
      )}

      {/* Lightbox Modal Molecule */}
      {selectedItem && (
        <GalleryLightbox 
          item={selectedItem} 
          onClose={() => setSelectedItem(null)} 
        />
      )}
    </section>
  );
}

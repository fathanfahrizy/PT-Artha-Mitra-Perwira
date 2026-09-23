import { useState, useEffect } from 'react';
import SubCategoryListItem from '../molecules/SubCategoryListItem';
import SubCategoryDetailCard from '../molecules/SubCategoryDetailCard';
import ScrollReveal from '../atoms/ScrollReveal';

export default function ProductSubCategorySection({ subCategories = [], fallbackImage }) {
  const [activeSubCategory, setActiveSubCategory] = useState(subCategories[0] || null);

  useEffect(() => {
    if (subCategories && subCategories.length > 0) {
      setActiveSubCategory(subCategories[0]);
    }
  }, [subCategories]);

  // Conditional Rendering: If product has no sub-categories, do not render section
  if (!subCategories || subCategories.length === 0) {
    return null;
  }

  return (
    <ScrollReveal>
      <section className="py-12 md:py-16 px-3.75 md:px-5 max-w-300 mx-auto" aria-label="Sub Kategori dan Varian Produk">
        {/* Section Header */}
        <div className="mb-8 text-center md:text-left">
          <span className="inline-block uppercase tracking-[2px] text-xs font-bold text-[#c2182b] bg-[#c2182b]/10 px-3.5 py-1.5 rounded-full mb-2">
            Varian & Sub-Kategori
          </span>
          <h2 className="text-xl sm:text-2xl md:text-3xl font-extrabold text-[#0a1428] leading-tight">
            Pilihan Varian Produk
          </h2>
          <p className="text-slate-500 text-xs sm:text-sm mt-1">
            Pilih varian produk di bawah ini untuk melihat rincian spesifikasi dan gambarnya.
          </p>
        </div>

        {/* 2-Column Window Container */}
        <div className="grid md:grid-cols-[1fr_1.2fr] lg:grid-cols-[1fr_1.3fr] gap-6 md:gap-8 items-start">
          {/* Window 1: Sub-Category List (Column 1) */}
          <div className="space-y-3 bg-[#f8fafc] border border-[#e2e8f0] p-4 md:p-5 rounded-xl">
            <p className="text-xs uppercase tracking-wider font-bold text-slate-400 mb-3 px-1">
              Daftar Tipe / Varian
            </p>
            {subCategories.map((item) => (
              <SubCategoryListItem
                key={item.id || item.name}
                item={item}
                isActive={activeSubCategory?.id === item.id || activeSubCategory?.name === item.name}
                onClick={setActiveSubCategory}
              />
            ))}
          </div>

          {/* Window 2: Detailed View for Selected Sub-Category (Column 2) */}
          <div className="h-full">
            <SubCategoryDetailCard 
              item={activeSubCategory} 
              fallbackImage={fallbackImage}
            />
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

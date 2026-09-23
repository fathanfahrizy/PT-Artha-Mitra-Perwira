import GalleryGrid from '../organisms/GalleryGrid';
import ContactSection from '../organisms/ContactSection';
import ScrollReveal from '../atoms/ScrollReveal';

export default function GalleryTemplate({ items, categories }) {
  return (
    <div className="bg-slate-50 min-h-screen text-[#1e293b]">
      {/* Clean Gallery Header */}
      <ScrollReveal>
        <section className="pt-27.5 md:pt-35 pb-10 md:pb-14 px-3.75 md:px-5 bg-linear-to-br from-[#0a1428] to-[#172554] text-white text-center relative overflow-hidden">
          <div className="max-w-200 mx-auto">
            <span className="inline-block uppercase tracking-[2px] text-xs font-bold text-[#eab308] bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15 mb-3">
              Galeri Produk
            </span>
            <h1 className="text-2xl sm:text-3xl md:text-4xl font-extrabold leading-tight mb-3">
              Portofolio & Dokumentasi Produk
            </h1>
            <p className="text-slate-300 text-sm md:text-base leading-relaxed">
              Koleksi foto produk kemasan karton box, pallet, suku karton, dan solusi pengemasan industri dari PT Artha Mitra Perwira.
            </p>
          </div>
        </section>
      </ScrollReveal>

      {/* Gallery Main Grid Organism */}
      <main>
        <GalleryGrid items={items} categories={categories} />
      </main>

      {/* Contact Section Organism */}
      <ContactSection />
    </div>
  );
}

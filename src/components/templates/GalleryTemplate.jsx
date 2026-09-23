import ProductDetailHero from '../organisms/ProductDetailHero';
import GalleryGrid from '../organisms/GalleryGrid';
import ContactSection from '../organisms/ContactSection';

export default function GalleryTemplate({ items, categories }) {
  return (
    <div className="bg-slate-50 min-h-screen text-[#1e293b]">
      {/* Hero Header for Gallery */}
      <ProductDetailHero
        category="Galeri Produk & Dokumentasi"
        quote="Portofolio visual hasil kemasan karton box, pallet, suku karton, dan produk pendukung industri berkualitas tinggi dari PT Artha Mitra Perwira."
        productName="Koleksi Galeri Foto Produk"
        imageSrc="/images/foto-hero.webp"
      />

      {/* Gallery Main Organism */}
      <main>
        <GalleryGrid items={items} categories={categories} />
      </main>

      {/* Contact Section Organism */}
      <ContactSection />
    </div>
  );
}

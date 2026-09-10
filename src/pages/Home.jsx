import HeroSection from '@/components/organisms/HeroSection';
import ProductsSection from '@/components/organisms/ProductsSection';
import AboutSection from '@/components/organisms/AboutSection';
import ContactSection from '@/components/organisms/ContactSection';
import { HERO_BADGES, PRODUCTS } from '@/data/homeData';

export default function Home() {
  return (
    <div className="bg-white text-[#1e293b] leading-[1.6]">
      <HeroSection 
        subheading="Kemasan Aman, Produk Nyaman, Bisnis Berkembang!"
        title={
          <>
            SOLUSI KEMASAN <span className="text-[#eab308] inline-block hover:scale-110 transition-transform duration-300 cursor-default">KARTON</span> BERKUALITAS UNTUK BISNIS ANDA
          </>
        }
        description="Kami menyediakan produk karton berkualitas tinggi, layanan percetakan umum, serta kebutuhan consumable production dengan harga kompetitif untuk mendukung industri Anda."
        badges={HERO_BADGES}
        imageSrc="/images/foto-hero.jpeg"
      />
      <ProductsSection products={PRODUCTS} />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
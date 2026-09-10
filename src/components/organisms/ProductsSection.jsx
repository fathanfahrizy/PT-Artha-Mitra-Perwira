
import { FEATURES_CAROUSEL } from '../../data/homeData';
import FeatureCarousel from '../molecules/FeatureCarousel';
import ScrollReveal from '../atoms/ScrollReveal';

export default function ProductsSection() {
  return (
    <ScrollReveal>
      <section id="produk" className="py-15 md:py-20 px-3.75 md:px-5 max-w-300 mx-auto" aria-label="Produk & layanan unggulan">
        <h2 className="text-center text-[1.4rem] md:text-[1.75rem] font-extrabold text-[#0a1428] mb-8.75 md:mb-12.5 relative after:content-[''] after:block after:w-15 after:h-0.75 after:bg-[#c2182b] after:mx-auto after:mt-2.5 after:rounded-xs hover:after:w-25 after:transition-all after:duration-500">
          SOLUSI LENGKAP KAMI
        </h2>
        <FeatureCarousel features={FEATURES_CAROUSEL} />
      </section>
    </ScrollReveal>
  );
}
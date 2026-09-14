/**
 * ProductsSection.jsx (REUSABLE)
 * ------------------------------
 * Saklar tampilan lewat PROP `products` (pola reusable Raka):
 * - DIKIRIM products (array isi) → grid flip card ProductCard
 * - TIDAK dikirim               → FeatureCarousel showcase
 * Props:
 * - title    : judul section (opsional, default otomatis per mode)
 * - products : data grid (default null = mode carousel)
 */
import { FEATURES_CAROUSEL } from '../../data/homeData';
import ProductCard from '../molecules/ProductCard';
import FeatureCarousel from '../molecules/FeatureCarousel';
import ScrollReveal from '../atoms/ScrollReveal';

export default function ProductsSection({ title, products = null }) {
  const useGrid = Array.isArray(products) && products.length > 0;
  const heading = title ?? (useGrid ? 'PRODUK UNGGULAN KAMI' : 'SOLUSI LENGKAP KAMI');

  return (
    <ScrollReveal>
      <section id="produk" className="py-15 md:py-20 px-3.75 md:px-5 max-w-300 mx-auto" aria-label={useGrid ? 'Produk unggulan' : 'Produk & layanan unggulan'}>
        {heading && (
          <h2 className="text-center text-[1.4rem] md:text-[1.75rem] font-extrabold text-[#0a1428] mb-8.75 md:mb-12.5 relative after:content-[''] after:block after:w-15 after:h-0.75 after:bg-[#c2182b] after:mx-auto after:mt-2.5 after:rounded-xs hover:after:w-25 after:transition-all after:duration-500">
            {heading}
          </h2>
        )}
        {useGrid ? (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7.5">
            {products.map((prod, idx) => (
              <div key={idx} className={idx === 2 && products.length === 3 ? 'sm:col-span-2 lg:col-span-1' : ''}>
                <ProductCard prod={prod} />
              </div>
            ))}
          </div>
        ) : (
          <FeatureCarousel features={FEATURES_CAROUSEL} />
        )}
      </section>
    </ScrollReveal>
  );
}
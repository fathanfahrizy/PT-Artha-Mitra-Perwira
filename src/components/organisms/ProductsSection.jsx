import { PRODUCTS } from '../../data/homeData';
import ProductCard from '../molecules/ProductCard';
import ScrollReveal from '../atoms/ScrollReveal';

export default function ProductsSection() {
  return (
    <ScrollReveal>
      <section id="produk" className="py-[60px] md:py-[80px] px-[15px] md:px-[20px] max-w-[1200px] mx-auto" aria-label="Produk unggulan">
        <h2 className="text-center text-[1.4rem] md:text-[1.75rem] font-extrabold text-[#0a1428] mb-[35px] md:mb-[50px] relative after:content-[''] after:block after:w-[60px] after:h-[3px] after:bg-[#c2182b] after:mx-auto after:mt-[10px] after:rounded-[2px] hover:after:w-[100px] after:transition-all after:duration-500">
          PRODUK UNGGULAN KAMI
        </h2>
        {/* Grid: 1 kol (phone) / 2 kol (tablet, card ke-3 span penuh) / 3 kol (desktop) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-[20px] lg:gap-[30px]">
          {PRODUCTS.map((prod, idx) => (
            <div key={idx} className={idx === 2 ? 'sm:col-span-2 lg:col-span-1' : ''}>
              <ProductCard prod={prod} />
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

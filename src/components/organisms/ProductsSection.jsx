import ProductCard from '../molecules/ProductCard';
import ScrollReveal from '../atoms/ScrollReveal';

export default function ProductsSection({
  title = "PRODUK UNGGULAN KAMI",
  products = []
}) {
  return (
    <ScrollReveal>
      <section id="produk" className="py-15 md:py-20 px-3.75 md:px-5 max-w-300 mx-auto" aria-label="Produk unggulan">
        {title && (
          <h2 className="text-center text-[1.4rem] md:text-[1.75rem] font-extrabold text-[#0a1428] mb-8.75 md:mb-12.5 relative after:content-[''] after:block after:w-15 after:h-0.75 after:bg-[#c2182b] after:mx-auto after:mt-2.5 after:rounded-xs hover:after:w-25 after:transition-all after:duration-500">
            {title}
          </h2>
        )}
        {/* Grid: 1 kol (phone) / 2 kol (tablet, card ke-3 span penuh) / 3 kol (desktop) */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5 lg:gap-7.5">
          {products.map((prod, idx) => (
            <div key={idx} className={idx === 2 && products.length === 3 ? 'sm:col-span-2 lg:col-span-1' : ''}>
              <ProductCard prod={prod} />
            </div>
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

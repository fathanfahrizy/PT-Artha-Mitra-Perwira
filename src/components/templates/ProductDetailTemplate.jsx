import ProductDetailHero from '../organisms/ProductDetailHero';
import ProductSpecsSection from '../organisms/ProductSpecsSection';
import ContactSection from '../organisms/ContactSection';
import ScrollReveal from '../atoms/ScrollReveal';

export default function ProductDetailTemplate({ product }) {
  if (!product) return null;

  return (
    <div className="bg-white text-[#1e293b] leading-[1.6]">
      <ProductDetailHero 
        quote={product.tagline}
        productName={product.title}
        imageSrc={product.image}
      />
      
      {/* Product Description */}
      {product.description && (
        <ScrollReveal>
          <section className="py-10 px-3.75 md:px-5 max-w-300 mx-auto text-center">
             <p className="text-[1rem] md:text-[1.1rem] text-[#64748b] max-w-4xl mx-auto leading-[1.8]">
                {product.description}
             </p>
          </section>
        </ScrollReveal>
      )}
      
      <ProductSpecsSection specs={product.specs} />
      
      <ContactSection />
    </div>
  );
}

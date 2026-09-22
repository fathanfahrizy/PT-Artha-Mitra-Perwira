import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import HeroSection from '../organisms/HeroSection';
import ProductSpecsSection from '../organisms/ProductSpecsSection';
import ContactSection from '../organisms/ContactSection';
import ScrollReveal from '../atoms/ScrollReveal';

export default function ProductDetailTemplate({ product }) {
  if (!product) return null;

  return (
    <div className="bg-white text-[#1e293b] leading-[1.6]">
      {/* Breadcrumbs / Back Link */}
      <div className="max-w-300 mx-auto px-3.75 md:px-5 pt-25 md:pt-30 pb-2">
        <Link to="/produk" className="inline-flex items-center gap-2 text-[#64748b] hover:text-[#c2182b] text-[0.85rem] font-semibold transition-colors duration-300">
          <FaArrowLeft /> Kembali ke Daftar Produk
        </Link>
      </div>

      <HeroSection 
        subheading="Detail Produk"
        title={product.title}
        description={product.tagline}
        imageSrc={product.image}
        badges={[]} 
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

import HeroSection from '../components/organisms/HeroSection';
import ProductsSection from '../components/organisms/ProductsSection';
import AboutSection from '../components/organisms/AboutSection';
import ContactSection from '../components/organisms/ContactSection';

export default function Home() {
  return (
    <div className="bg-white text-[#1e293b] leading-[1.6]">
      <HeroSection />
      <ProductsSection />
      <AboutSection />
      <ContactSection />
    </div>
  );
}
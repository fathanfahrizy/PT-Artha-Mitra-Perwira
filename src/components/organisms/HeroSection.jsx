import { HERO_BADGES } from '../../data/homeData';
import { PixelImage } from '../atoms/PixelImage';
import ScrollReveal from '../atoms/ScrollReveal';

export default function HeroSection() {
  return (
    <ScrollReveal>
      <section id="beranda" className="pt-[110px] md:pt-[140px] px-[15px] md:px-[20px] pb-[60px] md:pb-[80px] bg-gradient-to-br from-[#0a1428] to-[#172554] text-white relative overflow-hidden" aria-label="Hero section">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-[1.1fr_0.9fr] gap-[30px] md:gap-[40px] items-center">
          <div>
            <h3 className="text-[#eab308] text-[0.95rem] md:text-[1.1rem] font-bold mb-[12px] md:mb-[15px] uppercase tracking-[1px] animate-fade-in-up">
              Kemasan Aman, Produk Nyaman, Bisnis Berkembang!
            </h3>
            <h1 className="text-[2.1rem] sm:text-[2.6rem] lg:text-[3rem] font-extrabold leading-[1.15] mb-[16px] md:mb-[20px]">
              SOLUSI KEMASAN <span className="text-[#eab308] inline-block hover:scale-110 transition-transform duration-300 cursor-default">KARTON</span> BERKUALITAS UNTUK BISNIS ANDA
            </h1>
            <p className="text-[#cbd5e1] text-[0.95rem] md:text-[1.05rem] mb-[25px] md:mb-[30px]">
              Kami menyediakan produk karton berkualitas tinggi dengan harga kompetitif dan layanan terbaik untuk mendukung kebutuhan industri Anda.
            </p>
            <div className="grid grid-cols-3 gap-[10px] md:gap-[15px]">
              {HERO_BADGES.map((badge, idx) => (
                <div key={idx} className="bg-white/10 border border-white/15 p-[10px_6px] md:p-[15px_10px] rounded-[8px] text-center hover:-translate-y-2 hover:bg-white/20 transition-all duration-300 cursor-default group" role="article" aria-label={badge.text}>
                  <badge.icon className="text-[1.2rem] md:text-[1.5rem] text-[#c2182b] bg-white w-[32px] h-[32px] md:w-[40px] md:h-[40px] p-[7px] md:p-[8px] rounded-full mx-auto mb-[8px] md:mb-[10px] group-hover:scale-110 transition-transform duration-300" aria-hidden="true" />
                  <span className="block text-[0.65rem] md:text-[0.8rem] font-semibold">{badge.text}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="relative w-full aspect-[4/3] lg:aspect-auto lg:h-[500px] overflow-hidden rounded-[12px] shadow-[0_20px_25px_-5px_rgba(0,0,0,0.3)] border-[3px] border-white/10 group">
            <PixelImage
              src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=800&q=80"
              customGrid={{ rows: 4, cols: 6 }}
              grayscaleAnimation
              className="w-full h-full group-hover:scale-110 transition-transform duration-700 ease-in-out"
            />
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

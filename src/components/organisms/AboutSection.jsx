import { STATS } from '../../data/homeData';
import { PixelImage } from '../atoms/PixelImage';
import { Button } from '../atoms/Button';
import ScrollReveal from '../atoms/ScrollReveal';

export default function AboutSection() {
  return (
    <ScrollReveal>
      <section id="tentang" className="bg-[#f8fafc] border-y border-[#e2e8f0] py-15 md:py-20" aria-label="Tentang kami">
        <div className="max-w-300 mx-auto px-3.75 md:px-5 grid md:grid-cols-2 gap-8.75 md:gap-12.5 items-center">
          <div>
            <h2 className="text-[0.9rem] text-[#c2182b] font-bold uppercase mb-1.25">TENTANG KAMI</h2>
            <h1 className="text-[1.6rem] md:text-[2rem] font-extrabold text-[#0a1428] mb-4 md:mb-5 leading-[1.2]">
              PT ARTHA <span className="text-[#c2182b]">MITRA PERWIRA</span>
            </h1>
            <p className="text-[#64748b] mb-3.75 text-[0.95rem]">
              PT Artha Mitra Perwira adalah perusahaan yang bergerak di bidang produksi kemasan karton bergelombang (corrugated box) dan berbagai produk pendukung lainnya.
            </p>
            <p className="text-[#64748b] mb-3.75 text-[0.95rem]">
              Dengan komitmen terhadap kualitas, ketepatan waktu, dan kepuasan pelanggan, kami siap menjadi partner terpercaya dalam memenuhi kebutuhan kemasan industri Anda.
            </p>
            {/* Stats: 2x2 di phone, 4 kolom di >= md */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-3 md:gap-3.75 mt-6.25 md:mt-7.5 text-center">
              {STATS.map((stat, idx) => (
                <div key={idx} className="bg-white p-[12px_5px] md:p-[15px_5px] rounded-lg border border-[#e2e8f0] hover:-translate-y-2 hover:border-[#c2182b]/50 hover:shadow-lg transition-all duration-300 group" role="article" aria-label={stat.text}>
                  <stat.icon className="text-[1.25rem] text-[#c2182b] mb-1.25 mx-auto group-hover:animate-bounce" aria-hidden="true" />
                  <span className="block text-[0.7rem] md:text-[0.75rem] font-semibold text-[#1e293b]">{stat.text}</span>
                </div>
              ))}
            </div>
            <Button href="/compro-amp.pdf" className="mt-3.75 w-full px-4 lg:px-5 py-2.5 text-[0.85rem] lg:text-[0.9rem] hover:scale-105" aria-label="More detail company profile document" target='_blank' rel="noopener noreferrer">
              Lihat Lebih Detail
            </Button>
          </div>
          <div className="relative w-full aspect-4/3 lg:aspect-auto lg:h-112.5 overflow-hidden rounded-xl shadow-[0_10px_15px_-3px_rgba(0,0,0,0.1)] group">
            <PixelImage
              src="https://images.unsplash.com/photo-1578575437130-527eed3abbec?auto=format&fit=crop&w=800&q=80"
              customGrid={{ rows: 4, cols: 6 }}
              grayscaleAnimation
              className="w-full h-full group-hover:scale-105 transition-transform duration-700 ease-in-out"
            />
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

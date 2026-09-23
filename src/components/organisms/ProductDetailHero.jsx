import { Link } from 'react-router-dom';
import { FaArrowLeft } from 'react-icons/fa6';
import ScrollReveal from '../atoms/ScrollReveal';

export default function ProductDetailHero({
  productName,
  imageSrc,
  category = "Products",
  quote = "Menghadirkan inovasi dan keandalan tinggi untuk mendukung kemajuan industri serta efisiensi operasional bisnis Anda."
}) {
  return (
    <ScrollReveal>
      <section 
        className="relative pt-30 md:pt-40 px-3.75 md:px-5 pb-20 md:pb-28 text-white min-h-140 md:min-h-162.5 flex flex-col justify-between overflow-hidden bg-slate-900"
        aria-label="Hero section detail produk"
      >
        {/* Landscape background image with faded mask */}
        {imageSrc && (
          <div 
            className="absolute inset-0 bg-cover bg-center bg-no-repeat transition-transform duration-1000 scale-105"
            style={{ backgroundImage: `url(${imageSrc})` }}
          >
            {/* Subtle left & right horizontal fade + vertical downward fade overlays */}
            <div className="absolute inset-0 bg-linear-to-r from-slate-950/70 via-transparent to-slate-950/70 pointer-events-none" />
            <div className="absolute inset-0 bg-linear-to-b from-slate-950/40 via-transparent to-slate-950/90 pointer-events-none" />
          </div>
        )}

        {/* Foreground Content */}
        <div className="relative z-10 max-w-300 mx-auto w-full flex flex-col h-full justify-between gap-8 md:gap-12">
          {/* Top Header Section with margin */}
          <div className="flex flex-wrap items-center justify-between gap-4 mb-4">
            <Link to="/produk" className="inline-flex items-center gap-2 text-slate-300 hover:text-white text-xs md:text-sm font-semibold transition-colors duration-300 bg-black/30 backdrop-blur-sm px-3 py-1.5 rounded-lg border border-white/10">
              <FaArrowLeft /> Kembali ke Daftar Produk
            </Link>
            <span className="inline-block uppercase tracking-[2px] text-xs md:text-sm font-bold text-[#eab308] bg-white/10 backdrop-blur-md px-3.5 py-1.5 rounded-full border border-white/15">
              {category}
            </span>
          </div>

          {/* Center / Highlight Quote & Intro */}
          <div className="my-auto py-4">
            {/* Defining Quote */}
            <blockquote className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light italic leading-relaxed text-slate-100 max-w-4xl border-l-4 border-[#c2182b] pl-4 md:pl-6 mb-6">
              “{quote}”
            </blockquote>

            {/* Smaller introducing text */}
            <p className="text-sm md:text-base text-slate-300 font-medium tracking-wide">
              Memperkenalkan <span className="text-white font-bold underline decoration-[#c2182b] underline-offset-4">{productName}</span>
            </p>
          </div>
        </div>
      </section>
    </ScrollReveal>
  );
}

import SpecItem from '../molecules/SpecItem';
import ScrollReveal from '../atoms/ScrollReveal';

export default function ProductSpecsSection({ specs = [] }) {
  if (!specs || specs.length === 0) return null;

  return (
    <ScrollReveal>
      <section className="py-10 md:py-15 px-3.75 md:px-5 max-w-300 mx-auto" aria-label="Spesifikasi Produk">
        <h2 className="text-center text-[1.4rem] md:text-[1.75rem] font-extrabold text-[#0a1428] mb-8.75 relative after:content-[''] after:block after:w-15 after:h-0.75 after:bg-[#c2182b] after:mx-auto after:mt-2.5 after:rounded-xs">
          SPESIFIKASI
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3.75 sm:gap-5">
          {specs.map((spec, index) => (
            <SpecItem key={index} icon={spec.icon} label={spec.label} value={spec.value} />
          ))}
        </div>
      </section>
    </ScrollReveal>
  );
}

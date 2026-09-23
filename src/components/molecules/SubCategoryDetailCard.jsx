import { Button } from '../atoms/Button';
import { waLink } from '../../data/navigationData';

export default function SubCategoryDetailCard({ item, fallbackImage }) {
  if (!item) return null;

  const displayImage = item.image || fallbackImage;

  return (
    <div className="bg-white border border-[#e2e8f0] rounded-xl p-5 md:p-7 shadow-sm flex flex-col justify-between h-full">
      <div>
        {/* Photo Container */}
        {displayImage && (
          <div className="relative w-full h-48 md:h-60 rounded-lg overflow-hidden bg-slate-100 mb-5 border border-slate-100 flex items-center justify-center">
            <img
              src={displayImage}
              alt={item.name}
              className="max-h-full w-auto object-contain transition-transform duration-500 hover:scale-105"
            />
          </div>
        )}

        {/* Title & Tagline */}
        <span className="inline-block uppercase tracking-wider text-[0.7rem] font-bold text-[#c2182b] bg-[#c2182b]/10 px-2.5 py-1 rounded-md mb-2">
          Spesifikasi Varian
        </span>
        <h3 className="text-lg md:text-xl font-extrabold text-[#0a1428] mb-2">
          {item.name}
        </h3>
        {item.tagline && (
          <p className="text-xs md:text-sm text-slate-600 mb-5 leading-relaxed">
            {item.tagline}
          </p>
        )}

        {/* Specs Table */}
        {item.specs && item.specs.length > 0 && (
          <div className="space-y-2 mb-6 bg-[#f8fafc] p-4 rounded-lg border border-slate-100">
            {item.specs.map((spec, idx) => (
              <div key={idx} className="flex justify-between items-center text-xs md:text-sm border-b border-slate-200/60 pb-2 last:border-b-0 last:pb-0 gap-3">
                <span className="text-slate-500 font-medium">{spec.label}</span>
                <span className="font-bold text-[#0a1428] text-right">{spec.value}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {/* Action CTA */}
      <Button
        href={waLink(item.name)}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full py-3 text-xs md:text-sm uppercase tracking-wide"
      >
        Tanya Varian Ini via WhatsApp
      </Button>
    </div>
  );
}

/**
 * ClientLogoCard.jsx
 * ------------------
 * Molecule component untuk menampilkan logo klien / mitra industri.
 * Mendukung visual crisp, rasio aspek proporsional, dan efek hover responsif.
 */
export default function ClientLogoCard({ client, className = '' }) {
  return (
    <div
      className={`group relative flex items-center justify-center bg-white rounded-xl border border-slate-200/80 px-6 py-4 shadow-xs transition-all duration-300 hover:-translate-y-1 hover:border-[#c2182b]/40 hover:shadow-md hover:shadow-slate-200/70 select-none ${className}`}
      title={client.name}
    >
      <img
        src={client.logo}
        alt={client.name || 'Logo Mitra Klien'}
        loading="lazy"
        className="max-h-12 w-auto max-w-35 object-contain transition-transform duration-300 group-hover:scale-108"
      />
    </div>
  );
}

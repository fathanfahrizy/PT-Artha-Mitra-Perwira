export default function SpecItem({ icon: Icon, label, value }) {
  return (
    <div className="bg-[#f8fafc] border border-[#e2e8f0] p-5 sm:p-6.25 flex flex-col rounded-sm transition-all duration-300 hover:border-[#c2182b]/30 hover:shadow-sm">
      <Icon className="text-[1.2rem] sm:text-[1.4rem] text-[#c2182b] mb-2 sm:mb-2.5" aria-hidden="true" />
      <p className="text-[0.8rem] sm:text-[0.85rem] font-bold text-[#0a1428] m-0 leading-[1.4]">{label}</p>
      <p className="text-[0.75rem] sm:text-[0.8rem] text-[#64748b] m-0 mt-1">{value}</p>
    </div>
  );
}

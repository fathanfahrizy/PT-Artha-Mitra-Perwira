import { FaTruckFast, FaBoxesPacking, FaUserTie, FaHandshake } from 'react-icons/fa6';
import { FEATURES } from '../data/footerData';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      {/* --- FEATURES STRIP --- */}
      <div className="bg-[#f8fafc] border-t border-[#e2e8f0] py-[40px] px-[20px]" role="contentinfo" aria-label="Footer features">
        <div className="max-w-[1200px] mx-auto grid md:grid-cols-4 gap-[20px]">
          {FEATURES.map((feat, idx) => (
            <div key={idx} className="group flex items-center gap-[15px] hover:-translate-y-2 transition-transform duration-300 cursor-default" role="article" aria-label={`${feat.title}: ${feat.sub}`}>
              <feat.icon className="text-[2rem] text-[#c2182b] group-hover:text-[#0a1428] group-hover:scale-110 transition-all duration-300" aria-hidden="true" />
              <div>
                <h4 className="text-[0.9rem] font-bold text-[#0a1428] m-0">{feat.title}</h4>
                <p className="text-[0.8rem] text-[#64748b] m-0 group-hover:text-[#c2182b] transition-colors">{feat.sub}</p>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* --- COPYRIGHT BAR --- */}
      <footer className="bg-[#060a12] text-[#94a3b8] py-[30px] px-[20px] text-center text-[0.85rem]" role="contentinfo">
        <p className="m-0 hover:text-white transition-colors cursor-default">
          Kami berkomitmen untuk terus memberikan produk dan layanan terbaik demi mendukung pertumbuhan bisnis Anda.
        </p>
        <p className="mt-[10px] m-0">
          &copy; {currentYear} PT Artha Mitra Perwira. <span className="text-white font-semibold hover:text-[#c2182b] transition-colors cursor-pointer">All Rights Reserved.</span>
        </p>
      </footer>
    </>
  );
}
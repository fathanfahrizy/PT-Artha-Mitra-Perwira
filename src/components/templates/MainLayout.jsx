import Navbar from '../organisms/Navbar';
import Footer from '../organisms/Footer';

export default function MainLayout({ children }) {
  return (
    <div className="font-sans text-[#1e293b] min-h-screen bg-white">
      <Navbar />
      <main>
        {children}
      </main>
      <Footer />
    </div>
  );
}

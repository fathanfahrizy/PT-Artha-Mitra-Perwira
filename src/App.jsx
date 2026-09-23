import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';
import { lazy, Suspense, useEffect } from 'react';
import MainLayout from './components/templates/MainLayout';

const Home = lazy(() => import('./pages/Home'));
const Product = lazy(() => import('./pages/Product'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));
const Gallery = lazy(() => import('./pages/Gallery'));

function useScrollToTop() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      setTimeout(() => {
        const id = hash.replace('#', '');
        const element = document.getElementById(id);
        if (element) {
          element.scrollIntoView({ behavior: 'smooth' });
        }
      }, 100);
    } else {
      window.scrollTo(0, 0);
    }
  }, [pathname, hash]);
}

function AppRoutes() {
  useScrollToTop();

  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/produk" element={<Product />} />
      <Route path="/produk/:slug" element={<ProductDetail />} />
      <Route path="/galeri" element={<Gallery />} />
    </Routes>
  );
}

export default function App() {

  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={
          <div className="flex h-screen items-center justify-center">
            <div className="text-2xl font-bold">Loading Contents...</div>
          </div>
        }>
        <AppRoutes />
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}
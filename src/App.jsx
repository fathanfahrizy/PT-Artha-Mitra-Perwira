import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import MainLayout from './components/templates/MainLayout';

const Home = lazy(() => import('./pages/Home'));
const Product = lazy(() => import('./pages/Product'));
const ProductDetail = lazy(() => import('./pages/ProductDetail'));

function App() {
  return (
    <BrowserRouter>
      <MainLayout>
        <Suspense fallback={
          <div className="flex h-screen items-center justify-center">
            <div className="text-2xl font-bold">Loading Contents...</div>
          </div>
        }>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/produk" element={<Product />} />
            <Route path="/produk/:slug" element={<ProductDetail />} />
          </Routes>
        </Suspense>
      </MainLayout>
    </BrowserRouter>
  );
}

export default App;
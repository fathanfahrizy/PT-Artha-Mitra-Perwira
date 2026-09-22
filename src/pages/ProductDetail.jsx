import { useEffect } from 'react';
import { useParams, Navigate } from 'react-router-dom';
import { PRODUCTS } from '@/data/productsData';
import ProductDetailTemplate from '@/components/templates/ProductDetailTemplate';

export default function ProductDetail() {
  const { slug } = useParams();
  
  const product = PRODUCTS.find(p => p.slug === slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!product) {
    return <Navigate to="/produk" replace />;
  }

  return <ProductDetailTemplate product={product} />;
}
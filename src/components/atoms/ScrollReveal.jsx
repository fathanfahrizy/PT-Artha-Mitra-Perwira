/**
 * ScrollReveal.jsx
 * ----------------
 * Komponen wrapper animasi fade-in + slide-up saat elemen masuk viewport.
 * Animasi hanya berjalan SEKALI per elemen (tidak repeat saat scroll up).
 *
 * Dipakai di: src/pages/Home.jsx (semua section)
 * Teknologi : IntersectionObserver API (tanpa library tambahan)
 */
import { useState, useEffect, useRef } from 'react';

export default function ScrollReveal({ children, className = "", delay = 0 }) {
  const [isVisible, setIsVisible] = useState(false);
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry], obs) => {
        // Kalau elemen udah masuk layar
        if (entry.isIntersecting) {
          // Nyalakan animasinya (dengan delay opsional)
          setTimeout(() => setIsVisible(true), delay);
          // Lalu matikan sensornya selamanya (biar nggak ngulang pas di-scroll ke atas)
          if (ref.current) obs.unobserve(ref.current);
        }
      },
      // Trigger pas elemen masuk 15% dari bawah layar
      { rootMargin: "0px 0px -15% 0px", threshold: 0 }
    );

    if (ref.current) observer.observe(ref.current);
    return () => {
      if (ref.current) observer.unobserve(ref.current);
    };
  }, [delay]);

  return (
    <div
      ref={ref}
      className={`${className} transition-all duration-700 transform-gpu will-change-transform ${isVisible ? 'opacity-100 translate-y-0' : 'opacity-0 translate-y-12'}`}
    >
      {children}
    </div>
  );
}
/**
 * cn.js — utility untuk gabungkan class Tailwind (skip yang falsy)
 * Dipakai oleh: molecules/FeatureCarousel.jsx, molecules/ProductCarousel.jsx
 */
export const cn = (...classes) => classes.filter(Boolean).join(" ");
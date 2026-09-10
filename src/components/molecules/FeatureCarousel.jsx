/**
 * FeatureCarousel.jsx
 * -------------------
 * Carousel showcase — mekanisme dari 21st.dev: chip list di kiri + stack card di kanan.
 * Card yang dirender = ProductCard ASLI project (design sendiri, bukan card 21st).
 *
 * PERILAKU TRANSISI (sesuai permintaan final):
 * - TANPA auto-play: slide ganti cuma lewat klik chip / swipe card.
 * - Slide "tetangga" = spring glide yang TERASA smooth (feel 21st, zero bounce).
 * - Chip yang WRAP/ROTASI (lompat jauh lewat ujung list) TIDAK terbang atas-bawah:
 *   fade-out mulus di posisi lama → teleport saat invisible → fade-in mulus
 *   di posisi baru (transparan, halus, BUKAN flicker).
 * - Card stack: posisi/scale/rotate pakai spring, opacity diselesaikan cepat
 *   (0.28s) biar ghosting tumpukan semi-transparan cepat bersih.
 *
 * TUNING: glide chip = CHIP_SPRING; kecepatan fade wrap = WRAP_FADE_DURATION.
 *
 * Dipakai di: organisms/ProductsSection.jsx
 * Data    : data/homeData.js (FEATURES_CAROUSEL: id, label, icon, image, description, specs)
 */
import React, { useState, useEffect, useRef, useCallback } from "react";
import { motion } from "framer-motion";
import { cn } from "../../lib/cn";
import ProductCard from "./ProductCard";

const ITEM_HEIGHT = 65;
const SWIPE_THRESHOLD = 50;
const WRAP_FADE_DURATION = 0.5; // durasi total fade-out + fade-in saat chip wrap

// Spring overdamped: glide terasa tapi ZERO overshoot/bounce
const CHIP_SPRING = { type: "spring", stiffness: 120, damping: 24, mass: 1 };
// Spring card stack (posisi/scale/rotate)
const CARD_SPRING = { type: "spring", stiffness: 260, damping: 25, mass: 0.8 };

// Helper wrap untuk circular array (dari component asli 21st)
const wrap = (min, max, v) => {
  const rangeSize = max - min;
  return ((((v - min) % rangeSize) + rangeSize) % rangeSize) + min;
};

export default function FeatureCarousel({ features = [] }) {
  const [step, setStep] = useState(0);
  const touchStartX = useRef(0);
  const touchStartY = useRef(0);
  // Peta posisi y terakhir tiap chip → buat deteksi lompatan "wrap"
  const prevYMap = useRef({});

  const currentIndex =
    ((step % features.length) + features.length) % features.length;

  const nextStep = useCallback(() => setStep((prev) => prev + 1), []);
  const prevStep = useCallback(() => setStep((prev) => prev - 1), []);

  const handleChipClick = (index) => {
    const diff = (index - currentIndex + features.length) % features.length;
    if (diff > 0) setStep((s) => s + diff);
  };

  // Simpan posisi y SESUDAH render commit, biar render berikutnya bisa
  // membandingkan posisi lama vs baru dan mendeteksi chip yang wrap.
  useEffect(() => {
    const next = {};
    features.forEach((feature, i) => {
      const d = wrap(-(features.length / 2), features.length / 2, i - currentIndex);
      next[feature.id] = d * ITEM_HEIGHT;
    });
    prevYMap.current = next;
  }, [currentIndex, features]);

  // --- Handler swipe touch (area card) — cara ganti slide di HP ---
  const onTouchStart = (e) => {
    touchStartX.current = e.touches[0].clientX;
    touchStartY.current = e.touches[0].clientY;
  };

  const onTouchEnd = (e) => {
    const dx = touchStartX.current - e.changedTouches[0].clientX;
    const dy = touchStartY.current - e.changedTouches[0].clientY;
    // Respons cuma kalau gesture dominan horizontal (biar scroll halaman tetap aman)
    if (Math.abs(dx) > SWIPE_THRESHOLD && Math.abs(dx) > Math.abs(dy)) {
      if (dx > 0) nextStep();
      else prevStep();
    }
  };

  const getCardStatus = (index) => {
    const diff = index - currentIndex;
    const len = features.length;

    let normalizedDiff = diff;
    if (diff > len / 2) normalizedDiff -= len;
    if (diff < -len / 2) normalizedDiff += len;

    if (normalizedDiff === 0) return "active";
    if (normalizedDiff === -1) return "prev";
    if (normalizedDiff === 1) return "next";
    return "hidden";
  };

  if (!features.length) return null;

  return (
    <div className="w-full max-w-300 mx-auto md:p-8">
      <div className="relative overflow-hidden rounded-[1.5rem] md:rounded-[2.5rem] lg:rounded-[4rem] flex flex-col lg:flex-row lg:aspect-video border border-[#e2e8f0]/40 shadow-[0_20px_50px_-20px_rgba(10,20,40,0.3)]">
        
        {/* KOLOM KIRI: Chip list — slide spring untuk tetangga, fade-teleport untuk wrap */}
        <div className="w-full lg:w-[40%] min-h-[210px] sm:min-h-[260px] md:min-h-[320px] lg:h-full lg:min-h-0 relative z-30 flex flex-col items-start justify-center overflow-hidden px-6 sm:px-10 md:px-14 lg:pl-16 bg-[#0a1428]">
          {/* Gradient fade atas & bawah biar chip yang masuk/keluar tepi mulus */}
          <div className="absolute inset-x-0 top-0 h-10 md:h-20 lg:h-16 bg-gradient-to-b from-[#0a1428] via-[#0a1428]/80 to-transparent z-40 pointer-events-none" />
          <div className="absolute inset-x-0 bottom-0 h-10 md:h-20 lg:h-16 bg-gradient-to-t from-[#0a1428] via-[#0a1428]/80 to-transparent z-40 pointer-events-none" />
          
          <div className="relative w-full h-full flex items-center justify-center lg:justify-start z-20">
            {features.map((feature, index) => {
              const isActive = index === currentIndex;
              const wrappedDistance = wrap(
                -(features.length / 2),
                features.length / 2,
                index - currentIndex
              );
              const y = wrappedDistance * ITEM_HEIGHT;
              const targetOpacity = 1 - Math.abs(wrappedDistance) * 0.25;

              // Deteksi wrap: posisi baru beda jauh (>1.5 slot) dari posisi terakhir
              const prevY = prevYMap.current[feature.id];
              const isWrap =
                prevY !== undefined && Math.abs(y - prevY) > ITEM_HEIGHT * 1.5;

              const Icon = feature.icon;

              return (
                <motion.div
                  key={feature.id}
                  style={{
                    height: ITEM_HEIGHT,
                    width: "fit-content",
                  }}
                  animate={
                    isWrap
                      ? {
                          // FADE-TELEPORT: tahan di posisi lama sambil fade-out,
                          // lompat saat invisible, lalu fade-in di posisi baru.
                          // null = nilai saat ini (framer-motion).
                          y: [null, null, y, y],
                          opacity: [null, 0, 0, targetOpacity],
                        }
                      : {
                          // Slide normal: glide spring + fade tepi halus
                          y,
                          opacity: targetOpacity,
                        }
                  }
                  transition={
                    isWrap
                      ? {
                          duration: WRAP_FADE_DURATION,
                          times: [0, 0.45, 0.55, 1],
                          ease: "easeInOut",
                        }
                      : {
                          y: CHIP_SPRING,
                          opacity: { duration: 0.3, ease: "easeOut" },
                        }
                  }
                  className="absolute flex items-center justify-start max-w-full"
                >
                  <button
                    onClick={() => handleChipClick(index)}
                    className={cn(
                      "relative flex items-center gap-3 sm:gap-4 px-5 sm:px-8 lg:px-8 py-3 md:py-4 lg:py-4 rounded-full transition-colors duration-300 text-left group border max-w-full cursor-pointer",
                      isActive
                        ? "bg-[#c2182b] text-white border-[#c2182b] z-10 shadow-lg"
                        : "bg-transparent text-white/60 border-white/20 hover:border-white/40 hover:text-white"
                    )}
                  >
                    <div
                      className={cn(
                        "flex items-center justify-center transition-colors duration-300 text-base sm:text-lg shrink-0",
                        isActive ? "text-white" : "text-white/40"
                      )}
                    >
                      <Icon />
                    </div>
                    <span className="font-normal text-xs sm:text-sm lg:text-[15px] tracking-tight whitespace-nowrap uppercase truncate">
                      {feature.label}
                    </span>
                  </button>
                </motion.div>
              );
            })}
          </div>
        </div>

        {/* KOLOM KANAN: Stack ProductCard (gerak horizontal; opacity cepat biar ghost cepat bersih) */}
        <div
          className="flex-1 min-h-[420px] sm:min-h-[480px] md:min-h-[560px] lg:h-full lg:min-h-0 relative bg-[#f8fafc] flex items-center justify-center py-12 md:py-16 lg:py-16 px-4 sm:px-8 md:px-12 lg:px-10 overflow-hidden border-t lg:border-t-0 lg:border-l border-[#e2e8f0]/20"
          style={{ touchAction: "pan-y" }}
          onTouchStart={onTouchStart}
          onTouchEnd={onTouchEnd}
        >
          <div className="relative w-full max-w-[320px] sm:max-w-[380px] md:max-w-[420px] aspect-[4/5] flex items-center justify-center">
            {features.map((feature, index) => {
              const status = getCardStatus(index);
              const isActive = status === "active";
              const isPrev = status === "prev";
              const isNext = status === "next";

              return (
                <motion.div
                  key={feature.id}
                  initial={false}
                  animate={{
                    x: isActive ? 0 : isPrev ? -100 : isNext ? 100 : 0,
                    scale: isActive ? 1 : isPrev || isNext ? 0.85 : 0.7,
                    opacity: isActive ? 1 : isPrev || isNext ? 0.4 : 0,
                    rotate: isPrev ? -3 : isNext ? 3 : 0,
                    zIndex: isActive ? 20 : isPrev || isNext ? 10 : 0,
                    pointerEvents: isActive ? "auto" : "none",
                  }}
                  transition={{
                    x: CARD_SPRING,
                    scale: CARD_SPRING,
                    rotate: CARD_SPRING,
                    // Opacity diselesaikan CEPET biar tumpukan ghost cepat bersih
                    opacity: { duration: 0.28, ease: "easeOut" },
                    zIndex: { duration: 0 },
                    pointerEvents: { duration: 0 },
                  }}
                  className="absolute inset-0 origin-center"
                >
                  {/* Filter redup cuma buat card yang gak aktif */}
                  <div
                    className={cn(
                      "h-full w-full transition-all duration-700",
                      !isActive && "grayscale blur-[2px] brightness-90"
                    )}
                  >
                    {/* Key ikut currentIndex biar state flip reset saat slide berganti */}
                    <ProductCard
                      key={`${feature.id}-${currentIndex}`}
                      prod={{
                        ...feature,
                        title: feature.label,
                        tagline: feature.description,
                      }}
                      heightClass="h-full"
                    />
                  </div>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>

      {/* Hint swipe (muncul cuma di bawah lg / mobile & tablet) */}
      <p className="lg:hidden text-center text-[0.7rem] text-[#94a3b8] mt-3 uppercase tracking-[0.2em] select-none">
        ← Swipe card untuk jelajahi →
      </p>
    </div>
  );
}
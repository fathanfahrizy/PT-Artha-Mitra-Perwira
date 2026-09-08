import { useEffect, useMemo, useState } from "react";

export const PixelImage = ({
  src,
  grid = "6x4",
  grayscaleAnimation = true,
  pixelFadeInDuration = 1000,
  maxAnimationDelay = 1200,
  colorRevealDelay = 1300,
  customGrid,
  className = "",
}) => {
  const [isVisible, setIsVisible] = useState(false);
  const [showColor, setShowColor] = useState(false);

  const DEFAULT_GRIDS = {
    "6x4": { rows: 4, cols: 6 },
    "8x8": { rows: 8, cols: 8 },
    "8x3": { rows: 3, cols: 8 },
    "4x6": { rows: 6, cols: 4 },
    "3x8": { rows: 8, cols: 3 },
  };

  const MIN_GRID = 1;
  const MAX_GRID = 16;

  const { rows, cols } = useMemo(() => {
    const isValidGrid = (g) => {
      if (!g) return false;
      const { rows: r, cols: c } = g;
      return (
        Number.isInteger(r) &&
        Number.isInteger(c) &&
        r >= MIN_GRID &&
        c >= MIN_GRID &&
        r <= MAX_GRID &&
        c <= MAX_GRID
      );
    };

    return isValidGrid(customGrid) ? customGrid : DEFAULT_GRIDS[grid] || DEFAULT_GRIDS["6x4"];
  }, [customGrid, grid]);

  useEffect(() => {
    setIsVisible(true);
    const colorTimeout = setTimeout(() => {
      setShowColor(true);
    }, colorRevealDelay);
    return () => clearTimeout(colorTimeout);
  }, [colorRevealDelay]);

  const pieces = useMemo(() => {
    const total = rows * cols;
    return Array.from({ length: total }, (_, index) => {
      const row = Math.floor(index / cols);
      const col = index % cols;

      const clipPath = `polygon(
        ${col * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${row * (100 / rows)}%,
        ${(col + 1) * (100 / cols)}% ${(row + 1) * (100 / rows)}%,
        ${col * (100 / cols)}% ${(row + 1) * (100 / rows)}%
      )`;

      const delay = Math.random() * maxAnimationDelay;
      return { clipPath, delay };
    });
  }, [rows, cols, maxAnimationDelay]);

  return (
    <div className={`relative w-full h-full overflow-hidden ${className}`}>
      {pieces.map((piece, index) => (
        <div
          key={index}
          className={`absolute inset-0 transition-all ease-out ${
            isVisible ? "opacity-100" : "opacity-0"
          }`}
          style={{
            clipPath: piece.clipPath,
            transitionDelay: `${piece.delay}ms`,
            transitionDuration: `${pixelFadeInDuration}ms`,
          }}
        >
          <img
            src={src}
            alt="Pixel image piece"
            className={`w-full h-full object-cover ${
              grayscaleAnimation ? (showColor ? "grayscale-0" : "grayscale") : ""
            }`}
            style={{
              transition: grayscaleAnimation
                ? `filter ${pixelFadeInDuration}ms cubic-bezier(0.4, 0, 0.2, 1)`
                : "none",
            }}
            draggable={false}
          />
        </div>
      ))}
    </div>
  );
};
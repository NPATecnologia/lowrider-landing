import { useRef, useState, useCallback, useEffect } from "react";
import type { GalleryItem } from "../../lib/constants";

interface BeforeAfterSliderProps {
  item: GalleryItem;
}

export default function BeforeAfterSlider({ item }: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const isDragging = useRef(false);

  const updatePosition = useCallback((clientX: number) => {
    const container = containerRef.current;
    if (!container) return;
    const rect = container.getBoundingClientRect();
    const percent = Math.max(2, Math.min(98, ((clientX - rect.left) / rect.width) * 100));
    setPosition(percent);
  }, []);

  useEffect(() => {
    const handleMove = (e: MouseEvent) => {
      if (isDragging.current) updatePosition(e.clientX);
    };
    const handleUp = () => { isDragging.current = false; };

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [updatePosition]);

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative aspect-[16/10] overflow-hidden rounded-lg border border-border group-hover:border-gold/20 transition-colors duration-500 cursor-ew-resize select-none touch-none"
        onMouseDown={() => { isDragging.current = true; }}
        onTouchStart={() => { isDragging.current = true; }}
        onTouchMove={(e) => {
          e.preventDefault();
          updatePosition(e.touches[0].clientX);
        }}
        onTouchEnd={() => { isDragging.current = false; }}
      >
        {/* After (background) */}
        <img
          src={item.after}
          alt={`Depois - ${item.service}`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
          draggable={false}
        />

        {/* Before (clipped) */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}>
          <img
            src={item.before}
            alt={`Antes - ${item.service}`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
            draggable={false}
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-gold/80 z-10 pointer-events-none"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-gold flex items-center justify-center shadow-premium pointer-events-auto cursor-ew-resize">
            <svg width="16" height="16" viewBox="0 0 16 16" fill="none" className="text-bg-void">
              <path d="M4 8H12M4 8L6 6M4 8L6 10M12 8L10 6M12 8L10 10" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 text-[10px] font-display uppercase tracking-[0.15em] text-white/50 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded pointer-events-none">
          Antes
        </span>
        <span className="absolute top-3 right-3 text-[10px] font-display uppercase tracking-[0.15em] text-white/50 bg-black/40 backdrop-blur-sm px-2.5 py-1 rounded pointer-events-none">
          Depois
        </span>
      </div>

      {/* Service tag */}
      <div className="mt-4">
        <span className="text-gold text-xs font-display uppercase tracking-[0.1em]">{item.service}</span>
        <p className="text-text-muted text-sm mt-1">{item.description}</p>
      </div>
    </div>
  );
}

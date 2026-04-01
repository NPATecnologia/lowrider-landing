import { useRef, useState, useCallback, useEffect } from "react";
import type { GalleryItem } from "../../lib/constants";

interface BeforeAfterSliderProps {
  item: GalleryItem;
}

export default function BeforeAfterSlider({ item }: BeforeAfterSliderProps) {
  const containerRef = useRef<HTMLDivElement>(null);
  const [position, setPosition] = useState(50);
  const [isDragging, setIsDragging] = useState(false);
  const [hasInteracted, setHasInteracted] = useState(false);

  const updatePosition = useCallback(
    (clientX: number) => {
      const container = containerRef.current;
      if (!container) return;

      const rect = container.getBoundingClientRect();
      const x = clientX - rect.left;
      const percent = Math.max(0, Math.min(100, (x / rect.width) * 100));
      setPosition(percent);

      if (!hasInteracted) setHasInteracted(true);
    },
    [hasInteracted]
  );

  const handleMouseDown = () => setIsDragging(true);
  const handleMouseUp = () => setIsDragging(false);

  useEffect(() => {
    if (!isDragging) return;

    const handleMove = (e: MouseEvent) => updatePosition(e.clientX);
    const handleUp = () => setIsDragging(false);

    window.addEventListener("mousemove", handleMove);
    window.addEventListener("mouseup", handleUp);
    return () => {
      window.removeEventListener("mousemove", handleMove);
      window.removeEventListener("mouseup", handleUp);
    };
  }, [isDragging, updatePosition]);

  const handleTouchMove = (e: React.TouchEvent) => {
    updatePosition(e.touches[0].clientX);
  };

  return (
    <div className="group">
      <div
        ref={containerRef}
        className="relative aspect-[16/10] overflow-hidden rounded-md border border-border cursor-ew-resize select-none"
        onMouseDown={handleMouseDown}
        onMouseUp={handleMouseUp}
        onTouchStart={() => setIsDragging(true)}
        onTouchMove={handleTouchMove}
        onTouchEnd={() => setIsDragging(false)}
      >
        {/* After (background) */}
        <img
          src={item.after}
          alt={`Depois - ${item.service}`}
          className="absolute inset-0 w-full h-full object-cover"
          loading="lazy"
        />

        {/* Before (clipped) */}
        <div
          className="absolute inset-0"
          style={{ clipPath: `inset(0 ${100 - position}% 0 0)` }}
        >
          <img
            src={item.before}
            alt={`Antes - ${item.service}`}
            className="absolute inset-0 w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Divider line */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-gold z-10"
          style={{ left: `${position}%`, transform: "translateX(-50%)" }}
        >
          {/* Handle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-9 h-9 rounded-full bg-gold flex items-center justify-center shadow-premium">
            <svg
              width="16"
              height="16"
              viewBox="0 0 16 16"
              fill="none"
              className="text-bg-void"
            >
              <path
                d="M4 8H12M4 8L6 6M4 8L6 10M12 8L10 6M12 8L10 10"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </div>
        </div>

        {/* Labels */}
        <span className="absolute top-3 left-3 text-[10px] font-display uppercase tracking-widest text-text-primary/60 bg-bg-void/60 px-2 py-1 rounded">
          Antes
        </span>
        <span className="absolute top-3 right-3 text-[10px] font-display uppercase tracking-widest text-text-primary/60 bg-bg-void/60 px-2 py-1 rounded">
          Depois
        </span>
      </div>

      {/* Service tag */}
      <div className="mt-3">
        <span className="text-gold text-xs font-display uppercase tracking-wide">
          {item.service}
        </span>
        <p className="text-text-muted text-sm mt-0.5">{item.description}</p>
      </div>
    </div>
  );
}

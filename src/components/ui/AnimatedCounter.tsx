import { useRef, useEffect } from "react";
import { useInView } from "react-intersection-observer";

interface AnimatedCounterProps {
  value: number;
  suffix: string;
  label: string;
}

export default function AnimatedCounter({
  value,
  suffix,
  label,
}: AnimatedCounterProps) {
  const numberRef = useRef<HTMLSpanElement>(null);
  const hasAnimated = useRef(false);
  const { ref: inViewRef, inView } = useInView({
    threshold: 0.5,
    triggerOnce: true,
  });

  useEffect(() => {
    if (!inView || hasAnimated.current || !numberRef.current) return;
    hasAnimated.current = true;

    const el = numberRef.current;
    const isDecimal = value % 1 !== 0;
    const duration = 2000;
    const start = performance.now();

    function animate(now: number) {
      const elapsed = now - start;
      const progress = Math.min(elapsed / duration, 1);
      const eased = 1 - Math.pow(1 - progress, 3);
      const current = eased * value;

      el.textContent = isDecimal
        ? current.toFixed(1) + suffix
        : Math.floor(current) + suffix;

      if (progress < 1) requestAnimationFrame(animate);
    }

    requestAnimationFrame(animate);
  }, [inView, value, suffix]);

  return (
    <div ref={inViewRef} className="stat text-center">
      <span
        ref={numberRef}
        className="block font-display text-3xl md:text-4xl font-bold text-text-primary tracking-tight tabular-nums"
      >
        {value % 1 === 0 ? Math.floor(value) : value.toFixed(1)}{suffix}
      </span>
      <span className="block text-text-muted text-xs uppercase tracking-widest mt-1 font-display">
        {label}
      </span>
    </div>
  );
}

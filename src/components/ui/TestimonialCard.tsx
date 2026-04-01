interface TestimonialCardProps {
  name: string;
  vehicle: string;
  initial: string;
  rating: number;
  text: string;
}

export default function TestimonialCard({
  name,
  vehicle,
  initial,
  text,
  rating,
}: TestimonialCardProps) {
  return (
    <div className="testimonial-card glass-card gold-top-line group relative rounded-lg p-8 sm:p-10 transition-all duration-500 hover:-translate-y-1">
      {/* Stars */}
      <div className="flex gap-0.5 mb-6">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-gold text-base">★</span>
        ))}
      </div>

      {/* Quote */}
      <blockquote className="font-serif italic text-text-secondary text-lg sm:text-xl leading-relaxed mb-8">
        &ldquo;{text}&rdquo;
      </blockquote>

      {/* Author */}
      <div className="flex items-center gap-4">
        <div className="w-11 h-11 rounded-full bg-gold-gradient flex items-center justify-center text-bg-void font-display font-bold text-sm shadow-premium">
          {initial}
        </div>
        <div>
          <span className="block text-text-primary text-sm font-medium tracking-wide">
            {name}
          </span>
          <span className="block text-text-muted text-xs mt-0.5">{vehicle}</span>
        </div>
      </div>
    </div>
  );
}

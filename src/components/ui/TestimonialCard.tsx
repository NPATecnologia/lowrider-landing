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
    <div className="testimonial-card bg-bg-surface border border-border rounded-md p-8 transition-all duration-500 hover:border-border-hover hover:-translate-y-1">
      {/* Stars */}
      <div className="flex gap-1 mb-5">
        {Array.from({ length: rating }).map((_, i) => (
          <span key={i} className="text-gold text-sm">
            ★
          </span>
        ))}
      </div>

      {/* Quote */}
      <p className="font-serif italic text-text-secondary text-lg leading-relaxed mb-6">
        "{text}"
      </p>

      {/* Author */}
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full bg-gold-gradient flex items-center justify-center text-bg-void font-display font-semibold text-sm">
          {initial}
        </div>
        <div>
          <span className="block text-text-primary text-sm font-medium">
            {name}
          </span>
          <span className="block text-text-muted text-xs">{vehicle}</span>
        </div>
      </div>
    </div>
  );
}

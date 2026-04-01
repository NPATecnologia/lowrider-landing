interface SectionHeaderProps {
  label: string;
  title: string;
  description?: string;
  align?: "left" | "center";
}

export default function SectionHeader({
  label,
  title,
  description,
  align = "left",
}: SectionHeaderProps) {
  const centered = align === "center";

  return (
    <div className={`mb-20 max-w-2xl ${centered ? "text-center mx-auto" : ""}`}>
      <span className="inline-block font-display text-[11px] tracking-[0.2em] uppercase text-gold mb-5">
        {label}
      </span>
      <h2 className="font-display text-[clamp(1.8rem,4vw,3rem)] font-semibold uppercase tracking-tight text-text-primary leading-[1.1]">
        {title}
      </h2>
      {description && (
        <p className={`mt-5 text-text-secondary text-base sm:text-lg font-body leading-relaxed ${centered ? "text-center" : ""}`}>
          {description}
        </p>
      )}
    </div>
  );
}

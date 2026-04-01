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
  const alignment = align === "center" ? "text-center mx-auto" : "";

  return (
    <div className={`mb-16 max-w-2xl ${alignment}`}>
      <span
        className="inline-block font-display text-xs tracking-[0.2em] uppercase text-gold mb-4"
        style={{ letterSpacing: "0.2em" }}
      >
        {label}
      </span>
      <h2
        className="font-display text-[clamp(1.8rem,4vw,2.8rem)] font-semibold uppercase tracking-tight text-text-primary leading-tight"
      >
        {title}
      </h2>
      {description && (
        <p className="mt-4 text-text-secondary text-lg font-body leading-relaxed">
          {description}
        </p>
      )}
    </div>
  );
}

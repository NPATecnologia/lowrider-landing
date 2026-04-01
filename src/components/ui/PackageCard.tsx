import { useEffect, useRef } from "react";
import type { Package } from "../../lib/constants";
import { BUSINESS } from "../../lib/constants";
import Button from "./Button";

interface PackageCardProps {
  pkg: Package;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!pkg.featured || !cardRef.current) return;

    const el = cardRef.current;
    el.style.animation = "shimmer 3s ease-in-out infinite";
  }, [pkg.featured]);

  const whatsappMsg = encodeURIComponent(
    `Olá! Tenho interesse no pacote ${pkg.name}. Gostaria de saber mais.`
  );
  const whatsappUrl = `${BUSINESS.whatsappLink}&text=${whatsappMsg}`;

  return (
    <div
      ref={cardRef}
      className={[
        "package-card gold-top-line group relative flex flex-col",
        "glass-card rounded-lg overflow-hidden",
        "transition-all duration-500 ease-out",
        "hover:-translate-y-2 hover:shadow-[0_20px_60px_rgba(0,0,0,0.5)]",
        pkg.featured
          ? "border-gold/20 lg:scale-[1.03]"
          : "border-border",
        // Generous padding
        "p-8 sm:p-10",
      ].join(" ")}
    >
      {/* Badge */}
      {pkg.badge && (
        <span
          className="absolute -top-px left-1/2 -translate-x-1/2 translate-y-0 bg-gold-gradient text-bg-void text-[10px] font-display uppercase tracking-[0.15em] px-5 py-1.5 rounded-b-lg font-semibold"
          style={{ animation: "pulse-soft 2.5s ease-in-out infinite" }}
        >
          ★ {pkg.badge}
        </span>
      )}

      {/* Package name */}
      <h3 className="font-display text-2xl sm:text-3xl font-semibold uppercase tracking-wide text-text-primary mt-4 mb-2">
        {pkg.name}
      </h3>

      <p className="text-text-secondary text-sm mb-8 font-body leading-relaxed">
        {pkg.description}
      </p>

      {/* Divider */}
      <div className="w-12 h-px bg-gold/20 mb-8" />

      {/* Services list */}
      <ul className="flex-1 space-y-4 mb-10">
        {pkg.services.map((service) => (
          <li key={service} className="flex items-start gap-3 text-text-secondary text-sm leading-relaxed">
            <span className="text-gold mt-0.5 text-xs flex-shrink-0">◆</span>
            <span>{service}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        variant={pkg.featured ? "gold" : "outline"}
        size="md"
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="w-full justify-center"
      >
        {pkg.featured ? "Agendar Agora" : "Solicitar Orçamento"}
      </Button>
    </div>
  );
}

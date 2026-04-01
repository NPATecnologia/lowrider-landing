import { useEffect, useRef } from "react";
import type { Package } from "../../lib/constants";
import { BUSINESS } from "../../lib/constants";
import { borderShimmer, badgePulse } from "../../lib/animations";
import Button from "./Button";

interface PackageCardProps {
  pkg: Package;
}

export default function PackageCard({ pkg }: PackageCardProps) {
  const cardRef = useRef<HTMLDivElement>(null);
  const badgeRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (!pkg.featured) return;
    if (cardRef.current) borderShimmer(cardRef.current);
    if (badgeRef.current) badgePulse(badgeRef.current);
  }, [pkg.featured]);

  const whatsappMsg = encodeURIComponent(
    `Olá! Tenho interesse no pacote ${pkg.name}. Gostaria de saber mais.`
  );
  const whatsappUrl = `${BUSINESS.whatsappLink}&text=${whatsappMsg}`;

  return (
    <div
      ref={cardRef}
      className={`
        package-card relative flex flex-col
        bg-bg-surface border rounded-md p-8 md:p-10
        transition-all duration-500 ease-out
        hover:-translate-y-1.5 hover:border-gold/30
        ${pkg.featured
          ? "border-gold/20 md:scale-105 md:-translate-y-2"
          : "border-border"
        }
      `}
      style={{ transformStyle: "preserve-3d", perspective: "1000px" }}
    >
      {/* Top gold line on hover */}
      <div className="absolute top-0 left-0 right-0 h-px bg-gold scale-x-0 origin-left transition-transform duration-500 group-hover:scale-x-100" />

      {/* Badge */}
      {pkg.badge && (
        <span
          ref={badgeRef}
          className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gold text-bg-void text-[10px] font-display uppercase tracking-widest px-4 py-1.5 rounded-full whitespace-nowrap"
        >
          ★ {pkg.badge}
        </span>
      )}

      {/* Package name */}
      <h3 className="font-display text-2xl font-semibold uppercase tracking-wide text-text-primary mt-2">
        {pkg.name}
      </h3>

      <p className="text-text-secondary text-sm mt-2 mb-6 font-body">
        {pkg.description}
      </p>

      {/* Services list */}
      <ul className="flex-1 space-y-3 mb-8">
        {pkg.services.map((service) => (
          <li
            key={service}
            className="flex items-start gap-3 text-text-secondary text-sm"
          >
            <span className="text-gold mt-0.5 text-xs">◆</span>
            <span>{service}</span>
          </li>
        ))}
      </ul>

      {/* CTA */}
      <Button
        variant={pkg.featured ? "gold" : "outline"}
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

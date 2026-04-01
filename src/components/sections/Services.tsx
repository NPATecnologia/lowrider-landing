import { useEffect } from "react";
import { PACKAGES, EXTRA_SERVICES, BUSINESS } from "../../lib/constants";
import { scrollReveal } from "../../lib/animations";
import SectionHeader from "../ui/SectionHeader";
import PackageCard from "../ui/PackageCard";

export default function Services() {
  useEffect(() => {
    scrollReveal(".package-card", { stagger: 0.2, y: 50 });
    scrollReveal(".extra-service-chip", { stagger: 0.06, y: 12 });
  }, []);

  return (
    <section id="servicos" className="section-padding px-6 bg-bg-primary relative">
      {/* Decorative gradient */}
      <div
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] pointer-events-none"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.03) 0%, transparent 60%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          label="Serviços"
          title="Pacotes Sob Medida"
          description="Cada veículo merece um tratamento exclusivo"
        />

        {/* Package cards — align items stretch for equal height */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 items-stretch">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>

        {/* Extra services */}
        <div className="mt-24">
          <h3 className="font-display text-xs uppercase tracking-[0.2em] text-text-muted mb-8">
            Serviços Avulsos
          </h3>
          <div className="flex flex-wrap gap-3">
            {EXTRA_SERVICES.map((service) => {
              const msg = encodeURIComponent(`Olá! Tenho interesse no serviço: ${service}`);
              return (
                <a
                  key={service}
                  href={`${BUSINESS.whatsappLink}&text=${msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="extra-service-chip inline-flex items-center border border-border rounded-full px-6 py-3 min-h-11 text-sm text-text-secondary font-body hover:border-gold/40 hover:text-gold hover:bg-gold-50 transition-all duration-300 cursor-pointer focus-visible:outline-2 focus-visible:outline-gold"
                >
                  {service}
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}

import { useEffect } from "react";
import { PACKAGES, EXTRA_SERVICES, BUSINESS } from "../../lib/constants";
import { scrollReveal } from "../../lib/animations";
import SectionHeader from "../ui/SectionHeader";
import PackageCard from "../ui/PackageCard";

export default function Services() {
  useEffect(() => {
    scrollReveal(".package-card", { stagger: 0.2, y: 50 });
    scrollReveal(".extra-service", { stagger: 0.05, y: 15 });
  }, []);

  return (
    <section id="servicos" className="section-padding px-6 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Serviços"
          title="Pacotes Sob Medida"
          description="Cada veículo merece um tratamento exclusivo"
        />

        {/* Package cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 items-start">
          {PACKAGES.map((pkg) => (
            <PackageCard key={pkg.slug} pkg={pkg} />
          ))}
        </div>

        {/* Extra services */}
        <div className="mt-20">
          <h3 className="font-display text-sm uppercase tracking-widest text-text-muted mb-6">
            Serviços Avulsos
          </h3>
          <div className="flex flex-wrap gap-3">
            {EXTRA_SERVICES.map((service) => {
              const msg = encodeURIComponent(
                `Olá! Tenho interesse no serviço: ${service}`
              );
              return (
                <a
                  key={service}
                  href={`${BUSINESS.whatsappLink}&text=${msg}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="extra-service border border-border rounded-full px-5 py-2.5 text-sm text-text-secondary font-body hover:border-gold/40 hover:text-gold transition-all duration-300"
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

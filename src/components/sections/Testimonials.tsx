import { useEffect } from "react";
import { TESTIMONIALS, STATS } from "../../lib/constants";
import { scrollReveal } from "../../lib/animations";
import SectionHeader from "../ui/SectionHeader";
import TestimonialCard from "../ui/TestimonialCard";

export default function Testimonials() {
  useEffect(() => {
    scrollReveal(".testimonial-card", { stagger: 0.15 });
    scrollReveal(".stats-sidebar .stat-item", { stagger: 0.12, x: 20, y: 0 });
  }, []);

  return (
    <section
      id="depoimentos"
      className="section-padding px-6 bg-bg-elevated"
    >
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Clientes"
          title="O Que Dizem Sobre Nós"
        />

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          {/* First two testimonials */}
          <div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-6">
            {TESTIMONIALS.slice(0, 2).map((t) => (
              <TestimonialCard key={t.name} {...t} />
            ))}
          </div>

          {/* Empty space on desktop, filled by third card below */}
          <div className="hidden lg:block" />

          {/* Third testimonial */}
          <div>
            <TestimonialCard {...TESTIMONIALS[2]} />
          </div>

          {/* Stats sidebar */}
          <div className="stats-sidebar lg:col-span-2 flex flex-col justify-center gap-6 pl-0 lg:pl-8">
            {STATS.map((stat) => (
              <div key={stat.label} className="stat-item flex items-center gap-4">
                <span className="text-gold font-display text-3xl font-bold">
                  {stat.value}
                  {stat.suffix}
                </span>
                <span className="text-text-secondary text-sm font-body">
                  {stat.label === "Veículos" && "veículos atendidos"}
                  {stat.label === "Google" && "no Google"}
                  {stat.label === "Anos" && "anos de experiência"}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

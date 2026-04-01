import { useEffect } from "react";
import { TESTIMONIALS, STATS } from "../../lib/constants";
import { scrollReveal } from "../../lib/animations";
import SectionHeader from "../ui/SectionHeader";
import TestimonialCard from "../ui/TestimonialCard";

export default function Testimonials() {
  useEffect(() => {
    scrollReveal(".testimonial-card", { stagger: 0.15 });
  }, []);

  return (
    <section id="depoimentos" className="section-padding px-6 bg-bg-elevated">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Clientes" title="O Que Dizem Sobre Nós" />

        {/* Testimonials grid — clean 3 columns */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-16">
          {TESTIMONIALS.map((t) => (
            <TestimonialCard key={t.name} {...t} />
          ))}
        </div>

        {/* Stats bar */}
        <div className="flex flex-col sm:flex-row items-center justify-center gap-8 sm:gap-0 pt-8 border-t border-border">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <div className="text-center px-8 sm:px-12">
                <span className="text-gold font-display text-3xl sm:text-4xl font-bold block">
                  {stat.value}{stat.suffix}
                </span>
                <span className="text-text-muted text-xs uppercase tracking-widest mt-2 block font-display">
                  {stat.label === "Veículos" && "veículos atendidos"}
                  {stat.label === "Google" && "no Google"}
                  {stat.label === "Anos" && "anos de experiência"}
                </span>
              </div>
              {i < STATS.length - 1 && (
                <div className="hidden sm:block w-px h-12 bg-border" />
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

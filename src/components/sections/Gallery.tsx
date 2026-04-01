import { useEffect } from "react";
import { GALLERY_ITEMS, SHOWCASE_CARS } from "../../lib/constants";
import { scrollReveal } from "../../lib/animations";
import SectionHeader from "../ui/SectionHeader";
import BeforeAfterSlider from "../ui/BeforeAfterSlider";

export default function Gallery() {
  useEffect(() => {
    scrollReveal(".gallery-card", { stagger: 0.15 });
  }, []);

  return (
    <section id="galeria" className="section-padding px-6 bg-bg-elevated relative overflow-hidden">
      {/* Subtle gold glow top-left */}
      <div
        className="absolute top-0 left-0 w-[600px] h-[600px] pointer-events-none opacity-30"
        style={{ background: "radial-gradient(circle, rgba(201,168,76,0.04) 0%, transparent 70%)" }}
      />

      <div className="max-w-6xl mx-auto relative z-10">
        <SectionHeader
          label="Resultados"
          title="Veja a Transformação"
          description="Arraste para comparar o antes e depois"
        />

        {/* Before/After Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6 lg:gap-8">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="gallery-card">
              <BeforeAfterSlider item={item} />
            </div>
          ))}
        </div>

        {/* Showcase strip — premium cars */}
        <div className="mt-24 relative">
          <h3 className="font-display text-xs uppercase tracking-[0.2em] text-text-muted mb-8">
            Veículos Atendidos
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 lg:gap-6">
            {SHOWCASE_CARS.map((car) => (
              <div
                key={car.src}
                className="group relative aspect-[16/10] rounded-lg overflow-hidden border border-border hover:border-gold/20 transition-all duration-500"
              >
                <img
                  src={car.src}
                  alt={car.alt}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  loading="lazy"
                />
                {/* Hover overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="absolute bottom-4 left-4 text-xs font-display uppercase tracking-widest text-text-primary/80 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                  {car.alt}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

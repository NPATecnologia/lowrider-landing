import { useEffect } from "react";
import { GALLERY_ITEMS, SHOWCASE_CARS } from "../../lib/constants";
import { scrollReveal } from "../../lib/animations";
import SectionHeader from "../ui/SectionHeader";
import BeforeAfterSlider from "../ui/BeforeAfterSlider";

export default function Gallery() {
  useEffect(() => {
    scrollReveal(".gallery-card", { stagger: 0.15 });
    scrollReveal(".showcase-strip", { y: 20, stagger: 0.1 });
  }, []);

  return (
    <section id="galeria" className="section-padding px-6 bg-bg-elevated">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Resultados"
          title="Veja a Transformação"
          description="Arraste para comparar o antes e depois"
        />

        {/* Before/After Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-6">
          {GALLERY_ITEMS.map((item) => (
            <div key={item.id} className="gallery-card">
              <BeforeAfterSlider item={item} />
            </div>
          ))}
        </div>

        {/* Showcase strip */}
        <div className="mt-20 overflow-hidden">
          <div className="flex gap-6 showcase-strip">
            {SHOWCASE_CARS.map((car) => (
              <div
                key={car.src}
                className="flex-shrink-0 w-80 md:w-96 aspect-[16/10] rounded-md overflow-hidden border border-border"
              >
                <img
                  src={car.src}
                  alt={car.alt}
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

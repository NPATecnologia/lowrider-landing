import { useEffect } from "react";
import { MapPin, Clock, Phone } from "lucide-react";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
import { BUSINESS } from "../../lib/constants";
import { scrollReveal } from "../../lib/animations";
import SectionHeader from "../ui/SectionHeader";

export default function Location() {
  useEffect(() => {
    scrollReveal(".location-content", { y: 30 });
  }, []);

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5!2d${BUSINESS.coordinates.lng}!3d${BUSINESS.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zLTIzLjUyMjYyNzcsLTQ2LjUyMzgyNjg!5e0!3m2!1spt-BR!2sbr`;

  return (
    <section id="local" className="section-padding px-6 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <SectionHeader
          label="Localização"
          title="Venha Nos Visitar"
        />

        <div className="location-content grid grid-cols-1 lg:grid-cols-2 gap-8">
          {/* Map */}
          <div className="rounded-md overflow-hidden border border-border aspect-video lg:aspect-auto lg:min-h-[400px]">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(0.85) invert(0.92) contrast(1.1)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Low Rider"
            />
          </div>

          {/* Info */}
          <div className="flex flex-col gap-8 py-4">
            <div className="flex items-start gap-4">
              <MapPin className="text-gold mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="text-text-primary font-medium text-sm mb-1">
                  Endereço
                </h4>
                <p className="text-text-secondary text-sm">
                  São Paulo, SP
                </p>
                <a
                  href={BUSINESS.googleMaps}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-gold text-xs hover:text-gold-bright transition-colors mt-1 inline-block"
                >
                  Ver no Google Maps →
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Clock className="text-gold mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="text-text-primary font-medium text-sm mb-1">
                  Horário
                </h4>
                <p className="text-text-secondary text-sm">
                  Seg-Sex: 8h às 18h
                </p>
                <p className="text-text-secondary text-sm">
                  Sáb: 8h às 14h
                </p>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <Phone className="text-gold mt-1 flex-shrink-0" size={20} />
              <div>
                <h4 className="text-text-primary font-medium text-sm mb-1">
                  WhatsApp
                </h4>
                <a
                  href={BUSINESS.whatsappLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-whatsapp text-sm hover:brightness-110 transition-all"
                >
                  (11) 98819-8744
                </a>
              </div>
            </div>

            <div className="flex items-start gap-4">
              <span className="text-gold mt-1 flex-shrink-0"><InstagramIcon size={20} /></span>
              <div>
                <h4 className="text-text-primary font-medium text-sm mb-1">
                  Instagram
                </h4>
                <a
                  href={BUSINESS.instagram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-secondary text-sm hover:text-gold transition-colors"
                >
                  @lowrider_esteticaautomotiva
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

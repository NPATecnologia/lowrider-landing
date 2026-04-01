import { useEffect } from "react";
import { MapPin, Clock, Phone } from "lucide-react";
import { BUSINESS } from "../../lib/constants";
import { scrollReveal } from "../../lib/animations";
import SectionHeader from "../ui/SectionHeader";

function InstagramIcon({ size = 20 }: { size?: number }) {
  return (
    <svg width={size} height={size} viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="5" />
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none" />
    </svg>
  );
}

export default function Location() {
  useEffect(() => {
    scrollReveal(".location-content", { y: 30 });
  }, []);

  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3657.5!2d${BUSINESS.coordinates.lng}!3d${BUSINESS.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zLTIzLjUyMjYyNzcsLTQ2LjUyMzgyNjg!5e0!3m2!1spt-BR!2sbr`;

  const infoItems = [
    {
      icon: <MapPin className="text-gold flex-shrink-0" size={20} />,
      title: "Endereço",
      content: <p className="text-text-secondary text-sm">São Paulo, SP</p>,
      link: { href: BUSINESS.googleMaps, text: "Ver no Google Maps →" },
    },
    {
      icon: <Clock className="text-gold flex-shrink-0" size={20} />,
      title: "Horário",
      content: (
        <>
          <p className="text-text-secondary text-sm">Seg-Sex: 8h às 18h</p>
          <p className="text-text-secondary text-sm">Sáb: 8h às 14h</p>
        </>
      ),
    },
    {
      icon: <Phone className="text-gold flex-shrink-0" size={20} />,
      title: "WhatsApp",
      content: (
        <a href={BUSINESS.whatsappLink} target="_blank" rel="noopener noreferrer" className="text-whatsapp text-sm hover:brightness-110 transition-all">
          (11) 98819-8744
        </a>
      ),
    },
    {
      icon: <span className="text-gold flex-shrink-0"><InstagramIcon size={20} /></span>,
      title: "Instagram",
      content: (
        <a href={BUSINESS.instagram} target="_blank" rel="noopener noreferrer" className="text-text-secondary text-sm hover:text-gold transition-colors">
          @lowrider_esteticaautomotiva
        </a>
      ),
    },
  ];

  return (
    <section id="local" className="section-padding px-6 bg-bg-primary">
      <div className="max-w-6xl mx-auto">
        <SectionHeader label="Localização" title="Venha Nos Visitar" />

        <div className="location-content grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12">
          {/* Map — takes 3 of 5 cols */}
          <div className="lg:col-span-3 rounded-lg overflow-hidden border border-border aspect-video lg:aspect-auto lg:min-h-[420px]">
            <iframe
              src={mapSrc}
              width="100%"
              height="100%"
              style={{
                border: 0,
                filter: "grayscale(0.5) brightness(0.85) contrast(1.05) saturate(0.8)",
              }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Localização Low Rider"
            />
          </div>

          {/* Info — takes 2 of 5 cols */}
          <div className="lg:col-span-2 flex flex-col gap-8 py-2">
            {infoItems.map((item) => (
              <div key={item.title} className="flex items-start gap-4">
                <div className="mt-0.5">{item.icon}</div>
                <div>
                  <h4 className="text-text-primary font-medium text-sm mb-1.5">{item.title}</h4>
                  {item.content}
                  {item.link && (
                    <a
                      href={item.link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gold text-xs hover:text-gold-bright transition-colors mt-2 inline-block"
                    >
                      {item.link.text}
                    </a>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

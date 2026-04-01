import { useEffect, useRef } from "react";
import { ChevronDown } from "lucide-react";
import { BUSINESS, STATS } from "../../lib/constants";
import { heroAnimation, scrollIndicator } from "../../lib/animations";
import Button from "../ui/Button";
import AnimatedCounter from "../ui/AnimatedCounter";

export default function Hero() {
  const scrollHintRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = heroAnimation();

    if (scrollHintRef.current) {
      scrollIndicator(scrollHintRef.current);
    }

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/carro1.jpg"
          alt=""
          className="w-full h-full object-cover"
          loading="eager"
        />
        {/* Dark overlay */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "linear-gradient(to bottom, rgba(9,9,9,0.82), rgba(9,9,9,0.95))",
          }}
        />
        {/* Gold radial glow */}
        <div
          className="absolute inset-0"
          style={{
            background:
              "radial-gradient(ellipse at center, rgba(201,168,76,0.05) 0%, transparent 60%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-4xl mx-auto">
        {/* Logo */}
        <img
          src="/images/logo.jpg"
          alt={BUSINESS.name}
          className="hero-logo w-[clamp(200px,40vw,400px)] rounded-lg mb-10"
        />

        {/* Tagline */}
        <h1 className="hero-tagline font-serif italic text-gold text-[clamp(1.5rem,4vw,2.5rem)] leading-snug mb-10">
          <span className="word inline-block mr-2">Sua</span>
          <span className="word inline-block mr-2">meta</span>
          <span className="word inline-block mr-2">é</span>
          <span className="word inline-block mr-2">surpreender.</span>
          <br className="hidden sm:block" />
          <span className="word inline-block mr-2">A</span>
          <span className="word inline-block mr-2">nossa</span>
          <span className="word inline-block mr-2">é</span>
          <span className="word inline-block">superar.</span>
        </h1>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 mb-16">
          <Button
            variant="gold"
            size="lg"
            href={BUSINESS.whatsappLink}
            target="_blank"
            rel="noopener noreferrer"
            className="hero-cta"
          >
            Agendar Agora
          </Button>
          <Button
            variant="outline"
            size="lg"
            href="#servicos"
            className="hero-cta"
            onClick={(e: React.MouseEvent<HTMLAnchorElement>) => {
              e.preventDefault();
              document
                .querySelector("#servicos")
                ?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ver Serviços
          </Button>
        </div>

        {/* Stats */}
        <div className="hero-stats flex items-center gap-10 md:gap-16">
          {STATS.map((stat) => (
            <AnimatedCounter
              key={stat.label}
              value={stat.value}
              suffix={stat.suffix}
              label={stat.label}
            />
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-text-muted"
      >
        <ChevronDown size={24} />
      </div>
    </section>
  );
}

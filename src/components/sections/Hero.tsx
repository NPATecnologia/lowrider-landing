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
    if (scrollHintRef.current) scrollIndicator(scrollHintRef.current);
    return () => { tl.kill(); };
  }, []);

  return (
    <section className="relative min-h-dvh flex flex-col items-center justify-center overflow-hidden">
      {/* Background image with parallax feel */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/hero/carro1.jpg"
          alt=""
          className="w-full h-full object-cover scale-110"
          loading="eager"
        />
        {/* Multi-layer overlay for depth */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/70 to-[#0a0a0a]" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent" />
        {/* Gold radial glow — cinematic */}
        <div
          className="absolute inset-0"
          style={{
            background: "radial-gradient(ellipse 60% 50% at 50% 40%, rgba(201,168,76,0.07) 0%, transparent 70%)",
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center text-center px-6 max-w-5xl mx-auto pt-24 pb-16">
        {/* Logo */}
        <div className="hero-logo mb-12">
          <img
            src="/images/logo.jpg"
            alt={BUSINESS.name}
            className="w-48 sm:w-64 md:w-80 lg:w-96 rounded-lg shadow-premium mx-auto"
          />
        </div>

        {/* Tagline — editorial serif italic */}
        <h1 className="hero-tagline font-serif italic text-gold text-2xl sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-12 max-w-3xl">
          <span className="word inline-block mx-1">Sua</span>
          <span className="word inline-block mx-1">meta</span>
          <span className="word inline-block mx-1">é</span>
          <span className="word inline-block mx-1">surpreender.</span>
          <br />
          <span className="word inline-block mx-1">A</span>
          <span className="word inline-block mx-1">nossa</span>
          <span className="word inline-block mx-1">é</span>
          <span className="word inline-block mx-1">superar.</span>
        </h1>

        {/* Slogan subtitle */}
        <p className="text-text-secondary text-sm sm:text-base tracking-widest uppercase font-display mb-12 opacity-60">
          {BUSINESS.slogan}
        </p>

        {/* CTAs */}
        <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-20">
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
              document.querySelector("#servicos")?.scrollIntoView({ behavior: "smooth" });
            }}
          >
            Ver Serviços
          </Button>
        </div>

        {/* Stats bar with dividers */}
        <div className="hero-stats flex items-center gap-0">
          {STATS.map((stat, i) => (
            <div key={stat.label} className="flex items-center">
              <AnimatedCounter value={stat.value} suffix={stat.suffix} label={stat.label} />
              {i < STATS.length - 1 && (
                <div className="w-px h-10 bg-text-ghost/30 mx-8 md:mx-12" />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Scroll hint */}
      <div
        ref={scrollHintRef}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 text-text-muted opacity-50"
      >
        <ChevronDown size={24} strokeWidth={1} />
      </div>

      {/* Bottom gradient fade into next section */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-bg-primary to-transparent z-10 pointer-events-none" />
    </section>
  );
}

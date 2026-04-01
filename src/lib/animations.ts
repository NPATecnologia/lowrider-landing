import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import anime from "animejs";

gsap.registerPlugin(ScrollTrigger);

export function heroAnimation(): gsap.core.Timeline {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.from(".hero-logo", {
    autoAlpha: 0,
    scale: 0.92,
    duration: 1.2,
    ease: "power4.out",
  })
    .from(
      ".hero-tagline .word",
      { autoAlpha: 0, y: 20, stagger: 0.05, duration: 0.8 },
      "-=0.6"
    )
    .from(
      ".hero-slogan",
      { autoAlpha: 0, y: 10, duration: 0.6 },
      "-=0.4"
    )
    .from(
      ".hero-cta",
      { autoAlpha: 0, y: 20, stagger: 0.1, duration: 0.6 },
      "-=0.3"
    )
    .from(
      ".hero-stats .stat",
      { autoAlpha: 0, y: 15, stagger: 0.12, duration: 0.5 },
      "-=0.2"
    );

  return tl;
}

export function scrollReveal(
  selector: string,
  options: gsap.TweenVars = {}
): void {
  const elements = document.querySelectorAll(selector);
  if (!elements.length) return;

  const defaults: gsap.TweenVars = {
    y: 40,
    autoAlpha: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.15,
  };
  const config = { ...defaults, ...options };

  gsap.from(elements, {
    ...config,
    scrollTrigger: {
      trigger: elements[0],
      start: "top 88%",
      toggleActions: "play none none none",
    },
  });
}

export function magneticButton(btn: HTMLElement): () => void {
  const handleMove = (e: MouseEvent) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    anime({
      targets: btn,
      translateX: x * 0.15,
      translateY: y * 0.15,
      duration: 300,
      easing: "easeOutCubic",
    });
  };

  const handleLeave = () => {
    anime({
      targets: btn,
      translateX: 0,
      translateY: 0,
      duration: 600,
      easing: "easeOutElastic(1, .5)",
    });
  };

  btn.addEventListener("mousemove", handleMove);
  btn.addEventListener("mouseleave", handleLeave);

  return () => {
    btn.removeEventListener("mousemove", handleMove);
    btn.removeEventListener("mouseleave", handleLeave);
  };
}

export function scrollIndicator(element: HTMLElement): void {
  anime({
    targets: element,
    translateY: [0, 8, 0],
    opacity: [0.6, 1, 0.6],
    duration: 2200,
    easing: "easeInOutSine",
    loop: true,
  });
}

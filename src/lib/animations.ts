import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import SplitType from "split-type";
import anime from "animejs";

gsap.registerPlugin(ScrollTrigger);

export function heroAnimation(): gsap.core.Timeline {
  const tl = gsap.timeline({ defaults: { ease: "power3.out" } });

  tl.from(".hero-logo", {
    opacity: 0,
    scale: 0.92,
    duration: 1.2,
    ease: "power4.out",
  })
    .from(
      ".hero-tagline .word",
      {
        opacity: 0,
        y: 20,
        rotateX: -40,
        stagger: 0.05,
        duration: 0.8,
      },
      "-=0.6"
    )
    .from(
      ".hero-cta",
      {
        opacity: 0,
        y: 20,
        stagger: 0.1,
        duration: 0.6,
      },
      "-=0.4"
    )
    .from(
      ".hero-stats .stat",
      {
        opacity: 0,
        y: 15,
        stagger: 0.12,
        duration: 0.5,
      },
      "-=0.2"
    );

  return tl;
}

export function scrollReveal(
  selector: string,
  options: gsap.TweenVars = {}
): void {
  const defaults: gsap.TweenVars = {
    y: 40,
    opacity: 0,
    duration: 0.8,
    ease: "power2.out",
    stagger: 0.15,
  };
  const config = { ...defaults, ...options };

  gsap.from(selector, {
    ...config,
    scrollTrigger: {
      trigger: selector,
      start: "top 85%",
      toggleActions: "play none none none",
    },
  });
}

export function parallax(selector: string, speed: number = 30): void {
  gsap.to(selector, {
    y: -speed,
    ease: "none",
    scrollTrigger: {
      trigger: selector,
      start: "top bottom",
      end: "bottom top",
      scrub: 1,
    },
  });
}

export function animateCounter(
  element: HTMLElement,
  target: number,
  suffix: string = ""
): void {
  const obj = { val: 0 };
  gsap.to(obj, {
    val: target,
    duration: 2,
    ease: "power1.out",
    scrollTrigger: {
      trigger: element,
      start: "top 80%",
    },
    onUpdate: () => {
      const display = target % 1 === 0 ? Math.floor(obj.val) : obj.val.toFixed(1);
      element.textContent = display + suffix;
    },
  });
}

export function textReveal(selector: string): void {
  const elements = document.querySelectorAll(selector);
  elements.forEach((el) => {
    const split = new SplitType(el as HTMLElement, {
      types: "words,chars",
    });

    gsap.from(split.chars ?? [], {
      opacity: 0,
      y: 30,
      rotateX: -60,
      stagger: 0.02,
      duration: 0.6,
      ease: "power3.out",
      scrollTrigger: {
        trigger: el,
        start: "top 80%",
      },
    });
  });
}

export function borderShimmer(element: HTMLElement): void {
  anime({
    targets: element,
    borderColor: [
      { value: "rgba(201,168,76,0.15)", duration: 1500 },
      { value: "rgba(201,168,76,0.4)", duration: 1500 },
      { value: "rgba(201,168,76,0.15)", duration: 1500 },
    ],
    easing: "easeInOutSine",
    loop: true,
  });
}

export function badgePulse(element: HTMLElement): void {
  anime({
    targets: element,
    scale: [1, 1.05, 1],
    opacity: [1, 0.85, 1],
    duration: 2000,
    easing: "easeInOutQuad",
    loop: true,
  });
}

export function magneticButton(btn: HTMLElement): void {
  const handleMove = (e: MouseEvent) => {
    const rect = btn.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    anime({
      targets: btn,
      translateX: x * 0.2,
      translateY: y * 0.2,
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

import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export interface RevealOptions {
  delay?: number;
  duration?: number;
  y?: number;
  opacity?: number;
  stagger?: number;
  ease?: string;
  blur?: number;
}

export function fadeUp(
  element: gsap.TweenTarget,
  options: RevealOptions = {}
) {
  const {
    delay = 0,
    duration = 0.8,
    y = 30,
    opacity = 0,
    ease = "power2.out",
  } = options;

  return gsap.fromTo(
    element,
    {
      y,
      opacity,
    },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      ease,
    }
  );
}

export function blurIn(
  element: gsap.TweenTarget,
  options: RevealOptions = {}
) {
  const {
    delay = 0,
    duration = 0.8,
    blur = 10,
    opacity = 0,
    ease = "power2.out",
  } = options;

  return gsap.fromTo(
    element,
    {
      filter: `blur(${blur}px)`,
      opacity,
    },
    {
      filter: "blur(0px)",
      opacity: 1,
      duration,
      delay,
      ease,
    }
  );
}

export function stagger(
  elements: gsap.TweenTarget,
  options: RevealOptions = {}
) {
  const {
    delay = 0,
    duration = 0.6,
    stagger = 0.1,
    y = 20,
    opacity = 0,
    ease = "power2.out",
  } = options;

  return gsap.fromTo(
    elements,
    {
      y,
      opacity,
    },
    {
      y: 0,
      opacity: 1,
      duration,
      delay,
      stagger,
      ease,
    }
  );
}

export function parallax(
  element: gsap.TweenTarget,
  speed: number = 0.5
) {
  return gsap.to(element, {
    yPercent: speed * 100,
    ease: "none",
    scrollTrigger: {
      trigger: element,
      start: "top bottom",
      end: "bottom top",
      scrub: true,
    },
  });
}

export function magneticHover(
  element: HTMLElement,
  strength: number = 0.3
) {
  const handleMouseMove = (e: MouseEvent) => {
    const rect = element.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;

    gsap.to(element, {
      x: x * strength,
      y: y * strength,
      duration: 0.3,
      ease: "power2.out",
    });
  };

  const handleMouseLeave = () => {
    gsap.to(element, {
      x: 0,
      y: 0,
      duration: 0.5,
      ease: "elastic.out(1, 0.5)",
    });
  };

  element.addEventListener("mousemove", handleMouseMove);
  element.addEventListener("mouseleave", handleMouseLeave);

  return () => {
    element.removeEventListener("mousemove", handleMouseMove);
    element.removeEventListener("mouseleave", handleMouseLeave);
  };
}

export function animateCounter(
  element: HTMLElement | null,
  target: number,
  duration: number = 2,
  suffix: string = ""
) {
  if (!element) return null;
  
  const obj = { value: 0 };
  return gsap.to(obj, {
    value: target,
    duration,
    ease: "power2.out",
    onUpdate: () => {
      if (element) {
        element.textContent = Math.round(obj.value) + suffix;
      }
    },
  });
}

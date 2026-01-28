"use client";

import { useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { fadeUp, blurIn, RevealOptions } from "@/lib/animations";

if (typeof window !== "undefined") {
  gsap.registerPlugin(ScrollTrigger);
}

export function useGsapReveal(
  options: RevealOptions & { type?: "fadeUp" | "blurIn" } = {}
) {
  const ref = useRef<HTMLElement>(null);
  const prefersReducedMotion =
    typeof window !== "undefined" &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  useEffect(() => {
    if (!ref.current || prefersReducedMotion) return;

    const element = ref.current;
    const { type = "fadeUp", ...revealOptions } = options;

    const animation =
      type === "blurIn"
        ? blurIn(element, revealOptions)
        : fadeUp(element, revealOptions);

    ScrollTrigger.create({
      trigger: element,
      start: "top 85%",
      animation,
      toggleActions: "play none none none",
    });

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => {
        if (trigger.vars.trigger === element) {
          trigger.kill();
        }
      });
    };
  }, [options, prefersReducedMotion]);

  return ref;
}

"use client";

import { useEffect } from "react";

export default function ScrollRevealInit() {
  useEffect(() => {
    const elements = document.querySelectorAll(".scroll-reveal");

    // Immediate check for elements already in or near viewport
    elements.forEach((el) => {
      const rect = el.getBoundingClientRect();
      if (rect.top < window.innerHeight + 100 && rect.bottom > -100) {
        el.classList.add("visible");
      }
    });

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.01, rootMargin: "100px 0px 50px 0px" }
    );

    elements.forEach((el) => observer.observe(el));

    // Support direct hash navigation (e.g. #curriculum, #portfolio)
    const handleHash = () => {
      if (window.location.hash) {
        const target = document.querySelector(window.location.hash);
        if (target) {
          target.classList.add("visible");
          const childReveals = target.querySelectorAll(".scroll-reveal");
          childReveals.forEach((c) => c.classList.add("visible"));
        }
      }
    };
    handleHash();
    window.addEventListener("hashchange", handleHash);

    // Guaranteed fallback: after 1s ensure all elements are visible so no section is ever stuck invisible
    const fallbackTimer = setTimeout(() => {
      elements.forEach((el) => el.classList.add("visible"));
    }, 1000);

    return () => {
      observer.disconnect();
      window.removeEventListener("hashchange", handleHash);
      clearTimeout(fallbackTimer);
    };
  }, []);

  return null;
}

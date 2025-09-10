"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap, ScrollTrigger } from "@/lib/gsap";

export default function AnimatedSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from(sectionRef.current, {
      opacity: 0,
      y: 200,
      duration: 2,

      scrollTrigger: {
        trigger: sectionRef.current,
        start: "top 80%",
        end: "bottom 90%",
        scrub: true,
        markers: true,
      },
    });
  }, []);

  return (
    <section
      ref={sectionRef}
      className="h-screen flex items-center justify-center bg-gray-900 text-white"
    >
      <h2 className="text-4xl font-bold">Scroll to Animate</h2>
    </section>
  );
}

"use client";

import { useRef } from "react";
import { useGSAP } from "@gsap/react";
import { gsap } from "@/lib/gsap";

export default function AnimatedCardsSection() {
  const sectionRef = useRef<HTMLDivElement>(null);

  useGSAP(() => {
    if (!sectionRef.current) return;

    gsap.from(sectionRef.current.querySelectorAll(".box"), {
      y: 200,
      duration: 2,
      stagger: 0.2,
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
      className="h-screen flex items-center justify-center "
    >
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-5">
        <div className=" box h-40 w-[200px] bg-red-500  ">Card 1</div>

        <div className=" box h-40 w-[200px] bg-red-500  ">Card 2</div>

        <div className=" box h-40 w-[200px] bg-red-500  ">Card 3</div>

        <div className=" box h-40 w-[200px] bg-red-500  ">Card 4</div>

        <div className=" box h-40 w-[200px] bg-red-500  ">Card 5</div>

        <div className=" box h-40 w-[200px] bg-red-500  ">Card 6</div>
      </div>
    </section>
  );
}

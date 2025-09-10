"use client"
import React from "react";
import { gsap } from "gsap";

export default function FooterComponent() {
  return (
    <div className="bg-amber-300 h-screen w-full" id="footer">
      fsdf
      <button
        onClick={() =>
          gsap.to(window, {
            duration: 0.8,
            scrollTo: 0,
            ease: "power2.inOut",
          })
        }
        className="mt-6 inline-flex items-center rounded-full border border-white/20 bg-white/5 px-4 py-2 text-sm text-slate-100 transition hover:bg-white/10"
        aria-label="Back to top"
      >
        ↑ Back to top
      </button>
    </div>
  );
}

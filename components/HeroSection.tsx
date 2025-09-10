import { useEffect, useRef } from "react";
import { gsap } from "gsap";

const HeroSection = () => {
  const leftCurtainRef = useRef<HTMLDivElement>(null);
  const rightCurtainRef = useRef<HTMLDivElement>(null);
  const headingRef = useRef<HTMLHeadingElement>(null);
  const ctaRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const tl = gsap.timeline();

    gsap.set(leftCurtainRef.current, { x: 0 });
    gsap.set(rightCurtainRef.current, { x: 0 });

    gsap.set([headingRef.current, ctaRef.current], {
      opacity: 0,
      y: 40,
      scale: 0.9,
    });

    tl.to(leftCurtainRef.current, {
      x: "-100%",
      duration: 1.5,
      ease: "power4.inOut",
    })
      .to(
        rightCurtainRef.current,
        {
          x: "100%",
          duration: 1.5,
          ease: "power4.inOut",
        },
        "<"
      )

      .to(
        headingRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.8,
          ease: "back.out(1.7)",
        },
        "-=0.8"
      )

      .to(
        ctaRef.current,
        {
          opacity: 1,
          y: 0,
          scale: 1,
          duration: 0.6,
          ease: "back.out(1.7)",
        },
        "-=0.5"
      );

    return () => {
      tl.kill();
    };
  }, []);

  return (
    <div
      className="relative min-h-screen flex items-center justify-center overflow-hidden"
      style={{
        backgroundImage: `url('/assets/images/hero-bg.png')`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Background overlay */}
      <div className="absolute inset-0 z-10 bg-[#b68b35c9] " />

      {/* Left Curtain */}
      <div
        ref={leftCurtainRef}
        className="absolute top-0 left-0 w-1/2 h-full bg-black z-20"
      />
      {/* Right Curtain */}
      <div
        ref={rightCurtainRef}
        className="absolute top-0 right-0 w-1/2 h-full  bg-black  z-20"
      />

      {/* Hero Content */}
      <div className="relative z-20 text-center px-6 max-w-4xl mx-auto">
        <h1
          ref={headingRef}
          className="text-5xl md:text-7xl  font-medium mb-8 bg-gradient-to-r from-white via-gray-200 to-gray-300 bg-clip-text text-transparent leading-tight"
        >
          High-Level Leaders.
          <br />
          <strong> Big Ideas.</strong>
          <br />
          Powerful Deals.
        </h1>

        <div
          ref={ctaRef}
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
        >
          <button className="px-4 py-2 bg-white rounded-full shadow-lg hover:shadow-2xl hover:scale-105 transition-all duration-300">
            Reserve Your Invitation
          </button>
          <button className="px-4 py-2 text-lg font-semibold border-2 border-white text-white rounded-full hover:bg-white/10 transition-all duration-300">
            Watch Demo
          </button>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute top-1/4 left-10 w-2 h-20 bg-white/30 rounded-full blur-sm" />
      <div className="absolute bottom-1/3 right-16 w-3 h-16 bg-white/20 rounded-full blur-sm" />
      <div className="absolute top-1/3 right-1/4 w-1 h-12 bg-white/40 rounded-full blur-sm" />
    </div>
  );
};

export default HeroSection;

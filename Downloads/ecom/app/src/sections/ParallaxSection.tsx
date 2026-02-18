
import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
gsap.registerPlugin(ScrollTrigger);

// Simple animated sparkles
const Sparkles = () => (
  <div className="pointer-events-none absolute inset-0 z-20">
    {[...Array(18)].map((_, i) => (
      <div
        key={i}
        className="absolute rounded-full bg-white/70 shadow-lg animate-sparkle"
        style={{
          width: `${6 + Math.random() * 10}px`,
          height: `${6 + Math.random() * 10}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDelay: `${Math.random() * 3}s`,
        }}
      />
    ))}
  </div>
);

const ParallaxSection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const bgRef = useRef<HTMLDivElement>(null);
  const textRef = useRef<HTMLDivElement>(null);
  const lightSweepRef = useRef<HTMLDivElement>(null);
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const section = sectionRef.current;
    const bg = bgRef.current;
    const text = textRef.current;
    const overlay = overlayRef.current;
    if (!section || !bg || !text || !overlay) return;

    const triggers: ScrollTrigger[] = [];

    // Parallax effect - background moves slower than foreground
    const parallaxTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        // Background moves at 30% speed
        gsap.to(bg, {
          y: progress * 150,
          duration: 0.1,
          ease: 'none',
        });
        // Text moves at 100% speed (faster)
        gsap.to(text, {
          y: progress * -100,
          duration: 0.1,
          ease: 'none',
        });
        // Overlay opacity changes
        gsap.to(overlay, {
          opacity: 0.2 + progress * 0.3,
          duration: 0.1,
          ease: 'none',
        });
      },
    });
    triggers.push(parallaxTrigger);

    // Light sweep animation
    const lightTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 60%',
      onEnter: () => {
        gsap.fromTo(lightSweepRef.current,
          { x: '-100%', opacity: 0 },
          { 
            x: '200%', 
            opacity: 0.5, 
            duration: 2.5, 
            ease: 'power2.inOut',
            repeat: -1,
            repeatDelay: 3,
          }
        );
      },
      once: true,
    });
    triggers.push(lightTrigger);

    // Text reveal
    gsap.set(text, { opacity: 0, y: 100 });
    const textTrigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 50%',
      onEnter: () => {
        gsap.to(text, {
          opacity: 1,
          y: 0,
          duration: 1.2,
          ease: 'power3.out',
        });
      },
      once: true,
    });
    triggers.push(textTrigger);

    return () => {
      triggers.forEach((trigger) => trigger.kill());
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className="relative w-full h-screen overflow-hidden bg-gradient-to-br from-[#f5f0e8] via-white to-[#e8e0d4]"
    >
      {/* Background Image Layer */}
      <div
        ref={bgRef}
        className="absolute inset-0 w-full h-[130%] -top-[15%] opacity-60"
      >
        <img
          src="/parallax-bg.jpg"
          alt="Cinematic background"
          className="w-full h-full object-cover"
        />
      </div>

      {/* Soft White Overlay */}
      <div
        ref={overlayRef}
        className="absolute inset-0 bg-white/70 backdrop-blur-[2px]"
      />

      {/* Light Sweep Effect */}
      <div
        ref={lightSweepRef}
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(90deg, transparent 0%, rgba(0, 57, 38, 0.10) 50%, transparent 100%)',
          width: '50%',
          transform: 'translateX(-100%) skewX(-20deg)',
        }}
      />

      {/* Animated Sparkles */}
      <Sparkles />

      {/* 3D Glass Card Content */}
      <div className="relative z-30 w-full h-full flex items-center justify-center px-6">
        <div ref={textRef} className="mx-auto max-w-3xl">
          <div className="mx-auto rounded-3xl shadow-2xl bg-white/70 backdrop-blur-2xl border border-[#e8e0d4]/60 p-12 flex flex-col items-center animate-float-hero">
            {/* Decorative Line */}
            <div className="flex items-center justify-center gap-4 mb-8">
              <div className="w-16 h-px bg-gradient-to-r from-transparent to-[#003926]" />
              <div className="w-2 h-2 rounded-full bg-[#003926]" />
              <div className="w-16 h-px bg-gradient-to-l from-transparent to-[#003926]" />
            </div>

            {/* Main Quote */}
            <h2 className="text-5xl md:text-7xl font-extrabold text-[#2D2D2D] leading-none tracking-tight drop-shadow-lg">
              Time Is
              <span className="block mt-2 text-transparent bg-gradient-to-r from-[#003926] via-[#2D6B56] to-[#003926] bg-clip-text animate-glow-text drop-shadow-3xl" style={{textShadow:'0 8px 32px #00392688'}}>Personal.</span>
            </h2>

            {/* Subtext */}
            <p className="mt-8 text-[#2D2D2D]/70 text-lg md:text-xl max-w-2xl mx-auto leading-relaxed">
              Every second tells a story. Every moment becomes a memory. <br/>
              Wear time that reflects who you are.
            </p>

            {/* CTA */}
            <div className="mt-12">
              <button className="group relative px-10 py-5 overflow-hidden rounded-lg interactive shadow-lg bg-[#003926] animate-float-cta">
                {/* Button Glow */}
                <div className="absolute inset-0 bg-[#003926]/80 blur-[8px] opacity-60 group-hover:opacity-80 transition-all duration-300 rounded-lg" />
                {/* Button Text */}
                <span className="relative z-10 text-white font-semibold tracking-wider uppercase flex items-center gap-3 text-lg">
                  Discover Your Story
                  <svg 
                    className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                  </svg>
                </span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Gradient */}
      <div className="absolute bottom-0 left-0 right-0 h-48 bg-gradient-to-t from-[#FAF8F5] to-transparent z-10" />

      {/* Side Gradients */}
      <div className="absolute top-0 left-0 bottom-0 w-32 bg-gradient-to-r from-[#FAF8F5]/80 to-transparent z-10" />
      <div className="absolute top-0 right-0 bottom-0 w-32 bg-gradient-to-l from-[#FAF8F5]/80 to-transparent z-10" />
    </section>
  );
};

export default ParallaxSection;

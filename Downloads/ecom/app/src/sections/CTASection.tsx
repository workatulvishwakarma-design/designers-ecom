import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { ArrowRight } from 'lucide-react';

gsap.registerPlugin(ScrollTrigger);

const CTASection = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const contentRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const glowRef = useRef<HTMLDivElement>(null);

  // Magnetic button effect
  useEffect(() => {
    const button = buttonRef.current;
    if (!button) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = button.getBoundingClientRect();
      const x = e.clientX - rect.left - rect.width / 2;
      const y = e.clientY - rect.top - rect.height / 2;

      gsap.to(button, {
        x: x * 0.3,
        y: y * 0.3,
        duration: 0.3,
        ease: 'power2.out',
      });
    };

    const handleMouseLeave = () => {
      gsap.to(button, {
        x: 0,
        y: 0,
        duration: 0.5,
        ease: 'elastic.out(1, 0.3)',
      });
    };

    button.addEventListener('mousemove', handleMouseMove);
    button.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      button.removeEventListener('mousemove', handleMouseMove);
      button.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  // Entry animation
  useEffect(() => {
    const section = sectionRef.current;
    const content = contentRef.current;
    if (!section || !content) return;

    gsap.set(content.children, { opacity: 0, y: 60 });

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top 60%',
      onEnter: () => {
        gsap.to(content.children, {
          opacity: 1,
          y: 0,
          duration: 1,
          stagger: 0.15,
          ease: 'power3.out',
        });
      },
      once: true,
    });

    return () => trigger.kill();
  }, []);

  // Glow pulse animation
  useEffect(() => {
    if (glowRef.current) {
      gsap.to(glowRef.current, {
        scale: 1.2,
        opacity: 0.4,
        duration: 2,
        repeat: -1,
        yoyo: true,
        ease: 'sine.inOut',
      });
    }
  }, []);

  return (
    <section
      ref={sectionRef}
      id="contact"
      className="relative w-full bg-[#FAF8F5] overflow-hidden py-32 lg:py-48"
    >
      {/* Background Effects */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] via-[#F5F0E8] to-[#FAF8F5]" />
        
        {/* Central Glow */}
        <div 
          ref={glowRef}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#003926]/15 rounded-full blur-[150px]"
        />

        {/* Radial Lines */}
        <div className="absolute inset-0 opacity-5">
          {[...Array(12)].map((_, i) => (
            <div
              key={i}
              className="absolute top-1/2 left-1/2 w-px h-[50%] bg-gradient-to-b from-[#003926] to-transparent origin-top"
              style={{
                transform: `rotate(${i * 30}deg)`,
              }}
            />
          ))}
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24">
        <div ref={contentRef} className="text-center max-w-4xl mx-auto">
          {/* Eyebrow */}
          <p className="text-[#1B4D3E] text-sm tracking-[0.4em] uppercase mb-6">
            Begin Your Journey
          </p>

          {/* Main Heading */}
          <h2 className="text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#2D2D2D] leading-none mb-8">
            Own Your
            <span className="block gold-gradient-text mt-2">Moment.</span>
          </h2>

          {/* Subtext */}
          <p className="text-[#2D2D2D]/50 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
            Join thousands of collectors who have discovered the art of 
            timeless elegance. Your perfect timepiece awaits.
          </p>

          {/* CTA Button */}
          <div className="flex justify-center">
            <button
              ref={buttonRef}
              className="group relative px-12 py-6 bg-[#003926] text-white font-bold text-lg tracking-wider uppercase rounded-sm overflow-hidden transition-shadow duration-300 hover:shadow-2xl hover:shadow-[#003926]/30 interactive"
            >
              {/* Shine Effect */}
              <div className="absolute inset-0 -translate-x-full group-hover:translate-x-full transition-transform duration-700 bg-gradient-to-r from-transparent via-white/30 to-transparent" />
              
              {/* Button Content */}
              <span className="relative z-10 flex items-center gap-3">
                Shop Now
                <ArrowRight className="w-5 h-5 transition-transform group-hover:translate-x-1" />
              </span>
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-16 flex flex-wrap justify-center items-center gap-8 text-[#2D2D2D]/50 text-sm">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#1B4D3E]" />
              <span>Free Shipping Across India</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#1B4D3E]" />
              <span>30-Day Returns</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#1B4D3E]" />
              <span>5-Year Warranty</span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Decorative Line */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-px h-24 bg-gradient-to-b from-[#003926]/50 to-transparent" />
    </section>
  );
};

export default CTASection;

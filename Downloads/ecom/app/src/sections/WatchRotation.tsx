import { useEffect, useRef, useState } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

gsap.registerPlugin(ScrollTrigger);

const WatchRotation = () => {
  const sectionRef = useRef<HTMLElement>(null);
  const watchContainerRef = useRef<HTMLDivElement>(null);
  const watchRef = useRef<HTMLDivElement>(null);
  const reflectionRef = useRef<HTMLDivElement>(null);
  const [activeColor, setActiveColor] = useState(0);
  const [rotation, setRotation] = useState(0);

  const colors = [
    { name: 'Midnight Black', image: '/watch-hero-black.png', bg: '#FAF8F5' },
    { name: 'Sterling Silver', image: '/watch-hero-silver.png', bg: '#F5F0E8' },
    { name: 'Rose Gold', image: '/watch-hero-gold.png', bg: '#F5F0E8' },
  ];

  // Scroll-triggered rotation
  useEffect(() => {
    const section = sectionRef.current;
    const watch = watchRef.current;
    if (!section || !watch) return;

    const trigger = ScrollTrigger.create({
      trigger: section,
      start: 'top bottom',
      end: 'bottom top',
      scrub: 1,
      onUpdate: (self) => {
        const progress = self.progress;
        const newRotation = progress * 360 - 180;
        setRotation(newRotation);
        
        gsap.to(watch, {
          rotateY: newRotation,
          duration: 0.1,
          ease: 'none',
        });

        // Reflection follows with delay
        if (reflectionRef.current) {
          gsap.to(reflectionRef.current, {
            rotateY: newRotation * 0.8,
            duration: 0.1,
            ease: 'none',
          });
        }
      },
    });

    return () => trigger.kill();
  }, []);

  // Color change animation
  const handleColorChange = (index: number) => {
    if (index === activeColor) return;
    
    setActiveColor(index);
    
    const watch = watchRef.current;
    if (watch) {
      gsap.to(watch, {
        scale: 0.9,
        opacity: 0.5,
        duration: 0.2,
        ease: 'power2.in',
        onComplete: () => {
          gsap.to(watch, {
            scale: 1,
            opacity: 1,
            duration: 0.4,
            ease: 'power2.out',
          });
        },
      });
    }
  };

  return (
    <section
      ref={sectionRef}
      className="relative w-full min-h-screen bg-[#FAF8F5] overflow-hidden py-20 lg:py-32"
    >
      {/* Animated Gradient Background */}
      <div className="absolute inset-0">
        <div 
          className="absolute inset-0 transition-colors duration-1000"
          style={{ backgroundColor: colors[activeColor].bg }}
        />
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#FAF8F5]/50 to-[#FAF8F5]" />
        
        {/* Decorative Glow */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#003926]/5 rounded-full blur-[150px]" />
        
        {/* Animated Waves */}
        <div className="absolute inset-0 overflow-hidden opacity-10">
          <div className="absolute -top-1/2 -left-1/2 w-[200%] h-[200%]">
            {[...Array(3)].map((_, i) => (
              <div
                key={i}
                className="absolute inset-0"
                style={{
                  background: `radial-gradient(ellipse at center, transparent 30%, rgba(212, 165, 116, 0.05) 70%)`,
                  animation: `rotate ${20 + i * 5}s linear infinite`,
                  transform: `scale(${1 + i * 0.2})`,
                }}
              />
            ))}
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-[#1B4D3E] text-sm tracking-[0.4em] uppercase mb-4">
            360° Experience
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D]">
            See Every Angle
          </h2>
        </div>

        {/* 3D Watch Display */}
        <div
          ref={watchContainerRef}
          className="relative flex justify-center items-center py-12"
          style={{ perspective: '1200px' }}
        >
          <div className="relative w-full max-w-xl">
            {/* Watch */}
            <div
              ref={watchRef}
              className="relative transition-transform duration-100"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateY(${rotation}deg)`,
              }}
            >
              <img
                src={colors[activeColor].image}
                alt={colors[activeColor].name}
                className="w-full h-auto drop-shadow-2xl"
                style={{
                  filter: 'drop-shadow(0 40px 80px rgba(0,0,0,0.15))',
                }}
              />
            </div>

            {/* Reflection */}
            <div
              ref={reflectionRef}
              className="absolute -bottom-24 left-1/2 -translate-x-1/2 w-[80%] opacity-15"
              style={{
                transformStyle: 'preserve-3d',
                transform: `rotateY(${rotation * 0.8}deg)`,
              }}
            >
              <img
                src={colors[activeColor].image}
                alt=""
                className="w-full h-auto"
                style={{
                  transform: 'scaleY(-1)',
                  maskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)',
                  WebkitMaskImage: 'linear-gradient(to bottom, rgba(0,0,0,0.4), transparent)',
                  filter: 'blur(8px)',
                }}
              />
            </div>

            {/* Ambient Glow */}
            <div 
              className="absolute inset-0 flex items-center justify-center pointer-events-none"
              style={{ transform: 'translateZ(-100px)' }}
            >
              <div 
                className="w-[120%] h-[120%] rounded-full opacity-30 transition-colors duration-500"
                style={{
                  background: `radial-gradient(circle, ${activeColor === 2 ? 'rgba(212, 165, 116, 0.15)' : 'rgba(212, 165, 116, 0.08)'} 0%, transparent 70%)`,
                  filter: 'blur(60px)',
                }}
              />
            </div>
          </div>
        </div>

        {/* Color Selector */}
        <div className="flex justify-center gap-6 mt-16">
          {colors.map((color, index) => (
            <button
              key={index}
              onClick={() => handleColorChange(index)}
              className={`group relative px-6 py-4 rounded-lg border-2 transition-all duration-300 interactive ${
                activeColor === index
                  ? 'border-[#003926] bg-[#003926]/10'
                  : 'border-[#E8E0D4] bg-white hover:border-[#003926]/50'
              }`}
            >
              <div className="flex items-center gap-3">
                <div
                  className={`w-4 h-4 rounded-full border-2 transition-all ${
                    activeColor === index ? 'border-[#003926] scale-110' : 'border-[#E8E0D4]'
                  }`}
                  style={{ backgroundColor: index === 0 ? '#000' : index === 1 ? '#c0c0c0' : '#003926' }}
                />
                <span className={`text-sm font-medium transition-colors ${
                  activeColor === index ? 'text-[#003926]' : 'text-[#2D2D2D]/70'
                }`}>
                  {color.name}
                </span>
              </div>
              
              {/* Active Indicator */}
              {activeColor === index && (
                <div className="absolute -bottom-1 left-1/2 -translate-x-1/2 w-8 h-0.5 bg-[#003926]" />
              )}
            </button>
          ))}
        </div>

        {/* Scroll Indicator */}
        <div className="text-center mt-16">
          <p className="text-[#2D2D2D]/50 text-sm">
            Scroll to rotate the watch
          </p>
          <div className="mt-4 flex justify-center">
            <div className="w-px h-12 bg-gradient-to-b from-[#003926]/50 to-transparent" />
          </div>
        </div>
      </div>

      {/* CSS for wave animation */}
      <style>{`
        @keyframes rotate {
          from { transform: rotate(0deg); }
          to { transform: rotate(360deg); }
        }
      `}</style>
    </section>
  );
};

export default WatchRotation;

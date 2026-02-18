import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { Award, Globe, Heart, Target } from 'lucide-react';
import Footer from '../sections/Footer';

gsap.registerPlugin(ScrollTrigger);

const About = () => {
  const heroRef = useRef<HTMLElement>(null);
  const storyRef = useRef<HTMLElement>(null);
  const valuesRef = useRef<HTMLElement>(null);
  const teamRef = useRef<HTMLElement>(null);
  const milestonesRef = useRef<HTMLElement>(null);

  useEffect(() => {
    ScrollTrigger.refresh();
    
    // Hero animation
    const heroElements = heroRef.current?.querySelectorAll('.hero-reveal');
    if (heroElements && heroElements.length > 0) {
      gsap.fromTo(heroElements,
        { opacity: 0, y: 60 },
        { 
          opacity: 1, 
          y: 0, 
          duration: 1, 
          stagger: 0.15,
          ease: 'power3.out',
          delay: 0.5
        }
      );
    }

    // Story section
    const storyElements = storyRef.current?.querySelectorAll('.story-reveal');
    if (storyElements) {
      gsap.set(storyElements, { opacity: 0, y: 50 });
      ScrollTrigger.create({
        trigger: storyRef.current,
        start: 'top 70%',
        onEnter: () => {
          gsap.to(storyElements, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
          });
        },
        once: true,
      });
    }

    // Values cards
    const valueCards = valuesRef.current?.querySelectorAll('.value-card');
    if (valueCards) {
      gsap.set(valueCards, { opacity: 0, y: 60, scale: 0.95 });
      ScrollTrigger.create({
        trigger: valuesRef.current,
        start: 'top 60%',
        onEnter: () => {
          gsap.to(valueCards, {
            opacity: 1,
            y: 0,
            scale: 1,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
          });
        },
        once: true,
      });
    }

    // Team section
    const teamCards = teamRef.current?.querySelectorAll('.team-card');
    if (teamCards) {
      gsap.set(teamCards, { opacity: 0, y: 50 });
      ScrollTrigger.create({
        trigger: teamRef.current,
        start: 'top 60%',
        onEnter: () => {
          gsap.to(teamCards, {
            opacity: 1,
            y: 0,
            duration: 0.8,
            stagger: 0.15,
            ease: 'power3.out',
          });
        },
        once: true,
      });
    }

    // Milestones
    const milestones = milestonesRef.current?.querySelectorAll('.milestone');
    if (milestones) {
      gsap.set(milestones, { opacity: 0, x: -30 });
      ScrollTrigger.create({
        trigger: milestonesRef.current,
        start: 'top 60%',
        onEnter: () => {
          gsap.to(milestones, {
            opacity: 1,
            x: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: 'power3.out',
          });
        },
        once: true,
      });
    }

    return () => {
      ScrollTrigger.getAll().forEach((trigger) => trigger.kill());
    };
  }, []);

  const values = [
    {
      icon: Award,
      title: 'Excellence',
      description: 'We never compromise on quality. Every component is meticulously crafted to meet the highest standards.',
    },
    {
      icon: Heart,
      title: 'Passion',
      description: 'Our love for horology drives everything we do. Each timepiece is created with genuine care and dedication.',
    },
    {
      icon: Target,
      title: 'Precision',
      description: 'Swiss-engineered movements ensure accuracy that stands the test of time.',
    },
    {
      icon: Globe,
      title: 'Heritage',
      description: 'Blending Indian craftsmanship with Swiss precision, we honor tradition while embracing innovation.',
    },
  ];

  const team = [
    {
      name: 'Vikram Desai',
      role: 'Founder & CEO',
      initials: 'VD',
    },
    {
      name: 'Anita Sharma',
      role: 'Chief Designer',
      initials: 'AS',
    },
    {
      name: 'Rajiv Khanna',
      role: 'Master Watchmaker',
      initials: 'RK',
    },
    {
      name: 'Priya Nair',
      role: 'Head of Operations',
      initials: 'PN',
    },
  ];

  const milestones = [
    { year: '1999', title: 'The Beginning', description: 'DSIGNER\'S founded in Bangalore with a vision to create world-class Indian timepieces.' },
    { year: '2005', title: 'Swiss Partnership', description: 'Strategic alliance with Swiss movement manufacturers for unparalleled precision.' },
    { year: '2012', title: 'International Recognition', description: 'Won the prestigious Red Dot Design Award for the Heritage Collection.' },
    { year: '2018', title: 'Flagship Store', description: 'Opened our flagship boutique on Lavelle Road, Bangalore.' },
    { year: '2024', title: '25 Years', description: 'Celebrating 25 years of crafting exceptional timepieces for discerning collectors.' },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        ref={heroRef}
        className="relative w-full min-h-[70vh] bg-[#FAF8F5] overflow-hidden flex items-center pt-32"
      >
        {/* Background */}
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-[60%] h-full bg-gradient-to-l from-[#F5F0E8] to-transparent opacity-70" />
          <div className="absolute top-20 left-20 w-64 h-64 bg-[#003926]/5 rounded-full blur-[80px]" />
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#1B4D3E]/5 rounded-full blur-[100px]" />
        </div>

        {/* Watermark */}
        <div className="watermark top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[15vw]">
          ABOUT
        </div>

        <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24 py-20">
          <div className="max-w-4xl">
            <p className="hero-reveal text-[#1B4D3E] text-sm tracking-[0.4em] uppercase mb-6">
              Our Story
            </p>
            <h1 className="hero-reveal text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold text-[#2D2D2D] leading-none mb-8">
              Crafting Time
              <span className="block gold-gradient-text mt-2">Since 1999</span>
            </h1>
            <p className="hero-reveal text-[#2D2D2D]/60 text-lg md:text-xl max-w-2xl leading-relaxed">
              DSIGNER'S is more than a watch brand—we are custodians of time, 
              blending Indian artistry with Swiss precision to create timepieces 
              that tell stories across generations.
            </p>
          </div>
        </div>

        {/* Bottom Gradient */}
        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#FAF8F5] to-transparent" />
      </section>

      {/* Story Section */}
      <section
        ref={storyRef}
        className="relative w-full bg-[#FAF8F5] overflow-hidden py-20 lg:py-32"
      >
        <div className="absolute inset-0">
          <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] via-[#F5F0E8] to-[#FAF8F5]" />
        </div>

        <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left - Image */}
            <div className="story-reveal relative">
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl shadow-[#2D2D2D]/10">
                <img
                  src="/watch-macro-strap.jpg"
                  alt="Craftsmanship"
                  className="w-full h-full object-cover"
                />
              </div>
              {/* Decorative */}
              <div className="absolute -bottom-6 -right-6 w-48 h-48 border-2 border-[#003926]/20 rounded-2xl -z-10" />
              <div className="absolute -top-6 -left-6 w-32 h-32 bg-[#003926]/10 rounded-full blur-[40px]" />
            </div>

            {/* Right - Content */}
            <div className="space-y-8">
              <div className="story-reveal">
                <p className="text-[#1B4D3E] text-sm tracking-[0.4em] uppercase mb-4">Our Philosophy</p>
                <h2 className="text-4xl md:text-5xl font-bold text-[#2D2D2D] leading-tight">
                  Where Art Meets
                  <span className="gold-gradient-text"> Precision</span>
                </h2>
              </div>

              <div className="story-reveal space-y-6">
                <p className="text-[#2D2D2D]/70 text-lg leading-relaxed">
                  At DSIGNER'S, we believe that a watch is more than a device that tells time—
                  it is a companion that witnesses life's most precious moments. From the boardroom 
                  to celebrations, our timepieces are designed to be there, silently marking every second.
                </p>
                <p className="text-[#2D2D2D]/60 leading-relaxed">
                  Our journey began in 1999 in the heart of Bangalore, with a simple yet ambitious 
                  vision: to create world-class timepieces that embody the rich heritage of Indian 
                  craftsmanship while incorporating the precision of Swiss engineering.
                </p>
                <p className="text-[#2D2D2D]/60 leading-relaxed">
                  Today, each DSIGNER'S watch is a testament to this vision—a harmonious blend 
                  of traditional artistry and modern innovation, crafted for those who appreciate 
                  the finer things in life.
                </p>
              </div>

              {/* Stats */}
              <div className="story-reveal flex gap-12 pt-4">
                <div>
                  <p className="gold-gradient-text text-4xl font-bold">25+</p>
                  <p className="text-[#2D2D2D]/50 text-sm uppercase tracking-wider mt-1">Years</p>
                </div>
                <div>
                  <p className="gold-gradient-text text-4xl font-bold">50K+</p>
                  <p className="text-[#2D2D2D]/50 text-sm uppercase tracking-wider mt-1">Watches Sold</p>
                </div>
                <div>
                  <p className="gold-gradient-text text-4xl font-bold">12</p>
                  <p className="text-[#2D2D2D]/50 text-sm uppercase tracking-wider mt-1">Countries</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section
        ref={valuesRef}
        className="relative w-full bg-[#FAF8F5] overflow-hidden py-20 lg:py-32"
      >
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#003926]/5 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <p className="text-[#1B4D3E] text-sm tracking-[0.4em] uppercase mb-4">What Drives Us</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D]">
              Our Core Values
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <div
                  key={index}
                  className="value-card group relative bg-white rounded-2xl p-8 border border-[#E8E0D4] hover:border-[#003926]/30 transition-all duration-500 hover:shadow-xl hover:shadow-[#003926]/10"
                >
                  <div className="w-14 h-14 rounded-xl bg-[#003926]/10 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
                    <Icon className="w-7 h-7 text-[#003926]" />
                  </div>
                  <h3 className="text-xl font-bold text-[#2D2D2D] mb-3 group-hover:text-[#003926] transition-colors">
                    {value.title}
                  </h3>
                  <p className="text-[#2D2D2D]/60 text-sm leading-relaxed">
                    {value.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Milestones Section */}
      <section
        ref={milestonesRef}
        className="relative w-full bg-[#FAF8F5] overflow-hidden py-20 lg:py-32"
      >
        <div className="absolute inset-0 bg-gradient-to-b from-[#FAF8F5] via-[#F5F0E8] to-[#FAF8F5]" />

        <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <p className="text-[#1B4D3E] text-sm tracking-[0.4em] uppercase mb-4">Our Journey</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D]">
              Key Milestones
            </h2>
          </div>

          <div className="max-w-4xl mx-auto">
            <div className="relative">
              {/* Timeline Line */}
              <div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-[#003926] via-[#003926]/50 to-transparent" />

              {/* Milestones */}
              <div className="space-y-12">
                {milestones.map((milestone, index) => (
                  <div
                    key={index}
                    className={`milestone relative flex items-start gap-8 ${
                      index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                    }`}
                  >
                    {/* Year Badge */}
                    <div className="absolute left-0 md:left-1/2 md:-translate-x-1/2 w-16 h-16 rounded-full bg-[#003926] flex items-center justify-center shadow-lg shadow-[#003926]/20 z-10">
                      <span className="text-white font-bold text-sm">{milestone.year}</span>
                    </div>

                    {/* Content */}
                    <div className={`ml-24 md:ml-0 md:w-[45%] ${
                      index % 2 === 0 ? 'md:pr-12 md:text-right' : 'md:pl-12'
                    }`}>
                      <h3 className="text-xl font-bold text-[#2D2D2D] mb-2">{milestone.title}</h3>
                      <p className="text-[#2D2D2D]/60 text-sm leading-relaxed">{milestone.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section
        ref={teamRef}
        className="relative w-full bg-[#FAF8F5] overflow-hidden py-20 lg:py-32"
      >
        <div className="absolute inset-0">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#003926]/5 rounded-full blur-[120px]" />
        </div>

        <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center mb-16">
            <p className="text-[#1B4D3E] text-sm tracking-[0.4em] uppercase mb-4">The People</p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D]">
              Meet Our Team
            </h2>
          </div>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {team.map((member, index) => (
              <div
                key={index}
                className="team-card group text-center"
              >
                {/* Avatar */}
                <div className="relative w-32 h-32 mx-auto mb-6">
                  <div className="w-full h-full rounded-full bg-[#003926] flex items-center justify-center shadow-lg shadow-[#003926]/20 group-hover:scale-105 transition-transform duration-300">
                    <span className="text-white font-bold text-2xl">{member.initials}</span>
                  </div>
                  <div className="absolute inset-0 rounded-full border-2 border-[#003926]/20 scale-110 group-hover:scale-125 transition-transform duration-300" />
                </div>

                {/* Info */}
                <h3 className="text-lg font-bold text-[#2D2D2D] group-hover:text-[#003926] transition-colors">
                  {member.name}
                </h3>
                <p className="text-[#2D2D2D]/50 text-sm">{member.role}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative w-full bg-[#FAF8F5] overflow-hidden py-20 lg:py-32">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#003926]/10 rounded-full blur-[150px]" />
        </div>

        <div className="relative z-10 w-full px-6 lg:px-16 xl:px-24">
          <div className="text-center max-w-3xl mx-auto">
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-[#2D2D2D] mb-6">
              Be Part of Our
              <span className="gold-gradient-text block mt-2">Story</span>
            </h2>
            <p className="text-[#2D2D2D]/60 text-lg mb-10">
              Join thousands of collectors who have discovered the art of 
              timeless elegance with DSIGNER'S.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <a href="/" className="btn-primary interactive">
                Explore Collections
              </a>
              <a href="/#contact" className="btn-outline interactive">
                Contact Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default About;

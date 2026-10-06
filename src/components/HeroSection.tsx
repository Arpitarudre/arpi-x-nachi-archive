import React, { useMemo } from 'react';
import { ChevronDown, Sparkles } from 'lucide-react';
import { STORY_IMAGES } from '../data/initialData';

interface HeroSectionProps {
  heroImage?: string;
  onEnterClick: () => void;
}

export const HeroSection: React.FC<HeroSectionProps> = ({ heroImage, onEnterClick }) => {
  const currentImg = heroImage || STORY_IMAGES.hero;

  // Calculate days together since 25 October 2024
  const timeTogether = useMemo(() => {
    const startDate = new Date('2024-10-25T00:00:00');
    const now = new Date();
    const diffTime = Math.max(0, now.getTime() - startDate.getTime());
    const diffDays = Math.floor(diffTime / (1000 * 60 * 60 * 24));
    const diffMonths = Math.floor(diffDays / 30.43);
    return { days: diffDays, months: diffMonths };
  }, []);

  return (
    <section id="hero" className="relative min-h-screen flex items-center justify-center overflow-hidden bg-[#121110]">
      {/* Background Image with Cinematic Scrim */}
      <div className="absolute inset-0 z-0">
        <img
          src={currentImg}
          alt="Arpi and Nachi"
          referrerPolicy="no-referrer"
          className="w-full h-full object-cover object-center scale-105 transition-transform duration-1000 ease-out brightness-[0.72] contrast-[1.08]"
        />
        {/* Measured dark scrim gradient */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#121110] via-[#121110]/50 to-[#121110]/30" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#121110]/60 via-transparent to-[#121110]/60" />
      </div>

      {/* Content Container */}
      <div className="relative z-10 max-w-4xl mx-auto px-6 py-28 text-center flex flex-col items-center">
        {/* Unboxed Chapter Sub-Kicker */}
        <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D8CFBC] mb-6">
          <span>Private Archive</span>
          <span aria-hidden="true">·</span>
          <span>Nachi&apos;s 23rd Birthday Edition</span>
        </div>

        {/* Primary Title */}
        <h1 className="font-serif-classic text-5xl sm:text-7xl md:text-8xl lg:text-9xl font-light tracking-tight text-[#FAF8F5] mb-6 leading-none">
          ARPI <span className="text-[#D8CFBC]/60 font-sans font-extralight italic">×</span> NACHI
        </h1>

        {/* Cinematic Subtitle */}
        <p className="font-serif-classic italic text-xl sm:text-2xl md:text-3xl text-[#EAE5DE]/90 max-w-2xl mb-8 leading-relaxed font-light">
          &ldquo;Two years. A thousand little moments. And a whole lot more to come.&rdquo;
        </p>

        {/* Date Stamp & Counter */}
        <div className="flex flex-wrap items-center justify-center gap-3 text-sm md:text-base text-[#D8CFBC] font-display tracking-widest mb-12">
          <span>25.10.2024</span>
          <span className="text-[#72222B]">—</span>
          <span>∞</span>
          <span className="text-[#EAE5DE]/40">|</span>
          <span className="font-sans text-xs tracking-wider uppercase text-[#EAE5DE]/70">
            {timeTogether.days} Days &middot; {timeTogether.months} Months Together
          </span>
        </div>

        {/* Button: ENTER OUR STORY */}
        <button
          onClick={onEnterClick}
          className="group inline-flex items-center gap-3 px-8 py-3.5 bg-[#FAF8F5]/10 hover:bg-[#FAF8F5]/20 backdrop-blur-md border border-[#FAF8F5]/20 text-[#FAF8F5] text-xs uppercase tracking-[0.25em] font-medium rounded transition-all duration-300 hover:scale-[1.02] active:scale-[0.98]"
        >
          <span>Enter Our Story</span>
          <ChevronDown className="w-4 h-4 text-[#D8CFBC] group-hover:translate-y-1 transition-transform" />
        </button>
      </div>

      {/* Subtle bottom scroll hint */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-[10px] uppercase tracking-[0.3em] text-[#EAE5DE]/40 pointer-events-none">
        Scroll to uncover
      </div>
    </section>
  );
};

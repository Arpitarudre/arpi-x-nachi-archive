import React from 'react';
import { Anchor, Sparkles } from 'lucide-react';
import { STORY_IMAGES } from '../data/initialData';

interface YachtSectionProps {
  customImage?: string;
}

export const YachtSection: React.FC<YachtSectionProps> = ({ customImage }) => {
  const imageSrc = customImage || STORY_IMAGES.yacht;

  return (
    <section className="py-24 md:py-36 bg-[#0E1014] text-[#FAF8F5] relative overflow-hidden">
      {/* Ambient background light hint */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#1E293B]/20 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-14">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D8CFBC] mb-3">
            <Anchor className="w-3.5 h-3.5 text-[#72222B]" />
            <span>Chapter IV &middot; Arpi&apos;s Birthday 2025</span>
          </div>
          <h2 className="font-serif-classic text-4xl sm:text-5xl md:text-7xl font-light tracking-tight">
            The Yacht
          </h2>
          <p className="mt-3 font-serif-classic italic text-xl md:text-2xl text-[#D8CFBC]">
            Sunset on the Arabian Waters
          </p>
        </div>

        {/* Large Editorial Panoramic Image Showcase */}
        <div className="relative group rounded-xl overflow-hidden border border-[#FAF8F5]/15 shadow-2xl bg-[#161B22]">
          <img
            src={imageSrc}
            alt="Yacht Sunset - Arpi's Birthday Celebration"
            referrerPolicy="no-referrer"
            className="w-full h-[440px] sm:h-[580px] object-cover object-center brightness-[0.92] contrast-[1.05] group-hover:scale-105 transition-transform duration-1000 ease-out"
          />

          {/* Cinematic Bottom Gradient Scrim */}
          <div className="absolute inset-0 bg-gradient-to-t from-[#0E1014] via-[#0E1014]/40 to-transparent" />

          {/* Prominent Overlay Caption */}
          <div className="absolute bottom-8 sm:bottom-12 left-6 sm:left-12 right-6 sm:right-12 flex flex-col md:flex-row md:items-end justify-between gap-6">
            <div className="max-w-xl">
              <span className="text-xs uppercase tracking-[0.25em] text-[#D8CFBC] font-mono block mb-2">
                The Golden Hour Sail &middot; 2025
              </span>
              <p className="font-serif-classic text-3xl sm:text-4xl md:text-5xl font-light text-[#FAF8F5] leading-tight">
                &ldquo;Best birthday. No competition.&rdquo;
              </p>
            </div>

            <p className="text-xs sm:text-sm text-[#EAE5DE]/80 max-w-sm font-light leading-relaxed">
              You surprised me with an entire yacht into the open sea. As the sky turned into velvet amber and the breeze swept in, everything felt calm, grand, and completely unforgettable.
            </p>
          </div>
        </div>

        {/* Editorial Sub-Notes */}
        <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left border-t border-[#FAF8F5]/10 pt-8">
          <div>
            <div className="text-xs uppercase tracking-widest text-[#D8CFBC] mb-1">The Gesture</div>
            <p className="text-xs text-[#EAE5DE]/70 leading-relaxed font-light">
              Nachi orchestrated every detail in secret, from departure times to our favourite music on the open deck.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-[#D8CFBC] mb-1">The Atmosphere</div>
            <p className="text-xs text-[#EAE5DE]/70 leading-relaxed font-light">
              Golden reflections rippling across the water as Mumbai&apos;s coastline slowly receded into twilight.
            </p>
          </div>
          <div>
            <div className="text-xs uppercase tracking-widest text-[#D8CFBC] mb-1">The Feeling</div>
            <p className="text-xs text-[#EAE5DE]/70 leading-relaxed font-light">
              Standing at the bow holding hands, knowing how cherished and loved he makes me feel every single day.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

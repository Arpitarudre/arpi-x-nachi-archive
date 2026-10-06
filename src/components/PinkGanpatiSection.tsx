import React from 'react';
import { STORY_IMAGES } from '../data/initialData';

interface PinkGanpatiSectionProps {
  customImage?: string;
}

export const PinkGanpatiSection: React.FC<PinkGanpatiSectionProps> = ({ customImage }) => {
  const imageSrc = customImage || STORY_IMAGES.pinkGanpati;

  return (
    <section className="py-28 md:py-44 bg-[#141212] relative overflow-hidden">
      <div className="max-w-5xl mx-auto px-6">
        {/* Minimalist Header */}
        <div className="text-center mb-12">
          <span className="text-xs uppercase tracking-[0.35em] text-[#D8CFBC]/80 font-mono block mb-3">
            Chapter V &middot; Ganpati
          </span>
          <h2 className="font-serif-classic text-5xl sm:text-6xl md:text-7xl font-extralight text-[#FAF8F5] tracking-tight">
            Pink
          </h2>
        </div>

        {/* Dominant Fine-Art Photo Display */}
        <div className="flex flex-col items-center">
          <div className="relative max-w-xl w-full group">
            {/* Fine Art Matte Frame */}
            <div className="p-3 sm:p-5 bg-[#1C1A19] border border-[#FAF8F5]/10 rounded shadow-2xl">
              <div className="overflow-hidden rounded bg-[#100E0E]">
                <img
                  src={imageSrc}
                  alt="Ganpati - Both Wearing Pink"
                  referrerPolicy="no-referrer"
                  className="w-full max-h-[640px] object-cover object-center brightness-[0.95] contrast-[1.03] group-hover:scale-[1.01] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Minimal caption plate under photo */}
              <div className="pt-4 pb-2 px-1 flex items-center justify-between text-[11px] uppercase tracking-widest text-[#D8CFBC]/60 font-mono">
                <span>Ganpati Utsav &middot; Festive Homecoming</span>
                <span>Unplanned Harmony</span>
              </div>
            </div>
          </div>

          {/* Central Quote Dominating with Quiet Grace */}
          <div className="mt-12 text-center max-w-2xl px-4">
            <blockquote className="font-serif-classic italic text-2xl sm:text-3xl md:text-4xl text-[#FAF8F5] font-light leading-relaxed">
              &ldquo;He came home during Ganpati. We were both wearing pink. Somehow that became one of my favourite pictures of us.&rdquo;
            </blockquote>
            <p className="mt-4 text-xs uppercase tracking-[0.25em] text-[#D8CFBC]/70 font-sans">
              No coordination &middot; Just instinct
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

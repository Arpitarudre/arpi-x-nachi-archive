import React from 'react';
import { STORY_IMAGES } from '../data/initialData';

interface BeginningSectionProps {
  customImage?: string;
}

export const BeginningSection: React.FC<BeginningSectionProps> = ({ customImage }) => {
  const imageSrc = customImage || STORY_IMAGES.barstockexchange;

  return (
    <section id="beginning" className="py-24 md:py-36 bg-[#161514] border-t border-[#FAF8F5]/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Editorial Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="text-xs uppercase tracking-[0.3em] text-[#D8CFBC] mb-3">
            Chapter I &middot; 30 September 2024
          </div>
          <h2 className="font-serif-classic text-4xl sm:text-5xl md:text-6xl font-light text-[#FAF8F5] tracking-tight">
            The Beginning
          </h2>
          <p className="mt-4 font-serif-classic italic text-xl md:text-2xl text-[#D8CFBC]/90 max-w-xl">
            &ldquo;Somewhere along the way, two people became an us.&rdquo;
          </p>
        </div>

        {/* Editorial 2-Column Story Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Photo Column */}
          <div className="lg:col-span-7">
            <div className="relative group">
              <div className="overflow-hidden rounded-lg bg-[#22201E] border border-[#FAF8F5]/10 shadow-2xl">
                <img
                  src={imageSrc}
                  alt="First Date - By the Stock Exchange"
                  referrerPolicy="no-referrer"
                  className="w-full h-[420px] sm:h-[500px] object-cover object-center brightness-[0.92] contrast-[1.05] group-hover:scale-[1.02] transition-transform duration-700 ease-out"
                />
              </div>

              {/* Photo Caption Label */}
              <div className="mt-3 flex items-center justify-between text-xs text-[#D8CFBC]/70 font-sans tracking-wider">
                <span>The First Date &middot; Stock Exchange</span>
                <span>25.10.2024</span>
              </div>
            </div>
          </div>

          {/* Story Prose Column */}
          <div className="lg:col-span-5 flex flex-col justify-center space-y-6">
            <div className="border-l-2 border-[#72222B] pl-5">
              <span className="text-xs uppercase tracking-[0.25em] text-[#72222B] font-semibold">
                First Date &middot; Mumbai
              </span>
              <h3 className="font-serif-classic text-3xl sm:text-4xl text-[#FAF8F5] mt-1">
                By the Stock Exchange
              </h3>
            </div>

            <p className="text-sm md:text-base leading-relaxed text-[#EAE5DE]/80 font-light">
              It started at the Bar Stock Exchange in CBD Belapur, Navi Mumbai. 
            </p>

            <p className="text-sm md:text-base leading-relaxed text-[#EAE5DE]/80 font-light">
              Nachi handed Arpi flowers for the very first time—a simple, timeless gesture that instantly melted the awkwardness of a first date into sweet laughter and easy conversation.
            </p>

            <div className="pt-4 border-t border-[#FAF8F5]/10 text-xs text-[#D8CFBC]/80 leading-relaxed font-sans">
              <p className="italic">
                &ldquo;You held those flowers with that shy, unforgettable grin.After drinks and a little time there, we went for a walk along Palm Beach Road. We walked, talked about everything and nothing, laughed, and slowly got comfortable with each other. It was simple, unplanned, and easy — just two people enjoying each other’s company, not knowing that this ordinary evening was going to become the beginning of our story.
                 Neither of us knew then that this date would be the day the rest of our lives began.&rdquo;
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

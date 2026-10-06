import React from 'react';
import { Car, Utensils, Beer, Sparkles, Navigation } from 'lucide-react';
import { STORY_IMAGES } from '../data/initialData';

interface UnplannedLonavalaProps {
  customImage?: string;
}

export const UnplannedLonavala: React.FC<UnplannedLonavalaProps> = ({ customImage }) => {
  const imageSrc = customImage || STORY_IMAGES.lonavala;

  return (
    <section className="py-24 md:py-36 bg-[#161514] border-t border-[#FAF8F5]/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Editorial Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D8CFBC] mb-3">
            <Car className="w-3.5 h-3.5 text-[#72222B]" />
            <span>Chapter III &middot; Spontaneous Anniversary Escape</span>
          </div>
          <h2 className="font-serif-classic text-4xl sm:text-5xl md:text-6xl font-light text-[#FAF8F5] tracking-tight">
            The Day That Wasn&apos;t The Plan
          </h2>
          <p className="mt-3 font-serif-classic italic text-xl md:text-2xl text-[#D8CFBC]/90">
            Lonavala &middot; Turning Work Delays into Our Favourite Road Trip
          </p>
        </div>

        {/* 2-Column Story & Scrapbook Display */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Left Narrative */}
          <div className="lg:col-span-6 space-y-6">
            <div className="border-l-2 border-[#72222B] pl-5">
              <span className="text-xs uppercase tracking-[0.25em] text-[#72222B] font-semibold">
                Just Another Day &middot; Lonavala
              </span>
              <h3 className="font-serif-classic text-3xl sm:text-4xl text-[#FAF8F5] mt-1">
                A Borrowed Car &amp; Open Ghats
              </h3>
            </div>

            <p className="text-sm md:text-base leading-relaxed text-[#EAE5DE]/85 font-light">
              For our 6 month anniversary, nothing went by the book. Nachi had to work on the exact date, and our original plan to spend a slow, orderly celebration in Mumbai evaporated into thin air.
            </p>

            <p className="text-sm md:text-base leading-relaxed text-[#EAE5DE]/85 font-light">
              Instead of rescheduling, we threw the itinerary out the window. We borrowed a friend&apos;s car on a whim, hit the expressway, and drove up into the misty green twists of the Western Ghats straight toward <strong className="text-[#FAF8F5] font-medium">Lonavala</strong>.
            </p>

            {/* Scrapbook Itinerary Tag Matrix */}
            <div className="grid grid-cols-2 gap-4 pt-4">
              <div className="p-3.5 rounded bg-[#1F1D1B] border border-[#FAF8F5]/10">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D8CFBC] mb-1">
                  <Utensils className="w-3.5 h-3.5 text-[#72222B]" />
                  <span>Lola Cafe &amp; Marky&apos;s</span>
                </div>
                <p className="text-xs text-[#EAE5DE]/70 font-light">
                  Hot crusts, bubbling artisan pizza, and pure comfort after hours on the road.
                </p>
              </div>

              <div className="p-3.5 rounded bg-[#1F1D1B] border border-[#FAF8F5]/10">
                <div className="flex items-center gap-2 text-xs uppercase tracking-wider text-[#D8CFBC] mb-1">
                  <Beer className="w-3.5 h-3.5 text-[#72222B]" />
                  <span>Cold Beers &amp; Laughter</span>
                </div>
                <p className="text-xs text-[#EAE5DE]/70 font-light">
                  Toasting to missed dates, accidental detours, and celebrating life on our own terms.
                </p>
              </div>
            </div>

            <div className="pt-2">
              <p className="text-xs text-[#D8CFBC] font-serif-classic italic text-base">
                &ldquo;Proof that the best memories we have are the ones we never put on a calendar.&rdquo;
              </p>
            </div>
          </div>

          {/* Right Visual Polaroid Card */}
          <div className="lg:col-span-6 flex justify-center">
            <div className="relative group max-w-md w-full">
              {/* Polaroid-styled wrapper */}
              <div className="bg-[#EAE5DE] p-4 sm:p-5 rounded shadow-2xl text-[#121110] transform rotate-1 group-hover:rotate-0 transition-transform duration-500">
                <div className="overflow-hidden rounded bg-[#121110]">
                  <img
                    src={imageSrc}
                    alt="Lonavala Road Trip - Pizza and Beer"
                    referrerPolicy="no-referrer"
                    className="w-full h-80 sm:h-96 object-cover object-center group-hover:scale-105 transition-transform duration-700"
                  />
                </div>
                <div className="pt-4 pb-1 text-center font-serif-classic">
                  <p className="text-base sm:text-lg font-medium tracking-tight text-[#161514]">
                    Lonavala &middot; Lola Cafe &amp; Markiez &apos;s Pizza
                  </p>
                  <p className="text-xs text-[#5C5752] font-sans tracking-widest uppercase mt-0.5">
                    Spontaneous 6-Month Anniversary Road Trip
                  </p>
                </div>
              </div>

              {/* Decorative stamp on top corner */}
              <div className="absolute -top-3 -right-3 bg-[#72222B] text-[#FAF8F5] px-3 py-1 text-[10px] uppercase font-mono tracking-widest rounded shadow-md transform rotate-6">
                DETOUR APPROVED
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

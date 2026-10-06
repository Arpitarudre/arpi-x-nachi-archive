import React from 'react';
import { Compass, MapPin, Wind, Sun, Waves } from 'lucide-react';
import { STORY_IMAGES } from '../data/initialData';

interface AdventureUttarakhandProps {
  customImage?: string;
}

export const AdventureUttarakhand: React.FC<AdventureUttarakhandProps> = ({ customImage }) => {
  const imageSrc = customImage || STORY_IMAGES.uttarakhand;

  return (
    <section id="adventures" className="py-24 md:py-36 bg-[#121110] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Travel Journal Header Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between border-b border-[#FAF8F5]/10 pb-8 mb-12">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D8CFBC] mb-2">
              <Compass className="w-3.5 h-3.5 text-[#72222B]" />
              <span>Chapter II &middot; First Expedition</span>
            </div>
            <h2 className="font-serif-classic text-4xl sm:text-5xl md:text-6xl font-light text-[#FAF8F5] tracking-tight">
              Uttarakhand
            </h2>
            <p className="font-serif-classic italic text-xl text-[#D8CFBC] mt-2">
              December 2024 &middot; Into the Himalayan Winter
            </p>
          </div>

          <div className="mt-6 md:mt-0 text-right">
            <div className="font-mono text-xs text-[#EAE5DE]/60 tracking-wider">
              30.0869° N, 78.2676° E
            </div>
            <div className="text-xs uppercase tracking-widest text-[#D8CFBC]/80 mt-1">
              Elevation: 1,950m &middot; Two Months Dating
            </div>
          </div>
        </div>

        {/* Cinematic Travel Journal Feature Image */}
        <div className="relative mb-14 group">
          <div className="overflow-hidden rounded-lg border border-[#FAF8F5]/10 bg-[#1A1918] shadow-2xl">
            <img
              src={imageSrc}
              alt="Uttarakhand Winter Mountains"
              referrerPolicy="no-referrer"
              className="w-full h-[400px] md:h-[540px] object-cover object-center brightness-[0.88] contrast-[1.06] group-hover:scale-[1.015] transition-transform duration-700"
            />
          </div>

          {/* Floating Travel Stamp Box */}
          <div className="absolute top-6 right-6 bg-[#121110]/85 backdrop-blur-md border border-[#FAF8F5]/15 p-4 rounded text-left hidden sm:block max-w-xs shadow-lg">
            <div className="text-[10px] uppercase tracking-widest text-[#D8CFBC] mb-1 font-mono">
              Travel Log Entry #01
            </div>
            <p className="text-xs text-[#EAE5DE]/90 font-light leading-relaxed">
              &ldquo;Barely two months into dating, we packed our bags for the north. That was when we realized we were made for the open road together.&rdquo;
            </p>
          </div>
        </div>

        {/* 4 Travel Highlights Editorial Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          <div className="border-t border-[#FAF8F5]/10 pt-5">
            <div className="flex items-center gap-2 text-[#D8CFBC] mb-2">
              <Sun className="w-4 h-4 text-[#72222B]" />
              <h4 className="font-serif-classic text-xl text-[#FAF8F5]">Watching Sunsets</h4>
            </div>
            <p className="text-xs leading-relaxed text-[#EAE5DE]/75 font-light">
              Wrapping up in thick woollens, standing shoulder to shoulder on high mountain ridges as the winter sun dipped behind snowy Himalayan peaks.
            </p>
          </div>

          <div className="border-t border-[#FAF8F5]/10 pt-5">
            <div className="flex items-center gap-2 text-[#D8CFBC] mb-2">
              <Waves className="w-4 h-4 text-[#72222B]" />
              <h4 className="font-serif-classic text-xl text-[#FAF8F5]">River Rafting</h4>
            </div>
            <p className="text-xs leading-relaxed text-[#EAE5DE]/75 font-light">
              Freezing turquoise river rapids, white-knuckle adrenaline, splashing cold water, and laughing hysterically every time the raft plunged.
            </p>
          </div>

          <div className="border-t border-[#FAF8F5]/10 pt-5">
            <div className="flex items-center gap-2 text-[#D8CFBC] mb-2">
              <Wind className="w-4 h-4 text-[#72222B]" />
              <h4 className="font-serif-classic text-xl text-[#FAF8F5]">Every Single Moment</h4>
            </div>
            <p className="text-xs leading-relaxed text-[#EAE5DE]/75 font-light">
              Spending 24 hours a day together with zero friction. From 6 AM quiet breakfasts to midnight walks in the mountain chill, we never needed space.
            </p>
          </div>

          <div className="border-t border-[#FAF8F5]/10 pt-5">
            <div className="flex items-center gap-2 text-[#D8CFBC] mb-2">
              <MapPin className="w-4 h-4 text-[#72222B]" />
              <h4 className="font-serif-classic text-xl text-[#FAF8F5]">First Big Memories</h4>
            </div>
            <p className="text-xs leading-relaxed text-[#EAE5DE]/75 font-light">
              Discovering that traveling with you felt effortless. No stress, no arguments—just pure curiosity, curiosity, and warmth.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

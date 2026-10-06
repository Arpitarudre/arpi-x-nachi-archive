import React, { useState } from 'react';
import { Sparkles, MessageCircle, HeartHandshake, Smile, RefreshCw } from 'lucide-react';

interface QuirkItem {
  id: string;
  statement: string;
  subtext: string;
  icon: React.ComponentType<{ className?: string }>;
  tag: string;
}

const QUIRKS: QuirkItem[] = [
  {
    id: "anything",
    statement: "We can do absolutely anything in front of each other.",
    subtext: "No facades, no rehearsed elegance. Unfiltered, unguarded, and completely true.",
    icon: HeartHandshake,
    tag: "Radical Honesty"
  },
  {
    id: "comfortable",
    statement: "Extremely, dangerously comfortable together.",
    subtext: "The kind of comfort where hours of total silence feel as engaging as a deep conversation.",
    icon: Smile,
    tag: "Zero Armor"
  },
  {
    id: "copy-nachi",
    statement: "Nachi copies what Arpi says.",
    subtext: "Adopted within 24 hours. Delivered with a completely innocent deadpan expression.",
    icon: MessageCircle,
    tag: "Echo #01"
  },
  {
    id: "copy-arpi",
    statement: "Arpi copies what Nachi says.",
    subtext: "Absorbing his mannerisms and catching herself using them five minutes later.",
    icon: RefreshCw,
    tag: "Echo #02"
  },
  {
    id: "who-started",
    statement: "Neither of us knows who started it.",
    subtext: "A mutual linguistic robbery. At this point, it's just our proprietary couple vocabulary.",
    icon: Sparkles,
    tag: "The Mystery"
  },
  {
    id: "completely-stupid",
    statement: "We can be completely stupid together.",
    subtext: "Uncontrollable belly laughter over jokes that would make zero sense to anyone else on earth.",
    icon: Smile,
    tag: "Pure Comedy"
  },
  {
    id: "be-themselves",
    statement: "We can completely be ourselves around each other.",
    subtext: "Finding the one person where you never have to shrink, hide, or pretend.",
    icon: HeartHandshake,
    tag: "Home"
  }
];

export const QuirksSection: React.FC = () => {
  const [activeQuirk, setActiveQuirk] = useState<string | null>(null);

  return (
    <section className="py-24 md:py-36 bg-[#161514] border-t border-[#FAF8F5]/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <span className="text-xs uppercase tracking-[0.3em] text-[#D8CFBC] font-mono mb-3">
            Chapter VI &middot; The Unspoken Dynamics
          </span>
          <h2 className="font-serif-classic text-4xl sm:text-5xl md:text-6xl font-light text-[#FAF8F5] tracking-tight">
            Things That Make Us, Us
          </h2>
          <p className="mt-3 font-serif-classic italic text-lg sm:text-xl text-[#D8CFBC]/90 max-w-xl">
            A private catalog of our daily quirks, mutual mimicry, and shared foolishness.
          </p>
        </div>

        {/* Staggered Editorial Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {QUIRKS.map((item, index) => {
            const Icon = item.icon;
            const isSelected = activeQuirk === item.id;
            return (
              <div
                key={item.id}
                onClick={() => setActiveQuirk(isSelected ? null : item.id)}
                className={`p-6 sm:p-8 rounded-lg cursor-pointer transition-all duration-300 border ${
                  isSelected
                    ? 'bg-[#22201D] border-[#72222B] shadow-xl translate-y-[-4px]'
                    : 'bg-[#1A1918] border-[#FAF8F5]/8 hover:border-[#FAF8F5]/20 hover:bg-[#1E1C1A]'
                } ${index === 6 ? 'md:col-span-2 lg:col-span-3 lg:max-w-xl lg:mx-auto' : ''}`}
              >
                <div className="flex items-center justify-between text-xs text-[#D8CFBC]/70 font-mono mb-4">
                  <span className="uppercase tracking-widest">{item.tag}</span>
                  <span className="text-[#72222B] font-semibold">0{index + 1}</span>
                </div>

                <div className="mb-4">
                  <Icon className="w-5 h-5 text-[#D8CFBC] mb-3" />
                  <h3 className="font-serif-classic text-2xl text-[#FAF8F5] leading-snug font-light">
                    {item.statement}
                  </h3>
                </div>

                <p className="text-xs sm:text-sm text-[#EAE5DE]/70 font-light leading-relaxed">
                  {item.subtext}
                </p>
              </div>
            );
          })}
        </div>

        {/* Editorial Footnote Banner */}
        <div className="mt-14 p-6 rounded bg-[#1F1D1B] border border-[#FAF8F5]/10 text-center max-w-2xl mx-auto">
          <p className="font-serif-classic italic text-lg text-[#D8CFBC]">
            &ldquo;Loving someone is great. Being completely ridiculous with them is divine.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};

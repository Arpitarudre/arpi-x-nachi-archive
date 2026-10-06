import React, { useState } from 'react';
import { Compass, CheckCircle2, Circle } from 'lucide-react';
import { FutureDream } from '../types';

interface NextChapterProps {
  dreams: FutureDream[];
}

export const NextChapterSection: React.FC<NextChapterProps> = ({ dreams }) => {
  const [completedIds, setCompletedIds] = useState<string[]>([]);

  const toggleDream = (id: string) => {
    setCompletedIds((prev) =>
      prev.includes(id) ? prev.filter((item) => item !== id) : [...prev, id]
    );
  };

  return (
    <section id="future" className="py-24 md:py-36 bg-[#161514] border-t border-[#FAF8F5]/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col items-center text-center mb-16">
          <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D8CFBC] mb-3 font-mono">
            <Compass className="w-3.5 h-3.5 text-[#72222B]" />
            <span>Chapter X &middot; The Horizon</span>
          </div>
          <h2 className="font-serif-classic text-4xl sm:text-5xl md:text-6xl font-light text-[#FAF8F5] tracking-tight">
            Next Chapter
          </h2>
          <p className="mt-3 font-serif-classic italic text-xl md:text-2xl text-[#D8CFBC]/90 max-w-2xl">
            Everything we are building towards, dreaming about, and promising each other.
          </p>
        </div>

        {/* 7 Future Dreams Vision Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dreams.map((dream, idx) => {
            const isCompleted = completedIds.includes(dream.id);
            return (
              <div
                key={dream.id}
                onClick={() => toggleDream(dream.id)}
                className={`p-6 sm:p-7 rounded-lg cursor-pointer transition-all duration-300 border flex flex-col justify-between ${
                  isCompleted
                    ? 'bg-[#1E1C1A] border-[#72222B] opacity-90'
                    : 'bg-[#1B1918] border-[#FAF8F5]/10 hover:border-[#D8CFBC]/30 hover:bg-[#201E1C]'
                } ${idx === 6 ? 'md:col-span-2 lg:col-span-1' : ''}`}
              >
                <div>
                  <div className="flex items-center justify-between mb-4">
                    <span className="text-2xl" role="img" aria-label={dream.title}>
                      {dream.emoji}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase tracking-widest text-[#D8CFBC]/60 font-mono">
                        {dream.category}
                      </span>
                      {isCompleted ? (
                        <CheckCircle2 className="w-4 h-4 text-[#72222B]" />
                      ) : (
                        <Circle className="w-4 h-4 text-[#EAE5DE]/20 hover:text-[#D8CFBC]" />
                      )}
                    </div>
                  </div>

                  <h3 className="font-serif-classic text-xl sm:text-2xl text-[#FAF8F5] mb-2 font-light leading-snug">
                    {dream.title}
                  </h3>

                  <p className="text-xs sm:text-sm text-[#EAE5DE]/75 leading-relaxed font-light">
                    {dream.description}
                  </p>
                </div>

                <div className="mt-6 pt-3 border-t border-[#FAF8F5]/5 text-[10px] uppercase tracking-widest text-[#D8CFBC]/50 font-mono flex items-center justify-between">
                  <span>Vision 0{idx + 1}</span>
                  <span>{isCompleted ? "Marked as Achieved" : "Tap to mark milestone"}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Cinematic Promise Banner */}
        <div className="mt-16 text-center max-w-2xl mx-auto border-t border-[#FAF8F5]/10 pt-10">
          <p className="font-serif-classic italic text-xl sm:text-2xl text-[#FAF8F5]">
            &ldquo;We haven&apos;t seen half the world yet, but wherever we go, I know we belong together.&rdquo;
          </p>
        </div>
      </div>
    </section>
  );
};

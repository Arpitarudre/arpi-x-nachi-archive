import React, { useState } from 'react';
import { RotateCcw, Edit3, Check } from 'lucide-react';
import { INITIAL_BIRTHDAY_LETTER } from '../data/initialData';

interface FinalCreditsProps {
  onScrollToTop: () => void;
}

export const FinalCreditsSection: React.FC<FinalCreditsProps> = ({ onScrollToTop }) => {
  const [letter, setLetter] = useState(INITIAL_BIRTHDAY_LETTER);
  const [isEditing, setIsEditing] = useState(false);
  const [editBody, setEditBody] = useState(
    `${letter.paragraph1}\n\n${letter.paragraph2}\n\n${letter.paragraph3}`
  );

  const saveLetter = () => {
    const parts = editBody.split('\n\n').filter(Boolean);
    setLetter({
      ...letter,
      paragraph1: parts[0] || letter.paragraph1,
      paragraph2: parts[1] || letter.paragraph2,
      paragraph3: parts[2] || letter.paragraph3
    });
    setIsEditing(false);
  };

  return (
    <section className="py-28 md:py-48 bg-[#0D0C0B] text-[#FAF8F5] relative overflow-hidden">
      <div className="max-w-4xl mx-auto px-6">
        {/* Personal Birthday Letter from Arpi */}
        <div className="mb-32 bg-[#141312] border border-[#FAF8F5]/10 rounded-xl p-8 sm:p-14 shadow-2xl relative">
          <div className="flex items-center justify-between border-b border-[#FAF8F5]/10 pb-5 mb-8">
            <span className="text-xs uppercase tracking-[0.25em] text-[#D8CFBC] font-mono">
              A Birthday Letter &middot; For Nachi at 23
            </span>
            <div className="flex items-center gap-3">
              {!isEditing ? (
                <button
                  onClick={() => setIsEditing(true)}
                  className="flex items-center gap-1.5 text-xs text-[#D8CFBC]/70 hover:text-[#FAF8F5] transition-colors"
                >
                  <Edit3 className="w-3.5 h-3.5" />
                  <span>Edit Letter</span>
                </button>
              ) : (
                <button
                  onClick={saveLetter}
                  className="flex items-center gap-1.5 text-xs text-[#72222B] font-semibold hover:underline"
                >
                  <Check className="w-3.5 h-3.5" />
                  <span>Save Letter</span>
                </button>
              )}
            </div>
          </div>

          <h3 className="font-serif-classic text-2xl sm:text-3xl text-[#FAF8F5] mb-6 font-light">
            {letter.salutation}
          </h3>

          {isEditing ? (
            <textarea
              value={editBody}
              onChange={(e) => setEditBody(e.target.value)}
              rows={12}
              className="w-full bg-[#0D0C0B] border border-[#FAF8F5]/20 rounded p-4 text-sm font-serif-classic leading-relaxed text-[#FAF8F5] focus:outline-none focus:border-[#72222B]"
            />
          ) : (
            <div className="space-y-6 font-serif-classic text-base sm:text-lg leading-relaxed text-[#EAE5DE]/85 font-light">
              <p>{letter.paragraph1}</p>
              <p>{letter.paragraph2}</p>
              <p>{letter.paragraph3}</p>
            </div>
          )}

          <div className="mt-10 pt-6 border-t border-[#FAF8F5]/10 flex flex-col sm:flex-row sm:items-end justify-between gap-4">
            <div>
              <p className="font-serif-classic italic text-xl text-[#D8CFBC]">
                {letter.closing}
              </p>
              <p className="font-serif-classic text-lg text-[#FAF8F5] mt-1 whitespace-pre-line">
                {letter.signature}
              </p>
            </div>
            <div className="font-display text-sm tracking-widest text-[#72222B]">
              {letter.dateBadge}
            </div>
          </div>
        </div>

        {/* Cinematic Movie End Credits Block */}
        <div className="text-center space-y-12">
          {/* Subtle credits roll aesthetic */}
          <div className="space-y-4 text-xs uppercase tracking-[0.25em] text-[#D8CFBC]/60 font-mono">
            <div>
              <span className="text-[#EAE5DE]/40">Written By</span>
              <p className="text-sm font-serif-classic text-[#FAF8F5] normal-case tracking-normal mt-0.5">
                Two people who found each other in Mumbai
              </p>
            </div>
            <div className="pt-2">
              <span className="text-[#EAE5DE]/40">Soundtrack</span>
              <p className="text-sm font-serif-classic text-[#FAF8F5] normal-case tracking-normal mt-0.5">
                Late night conversations &amp; shared playlists
              </p>
            </div>
            <div className="pt-2">
              <span className="text-[#EAE5DE]/40">Production Notes</span>
              <p className="text-sm font-serif-classic text-[#FAF8F5] normal-case tracking-normal mt-0.5">
                October 25, 2024 to present day
              </p>
            </div>
          </div>

          <div className="pt-8">
            <h2 className="font-serif-classic text-5xl sm:text-6xl md:text-8xl font-light text-[#FAF8F5] tracking-tight">
              TO BE CONTINUED...
            </h2>
            <div className="mt-4 font-display text-lg sm:text-xl tracking-widest text-[#D8CFBC]">
              25.10.2024 &mdash; &infin;
            </div>
          </div>

          {/* START FROM THE BEGINNING */}
          <div className="pt-8 pb-12">
            <button
              onClick={onScrollToTop}
              className="inline-flex items-center gap-2 px-8 py-3.5 bg-[#FAF8F5]/10 hover:bg-[#FAF8F5]/20 border border-[#FAF8F5]/20 text-[#FAF8F5] text-xs uppercase tracking-[0.25em] font-medium rounded transition-all duration-300 hover:scale-105"
            >
              <RotateCcw className="w-4 h-4 text-[#D8CFBC]" />
              <span>Start From The Beginning ↺</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

import React, { useState } from 'react';
import { Mail, X, Edit3, Check, RotateCcw } from 'lucide-react';
import { OpenWhenLetter } from '../types';

interface OpenWhenSectionProps {
  letters: OpenWhenLetter[];
  onUpdateLetters: (letters: OpenWhenLetter[]) => void;
  onResetLetters: () => void;
}

export const OpenWhenSection: React.FC<OpenWhenSectionProps> = ({
  letters,
  onUpdateLetters,
  onResetLetters
}) => {
  const [selectedLetter, setSelectedLetter] = useState<OpenWhenLetter | null>(null);
  const [isEditing, setIsEditing] = useState(false);
  const [editText, setEditText] = useState('');

  const openEnvelope = (letter: OpenWhenLetter) => {
    setSelectedLetter(letter);
    setEditText(letter.letter);
    setIsEditing(false);
  };

  const saveLetter = () => {
    if (!selectedLetter) return;
    const updated = letters.map((l) =>
      l.id === selectedLetter.id ? { ...l, letter: editText } : l
    );
    onUpdateLetters(updated);
    setSelectedLetter({ ...selectedLetter, letter: editText });
    setIsEditing(false);
  };

  return (
    <section id="letters" className="py-24 md:py-36 bg-[#121110] relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 border-b border-[#FAF8F5]/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D8CFBC] mb-2 font-mono">
              <Mail className="w-3.5 h-3.5 text-[#72222B]" />
              <span>Chapter IX &middot; Unopened Sealed Letters</span>
            </div>
            <h2 className="font-serif-classic text-4xl sm:text-5xl md:text-6xl font-light text-[#FAF8F5] tracking-tight">
              Open When...
            </h2>
            <p className="mt-2 font-serif-classic italic text-lg sm:text-xl text-[#D8CFBC]/90">
              Words preserved for the exact moments you might need them most.
            </p>
          </div>

          <div className="mt-6 md:mt-0">
            <button
              onClick={onResetLetters}
              title="Reset all letter drafts"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs text-[#EAE5DE]/60 hover:text-[#FAF8F5] border border-[#FAF8F5]/10 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Letters</span>
            </button>
          </div>
        </div>

        {/* 6 Digital Envelopes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {letters.map((letter) => (
            <div
              key={letter.id}
              onClick={() => openEnvelope(letter)}
              className="group cursor-pointer relative p-7 rounded-lg bg-[#181716] border border-[#FAF8F5]/10 hover:border-[#D8CFBC]/40 shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1.5"
            >
              {/* Envelope Flap Simulation */}
              <div className="relative mb-6 pb-6 border-b border-[#FAF8F5]/10">
                <div className="flex items-center justify-between">
                  <span className="text-[10px] uppercase tracking-widest text-[#D8CFBC] font-mono">
                    Airmail / Sealed
                  </span>
                  {/* Burgundy Wax Seal Badge */}
                  <div className="w-7 h-7 rounded-full bg-[#72222B] flex items-center justify-center text-[#FAF8F5] text-xs font-serif-classic font-bold shadow-md group-hover:scale-110 transition-transform">
                    A
                  </div>
                </div>
              </div>

              {/* Envelope Title */}
              <h3 className="font-serif-classic text-2xl text-[#FAF8F5] group-hover:text-[#D8CFBC] transition-colors leading-snug mb-3">
                {letter.title}
              </h3>

              <p className="text-xs text-[#EAE5DE]/70 font-light leading-relaxed mb-6">
                {letter.occasion}
              </p>

              <div className="flex items-center justify-between text-[11px] text-[#D8CFBC]/80 font-mono pt-3 border-t border-[#FAF8F5]/5">
                <span>Click to break seal</span>
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Unfolded Letter Modal */}
      {selectedLetter && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 backdrop-blur-md p-4 sm:p-6 overflow-y-auto">
          <div className="relative max-w-2xl w-full bg-[#FAF8F5] text-[#161514] p-8 sm:p-12 rounded-lg shadow-2xl my-8 border border-[#EAE5DE]">
            {/* Top Controls */}
            <div className="flex items-center justify-between border-b border-[#EAE5DE] pb-4 mb-6">
              <div className="flex items-center gap-2">
                <div className="w-6 h-6 rounded-full bg-[#72222B] text-[#FAF8F5] flex items-center justify-center text-xs font-serif-classic font-bold">
                  A
                </div>
                <span className="text-xs uppercase tracking-widest font-mono text-[#5C5752]">
                  {selectedLetter.date}
                </span>
              </div>

              <div className="flex items-center gap-3">
                {!isEditing ? (
                  <button
                    onClick={() => setIsEditing(true)}
                    className="flex items-center gap-1 text-xs text-[#5C5752] hover:text-[#161514] transition-colors"
                    title="Edit letter text"
                  >
                    <Edit3 className="w-3.5 h-3.5" />
                    <span>Edit</span>
                  </button>
                ) : (
                  <button
                    onClick={saveLetter}
                    className="flex items-center gap-1 text-xs text-[#72222B] font-semibold hover:underline"
                  >
                    <Check className="w-3.5 h-3.5" />
                    <span>Save</span>
                  </button>
                )}
                <button
                  onClick={() => setSelectedLetter(null)}
                  className="p-1.5 rounded-full hover:bg-[#EAE5DE] text-[#5C5752] transition-colors"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>
            </div>

            {/* Letter Title */}
            <h3 className="font-serif-classic text-3xl sm:text-4xl text-[#121110] mb-2 font-light">
              {selectedLetter.title}
            </h3>
            <p className="text-xs font-sans text-[#72222B] tracking-wider uppercase mb-8">
              {selectedLetter.occasion}
            </p>

            {/* Letter Prose */}
            {isEditing ? (
              <textarea
                value={editText}
                onChange={(e) => setEditText(e.target.value)}
                rows={12}
                className="w-full bg-[#F5F2EB] border border-[#D8CFBC] rounded p-4 text-sm font-serif-classic leading-relaxed text-[#161514] focus:outline-none focus:border-[#72222B]"
              />
            ) : (
              <div className="font-serif-classic text-base sm:text-lg leading-relaxed text-[#2C2A28] whitespace-pre-line space-y-4">
                {selectedLetter.letter}
              </div>
            )}

            {/* Letter Signature */}
            <div className="mt-8 pt-6 border-t border-[#EAE5DE] flex items-center justify-between">
              <span className="font-serif-classic italic text-lg text-[#72222B]">
                {selectedLetter.senderNote}
              </span>
              <button
                onClick={() => setSelectedLetter(null)}
                className="px-4 py-1.5 bg-[#161514] hover:bg-[#2C2A28] text-[#FAF8F5] text-xs uppercase tracking-widest font-medium rounded transition-colors"
              >
                Close Letter
              </button>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};

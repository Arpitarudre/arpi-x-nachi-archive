import React, { useState } from 'react';
import { Sparkles, Edit3, Check, RotateCcw, Heart } from 'lucide-react';
import { NachiTrait } from '../types';

interface TwentyThreeThingsProps {
  traits: NachiTrait[];
  onUpdateTraits: (updated: NachiTrait[]) => void;
  onResetTraits: () => void;
}

export const TwentyThreeThings: React.FC<TwentyThreeThingsProps> = ({
  traits,
  onUpdateTraits,
  onResetTraits
}) => {
  const [editingId, setEditingId] = useState<number | null>(null);
  const [editTitle, setEditTitle] = useState('');
  const [editDescription, setEditDescription] = useState('');
  const [activeCategory, setActiveCategory] = useState<string>('All');

  const categories = ['All', 'Personality', 'Habits', 'Humour', 'Photography', 'Adventure', 'Little Things'];

  const filteredTraits = traits.filter(
    (t) => activeCategory === 'All' || t.category === activeCategory
  );

  const startEditing = (trait: NachiTrait) => {
    setEditingId(trait.id);
    setEditTitle(trait.title);
    setEditDescription(trait.description);
  };

  const saveEdit = (id: number) => {
    const updated = traits.map((t) =>
      t.id === id ? { ...t, title: editTitle, description: editDescription } : t
    );
    onUpdateTraits(updated);
    setEditingId(null);
  };

  return (
    <section id="traits" className="py-24 md:py-36 bg-[#161514] border-t border-[#FAF8F5]/5 relative">
      <div className="max-w-6xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#FAF8F5]/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D8CFBC] mb-2 font-mono">
              <Sparkles className="w-3.5 h-3.5 text-[#72222B]" />
              <span>Chapter VIII &middot; 23rd Birthday Dedication</span>
            </div>
            <h2 className="font-serif-classic text-4xl sm:text-5xl md:text-6xl font-light text-[#FAF8F5] tracking-tight">
              23 Things About Nachi
            </h2>
            <p className="mt-2 font-serif-classic italic text-lg sm:text-xl text-[#D8CFBC]/90">
              Not generic reasons &middot; The habits, humour, and quiet quirks that define who you are
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-3">
            <button
              onClick={onResetTraits}
              title="Reset all cards to original text"
              className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs text-[#EAE5DE]/60 hover:text-[#FAF8F5] border border-[#FAF8F5]/10 transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Defaults</span>
            </button>
          </div>
        </div>

        {/* Category Filters */}
        <div className="flex items-center gap-2 overflow-x-auto pb-4 mb-10 text-xs">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-3 py-1 rounded transition-colors whitespace-nowrap uppercase tracking-wider text-[11px] ${
                activeCategory === cat
                  ? 'bg-[#72222B] text-[#FAF8F5] font-medium'
                  : 'bg-[#1A1918] text-[#EAE5DE]/70 hover:text-[#FAF8F5] border border-[#FAF8F5]/5'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* 23 Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTraits.map((trait) => {
            const isEditing = editingId === trait.id;

            return (
              <div
                key={trait.id}
                className="group relative p-6 sm:p-7 rounded-lg bg-[#1B1918] border border-[#FAF8F5]/10 hover:border-[#D8CFBC]/30 transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  {/* Top card row */}
                  <div className="flex items-center justify-between mb-4">
                    <span className="font-serif-classic text-2xl text-[#72222B] font-light">
                      #{trait.number}
                    </span>
                    <div className="flex items-center gap-2">
                      <span className="text-[10px] uppercase tracking-widest text-[#D8CFBC]/70 font-mono">
                        {trait.category}
                      </span>
                      {!isEditing && (
                        <button
                          onClick={() => startEditing(trait)}
                          className="opacity-0 group-hover:opacity-100 p-1 rounded hover:bg-[#FAF8F5]/10 text-[#EAE5DE]/70 hover:text-[#FAF8F5] transition-opacity"
                          title="Edit this card"
                        >
                          <Edit3 className="w-3.5 h-3.5" />
                        </button>
                      )}
                    </div>
                  </div>

                  {/* Body Content / Edit Form */}
                  {isEditing ? (
                    <div className="space-y-3">
                      <input
                        type="text"
                        value={editTitle}
                        onChange={(e) => setEditTitle(e.target.value)}
                        className="w-full bg-[#121110] border border-[#FAF8F5]/20 rounded p-2 text-sm text-[#FAF8F5] focus:outline-none focus:border-[#72222B]"
                      />
                      <textarea
                        value={editDescription}
                        onChange={(e) => setEditDescription(e.target.value)}
                        rows={4}
                        className="w-full bg-[#121110] border border-[#FAF8F5]/20 rounded p-2 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#72222B]"
                      />
                      <div className="flex justify-end gap-2 pt-2">
                        <button
                          onClick={() => setEditingId(null)}
                          className="px-2.5 py-1 text-xs text-[#EAE5DE]/60 hover:text-[#FAF8F5]"
                        >
                          Cancel
                        </button>
                        <button
                          onClick={() => saveEdit(trait.id)}
                          className="flex items-center gap-1 px-3 py-1 bg-[#72222B] hover:bg-[#8B2635] text-[#FAF8F5] text-xs rounded transition-colors"
                        >
                          <Check className="w-3 h-3" />
                          <span>Save</span>
                        </button>
                      </div>
                    </div>
                  ) : (
                    <div>
                      <h3 className="font-serif-classic text-xl sm:text-2xl text-[#FAF8F5] mb-2 font-light leading-snug">
                        {trait.title}
                      </h3>
                      <p className="text-xs sm:text-sm text-[#EAE5DE]/75 leading-relaxed font-light">
                        {trait.description}
                      </p>
                    </div>
                  )}
                </div>

                <div className="mt-6 pt-4 border-t border-[#FAF8F5]/5 flex items-center justify-between text-[10px] text-[#D8CFBC]/50 font-mono">
                  <span>Birthday Note {trait.number} of 23</span>
                  <span className="italic font-serif-classic text-xs text-[#D8CFBC]/70">Arpi</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

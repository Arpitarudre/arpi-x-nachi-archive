import React, { useState } from 'react';
import { Camera, Plus, Search, Filter } from 'lucide-react';
import { PhotoItem } from '../types';

interface PhotoArchiveProps {
  photos: PhotoItem[];
  onSelectPhoto: (photo: PhotoItem) => void;
  onOpenUpload: () => void;
}

type CategoryFilter = 'all' | 'two_of_us' | 'adventures' | 'random' | 'you' | 'us_lately';

export const PhotoArchive: React.FC<PhotoArchiveProps> = ({ photos, onSelectPhoto, onOpenUpload }) => {
  const [filter, setFilter] = useState<CategoryFilter>('all');
  const [searchQuery, setSearchQuery] = useState('');

  const filteredPhotos = photos.filter((p) => {
    const matchesCategory = filter === 'all' || p.category === filter;
    const matchesSearch =
      searchQuery.trim() === '' ||
      p.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.caption.toLowerCase().includes(searchQuery.toLowerCase()) ||
      p.location.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCategory && matchesSearch;
  });

  return (
    <section id="archive" className="py-24 md:py-36 bg-[#121110] relative">
      <div className="max-w-7xl mx-auto px-6">
        {/* Section Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 border-b border-[#FAF8F5]/10 pb-8">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-[0.3em] text-[#D8CFBC] mb-2 font-mono">
              <Camera className="w-3.5 h-3.5 text-[#72222B]" />
              <span>Chapter VII &middot; Curated Visual Archive</span>
            </div>
            <h2 className="font-serif-classic text-4xl sm:text-5xl md:text-6xl font-light text-[#FAF8F5] tracking-tight">
              Photo Archive
            </h2>
            <p className="mt-2 font-serif-classic italic text-lg sm:text-xl text-[#D8CFBC]/90">
              Our moments preserved in time &middot; Our story, one moment at a time
            </p>
          </div>

          <div className="mt-6 md:mt-0 flex items-center gap-4">
            <button
              onClick={onOpenUpload}
              className="inline-flex items-center gap-2 px-4 py-2 bg-[#FAF8F5]/10 hover:bg-[#FAF8F5]/20 border border-[#FAF8F5]/15 text-[#FAF8F5] text-xs uppercase tracking-widest font-medium rounded transition-colors"
            >
              <Plus className="w-3.5 h-3.5 text-[#D8CFBC]" />
              <span>Add Memory</span>
            </button>
          </div>
        </div>

        {/* Filter Controls Bar (Buttons allowed for interactive filter tabs per guidelines) */}
        <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4 mb-12">
          {/* Functional Button Tabs */}
          <div className="flex items-center gap-1.5 p-1 bg-[#1A1918] rounded-lg border border-[#FAF8F5]/10 overflow-x-auto">
            <button
              onClick={() => setFilter('all')}
              className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider rounded transition-colors whitespace-nowrap ${
                filter === 'all'
                  ? 'bg-[#72222B] text-[#FAF8F5]'
                  : 'text-[#EAE5DE]/70 hover:text-[#FAF8F5]'
              }`}
            >
              All Works ({photos.length})
            </button>
            <button
              onClick={() => setFilter('two_of_us')}
              className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider rounded transition-colors whitespace-nowrap ${
                filter === 'two_of_us'
                  ? 'bg-[#72222B] text-[#FAF8F5]'
                  : 'text-[#EAE5DE]/70 hover:text-[#FAF8F5]'
              }`}
            >
              The Two of Us
            </button>
            <button
              onClick={() => setFilter('adventures')}
              className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider rounded transition-colors whitespace-nowrap ${
                filter === 'adventures'
                  ? 'bg-[#72222B] text-[#FAF8F5]'
                  : 'text-[#EAE5DE]/70 hover:text-[#FAF8F5]'
              }`}
            >
              Adventures
            </button>
            <button
              onClick={() => setFilter('random')}
              className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider rounded transition-colors whitespace-nowrap ${
                filter === 'random'
                  ? 'bg-[#72222B] text-[#FAF8F5]'
                  : 'text-[#EAE5DE]/70 hover:text-[#FAF8F5]'
              }`}
            >
              The Random Ones
            </button>
            <button
              onClick={() => setFilter('you')}
              className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider rounded transition-colors whitespace-nowrap ${
                filter === 'you'
                  ? 'bg-[#72222B] text-[#FAF8F5]'
                  : 'text-[#EAE5DE]/70 hover:text-[#FAF8F5]'
              }`}
            >
              You (Nachi)
            </button>
            <button
              onClick={() => setFilter('us_lately')}
              className={`px-3.5 py-1.5 text-xs font-medium uppercase tracking-wider rounded transition-colors whitespace-nowrap ${
                filter === 'us_lately'
                  ? 'bg-[#72222B] text-[#FAF8F5]'
                  : 'text-[#EAE5DE]/70 hover:text-[#FAF8F5]'
              }`}
            >
              Us, Lately
            </button>
          </div>

          {/* Search Bar */}
          <div className="relative max-w-xs w-full">
            <Search className="w-3.5 h-3.5 text-[#D8CFBC]/60 absolute left-3 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Search memories or places..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full bg-[#1A1918] border border-[#FAF8F5]/10 rounded pl-8 pr-3 py-1.5 text-xs text-[#FAF8F5] focus:outline-none focus:border-[#72222B] placeholder:text-[#EAE5DE]/40"
            />
          </div>
        </div>

        {/* Dynamic Gallery Grid (Editorial, Polaroid, Film Strip styles) */}
        {filteredPhotos.length === 0 ? (
          <div className="py-20 text-center border border-dashed border-[#FAF8F5]/10 rounded-lg">
            <p className="font-serif-classic text-xl text-[#D8CFBC] mb-2">No archive entries found</p>
            <p className="text-xs text-[#EAE5DE]/60 mb-4 font-light">Try adjusting your category filter or search term</p>
            <button
              onClick={() => { setFilter('all'); setSearchQuery(''); }}
              className="text-xs uppercase tracking-widest text-[#72222B] hover:underline"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 gap-6 space-y-6">
            {filteredPhotos.map((photo) => {
              if (photo.style === 'polaroid') {
                return (
                  <div
                    key={photo.id}
                    onClick={() => onSelectPhoto(photo)}
                    className="break-inside-avoid group cursor-pointer bg-[#EAE5DE] p-3 sm:p-4 rounded shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-1 text-[#161514]"
                  >
                    <div className="overflow-hidden bg-[#121110] rounded-sm">
                      <img
                        src={photo.url}
                        alt={photo.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>
                    <div className="pt-3 pb-1 text-center font-serif-classic">
                      <div className="text-sm font-medium leading-tight">{photo.title}</div>
                      <div className="text-[10px] uppercase tracking-wider text-[#5C5752] font-sans mt-0.5">
                        {photo.location} &middot; {photo.date}
                      </div>
                    </div>
                  </div>
                );
              }

              if (photo.style === 'film_strip') {
                return (
                  <div
                    key={photo.id}
                    onClick={() => onSelectPhoto(photo)}
                    className="break-inside-avoid group cursor-pointer bg-[#0A0A09] p-3 rounded-lg border border-[#FAF8F5]/15 hover:border-[#D8CFBC]/40 transition-all duration-300"
                  >
                    {/* Sprocket holes styling top */}
                    <div className="flex justify-between items-center px-1 mb-2">
                      <span className="text-[9px] font-mono text-[#D8CFBC]/50">35MM FILM EXPOSURE</span>
                      <span className="text-[9px] font-mono text-[#72222B]">REC // 2024-26</span>
                    </div>

                    <div className="overflow-hidden rounded bg-[#161514]">
                      <img
                        src={photo.url}
                        alt={photo.title}
                        referrerPolicy="no-referrer"
                        className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-500"
                        loading="lazy"
                      />
                    </div>

                    <div className="pt-3 px-1">
                      <h4 className="font-serif-classic text-base text-[#FAF8F5] leading-snug">
                        {photo.title}
                      </h4>
                      <p className="text-xs text-[#EAE5DE]/60 line-clamp-2 mt-1 font-light">
                        {photo.caption}
                      </p>
                      <div className="mt-2 text-[10px] text-[#D8CFBC]/60 font-mono">
                        {photo.location}
                      </div>
                    </div>
                  </div>
                );
              }

              // Standard / Editorial style
              return (
                <div
                  key={photo.id}
                  onClick={() => onSelectPhoto(photo)}
                  className="break-inside-avoid group cursor-pointer relative overflow-hidden rounded-lg bg-[#181716] border border-[#FAF8F5]/10 hover:border-[#FAF8F5]/30 transition-all duration-300 shadow-md"
                >
                  <div className="overflow-hidden">
                    <img
                      src={photo.url}
                      alt={photo.title}
                      referrerPolicy="no-referrer"
                      className="w-full h-auto object-cover group-hover:scale-105 transition-transform duration-700 ease-out"
                      loading="lazy"
                    />
                  </div>

                  <div className="p-4 sm:p-5">
                    <div className="flex items-center justify-between text-[10px] uppercase tracking-widest text-[#D8CFBC] mb-1 font-mono">
                      <span>{photo.location}</span>
                      <span>{photo.date}</span>
                    </div>
                    <h4 className="font-serif-classic text-lg text-[#FAF8F5] leading-snug group-hover:text-[#D8CFBC] transition-colors">
                      {photo.title}
                    </h4>
                    <p className="text-xs text-[#EAE5DE]/70 mt-1 line-clamp-2 font-light">
                      {photo.caption}
                    </p>
                  </div>
                </div>
              );
            })}
          </div>
        )}
      </div>
    </section>
  );
};

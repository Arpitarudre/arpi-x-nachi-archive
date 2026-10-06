import React, { useEffect } from 'react';
import { X, ChevronLeft, ChevronRight, Calendar, MapPin, Tag } from 'lucide-react';
import { PhotoItem } from '../types';

interface PhotoModalProps {
  photo: PhotoItem | null;
  onClose: () => void;
  onPrev: () => void;
  onNext: () => void;
}

export const PhotoModal: React.FC<PhotoModalProps> = ({ photo, onClose, onPrev, onNext }) => {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
      if (e.key === 'ArrowLeft') onPrev();
      if (e.key === 'ArrowRight') onNext();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [onClose, onPrev, onNext]);

  if (!photo) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/95 backdrop-blur-md p-4 sm:p-6">
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-6 right-6 z-50 p-2.5 rounded-full bg-[#FAF8F5]/10 hover:bg-[#FAF8F5]/25 text-[#FAF8F5] transition-colors"
        aria-label="Close photo lightbox"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Prev / Next controls */}
      <button
        onClick={onPrev}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#FAF8F5]/10 hover:bg-[#FAF8F5]/25 text-[#FAF8F5] transition-colors hidden sm:block"
        aria-label="Previous photo"
      >
        <ChevronLeft className="w-6 h-6" />
      </button>

      <button
        onClick={onNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-50 p-3 rounded-full bg-[#FAF8F5]/10 hover:bg-[#FAF8F5]/25 text-[#FAF8F5] transition-colors hidden sm:block"
        aria-label="Next photo"
      >
        <ChevronRight className="w-6 h-6" />
      </button>

      {/* Main Lightbox Card */}
      <div className="max-w-5xl w-full max-h-[90vh] flex flex-col lg:flex-row bg-[#161514] rounded-lg overflow-hidden border border-[#FAF8F5]/15 shadow-2xl">
        {/* Photo Container */}
        <div className="lg:w-2/3 max-h-[60vh] lg:max-h-[85vh] bg-[#0E0E0D] flex items-center justify-center p-2 sm:p-4">
          <img
            src={photo.url}
            alt={photo.title}
            referrerPolicy="no-referrer"
            className="max-h-full max-w-full object-contain rounded"
          />
        </div>

        {/* Details & Caption Panel */}
        <div className="lg:w-1/3 p-6 sm:p-8 flex flex-col justify-between overflow-y-auto">
          <div>
            <div className="flex items-center gap-2 text-xs uppercase tracking-widest text-[#D8CFBC] mb-2 font-mono">
              <Tag className="w-3.5 h-3.5 text-[#72222B]" />
              <span>{photo.category.replace('_', ' ')}</span>
            </div>

            <h3 className="font-serif-classic text-2xl sm:text-3xl text-[#FAF8F5] font-light leading-snug mb-4">
              {photo.title}
            </h3>

            <p className="text-sm leading-relaxed text-[#EAE5DE]/85 font-light mb-6">
              {photo.caption}
            </p>
          </div>

          <div className="pt-6 border-t border-[#FAF8F5]/10 space-y-3 text-xs text-[#D8CFBC]/75 font-sans">
            <div className="flex items-center gap-2">
              <Calendar className="w-4 h-4 text-[#72222B]" />
              <span>{photo.date}</span>
            </div>
            <div className="flex items-center gap-2">
              <MapPin className="w-4 h-4 text-[#72222B]" />
              <span>{photo.location}</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

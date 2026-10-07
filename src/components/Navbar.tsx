import React, { useState, useEffect } from 'react';
import { Volume2, VolumeX, Camera } from 'lucide-react';
import { ambientSound } from '../utils/audioSynth';

interface NavbarProps {
  onOpenUploadModal: () => void;
  isLoggedIn: boolean;
}

export const Navbar: React.FC<NavbarProps> = ({ onOpenUploadModal, isLoggedIn }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMuted, setIsMuted] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 40);
    };
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleAudio = () => {
    const active = ambientSound.toggle();
    setIsMuted(!active);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-40 transition-all duration-300 ${
        isScrolled
          ? 'bg-[#121110]/90 backdrop-blur-md border-b border-[#FAF8F5]/10 py-3 shadow-sm'
          : 'bg-gradient-to-b from-[#121110]/80 to-transparent py-5'
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
        {/* Zone 1: Single Text Element Wordmark */}
        <a
          href="#hero"
          className="font-display tracking-widest text-sm md:text-base font-semibold text-[#FAF8F5] hover:text-[#D8CFBC] transition-colors whitespace-nowrap"
        >
          ARPI × NACHI
        </a>

        {/* Zone 2: 4-6 clean text navigation links */}
        <nav className="hidden md:flex items-center gap-7 text-xs uppercase tracking-widest text-[#EAE5DE]/70 font-medium">
          <a href="#beginning" className="hover:text-[#FAF8F5] transition-colors hover:underline underline-offset-4 decoration-[#72222B]">
            The Beginning
          </a>
          <a href="#adventures" className="hover:text-[#FAF8F5] transition-colors hover:underline underline-offset-4 decoration-[#72222B]">
            Adventures
          </a>
          <a href="#archive" className="hover:text-[#FAF8F5] transition-colors hover:underline underline-offset-4 decoration-[#72222B]">
            Photo Archive
          </a>
          <a href="#traits" className="hover:text-[#FAF8F5] transition-colors hover:underline underline-offset-4 decoration-[#72222B]">
            23 Things
          </a>
          <a href="#letters" className="hover:text-[#FAF8F5] transition-colors hover:underline underline-offset-4 decoration-[#72222B]">
            Open When
          </a>
          <a href="#future" className="hover:text-[#FAF8F5] transition-colors hover:underline underline-offset-4 decoration-[#72222B]">
            Next Chapter
          </a>
        </nav>

        {/* Zone 3: 1-2 primary actions */}
        <div className="flex items-center gap-3">
          <button
            onClick={toggleAudio}
            title={isMuted ? "Play ambient vinyl sound" : "Mute ambient sound"}
            className="flex items-center gap-2 px-3 py-1.5 rounded text-xs uppercase tracking-wider text-[#EAE5DE]/80 hover:text-[#FAF8F5] hover:bg-[#FAF8F5]/5 border border-[#FAF8F5]/10 transition-colors whitespace-nowrap"
          >
            {isMuted ? (
              <>
                <VolumeX className="w-3.5 h-3.5 text-[#D8CFBC]" />
                <span className="hidden sm:inline">Vinyl Ambience</span>
              </>
            ) : (
              <>
                <Volume2 className="w-3.5 h-3.5 text-[#D8CFBC] animate-pulse" />
                <span className="hidden sm:inline">Playing</span>
              </>
            )}
          </button>

          <button
            onClick={onOpenUploadModal}
            className="flex items-center gap-1.5 px-3 py-1.5 rounded text-xs uppercase tracking-wider font-medium text-[#FAF8F5] bg-[#72222B] hover:bg-[#8B2635] transition-colors shadow-sm whitespace-nowrap"
          >
            <Camera className="w-3.5 h-3.5" />
            <span>{isLoggedIn ? 'Add Photo' : 'Sign In to Add'}</span>
          </button>
        </div>
      </div>
    </header>
  );
};

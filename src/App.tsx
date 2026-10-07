import React, { useState, useEffect } from 'react';
import { supabase } from './supabase';
import {
  INITIAL_PHOTOS,
  INITIAL_TRAITS,
  INITIAL_LETTERS,
  INITIAL_DREAMS,
  STORY_IMAGES
} from './data/initialData';
import { PhotoItem, NachiTrait, OpenWhenLetter } from './types';
import { Navbar } from './components/Navbar';
import { HeroSection } from './components/HeroSection';
import { BeginningSection } from './components/BeginningSection';
import { AdventureUttarakhand } from './components/AdventureUttarakhand';
import { UnplannedLonavala } from './components/UnplannedLonavala';
import { YachtSection } from './components/YachtSection';
import { PinkGanpatiSection } from './components/PinkGanpatiSection';
import { QuirksSection } from './components/QuirksSection';
import { PhotoArchive } from './components/PhotoArchive';
import { TwentyThreeThings } from './components/TwentyThreeThings';
import { OpenWhenSection } from './components/OpenWhenSection';
import { NextChapterSection } from './components/NextChapterSection';
import { FinalCreditsSection } from './components/FinalCreditsSection';
import { PhotoModal } from './components/PhotoModal';
import { UploadPhotoModal } from './components/UploadPhotoModal';
import { Login } from './components/Login';

export default function App() {
  // Photos state with LocalStorage persistence
  // Photos state from Supabase
  const [photos, setPhotos] = useState<PhotoItem[]>([]);  
  useEffect(() => {
  const loadPhotos = async () => {
    const { data, error } = await supabase
      .from('photos')
      .select('*')
      .order('created_at', { ascending: false });

    if (error) {
      console.error('Error loading photos:', error);
      return;
    }

    if (data) {
      setPhotos(data as PhotoItem[]);
    }
  };

  loadPhotos();
}, []);
const [session, setSession] = useState<any>(null);

useEffect(() => {
  supabase.auth.getSession().then(({ data }) => {
    setSession(data.session);
  });

  const {
    data: { subscription },
  } = supabase.auth.onAuthStateChange((_event, session) => {
    setSession(session);
  });

  return () => subscription.unsubscribe();
}, []);

  // 23 Things state with LocalStorage persistence
  const [traits, setTraits] = useState<NachiTrait[]>(() => {
    try {
      const saved = localStorage.getItem('arpi_nachi_traits_v1');
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_TRAITS;
  });

  // Open When letters with LocalStorage persistence
  const [letters, setLetters] = useState<OpenWhenLetter[]>(() => {
    try {
      const saved = localStorage.getItem('arpi_nachi_letters_v1');
      if (saved) return JSON.parse(saved);
    } catch {}
    return INITIAL_LETTERS;
  });

  // Lightbox Modal state
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoItem | null>(null);

  // Upload Modal state
  const [isUploadOpen, setIsUploadOpen] = useState(false);
  // Login Modal state
  const [isLoginOpen, setIsLoginOpen] = useState(false);

  // Sync to localStorage
 

  useEffect(() => {
    try {
      localStorage.setItem('arpi_nachi_traits_v1', JSON.stringify(traits));
    } catch {}
  }, [traits]);

  useEffect(() => {
    try {
      localStorage.setItem('arpi_nachi_letters_v1', JSON.stringify(letters));
    } catch {}
  }, [letters]);

  // Handle Photo Lightbox Navigation
  const handleNextPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
    const nextIndex = (currentIndex + 1) % photos.length;
    setSelectedPhoto(photos[nextIndex]);
  };

  const handlePrevPhoto = () => {
    if (!selectedPhoto) return;
    const currentIndex = photos.findIndex((p) => p.id === selectedPhoto.id);
    const prevIndex = (currentIndex - 1 + photos.length) % photos.length;
    setSelectedPhoto(photos[prevIndex]);
  };

  const handleAddPhoto = (newPhoto: PhotoItem) => {
    setPhotos((prev) => [newPhoto, ...prev]);
  };

  const handleResetTraits = () => {
    setTraits(INITIAL_TRAITS);
    try {
      localStorage.removeItem('arpi_nachi_traits_v1');
    } catch {}
  };

  const handleResetLetters = () => {
    setLetters(INITIAL_LETTERS);
    try {
      localStorage.removeItem('arpi_nachi_letters_v1');
    } catch {}
  };

   const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth' });
    }
  };

  // Show login page if the user is not signed in
  
  return (
    <div className="min-h-screen bg-[#121110] text-[#EAE5DE] relative selection:bg-[#72222B] selection:text-[#FAF8F5]">
      {/* 35mm Subtle Film Grain Overlay */}
      <div className="film-grain-overlay" aria-hidden="true" />

      {/* Navigation Header */}
      <Navbar
        onOpenUploadModal={() => {
        if (session) {
          setIsUploadOpen(true);
        } else {
          setIsLoginOpen(true);
        }
      }}
      isLoggedIn={!!session}
      />
      {isLoginOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/80 backdrop-blur-sm p-4">
          <div className="relative w-full max-w-md">
          <button
          onClick={() => setIsLoginOpen(false)}
          className="absolute top-3 right-3 z-10 text-[#FAF8F5]/70 hover:text-[#FAF8F5] text-xl"
      >
           ×
          </button>

      <Login onLoginSuccess={() => setIsLoginOpen(false)} />
    </div>
  </div>
)}

      {/* Main Flow: Beginning → Adventure → Spontaneity → Memories → Us → Nachi → Future → To Be Continued */}
      <main>
        {/* 1. HERO */}
        <HeroSection
          heroImage={STORY_IMAGES.hero}
          onEnterClick={() => scrollToSection('beginning')}
        />

        {/* 2. THE BEGINNING: Bar Stock Exchange First Date */}
        <BeginningSection customImage={STORY_IMAGES.barstockexchange} />

        {/* 3. OUR FIRST ADVENTURE: Uttarakhand December 2024 */}
        <AdventureUttarakhand customImage={STORY_IMAGES.uttarakhand} />

        {/* 4. THE DAY THAT WASN'T THE PLAN: Lonavala Road Trip */}
        <UnplannedLonavala customImage={STORY_IMAGES.lonavala} />

        {/* 5. THE YACHT: Arpi's Birthday 2025 */}
        <YachtSection customImage={STORY_IMAGES.yacht} />

        {/* 6. PINK: Ganpati Festive Memory */}
        <PinkGanpatiSection customImage={STORY_IMAGES.pinkGanpati} />

        {/* 7. THINGS THAT MAKE US, US: Quirks & Mimicry */}
        <QuirksSection />

        {/* 8. PHOTO ARCHIVE: 40–70 moments, categorized gallery */}
        <PhotoArchive
          photos={photos}
          onSelectPhoto={(photo) => setSelectedPhoto(photo)}
          onOpenUpload={() => setIsUploadOpen(true)}
        />

        {/* 9. 23 THINGS ABOUT NACHI: Interactive Cards */}
        <TwentyThreeThings
          traits={traits}
          onUpdateTraits={(updated) => setTraits(updated)}
          onResetTraits={handleResetTraits}
        />

        {/* 10. OPEN WHEN...: Sealed Digital Envelopes */}
        <OpenWhenSection
          letters={letters}
          onUpdateLetters={(updated) => setLetters(updated)}
          onResetLetters={handleResetLetters}
        />

        {/* 11. NEXT CHAPTER: Future Dreams */}
        <NextChapterSection dreams={INITIAL_DREAMS} />

        {/* 12. FINAL PAGE: Birthday Letter & To Be Continued */}
        <FinalCreditsSection onScrollToTop={() => scrollToSection('hero')} />
      </main>

      {/* Lightbox Modal */}
      <PhotoModal
        photo={selectedPhoto}
        onClose={() => setSelectedPhoto(null)}
        onPrev={handlePrevPhoto}
        onNext={handleNextPhoto}
      />

      {/* Upload Memory Modal */}
      <UploadPhotoModal
        isOpen={isUploadOpen}
        onClose={() => setIsUploadOpen(false)}
        onAddPhoto={handleAddPhoto}
      />
    </div>
  );
}

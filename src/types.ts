export interface PhotoItem {
  id: string;
  url: string;
  fallbackUrl?: string;
  title: string;
  caption: string;
  date: string;
  location: string;
  category: 'two_of_us' | 'adventures' | 'random' | 'you' | 'us_lately';
  aspect?: 'landscape' | 'portrait' | 'square';
  featured?: boolean;
  style?: 'standard' | 'polaroid' | 'film_strip' | 'editorial';
}

export interface NachiTrait {
  id: number;
  number: string;
  title: string;
  description: string;
  category: 'Personality' | 'Habits' | 'Humour' | 'Photography' | 'Adventure' | 'Little Things';
}

export interface OpenWhenLetter {
  id: string;
  title: string;
  occasion: string;
  letter: string;
  senderNote: string;
  date: string;
}

export interface FutureDream {
  id: string;
  emoji: string;
  title: string;
  description: string;
  category: 'Home' | 'Companion' | 'Ambition' | 'Journey' | 'Discovery' | 'Memories';
}

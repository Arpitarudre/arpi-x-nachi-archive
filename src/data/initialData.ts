import { PhotoItem, NachiTrait, OpenWhenLetter, FutureDream } from '../types';

import heroImg from '../assets/images/hero1.jpeg';
import barstockExchangeImg from '../assets/images/barstockexchange.jpeg';
import uttarakhandImg from '../assets/images/uttarakhand.jpeg.jpeg';
import lonavalaImg from '../assets/images/lonavala.jpeg';
import yachtImg from '../assets/images/yacht.jpeg';
import pinkGanpatiImg from '../assets/images/hero.jpeg';

export const STORY_IMAGES = {
  hero: heroImg,
  barstockexchange: barstockExchangeImg,
  uttarakhand: uttarakhandImg,
  lonavala: lonavalaImg,
  yacht: yachtImg,
  pinkGanpati: pinkGanpatiImg,
};

export const INITIAL_TRAITS: NachiTrait[] = [
  {
    id: 1,
    number: "01",
    title: "The way you hold a camera",
    description: "You don't just take pictures; you look for the quiet micro-moments no one else notices. Half my favourite memories only exist because you chose to freeze them.",
    category: "Photography"
  },
  {
    id: 2,
    number: "02",
    title: "Your stubborn calm in chaos",
    description: "Whenever plans fall apart—missed turns, delayed schedules, sudden rain—you never flinch. You just smile, turn up the music, and make it part of the adventure.",
    category: "Personality"
  },
  {
    id: 3,
    number: "03",
    title: "How you copy whatever I say",
    description: "You pick up my strange slang and random expressions within 48 hours, repeat them with a straight face, and then pretend you're the one who invented them.",
    category: "Humour"
  },
  {
    id: 4,
    number: "04",
    title: "The first bouquet by the Stock Exchange",
    description: "Standing there among old colonial heritage stone and rush-hour chaos, holding those flowers with that slightly nervous, charming grin. I knew right then.",
    category: "Little Things"
  },
  {
    id: 5,
    number: "05",
    title: "The one-handed steering wheel habit",
    description: "Driving through winding ghats or late-night empty streets with your left hand on the wheel and your right hand holding mine over the console.",
    category: "Habits"
  },
  {
    id: 6,
    number: "06",
    title: "Your relentless ambition",
    description: "Watching how fiercely you work and how big your vision is. You never boast, you just put your head down and build. It inspires me every single day.",
    category: "Personality"
  },
  {
    id: 7,
    number: "07",
    title: "Lola Cafe & spontaneous pizzas",
    description: "An impromptu borrowed-car escape to Lonavala, chasing wood-fired pizza and cold beer in the misty hills.",
    category: "Adventure"
  },
  {
    id: 8,
    number: "08",
    title: "How easily we can be completely stupid",
    description: "We can switch from discussing life's deepest questions to making weird animal noises and laughing until our stomachs ache within twenty seconds.",
    category: "Humour"
  },
  {
    id: 9,
    number: "09",
    title: "The Ganpati pink coincidence",
    description: "You walked in wearing pink without any prior planning. We looked at each other and couldn't stop smiling. That photo remains our holy grail.",
    category: "Little Things"
  },
  {
    id: 10,
    number: "10",
    title: "Your appetite for genuine thrill",
    description: "From river rafting in freezing Uttarakhand rapids to hiking unpaved trails in December, you bring an infectious curiosity wherever you step.",
    category: "Adventure"
  },
  {
    id: 11,
    number: "11",
    title: "How you remember my food orders",
    description: "You know exactly what I want to order before I even open the menu. Extra dips, no strange garnishes, and the exact drink temperature.",
    category: "Habits"
  },
  {
    id: 12,
    number: "12",
    title: "The yacht surprise standard",
    description: "Booking a sunset yacht for my birthday and creating an evening so effortlessly cinematic that literally nothing else can ever compete.",
    category: "Adventure"
  },
  {
    id: 13,
    number: "13",
    title: "Your quiet generosity",
    description: "You show love through action—fixing things without asking, taking care of friends, checking in on people, and never wanting credit.",
    category: "Personality"
  },
  {
    id: 14,
    number: "14",
    title: "The mid-laugh eye crinkle",
    description: "The tiny lines at the corners of your eyes that show up when something is genuinely, uncontrollably hilarious to you.",
    category: "Little Things"
  },
  {
    id: 15,
    number: "15",
    title: "Unapologetic comfort",
    description: "There is zero filter between us. No posturing, no performing. Being around you feels like taking off heavy shoes after a 10-mile walk.",
    category: "Personality"
  },
  {
    id: 16,
    number: "16",
    title: "Your curated playlists",
    description: "The road trips would be half as memorable without your uncanny ability to queue up the exact track as the sun sinks below the horizon.",
    category: "Habits"
  },
  {
    id: 17,
    number: "17",
    title: "How you treat everyone you meet ",
    description: "From the waiter to the taxi driver, you treat every person with respect, warmth, and genuine interest. It's a rare quality that makes everyone feel valued.",
    category: "Little Things"
  },
  {
    id: 18,
    number: "18",
    title: "You listen to the quiet sentences",
    description: "You catch things I whisper under my breath in crowded rooms. You always make sure I feel seen, heard, and protected.",
    category: "Personality"
  },
  {
    id: 19,
    number: "19",
    title: "Patience with my dramatic moments",
    description: "When I overthink or have minor existential crises, you don't offer generic advice—you just pull me in, let me vent, and ground me.",
    category: "Habits"
  },
  {
    id: 20,
    number: "20",
    title: "The dad jokes that make me groan and laugh at the same time",
    description: "You have this incredible ability to tell jokes that are so bad they're good, leaving me both exasperated and laughing.",
    category: "Humour"
  },
  {
    id: 21,
    number: "21",
    title: "Your quick wit and deadpan delivery",
    description: "You can drop the most devastatingly funny observation with an entirely straight face and watch everyone around you lose it.",
    category: "Humour"
  },
  {
    id: 22,
    number: "22",
    title: "How proud you are of us",
    description: "The way you talk about our relationship, introduce me to your world, and treat our bond like the most sacred priority in your life.",
    category: "Personality"
  },
  {
    id: 23,
    number: "23",
    title: "Being 23 & limitless",
    description: "You're only 23 today, yet you have the soul of an old explorer and the heart of a boy full of dreams. Watching you grow is my greatest joy.",
    category: "Little Things"
  }
];

export const INITIAL_LETTERS: OpenWhenLetter[] = [
  {
    id: "miss-me",
    title: "Open when you miss me",
    occasion: "For the quiet nights when miles or schedules keep us apart",
    letter: `Hey Nachi,\n\nIf you're reading this, we're probably away from each other right now or caught in the middle of long work days. I want you to close your eyes for three seconds and remember our drive back from Lonavala—the windows cracked open, the cool breeze, your hand resting over mine on the gear shift.\n\nNo matter where either of us is in this city or on this planet, you carry my heart with you. Remember that we built this from a first date by the Stock Exchange into something indestructible. Look at our photos, remember how stupidly we laugh, and know that I am counting down the minutes until I see you again.\n\nI love you more than words ever capture. Hurry back to me.`,
    senderNote: "With all my love, always",
    date: "Archived with love"
  },
  {
    id: "bad-day",
    title: "Open when you're having a bad day",
    occasion: "For when things feel heavy, exhausting, or frustrating",
    letter: `Take a deep breath and drop your shoulders.\n\nI know how hard you push yourself and how much responsibility you carry on your back. Today might feel heavy, frustrating, or unfair. But listen to me: one bad afternoon, one difficult meeting, or one stressful week cannot undo how brilliant, capable, and resilient you are.\n\nRemember Uttarakhand? When it was freezing, roads were rough, and everything was uncertain, you still found magic in the cold air. You have that same light inside you right now. Put away your work for an hour. Drink some water. Eat something warm. Tonight is for resting; tomorrow the world bends to you again.\n\nI am always in your corner, cheering the loudest.`,
    senderNote: "Your biggest fan & anchor",
    date: "Always here for you"
  },
  {
    id: "need-motivation",
    title: "Open when you need motivation",
    occasion: "When big goals seem daunting or the climb feels steep",
    letter: `Nachi,\n\nYou are built for greatness. I don't say that casually because I'm your girlfriend; I say it because I watch your work ethic, your discipline, and the sheer fire in your eyes when you lock in on something.\n\nThink about where we started on 25 October 2024 and everything you've accomplished since. Every risk you've taken has carved out new paths. You have the intellect, the instincts, and the relentless grit to achieve every single dream on our vision board—the world tour, the big career, the home we'll design together.\n\nDon't second-guess yourself. Trust your craft. Step into the arena and do what only you can do.`,
    senderNote: "Believing in you endlessly",
    date: "To your boundless potential"
  },
  {
    id: "proud-of-yourself",
    title: "Open when you're proud of yourself",
    occasion: "When you just scored a massive win or hit an milestone",
    letter: `YES! I knew you would do it!\n\nI hope you're taking a second right now to actually celebrate yourself instead of immediately rushing to the next milestone. You worked so hard for this, poured hours and sweat into it, and you deserve every ounce of recognition and joy coming your way.\n\nTake yourself out, order that extra drink, celebrate with your friends, or let's book our favourite dinner table tonight. I am bursting with pride. Watching you win makes my heart so full.\n\nHere is to you, my brilliant man. May this be just one victory in an endless reel!`,
    senderNote: "Proudest girlfriend alive",
    date: "Celebrate this moment"
  },
  {
    id: "angry-at-me",
    title: "Open when you're angry at me",
    occasion: "When we disagree or emotions get tangled",
    letter: `Hey...\n\nFirst, I'm sorry for whatever part I played in making you upset, misunderstood, or frustrated. Sometimes I get stubborn, or my words come out sharp, or I get caught up in my head.\n\nBefore you let the frustration settle, remember who we are: we are the two people who can do absolutely anything in front of each other, who copy each other's words, who spent hours laughing over pizza in Lonavala and gliding across the ocean at sunset. No argument is ever bigger than our love.\n\nTake the space you need, but don't pull too far away. When you're ready, come talk to me. I'm ready to listen, hug you tight, and fix it. We are always on the same team.`,
    senderNote: "I'm right here",
    date: "Team Us, always"
  },
  {
    id: "remember-us",
    title: "Open when you want to remember us",
    occasion: "A warm trip down memory lane whenever you need comfort",
    letter: `Remember 25 October 2024?\n\nThat first bouquet in your hands near the Stock Exchange. Remember December in Uttarakhand, shivering together under starry Himalayan skies, the rush of the river, and realizing that traveling with you felt like breathing clean mountain air for the first time.\n\nRemember our improvised Lonavala road trip when work shifted our anniversary? We didn't care about the change of plan because being together *was* the plan. Remember the golden light bouncing off the yacht on my birthday, and Ganpati when we both wore pink without saying a word?\n\nTwo years of tiny private jokes, thousands of glances across crowded rooms, and a love that gets deeper and calmer with every passing season. That is who we are. And that is forever.`,
    senderNote: "25.10.2024 — ∞",
    date: "Our eternal archive"
  }
];

export const INITIAL_DREAMS: FutureDream[] = [
  {
    id: "dream-home",
    emoji: "🏡",
    title: "Build a beautiful home together",
    description: "Sun-drenched living room with high ceilings, a massive bookshelf, a dedicated corner for your camera gear, a modern kitchen where we test late-night recipes, and a quiet balcony for morning chai.",
    category: "Home"
  },
  {
    id: "dream-dog",
    emoji: "🐶",
    title: "Have a pet dog",
    description: "A fluffy, energetic pup (maybe a golden retriever or indie rescue) who goes on weekend road trips with us, naps at our feet while we work, and greets you at the door every evening.",
    category: "Companion"
  },
  {
    id: "dream-success",
    emoji: "💼",
    title: "Become very successful together",
    description: "Building empires side by side. Celebrating promotions, successful ventures, creative breakthroughs, and always being each other's chief advisor and fiercest advocate.",
    category: "Ambition"
  },
  {
    id: "dream-world-tour",
    emoji: "🌎",
    title: "Go on a world tour",
    description: "From European cobblestones and Tokyo neon alleys to Northern Lights in Norway and coastal drives in Amalfi. Backpacking in style, no rushed itineraries, just pure immersion.",
    category: "Journey"
  },
  {
    id: "dream-see-world",
    emoji: "✈️",
    title: "See the whole world together",
    description: "Collecting stamps on our passports like badges of honour. Boarding red-eye flights, sharing airport coffee at 4 AM, and landing in cities where nobody knows our names.",
    category: "Journey"
  },
  {
    id: "dream-photo-lifetime",
    emoji: "📸",
    title: "Collect a lifetime of photographs",
    description: "Thousands of prints filed into thick leather albums, 35mm film negatives stored in archival boxes, and photo walls documenting every year of our youth, middle age, and golden years.",
    category: "Memories"
  },
  {
    id: "dream-new-places",
    emoji: "🏔️",
    title: "Keep discovering new places",
    description: "Hidden hillside cafes, quiet beaches with no cellular reception, secret mountain viewpoints, and obscure road trip routes that aren't on any travel blog.",
    category: "Discovery"
  }
];
export const INITIAL_PHOTOS: PhotoItem[] = [];
  
export const INITIAL_BIRTHDAY_LETTER = {
  salutation: "My Dearest Nachi,",
  paragraph1: "Happy 23rd Birthday. When I think back to October 25, 2024—standing near the Stock Exchange with that first bouquet of flowers—I had no idea how profoundly you were going to reshape my world. In almost two years, you haven't just become my partner; you have become my home, my favourite comedy show, my quietest comfort, and my greatest adventure.",
  paragraph2: "From the freezing hills and river currents of Uttarakhand to the spontaneous road trips to Lonavala when work got in the way; from watching the sun sink into the Arabian Sea on that unforgettable yacht to laughing about wearing matching pink at Ganpati—every single day with you feels deliberate and full of grace. We can be completely stupid together. We copy each other's words until neither of us remembers who started it. We are ourselves, completely and without apology.",
  paragraph3: "At 23, you have a rare kind of brilliance: deep kindness, fierce ambition, and an observant artist's heart that sees the world with such clarity. I am so endlessly proud of the man you are and the man you are becoming. Whatever chapters lie ahead—the house we'll build, the puppy we'll spoil, the foreign cities we'll wander through—I only ever want them with you.",
  closing: "Happy 23rd, my favourite person. Here is to our infinity.",
  signature: "Forever yours,\nArpi",
  dateBadge: "25.10.2024 — ∞"
};

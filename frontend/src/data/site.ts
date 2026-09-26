// ─────────────────────────────────────────────────────────────────────────────
// SADGURU EVENT PLANNER — central content file.
// Replace the PLACEHOLDER image / video URLs below with real media as it is
// shared. To add a new project, add one more object to `premiumWork`.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Sadguru Event Planner",
  tagline: "Weddings · Cultural Shows · Community Gatherings · Live Concerts",
  whatsappNumber: "919372749345",
  phoneDisplay: "+91 93727 49345",
  email: "krishnadhorda1@gmail.com",
  instagramHandle: "@sadgurueventplanner_official",
  instagramUrl: "https://www.instagram.com/sadgurueventplanner_official",
  location: "Mumbai, India — creating everywhere",
};

const u = (url: string, w = 1800) =>
  url.includes("pexels.com") ? url : `${url}&w=${w}&q=80&auto=format&fit=crop`;

export interface Reel {
  label: string;
  link: string; // public Instagram reel URL
}

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  video: string; // YouTube embed or public video URL — leave "" to hide
  reels?: Reel[]; // short-form films (link out to Instagram)
  reviews?: string[]; // audience feedback screenshots
  gallery: string[];
  location: string;
  guests: string;
  description: string;
  highlights: string[];
  responsibilities: string[];
}

export const premiumWork: Project[] = [
  {
    id: "trusha-karan-wedding",
    title: "THE WEDDING EVENT",
    subtitle: "The Grand Wedding Celebration of Trusha & Karan",
    category: "Luxury Wedding",
    image: "/media/tk-mainbanner.jpg",
    video: "",
    reels: [
      {
        label: "PRE-WEDDING SANGEET",
        link: "https://www.instagram.com/reel/DcyZTaWs6bp/",
      },
      {
        label: "HALDI MELA",
        link: "https://www.instagram.com/reel/Dc01WNyqIaT/",
      },
      {
        label: "The Royal Pheras",
        link: "https://www.instagram.com/reels/Ddw3ZLbIYvf/",
      },
    ],
    gallery: [
      "/media/tk-1.jpg",
      "/media/tk-2.jpg",
      "/media/tk-3.jpg",
      "/media/tk-4.jpg",
      "/media/tk-5.jpg",
      "/media/tk-6.jpg",
      "/media/tk-7.jpg",
      "/media/tk-8.png",
      "/media/tk-9.jpg",
    ],
    location: "Mumbai, India",
    guests: "Two families. One unforgettable celebration.",
    description:
      "A wedding planned like a film — every entry timed, every guest received, every detail invisible until it became a memory. From the first RSVP call to the final farewell, Sadguru carried the complexity so the families could carry the moment.",
    highlights: [
      "The dream entry",
      "A mandap built like a set piece",
      "Evenings of music and celebration",
      "Hospitality that felt like family",
    ],
    responsibilities: [
      "RSVP Management",
      "Guest Communication",
      "Document Collection",
      "Travel Coordination",
      "Ticket Booking",
      "Hotel Coordination",
      "Airport Pickup & Drop",
      "Hospitality Desk",
      "Live Updates",
      "On-Ground Execution",
    ],
  },
  {
    id: "gujrock",
    title: "GUJROCK",
    subtitle: "Gujarati Roots. Modern Beats.",
    category: "Cultural Experience",
    image: "/media/gujrock-1.jpg",
    video: "",
    reels: [
      {
        label: "GUJROCK — THE SHOWREEL",
        link: "https://www.instagram.com/reel/DaSvQW6MN8r/",
      },
    ],
    reviews: [
      "/media/feedback-1.jpg",
      "/media/feedback-2.jpg",
      "/media/feedback-3.jpg",
      "/media/feedback-4.jpg",
      "/media/feedback-5.jpg",
    ],
    gallery: [
      "/media/gujrock-2.jpg",
      "/media/gujrock-3.jpg",
      "/media/gujrock-4.jpg",
      "/media/gujrock-5.jpg",
      "/media/gujrock-6.jpg",
      "/media/gujrock-7.jpg",
      "/media/gujrock-box1.jpg",
      "/media/gujrock-box2.jpg",
      "/media/gujrock-box5.jpg",
      "/media/gujrock-box6.jpg",
      "/media/gujrock-dsc.jpg",
    ],
    location: "Mumbai, India",
    guests: "A crowd singing every line together.",
    description:
      "Where heritage meets amplifiers. Gujrock pairs the soul of Gujarati music with the scale of a modern stage show — artists, light, sound and hundreds of voices moving as one.",
    highlights: [
      "Concept by Sunil Soni, staged by Sadguru",
      "A Gujarati musical journey across cities",
      "Intelligent lighting and live band production",
      "A crowd that became the chorus",
    ],
    responsibilities: [
      "Stage & Production Design",
      "Sound & Lighting Engineering",
      "Artist Coordination",
      "Crowd Flow & Seating",
      "Backstage Management",
      "Show Calling",
    ],
  },
  {
    id: "khelaiya-kulture",
    title: "KHELAIYA KULTURE",
    subtitle: "A Pre Navaratri Celebration",
    category: "Community Gathering",
    image: "/media/khelaiya-main.jpg",
    video: "",
    reels: [
      {
        label: "KHELAIYA KULTURE — THE SHOWREEL",
        link: "https://www.instagram.com/reel/DO3MmilDKFw/",
      },
    ],
    gallery: [
      "/media/khelaiya-1.jpg",
      "/media/khelaiya-2.jpg",
      "/media/khelaiya-3.jpg",
      "/media/khelaiya-4.jpg",
      "/media/khelaiya-5.jpg",
      "/media/khelaiya-6.jpg",
      "/media/khelaiya-7.jpg",
      "/media/khelaiya-8.jpg",
    ],
    location: "Mumbai, India",
    guests: "A community becoming one.",
    description:
      "Before the nine nights begin, the rhythm starts here — dhol, colour and hundreds of dancers in perfect, joyful chaos, held together by quiet planning.",
    highlights: [
      "Community-scale celebration",
      "Live dhol & folk orchestration",
      "Seamless crowd hospitality",
    ],
    responsibilities: [
      "Venue & Ground Management",
      "Sound for the Celebration",
      "Community Passes & Access",
      "Artist Management",
    ],
  },
];

export const eventTypes = [
  "Wedding",
  "Destination Wedding",
  "Corporate Event",
  "Cultural Event",
  "Community Gathering",
  "Live Concert",
  "Concept Show",
  "Private Celebration",
  "NRI / International Event",
  "Luxury Event",
  "Social Celebration",
  "Something Else",
];

export const audienceEvents = [
  {
    id: "weddings",
    label: "Weddings",
    icon: "💍",
    tagline: "From the first RSVP to the final farewell.",
    description:
      "A wedding is about creating a seamless celebration around the couple and their families, where guest experience, hospitality, emotions, traditions, and flawless coordination come together.",
    color: "#E6C073",
    x: 8,
    y: 12,
    floatDuration: 6.2,
    floatDelay: 0,
  },
  {
    id: "destination",
    label: "Destination Weddings",
    icon: "✈️",
    tagline: "A celebration, not just a location.",
    description:
      "Destination weddings require end-to-end guest and logistics management, combining travel, accommodation, hospitality, multiple venues, and wedding celebrations at a location away from home.",
    color: "#D4A853",
    x: 52,
    y: 6,
    floatDuration: 7.1,
    floatDelay: 0.8,
  },
  {
    id: "corporate",
    label: "Corporate Events",
    icon: "🏆",
    tagline: "Precision meets presence.",
    description:
      "Corporate events are designed around business objectives, brand identity, stakeholder engagement, and professional experiences, executed with precision from planning to production.",
    color: "#C9A24D",
    x: 78,
    y: 18,
    floatDuration: 5.8,
    floatDelay: 1.5,
  },
  {
    id: "cultural",
    label: "Cultural Events",
    icon: "🎊",
    tagline: "Heritage, celebrated at scale.",
    description:
      "Cultural events bring heritage, traditions, music, art, and community together, transforming cultural identity into an engaging experience for the audience.",
    color: "#E6C073",
    x: 22,
    y: 42,
    floatDuration: 8.0,
    floatDelay: 0.3,
  },
  {
    id: "community",
    label: "Community Gatherings",
    icon: "🌟",
    tagline: "Thousands of people. One shared feeling.",
    description:
      "Cultural events bring heritage, traditions, music, art, and community together, transforming cultural identity into an engaging experience for the audience.",
    color: "#D4A853",
    x: 60,
    y: 38,
    floatDuration: 6.5,
    floatDelay: 1.1,
  },
  {
    id: "concerts",
    label: "Live Concerts",
    icon: "🎸",
    tagline: "Sound, light, and a crowd that won't forget.",
    description:
      "Live concerts bring together artists, music, technology, production, and audiences to create high-energy experiences where every element must work together in real time.",
    color: "#C9A24D",
    x: 85,
    y: 50,
    floatDuration: 7.4,
    floatDelay: 0.6,
  },
  {
    id: "concept",
    label: "Concept Shows",
    icon: "🎭",
    tagline: "Events that don't exist — until we build them.",
    description:
      "Concept shows transform an idea into a complete visual and experiential narrative, combining creative direction, artists, storytelling, technology, and production into one distinctive show.",
    color: "#E6C073",
    x: 5,
    y: 65,
    floatDuration: 5.5,
    floatDelay: 2.0,
  },
  {
    id: "private",
    label: "Private Celebrations",
    icon: "🥂",
    tagline: "Intimate. Exclusive. Unforgettable.",
    description:
      "Private celebrations are built around personal moments, intimate experiences, and individual preferences, with every detail curated to reflect the host, occasion, and guests.",
    color: "#D4A853",
    x: 38,
    y: 70,
    floatDuration: 6.8,
    floatDelay: 0.4,
  },
  {
    id: "nri",
    label: "International Events",
    icon: "🌏",
    tagline: "Home, wherever you are.",
    description:
      "International events involve cross-border planning, travel, talent, hospitality, and local execution, requiring strong coordination between teams, vendors, artists, and guests across locations.",
    color: "#C9A24D",
    x: 68,
    y: 72,
    floatDuration: 7.6,
    floatDelay: 1.7,
  },
  {
    id: "luxury",
    label: "Luxury Events",
    icon: "👑",
    tagline: "When nothing less than perfect is acceptable.",
    description:
      "Luxury events are defined by exclusivity, personalization, attention to detail, and elevated guest experiences, where every element is carefully curated rather than simply arranged.",
    color: "#E6C073",
    x: 15,
    y: 85,
    floatDuration: 6.0,
    floatDelay: 0.9,
  },
  {
    id: "social",
    label: "Social Celebrations",
    icon: "🎈",
    tagline: "Every reason to celebrate deserves to be remembered.",
    description:
      "Social celebrations bring families, friends, communities, and entertainment together, creating memorable experiences through thoughtful planning, hospitality, and engaging programming",
    color: "#D4A853",
    x: 58,
    y: 88,
    floatDuration: 7.2,
    floatDelay: 1.3,
  },
];

export const heroImage = "/media/hero.jpg";

export const storyImages = [
  {
    src: "/media/story-bride.jpg",
    caption: "A bride walking into her dream wedding.",
  },
  {
    src: "/media/story-family.jpg",
    caption: "A family watching a celebration unfold.",
  },
  {
    src: "/media/story-crowd.jpg",
    caption: "Thousands of people singing the same line together.",
  },
  {
    src: "/media/story-community.jpg",
    caption: "A community becoming one.",
  },
];

export const philosophyImages = [
  "/media/tk-7.jpg",
  "/media/gujrock-dsc.jpg",
  "/media/khelaiya-7.jpg",
  "/media/gujrock-7.jpg",
];

export const founderImage = "/media/founder.jpg";

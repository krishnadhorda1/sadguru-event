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
  location: "Gujarat, India — creating everywhere",
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
        label: "PREWEDDING SANGEET",
        link: "https://www.instagram.com/reel/DcyZTaWs6bp/",
      },
      {
        label: "HALDI MELA",
        link: "https://www.instagram.com/reel/Dc01WNyqIaT/",
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
    location: "Gujarat, India",
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
    location: "Gujarat, India",
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
    location: "Gujarat, India",
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

export const services = [
  {
    num: "01",
    title: "WEDDINGS",
    desc: "Complete wedding planning, celebration management, guest coordination, entertainment and hospitality.",
    image: u("https://images.unsplash.com/photo-1727430256509-0f897d6f4765?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjB3ZWRkaW5nJTIwYnJpZGUlMjBncm9vbSUyMGNlcmVtb255JTIwY2luZW1hdGljfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0", 900),
  },
  {
    num: "02",
    title: "EVENT MANAGEMENT",
    desc: "Concept development, planning, coordination, vendors, timelines and complete execution.",
    image: u("https://images.unsplash.com/photo-1772127822562-a898d9f5733c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwyfHxsdXh1cnklMjB3ZWRkaW5nJTIwZGVjb3IlMjBtYW5kYXAlMjBmbG93ZXJzJTIwZXZlbmluZ3xlbnwwfHx8fDE3OTAxOTM1MDF8MA&ixlib=rb-4.1.0", 900),
  },
  {
    num: "03",
    title: "RSVP & GUEST MANAGEMENT",
    desc: "Guest communication, confirmations, document collection, tracking and live updates.",
    image: u("https://images.pexels.com/photos/39341211/pexels-photo-39341211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 900),
  },
  {
    num: "04",
    title: "TRAVEL & HOSPITALITY",
    desc: "Ticket booking, hotels, airport pickup and drop, transportation and guest assistance.",
    image: u("https://images.unsplash.com/photo-1630526720753-aa4e71acf67d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwYnJpZGUlMjBncm9vbSUyMGNlcmVtb255JTIwY2luZW1hdGljfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0", 900),
  },
  {
    num: "05",
    title: "ARTIST & ENTERTAINMENT MANAGEMENT",
    desc: "Artist coordination, scheduling, hospitality, performance management and event-day coordination.",
    image: u("https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxjb25jZXJ0JTIwc3RhZ2UlMjBjcm93ZCUyMGRyYW1hdGljJTIwbGlnaHRzfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0", 900),
  },
  {
    num: "06",
    title: "EVENT PRODUCTION",
    desc: "Stage, sound, lighting, LED, technical production and production coordination.",
    image: u("https://images.unsplash.com/photo-1459749411175-04bf5292ceea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBjcm93ZCUyMGRyYW1hdGljJTIwbGlnaHRzfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0", 900),
  },
  {
    num: "07",
    title: "CULTURAL EXPERIENCES",
    desc: "Gujarati cultural programmes, folk music, storytelling and contemporary cultural formats.",
    image: u("https://images.unsplash.com/photo-1764014792668-bc484714744f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBjbGFzc2ljYWwlMjBmb2xrJTIwZGFuY2UlMjBzdGFnZSUyMHBlcmZvcm1hbmNlfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0", 900),
  },
  {
    num: "08",
    title: "LIVE CONCERTS",
    desc: "Large-scale musical and entertainment experiences.",
    image: u("https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxjb25jZXJ0JTIwc3RhZ2UlMjBjcm93ZCUyMGRyYW1hdGljJTIwbGlnaHRzfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0", 900),
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

export const audienceCategories = [
  "Weddings",
  "Destination Weddings",
  "Corporate Events",
  "Cultural Events",
  "Community Gatherings",
  "Live Concerts",
  "Concept Shows",
  "Private Celebrations",
  "NRI / International Events",
  "Luxury Events",
  "Social Celebrations",
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

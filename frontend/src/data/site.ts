// ─────────────────────────────────────────────────────────────────────────────
// SADGURU EVENT PLANNER — central content file.
// Replace the PLACEHOLDER contact details and the image / video URLs below with
// real media. To add a new project, add one more object to `premiumWork`.
// ─────────────────────────────────────────────────────────────────────────────

export const site = {
  name: "Sadguru Event Planner",
  tagline: "Weddings · Cultural Shows · Community Gatherings · Live Concerts",
  // PLACEHOLDER — replace with the real WhatsApp number (country code, no + or spaces)
  whatsappNumber: "919876543210",
  // PLACEHOLDER — display details
  phoneDisplay: "+91 98765 43210",
  email: "hello@sadgurueventplanner.com",
  instagramHandle: "@sadgurueventplanner",
  instagramUrl: "https://instagram.com/sadgurueventplanner",
  location: "Gujarat, India — creating everywhere",
};

const u = (url: string, w = 1800) =>
  url.includes("pexels.com") ? url : `${url}&w=${w}&q=80&auto=format&fit=crop`;

export interface Project {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  image: string;
  video: string; // YouTube embed or public video URL — leave "" to hide
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
    image: u(
      "https://images.unsplash.com/photo-1611106211090-8f3c79eb8552?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjB3ZWRkaW5nJTIwYnJpZGUlMjBncm9vbSUyMGNlcmVtb255JTIwY2luZW1hdGljfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0"
    ),
    video: "",
    gallery: [
      u("https://images.unsplash.com/photo-1727430256509-0f897d6f4765?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjB3ZWRkaW5nJTIwYnJpZGUlMjBncm9vbSUyMGNlcmVtb255JTIwY2luZW1hdGljfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0", 1200),
      u("https://images.pexels.com/photos/39341211/pexels-photo-39341211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 1200),
      u("https://images.unsplash.com/photo-1630526720753-aa4e71acf67d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjB3ZWRkaW5nJTIwYnJpZGUlMjBncm9vbSUyMGNlcmVtb255JTIwY2luZW1hdGljfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0", 1200),
      u("https://images.unsplash.com/photo-1744805624954-a6686543c3ff?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwZGVjb3IlMjBtYW5kYXAlMjBmbG93ZXJzJTIwZXZlbmluZ3xlbnwwfHx8fDE3OTAxOTM1MDF8MA&ixlib=rb-4.1.0", 1200),
      u("https://images.unsplash.com/photo-1772127822552-ce9ef537bdcf?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwzfHxsdXh1cnklMjB3ZWRkaW5nJTIwZGVjb3IlMjBtYW5kYXAlMjBmbG93ZXJzJTIwZXZlbmluZ3xlbnwwfHx8fDE3OTAxOTM1MDF8MA&ixlib=rb-4.1.0", 1200),
      u("https://images.unsplash.com/photo-1665960213508-48f07086d49c?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjB3ZWRkaW5nJTIwYnJpZGUlMjBncm9vbSUyMGNlcmVtb255JTIwY2luZW1hdGljfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0", 1200),
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
    image: u(
      "https://images.unsplash.com/photo-1565035010268-a3816f98589a?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHw0fHxjb25jZXJ0JTIwc3RhZ2UlMjBjcm93ZCUyMGRyYW1hdGljJTIwbGlnaHRzfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0"
    ),
    video: "",
    gallery: [
      u("https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxjb25jZXJ0JTIwc3RhZ2UlMjBjcm93ZCUyMGRyYW1hdGljJTIwbGlnaHRzfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0", 1200),
      u("https://images.unsplash.com/photo-1470229722913-7c0e2dbbafd3?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwyfHxjb25jZXJ0JTIwc3RhZ2UlMjBjcm93ZCUyMGRyYW1hdGljJTIwbGlnaHRzfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0", 1200),
      u("https://images.unsplash.com/photo-1459749411175-04bf5292ceea?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwxfHxjb25jZXJ0JTIwc3RhZ2UlMjBjcm93ZCUyMGRyYW1hdGljJTIwbGlnaHRzfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0", 1200),
    ],
    location: "Gujarat, India",
    guests: "A crowd singing every line together.",
    description:
      "Where heritage meets amplifiers. Gujrock pairs the soul of Gujarati music with the scale of a modern arena show — artists, light, sound and thousands of voices moving as one.",
    highlights: [
      "Monumental stage architecture",
      "Artist line-up curation",
      "Intelligent lighting design",
      "A crowd that became the chorus",
    ],
    responsibilities: [
      "Stage & Production Design",
      "Sound & Lighting Engineering",
      "Artist Coordination",
      "Crowd Flow & Safety",
      "Backstage Management",
      "Show Calling",
    ],
  },
  {
    id: "rang-kasumbal-gujarat",
    title: "RANG KASUMBAL GUJARAT",
    subtitle: "Gujarati folk-fusion and cultural storytelling.",
    category: "Cultural Experience",
    image: u(
      "https://images.unsplash.com/photo-1712192682756-ae5b3a8e7508?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBjbGFzc2ljYWwlMjBmb2xrJTIwZGFuY2UlMjBzdGFnZSUyMHBlcmZvcm1hbmNlfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0"
    ),
    video: "",
    gallery: [
      u("https://images.unsplash.com/photo-1764014792668-bc484714744f?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHw0fHxpbmRpYW4lMjBjbGFzc2ljYWwlMjBmb2xrJTIwZGFuY2UlMjBzdGFnZSUyMHBlcmZvcm1hbmNlfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0", 1200),
      u("https://images.unsplash.com/photo-1652111132299-ff1056c87b35?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwxfHxpbmRpYW4lMjBjbGFzc2ljYWwlMjBmb2xrJTIwZGFuY2UlMjBzdGFnZSUyMHBlcmZvcm1hbmNlfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0", 1200),
    ],
    location: "Gujarat, India",
    guests: "An evening woven from colour and memory.",
    description:
      "Folk music, storytelling and contemporary stagecraft in a single arc — a cultural evening that honours tradition while feeling utterly present.",
    highlights: [
      "Folk virtuosos on a modern stage",
      "Narrative-driven show flow",
      "Heritage scenography",
    ],
    responsibilities: [
      "Creative Direction",
      "Artist & Folk Ensemble Management",
      "Stage & Scenic Design",
      "Guest Experience",
    ],
  },
  {
    id: "pre-navratri-celebrations",
    title: "PRE-NAVRATRI CELEBRATIONS",
    subtitle: "High-energy Gujarati celebration and entertainment.",
    category: "Community Gathering",
    image: u(
      "https://images.unsplash.com/photo-1756382616831-998e8baf9675?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBjbGFzc2ljYWwlMjBmb2xrJTIwZGFuY2UlMjBzdGFnZSUyMHBlcmZvcm1hbmNlfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0"
    ),
    video: "",
    gallery: [
      u("https://images.pexels.com/photos/36570979/pexels-photo-36570979.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 1200),
      u("https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 1200),
    ],
    location: "Gujarat, India",
    guests: "A community becoming one.",
    description:
      "Before the nine nights begin, the rhythm starts here — dhol, colour and thousands of dancers in perfect, joyful chaos, held together by quiet planning.",
    highlights: [
      "Community-scale celebration",
      "Live dhol & folk orchestration",
      "Seamless crowd hospitality",
    ],
    responsibilities: [
      "Venue & Ground Management",
      "Sound for Open Grounds",
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

export const heroImage = u(
  "https://images.unsplash.com/photo-1744805624954-a6686543c3ff?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHwxfHxsdXh1cnklMjB3ZWRkaW5nJTIwZGVjb3IlMjBtYW5kYXAlMjBmbG93ZXJzJTIwZXZlbmluZ3xlbnwwfHx8fDE3OTAxOTM1MDF8MA&ixlib=rb-4.1.0",
  2200
);

export const storyImages = [
  {
    src: u("https://images.unsplash.com/photo-1727430256509-0f897d6f4765?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjA3MDB8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjB3ZWRkaW5nJTIwYnJpZGUlMjBncm9vbSUyMGNlcmVtb255JTIwY2luZW1hdGljfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0", 900),
    caption: "A bride walking into her dream wedding.",
  },
  {
    src: u("https://images.pexels.com/photos/39341211/pexels-photo-39341211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 900),
    caption: "A family watching a celebration unfold.",
  },
  {
    src: u("https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxjb25jZXJ0JTIwc3RhZ2UlMjBjcm93ZCUyMGRyYW1hdGljJTIwbGlnaHRzfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0", 900),
    caption: "Thousands of people singing the same line together.",
  },
  {
    src: u("https://images.unsplash.com/photo-1756382616831-998e8baf9675?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwyfHxpbmRpYW4lMjBjbGFzc2ljYWwlMjBmb2xrJTIwZGFuY2UlMjBzdGFnZSUyMHBlcmZvcm1hbmNlfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0", 900),
    caption: "A community becoming one.",
  },
];

export const philosophyImages = [
  u("https://images.unsplash.com/photo-1540039155733-5bb30b53aa14?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Njd8MHwxfHNlYXJjaHwzfHxjb25jZXJ0JTIwc3RhZ2UlMjBjcm93ZCUyMGRyYW1hdGljJTIwbGlnaHRzfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0", 1000),
  u("https://images.pexels.com/photos/39341211/pexels-photo-39341211.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940", 1000),
  u("https://images.unsplash.com/photo-1712192682756-ae5b3a8e7508?crop=entropy&cs=srgb&fm=jpg&ixid=M3w4NjAzNzl8MHwxfHNlYXJjaHwzfHxpbmRpYW4lMjBjbGFzc2ljYWwlMjBmb2xrJTIwZGFuY2UlMjBzdGFnZSUyMHBlcmZvcm1hbmNlfGVufDB8fHx8MTc5MDE5MzUwMXww&ixlib=rb-4.1.0", 1000),
  u("https://images.unsplash.com/photo-1607861876572-07754b7bba0d?crop=entropy&cs=srgb&fm=jpg&ixid=M3w3NTY2Nzd8MHwxfHNlYXJjaHw0fHxsdXh1cnklMjB3ZWRkaW5nJTIwZGVjb3IlMjBtYW5kYXAlMjBmbG93ZXJzJTIwZXZlbmluZ3xlbnwwfHx8fDE3OTAxOTM1MDF8MA&ixlib=rb-4.1.0", 1000),
];

export const founderImage = u(
  "https://images.pexels.com/photos/713149/pexels-photo-713149.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=650&w=940",
  1200
);

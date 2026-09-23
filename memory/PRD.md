# SADGURU EVENT PLANNER — PRD

## Original problem statement
Build a world-class, cinematic, conversion-focused marketing website for **Sadguru Event Planner** — a premium Indian event company (weddings, cultural shows, community gatherings, live concerts). Not a personal site for founder Krishna Dhorda: the brand leads; the founder story appears later to build trust. Client journey: IMPACT → CAPABILITY → PROOF → PROCESS → TRUST → DIFFERENTIATION → CONVERSION. Quiet luxury + cinematic storytelling + Indian soul. Palette: #0A0806 black, #171310 charcoal, #3D1220 maroon, #2A0D16 burgundy, #4A2D1C earthy brown, #C9A24D antique gold, #E6C073 champagne, #F3ECDD ivory (gold as accent only). Editorial serif + Manrope. Less text, more impact.

## User choices (ask_human)
- Contact form opens **WhatsApp chat only** — no backend storage of enquiries.
- Media: owner will paste real image/YouTube/video URLs; site uses a **centralized data file** with clearly swappable URLs (`frontend/src/data/site.ts`).
- Contact details are **placeholders** to be swapped later.
- No admin login.

## Architecture
- Frontend-only experience: Vite + React 19 + TS, Tailwind v4, `motion` (framer-motion v12) for reveals, `lenis` for smooth momentum scroll (`frontend/src/lib/lenis.ts` singleton).
- Single-page site, `frontend/src/pages/Home.tsx` composing section components in `frontend/src/components/`.
- All content/media/contact constants centralized in `frontend/src/data/site.ts` — add a project by appending one object to `premiumWork`.
- Backend (FastAPI + Mongo) untouched; only the template `/api/status` endpoint exists (no data needs).

## User personas
Luxury wedding families, destination/NRI wedding planners, corporates, Gujarati associations/cultural trusts, community organizers, concert promoters, artist managers.

## Implemented (2026-07)
- Cinematic hero: masked line-by-line reveal ("SADGURU / EVENT PLANNER"), parallax golden-mandap backdrop, gold scrim, EXPLORE OUR WORK CTA, vertical scroll cue.
- Slow editorial marquee with gold diamond delimiters.
- Scroll story sequence: "We don't just plan events." → image interlude with 4 captioned moments → "We create moments." → "Moments people remember." → "Different events/people/emotions" → maroon climax "To manage every heartbeat."
- What We Do: 8 editorial numbered rows with hover image preview (desktop) and gold micro-interactions.
- Our Premium Work: featured Trusha & Karan wedding case study + GUJROCK, Rang Kasumbal Gujarat, Pre-Navratri; asymmetric editorial layout; cinematic modal with hero image, stats, description, responsibilities grid, highlights, gallery, optional video embed slot.
- How We Work: 01–05 Discover/Concept/Plan/Execute/Experience + "You live the moment. We handle everything behind it."
- Behind Sadguru: Krishna Dhorda founder story (why Sadguru exists, not a biography).
- Philosophy emotional peak: "This is our real earning." → "The feeling." image strip → "The hug."
- Values (4), Who We Create For (11 categories), final film-like closing sequence, Contact with WhatsApp-composing form + direct channels, footer.
- Fixed blurred nav + full-screen serif mobile menu; custom SVG diamond-S logo used as favicon; SEO title/meta/OG; data-testids throughout; WCAG-conscious contrast; film grain overlay; zero horizontal overflow on mobile.
- Font note: Cormorant Garamond is not installable in this environment (no CDN fonts allowed); Playfair Display Variable is used as the editorial serif with Manrope — swap is a 2-line change if a licensed Cormorant file is added later.

## Verification done
- `yarn typecheck` clean; `/api/status` curl OK; public URL 200.
- Browser pass on public URL: hero, story, services, portfolio, project modal open/close, contact form fill; mobile 390px pass: hamburger menu, nav scroll, 0px horizontal overflow.

## Wired real media (2026-07, follow-up)
- T&K Wedding: all 10 real photos from the owner's Drive folder now live locally in `frontend/public/media/` — `tk-mainbanner.jpg` (the KARAN & TRUSHA banner) is the featured project image; `tk-1..tk-9` form the case-study gallery (baraat, sangeet stage, decor, rituals).
- Founder portrait: real photo of Krishna Dhorda (`/media/founder.png`) in the Behind Sadguru section.
- Story sequence strip: all 4 owner-chosen photos wired — story-bride, story-family, story-crowd, story-community.
- Contact details are REAL: WhatsApp/Phone +91 93727 49345, email krishnadhorda1@gmail.com, Instagram @sadgurueventplanner_official.
- Wedding case study: two Instagram reel embeds (Prewedding Sangeet, Haldi Carnival) via /embed iframes.
- Gujrock case study: real stage/crowd photos (gujrock-1..7, box1/2/5/6, dsc) + highlighted "Words from the audience" review panel (feedback-1..5 screenshots) in a gold-bordered maroon block inside the modal.
- Project model extended: `reels?: {label, embed}[]` and `reviews?: string[]`.
- Remaining placeholders: Rang Kasumbal + Pre-Navratri photos, hero image, philosophy strip — owner shares later.

## Backlog / next
- P0: Swap placeholder contact details (WhatsApp number, email, Instagram) and remaining placeholder media (Gujrock, Rang Kasumbal, Pre-Navratri, hero, story images) in `src/data/site.ts`.
- P1: Add real YouTube/showreel embeds per project (`video` field); hero video loop when a video URL is available.
- P1: Real founder portrait for the About section.
- P2: Dedicated case-study pages per project (SEO), blog/journal, testimonials strip, multi-language (Gujarati/Hindi) toggle.

/**
 * ═══════════════════════════════════════════════════════════════
 *  IMAGE URLS — Update all Firebase image links here only
 * ═══════════════════════════════════════════════════════════════
 *
 *  Replace each placeholder URL with your Firebase Storage URL.
 *  Format: https://firebasestorage.googleapis.com/v0/b/YOUR_PROJECT/o/...
 */

const PLACEHOLDER = (label, w = 400, h = 400) =>
  `https://placehold.co/${w}x${h}/1e3a8a/fbbf24?text=${encodeURIComponent(label)}`;

export const images = {
  // Brand
  logo: PLACEHOLDER('Logo', 200, 80),
  favicon: PLACEHOLDER('BBC', 64, 64),

  // Hero
  heroBackground: PLACEHOLDER('Hero+BG', 1920, 1080),
  heroPattern: '', // optional overlay texture URL

  // About
  aboutBanner: PLACEHOLDER('About+Us', 800, 600),
  classroom: PLACEHOLDER('Classroom', 600, 400),

  // Founders (mother & son)
  founders: {
    mother: {
      photo: PLACEHOLDER('Founder+Mother', 500, 600),
    },
    son: {
      photo: PLACEHOLDER('Founder+Son', 500, 600),
    },
  },

  // Staff members (5–8) — add or remove entries as needed
  staff: [
    { id: 'staff-1', photo: PLACEHOLDER('Staff+1', 400, 400) },
    { id: 'staff-2', photo: PLACEHOLDER('Staff+2', 400, 400) },
    { id: 'staff-3', photo: PLACEHOLDER('Staff+3', 400, 400) },
    { id: 'staff-4', photo: PLACEHOLDER('Staff+4', 400, 400) },
    { id: 'staff-5', photo: PLACEHOLDER('Staff+5', 400, 400) },
    { id: 'staff-6', photo: PLACEHOLDER('Staff+6', 400, 400) },
    { id: 'staff-7', photo: PLACEHOLDER('Staff+7', 400, 400) },
  ],

  // Programs / boards icons (optional decorative images)
  programs: {
    cbse: PLACEHOLDER('CBSE', 120, 120),
    icse: PLACEHOLDER('ICSE', 120, 120),
    state: PLACEHOLDER('State', 120, 120),
    jee: PLACEHOLDER('JEE', 120, 120),
    neet: PLACEHOLDER('NEET', 120, 120),
    foundation: PLACEHOLDER('Foundation', 120, 120),
  },

  // Gallery (optional — for future use)
  gallery: [
    PLACEHOLDER('Gallery+1', 600, 400),
    PLACEHOLDER('Gallery+2', 600, 400),
    PLACEHOLDER('Gallery+3', 600, 400),
  ],
};

export default images;

// All site imagery in one place. Swap any URL here and it updates everywhere.
// Source: Unsplash (free for commercial use, no attribution required).

const p = (id: string, w = 900) =>
  `https://images.unsplash.com/photo-${id}?auto=format&fit=crop&w=${w}&q=80`;

export const images = {
  // Kansas City
  cityBand: p("1536622638768-9403a9d35a1a", 1600),
  city2: p("1572764861775-3fc7fe6a76f0"),

  // Case studies
  comets: p("1571826945830-5423b80a986c"),
  officeBrokers: p("1497015289639-54688650d173"),
  cleanCuts: p("1620325867502-221cfb5faa5f"),
  content: p("1625690303837-654c9666d2d0"),

  // Work gallery
  gallery: [
    p("1582005450386-52b25f82d9bb"),
    p("1612548403247-aa2873e9422d"),
    p("1683721003111-070bcc053d8b"),
    p("1676277759236-fdc9fe039d9c"),
    p("1553166272-e69910ab5ae1"),
    p("1603145733146-ae562a55031e"),
    p("1666698809123-44e998e93f23"),
    p("1611784728558-6c7d9b409cdf"),
  ],

  // Team / about
  team: p("1758873272562-aa5459cbf34b", 1200),
};

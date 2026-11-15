// ---------------------------------------------------------------------------
// All content for the new mobile-first homepage lives here.
// Edit prices, durations, text and images in this one file.
//
// NOTE: Prices marked "VERIFY" are starting points taken from the site's
// existing copy (e.g. "from AED 99", ants "from 157 AED", bed bugs "from
// 250 AED") or estimated. Please confirm them before going live.
// ---------------------------------------------------------------------------

export const CONTACT = {
  phoneDisplay: "04 425 1557",
  phoneHref: "tel:+97144251557",
  whatsapp: "97144251557",
  myWarranty: "https://bookingwidget.pestcontrol.ae/#/login",
  googleReviews:
    "https://search.google.com/local/reviews?placeid=ChIJX4QGI71pXz4RLZPFCvv3qzo",
  writeReview: "https://g.page/r/CS2TxQr796s6EBM/review",
};

export const EMIRATES = ["Dubai", "Sharjah", "Ajman"];

export const RATING = {
  score: 4.8,
  countLabel: "9.5K+",
  histogram: [
    { stars: 5, pct: 85 },
    { stars: 4, pct: 8 },
    { stars: 3, pct: 3 },
    { stars: 2, pct: 2 },
    { stars: 1, pct: 2 },
  ],
};

// Pest categories – shown as the icon grid + sticky chips
export const CATEGORIES = [
  { id: "cockroach", label: "Cockroaches", icon: "/images/services/cockroaches.webp", blurb: "Gel + spray treatment that reaches hidden nests in kitchens and bathrooms.", learnMore: "/cockroach-control-dubai" },
  { id: "bedbugs", label: "Bed Bugs", icon: "/images/services/bedbugs.webp", blurb: "Multi-visit treatment that clears eggs, nymphs and adults.", learnMore: "/bed-bugs-control-dubai" },
  { id: "ants", label: "Ants", icon: "/images/services/ants.webp", blurb: "We trace the trail back to the colony – indoors and outdoors.", learnMore: "/ants-control" },
  { id: "termites", label: "Termites", icon: "/images/services/termites.webp", blurb: "Inspection with detectors, targeted treatment and barrier protection.", learnMore: "/termites-control-dubai" },
  { id: "rodents", label: "Rats & Mice", icon: "/images/services/rats.webp", blurb: "Bait stations, traps and entry-point proofing for lasting results.", learnMore: "/rodent-control-dubai" },
  { id: "mosquito", label: "Mosquitoes", icon: "/images/services/mosquites.webp", blurb: "Indoor and outdoor treatment of breeding and resting spots.", learnMore: "/mosquito-control" },
  { id: "flies", label: "Flies", icon: "/images/services/flies.webp", blurb: "Targeted control around bins, kitchens and entry points.", learnMore: "/fly-control" },
];

const APT = (base, step = 30) => [
  { id: "studio", label: "Studio", price: base },
  { id: "1bhk", label: "1 BHK", price: base + step },
  { id: "2bhk", label: "2 BHK", price: base + step * 2 },
  { id: "3bhk", label: "3 BHK", price: base + step * 3 },
  { id: "4bhk", label: "4 BHK", price: base + step * 4 },
];
const VILLA = (base, step = 50) => [
  { id: "v2", label: "2 Bed villa", price: base },
  { id: "v3", label: "3 Bed villa", price: base + step },
  { id: "v4", label: "4 Bed villa", price: base + step * 2 },
  { id: "v5", label: "5+ Bed villa", price: base + step * 3 },
];

const WARRANTY = "6-month warranty";

// Services – grouped by `cat`
export const SERVICES = [
  // Cockroaches
  {
    id: "cr-kitchen", cat: "cockroach", title: "Cockroach Control – Kitchen Only",
    img: "/images/img/kitchen_treatment.jpg", badge: "Bestseller", warranty: WARRANTY,
    duration: "45 mins", options: [{ id: "single", label: "Kitchen", price: 99 }], // VERIFY
    points: ["Gel in cabinets, hinges, under sink & behind appliances", "Food-safe – no need to leave home"],
    includes: ["Inspection of all kitchen hiding spots", "Odourless gel bait in cracks & cabinets", "Targeted spray around drains", "Free follow-up visit within warranty"],
    before: ["Empty upper and lower kitchen cabinets", "Cover open food items", "Keep pets in another room during service"],
  },
  {
    id: "cr-apartment", cat: "cockroach", title: "Cockroach Control – Apartment",
    img: "/images/web_popup/apartment_banner.webp", warranty: WARRANTY,
    duration: "60–90 mins", options: APT(149, 30), // VERIFY
    points: ["Kitchen, bathrooms, bedrooms & balcony", "2-step gel + spray for 99% removal"],
    includes: ["Full apartment inspection", "Gel bait in kitchen & bathrooms", "Residual spray along skirting & entry points", "Unlimited call-outs for 6 months"],
    before: ["Empty kitchen cabinets", "Clear access under sinks", "Keep children & pets away for 2 hours"],
  },
  {
    id: "cr-villa", cat: "cockroach", title: "Cockroach Control – Villa",
    img: "/images/web_popup/villa_banner.webp", warranty: WARRANTY,
    duration: "2–3 hrs", options: VILLA(249, 50), // VERIFY
    points: ["Indoor + outdoor, garden & manholes", "Drain and manhole treatment included"],
    includes: ["Indoor and outdoor inspection", "Gel bait in wet areas", "Manhole & drain line treatment", "Garden perimeter spray"],
    before: ["Give access to manholes & garden", "Empty kitchen cabinets", "Keep pets indoors in one room"],
  },
  {
    id: "cr-bathroom", cat: "cockroach", title: "Cockroach Control – Bathroom",
    img: "/images/web_popup/bathroom.webp", warranty: WARRANTY,
    duration: "30 mins", options: [{ id: "1", label: "1 bathroom", price: 89 }, { id: "2", label: "2 bathrooms", price: 129 }, { id: "3", label: "3 bathrooms", price: 169 }], // VERIFY
    points: ["Spray + gel around drains, vanity & ducts"],
    includes: ["Drain & floor-trap treatment", "Gel bait under vanity units", "Spray around ventilation & pipes"],
    before: ["Remove items from under the sink", "Avoid washing floors for 24 hours"],
  },

  // Bed bugs
  {
    id: "bb-apartment", cat: "bedbugs", title: "Bed Bug Treatment – Apartment",
    img: "/images/web_popup/bedbugs_1.webp", badge: "Multi-visit", warranty: WARRANTY,
    duration: "2 visits", options: APT(250, 60), // VERIFY (site copy: from 250 AED)
    points: ["Mattresses, frames, sofas & curtains", "2 sessions to break the egg cycle"],
    includes: ["Detailed inspection of beds & furniture", "Treatment of mattresses, frames, sofas & curtains", "Second session to kill newly hatched bugs", "Aftercare guidance"],
    before: ["Wash bed linen at 60°C", "Remove items from under the beds", "Leave the home for 3–4 hours"],
  },
  {
    id: "bb-villa", cat: "bedbugs", title: "Bed Bug Treatment – Villa",
    img: "/images/web_popup/bedbugs_3.webp", warranty: WARRANTY,
    duration: "2 visits", options: VILLA(450, 100), // VERIFY
    points: ["All bedrooms, maid's room & living areas"],
    includes: ["Room-by-room inspection", "Mattress & furniture treatment", "Second session after 10–14 days"],
    before: ["Wash bed linen at 60°C", "Declutter bedrooms", "Leave the home for 3–4 hours"],
  },

  // Ants
  {
    id: "ant-apartment", cat: "ants", title: "Ant Control – Apartment",
    img: "/images/web_popup/ants_2.webp", warranty: WARRANTY,
    duration: "45–60 mins", options: APT(157, 32), // VERIFY (site copy: from 157 AED)
    points: ["Treats the colony, not just the trail", "Gel + safe spray in cracks & entry points"],
    includes: ["Trail tracing to the nest", "Gel bait in corners & cracks", "Spray around windows and doors"],
    before: ["Don't spray household insecticide before the visit", "Clean food spills"],
  },
  {
    id: "ant-villa", cat: "ants", title: "Ant Control – Villa (indoor + outdoor)",
    img: "/images/web_popup/ants_outdoor_1.webp", warranty: WARRANTY,
    duration: "1.5–2 hrs", options: VILLA(229, 50), // VERIFY
    points: ["Garden edges, pavements & tiled areas", "Plant-safe outdoor treatment"],
    includes: ["Indoor treatment of kitchen & bathrooms", "Outdoor perimeter & garden edge treatment", "Paving & tile joint treatment"],
    before: ["Give garden access", "Move pet bowls indoors"],
  },

  // Termites
  {
    id: "term-inspect", cat: "termites", title: "Termite Inspection & Treatment",
    img: "/images/web_popup/termite-detector.webp", badge: "Detector inspection", warranty: WARRANTY,
    duration: "Varies", options: [{ id: "apt", label: "Apartment", price: 299 }, { id: "villa", label: "Villa", price: 599 }], // VERIFY
    points: ["Detector scans behind walls, floors & frames", "Targeted foam / liquid treatment"],
    includes: ["Termite detector inspection", "Treatment of active areas", "Report with recommendations"],
    before: ["Clear access to door frames & wardrobes"],
  },

  // Rodents
  {
    id: "rat-apartment", cat: "rodents", title: "Rat & Mouse Control – Apartment",
    img: "/images/web_popup/rat_1.webp", warranty: WARRANTY,
    duration: "60 mins", options: APT(179, 30), // VERIFY
    points: ["Bait stations & traps placed safely", "Entry point check & advice"],
    includes: ["Activity inspection", "Tamper-proof bait stations", "Glue boards / traps where needed", "Follow-up visit"],
    before: ["Store food in sealed containers", "Note where you've seen droppings"],
  },
  {
    id: "rat-villa", cat: "rodents", title: "Rat Control – Villa & Garden",
    img: "/images/web_popup/rat_3.webp", warranty: WARRANTY,
    duration: "1.5–2 hrs", options: VILLA(299, 60), // VERIFY
    points: ["Outdoor bait stations & burrow treatment"],
    includes: ["Indoor + garden inspection", "Outdoor bait stations", "Burrow treatment", "Follow-up visit"],
    before: ["Give garden & store-room access"],
  },

  // Mosquito
  {
    id: "mosq", cat: "mosquito", title: "Mosquito Control – Indoor & Outdoor",
    img: "/images/new-home/inspec-treatement.jpg", warranty: WARRANTY,
    duration: "45–90 mins", options: [{ id: "apt", label: "Apartment", price: 149 }, { id: "villa", label: "Villa + garden", price: 249 }], // VERIFY
    points: ["Breeding & resting spot treatment", "Balconies, gardens & water features"],
    includes: ["Standing water inspection", "Larvicide in breeding spots", "Residual spray on resting surfaces"],
    before: ["Empty plant saucers & buckets", "Close windows during indoor treatment"],
  },

  // Flies
  {
    id: "flies", cat: "flies", title: "Fly Control",
    img: "/images/web_popup/drains.webp", warranty: WARRANTY,
    duration: "45–60 mins", options: [{ id: "apt", label: "Apartment", price: 149 }, { id: "villa", label: "Villa", price: 249 }], // VERIFY
    points: ["Bins, drains, kitchens & entry points"],
    includes: ["Source inspection (bins, drains, waste)", "Targeted spray & bait", "Prevention tips"],
    before: ["Empty and close bins", "Clean drains if possible"],
  },
];

export const OFFERS = [
  { id: "o1", tone: "green", kicker: "First visit", title: "Cockroach-free kitchen from AED 99", cta: "Book now", img: "/images/img/warranty_man.jpg", target: "cockroach" },
  { id: "o2", tone: "dark", kicker: "Peace of mind", title: "6 months warranty, unlimited call-outs", cta: "See services", img: "/images/web_popup/6month.webp", target: "cockroach" },
  { id: "o3", tone: "cream", kicker: "Pay later", title: "Split in 4 payments with Tabby", cta: "Learn more", img: "/images/new-home/tabby.png", target: null },
];

export const PROMISE = [
  { icon: "badge", title: "DM-approved", text: "Licensed by Dubai Municipality" },
  { icon: "leaf", title: "Family-safe", text: "Safe for kids & pets" },
  { icon: "tag", title: "Clear pricing", text: "No hidden charges" },
  { icon: "shield", title: "6-month cover", text: "Free re-visits if pests return" },
];

export const STEPS = [
  { title: "Pick your service", text: "Choose the pest and your home size." },
  { title: "Choose a time", text: "Same-day slots available, 7 days a week." },
  { title: "We treat it", text: "A trained, uniformed technician arrives on time." },
  { title: "Stay protected", text: "6-month warranty with free call-outs." },
];

export const STATS = [
  { value: "10+", label: "years in Dubai" },
  { value: "4.8★", label: "Google rating" },
  { value: "180", label: "days warranty" },
  { value: "7", label: "days a week" },
];

// Real customer reviews (from the existing Testimonial component)
export const REVIEWS = [
  { name: "Madhuvasant Prabhu", date: "Aug 2024", text: "The company gave good and prompt service with good quality of pesticide, the effects could be seen immediately. The technician was knowledgeable about the places that would lead to the roaches coming back and sprayed accordingly." },
  { name: "Clayton Siqueira", date: "Aug 2024", text: "The guy who came today was good at his work and very polite. He explained why this is happening and gave further suggestions." },
  { name: "Steve Rithick", date: "Aug 2024", text: "The guy was so polite and did his job in a good manner." },
  { name: "Ramchandra Saw", date: "Aug 2024", text: "Great service from Akkad Pest Control." },
  { name: "Faiyaz Kashimji", date: "Aug 2024", text: "Service was excellent." },
];

export const AREAS = [
  { label: "Al Barsha", href: "/pest-control-in-al-barsha" },
  { label: "Deira", href: "/pest-control-in-deira" },
  { label: "Mirdif", href: "/pest-control-in-mirdif" },
  { label: "Palm Jumeirah", href: "/pest-control-in-palm-jumeirah" },
  { label: "Arabian Ranches", href: "/pest-control-in-arabian-ranches" },
  { label: "Silicon Oasis", href: "/pest-control-in-silicon-oasis" },
  { label: "Motor City", href: "/pest-control-in-motor-city" },
  { label: "Jumeirah Golf Estates", href: "/pest-control-in-jumeirah-golf-estates" },
  { label: "Al Nahda, Sharjah", href: "/pest-control-in-al-nahda-sharjah" },
  { label: "Sharjah Waterfront", href: "/pest-control-in-sharjah-waterfront-city" },
];

export const FAQS = [
  { q: "Is pest control safe for children and pets?", a: "Yes. We use Dubai Municipality approved, eco-friendly products that are safe for children and pets when applied by our certified technicians. We'll tell you exactly how long to keep them out of treated areas." },
  { q: "How much does pest control cost in Dubai?", a: "Treatments start from AED 99 depending on the pest and the size of your home. You'll see the price before you book – no hidden charges." },
  { q: "What does the 6-month warranty cover?", a: "If pests return within the warranty period, we come back and re-treat at no extra cost. You can track it any time from My Warranty." },
  { q: "Do you offer same-day service?", a: "Yes. Same-day visits are available across Dubai, Sharjah and Ajman, 7 days a week. WhatsApp or call us for the fastest slot." },
  { q: "Do I need to leave my home during treatment?", a: "For most cockroach and ant treatments you can stay. For bed bug treatment we recommend leaving for 3–4 hours. Your technician will guide you." },
  { q: "Is Akkad licensed by Dubai Municipality?", a: "Yes. Akkad Pest Control Services LLC is fully licensed by Dubai Municipality and was awarded Best Pest Control Company 2025." },
];

export const TIME_SLOTS = ["8 AM – 12 PM", "12 PM – 4 PM", "4 PM – 8 PM"];

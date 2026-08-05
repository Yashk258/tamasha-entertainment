export const SITE = {
  name: "Tamasha Entertainment",
  short: "Tamasha",
  tagline: "We don't organize events. We create unforgettable memories.",
  phone: "+91 98765 43210",
  whatsapp: "919876543210",
  email: "hello@tamasha.live",
  address: "3rd Floor, Palladium House, Linking Road, Bandra West, Mumbai 400050",
  socials: [
    { label: "Instagram", href: "https://instagram.com" },
    { label: "YouTube", href: "https://youtube.com" },
    { label: "X", href: "https://x.com" },
    { label: "LinkedIn", href: "https://linkedin.com" },
  ],
};

export const NAV_LINKS = [
  { label: "Home", to: "/" },
  { label: "Events", to: "/events" },
  { label: "Gallery", to: "/gallery" },
  { label: "About", to: "/about" },
  { label: "Blog", to: "/blog" },
  { label: "Contact", to: "/contact" },
] as const;

export const PARTNERS = [
  "REDBULL",
  "SPOTIFY",
  "BOOKMYSHOW",
  "SONY MUSIC",
  "PEPSI",
  "JBL",
  "SWIGGY",
  "VOGUE INDIA",
  "MTV",
  "ZOMATO",
];

export type Experience = {
  id: string;
  title: string;
  category: string;
  city: string;
  venue: string;
  date: string;
  iso: string;
  price: number;
  ticketsLeft: number;
  totalTickets: number;
  image: string;
  accent: "brand" | "pink" | "cyan" | "amber";
  blurb: string;
};

export const EXPERIENCES: Experience[] = [
  {
    id: "rangleela-holi",
    title: "Rangleela — Neon Holi",
    category: "Holi Festival",
    city: "Mumbai",
    venue: "Jio Grounds, BKC",
    date: "14 March",
    iso: "2027-03-14T11:00:00+05:30",
    price: 1299,
    ticketsLeft: 184,
    totalTickets: 5000,
    image: "holi",
    accent: "pink",
    blurb: "Organic colours, foam cannons and three stages of house, techno and desi bass.",
  },
  {
    id: "dandiya-raas",
    title: "Dandiya Raas 3.0",
    category: "Dandiya Night",
    city: "Ahmedabad",
    venue: "Riverfront Arena",
    date: "02 October",
    iso: "2026-10-02T18:30:00+05:30",
    price: 899,
    ticketsLeft: 612,
    totalTickets: 8000,
    image: "dandiya",
    accent: "amber",
    blurb: "9 nights, 40 dhol players, live garba orchestra and India's largest LED chakra.",
  },
  {
    id: "midnight-echo",
    title: "Midnight Echo — Live",
    category: "Live Concert",
    city: "Bengaluru",
    venue: "Phoenix Arena",
    date: "21 November",
    iso: "2026-11-21T19:00:00+05:30",
    price: 2499,
    ticketsLeft: 96,
    totalTickets: 12000,
    image: "concert",
    accent: "cyan",
    blurb: "A stadium-scale production with a 24-piece band and full kinetic light rig.",
  },
  {
    id: "nye-skyline",
    title: "NYE Skyline",
    category: "New Year Party",
    city: "Goa",
    venue: "Sunset Cliff Estate",
    date: "31 December",
    iso: "2026-12-31T20:00:00+05:30",
    price: 4999,
    ticketsLeft: 42,
    totalTickets: 1500,
    image: "hero",
    accent: "brand",
    blurb: "Cliffside countdown, drone show and a headline set announced 48 hours prior.",
  },
  {
    id: "swaad-food-fest",
    title: "Swaad Street Fest",
    category: "Food Festival",
    city: "Delhi NCR",
    venue: "Aerocity Lawns",
    date: "08 February",
    iso: "2027-02-08T16:00:00+05:30",
    price: 599,
    ticketsLeft: 1320,
    totalTickets: 9000,
    image: "food",
    accent: "amber",
    blurb: "120 kitchens, 14 states, live tandoors and a midnight dessert alley.",
  },
  {
    id: "junior-carnival",
    title: "Junior Carnival",
    category: "Kids Carnival",
    city: "Pune",
    venue: "Amanora Park",
    date: "25 December",
    iso: "2026-12-25T10:00:00+05:30",
    price: 499,
    ticketsLeft: 740,
    totalTickets: 3000,
    image: "kids",
    accent: "cyan",
    blurb: "Safe zones, magicians, robotics labs and a glowing ferris wheel at dusk.",
  },
];

export const CATEGORIES = [
  { name: "Music Festival", count: "38 experiences", image: "hero" },
  { name: "Holi", count: "12 experiences", image: "holi" },
  { name: "Dandiya", count: "21 experiences", image: "dandiya" },
  { name: "Wedding", count: "260+ celebrations", image: "wedding" },
  { name: "Corporate", count: "180+ productions", image: "corporate" },
  { name: "Birthday", count: "400+ parties", image: "kids" },
  { name: "Concert", count: "64 shows", image: "concert" },
  { name: "Kids", count: "30 carnivals", image: "kids" },
  { name: "Food & Culture", count: "26 festivals", image: "food" },
  { name: "Private", count: "By invitation", image: "wedding" },
];

export const WHY_TAMASHA = [
  {
    title: "Safety First, Always",
    body: "Certified crowd marshals, medical bays and 1:40 staff ratio at every gate.",
  },
  {
    title: "Artists Worth Travelling For",
    body: "A roster of 300+ artists, from indie breakouts to arena headliners.",
  },
  {
    title: "Premium Experience Design",
    body: "Sound, light, scent and flow engineered by our in-house experience studio.",
  },
  {
    title: "Obsessive Management",
    body: "One producer owns your event end to end. One number. Zero handoffs.",
  },
  {
    title: "Honest Pricing",
    body: "Transparent quotes, no hidden production markups, flexible EMI on tickets.",
  },
  {
    title: "Memories Guaranteed",
    body: "Pro photo and film crew at every show — your gallery lands within 48 hours.",
  },
];

export const STATS = [
  { value: 1240, suffix: "+", label: "Events conducted" },
  { value: 2.4, suffix: "M+", label: "Happy guests", decimals: 1 },
  { value: 38, suffix: "", label: "Cities covered" },
  { value: 12, suffix: "", label: "Years of experience" },
  { value: 210, suffix: "+", label: "Brand sponsors" },
];

export const STEPS = [
  { step: "01", title: "Browse", body: "Explore curated experiences or tell us what you're dreaming up." },
  { step: "02", title: "Book", body: "Lock your tickets or your date in under 90 seconds. Instant confirmation." },
  { step: "03", title: "Attend", body: "Skip the queue with QR entry, concierge desks and dedicated crew." },
  { step: "04", title: "Celebrate", body: "Live it fully. Your films and photos arrive within 48 hours." },
];

export const TESTIMONIALS = [
  {
    name: "Ananya Deshmukh",
    role: "Brand Head, Aurora Beverages",
    quote:
      "Tamasha turned a product launch into a cultural moment. Our recall numbers doubled in a week.",
    rating: 5,
  },
  {
    name: "Rohit Malhotra",
    role: "Groom, Udaipur Wedding",
    quote:
      "Three days, 600 guests, zero chaos. They handled everything while we actually enjoyed our wedding.",
    rating: 5,
  },
  {
    name: "Sana Qureshi",
    role: "Festival Regular",
    quote:
      "Best Holi I've been to in a decade. Clean grounds, safe crowd, unreal sound. I've booked NYE already.",
    rating: 5,
  },
  {
    name: "Vikram Nair",
    role: "Cultural Secretary, IIT Bombay",
    quote:
      "They produced our fest like a stadium tour. 18,000 students and not one thing off-schedule.",
    rating: 5,
  },
];

export const FAQS = [
  {
    q: "How do I book tickets for an experience?",
    a: "Pick an experience, choose your tier and pay securely online. Your QR pass reaches you on WhatsApp and email instantly.",
  },
  {
    q: "Can Tamasha plan a private or corporate event for me?",
    a: "Yes. Share your date, city and headcount through the Book Event page and a producer responds within 4 working hours with a concept deck.",
  },
  {
    q: "What is your refund policy?",
    a: "Full refunds up to 7 days before an event, 50% up to 48 hours before. Cancelled or rescheduled shows are always refunded in full.",
  },
  {
    q: "Are your events safe for families and kids?",
    a: "Every ground has medical bays, fire clearance, trained marshals and family zones. Kids carnivals additionally run wristband child-tracking.",
  },
  {
    q: "Do you offer sponsorship or brand partnerships?",
    a: "We work with 210+ brands across on-ground activation, title sponsorship and content. Write to partners@tamasha.live for the deck.",
  },
  {
    q: "Which cities do you operate in?",
    a: "38 cities across India, with permanent production teams in Mumbai, Delhi NCR, Bengaluru, Ahmedabad, Pune, Hyderabad and Goa.",
  },
];

export const INSTAGRAM = [
  { image: "hero", likes: "48.2k", caption: "Main stage, minute one." },
  { image: "holi", likes: "31.7k", caption: "Rangleela was unreal." },
  { image: "dandiya", likes: "22.4k", caption: "Nine nights of raas." },
  { image: "concert", likes: "54.9k", caption: "Encore #MidnightEcho" },
  { image: "food", likes: "18.3k", caption: "Midnight dessert alley." },
  { image: "kids", likes: "12.1k", caption: "Junior Carnival, Pune." },
];

export const POSTS = [
  {
    slug: "anatomy-of-a-sold-out-night",
    title: "The anatomy of a sold-out night",
    excerpt: "What actually happens in the 72 hours before doors open at a 12,000-capacity show.",
    date: "18 July 2026",
    read: "6 min read",
    image: "concert",
  },
  {
    slug: "designing-safer-festivals",
    title: "Designing safer festivals without killing the vibe",
    excerpt: "Crowd flow, sightlines and exits — the invisible design that keeps 50,000 people happy.",
    date: "02 June 2026",
    read: "8 min read",
    image: "hero",
  },
  {
    slug: "holi-goes-premium",
    title: "Holi goes premium",
    excerpt: "How organic colour, water recycling and better sound rewrote the rules of the season.",
    date: "21 March 2026",
    read: "5 min read",
    image: "holi",
  },
  {
    slug: "wedding-as-a-festival",
    title: "Treating a wedding like a three-day festival",
    excerpt: "Programming, artist curation and production values borrowed straight from touring.",
    date: "14 January 2026",
    read: "7 min read",
    image: "wedding",
  },
];
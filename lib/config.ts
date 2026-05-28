/**
 * Site Configuration
 *
 * Central configuration file for easy customization.
 * All copy sourced from .opencode/content/ files.
 * When updating website text, edit the .md files in .opencode/content/
 * and mirror changes here.
 */

export const siteConfig = {
  name: "Bush Taxi",
  tagline: "West African Drumming School",
  description: "Learn Dundun & Djembe in the Noosa Hinterland. Weekly classes, weekend intensives, and a whole lot of rhythm. First class free.",
  url: "https://bushtaxi.com.au",
  social: {
    twitter: "@bushtaxi",
    instagram: "@bushtaxidrumming",
  },
  nav: {
    cta: {
      text: "Book Free Class",
      href: "#contact",
    },
  },
} as const;

export const heroConfig = {
  headline: {
    prefix: "Learn",
    accent: "Djembe",
    suffix: "& Dununs",
  },
  description: "Learn to play West African Percussion every week in the Noosa Hinterland. Two instruments. One rhythm. Zero experience needed.",
  cta: {
    primary: {
      text: "Book Your Free Class",
      href: "mailto:mail@andresilva.online",
    },
    secondary: {
      text: "See How It Works",
      href: "#how-it-works",
    },
  },
  carousel: [
    "Djembe",
    "Dundun",
    "West African Rhythm",
    "Weekly Classes",
    "Weekend Intensives",
    "All Levels Welcome",
    "Noosa Hinterland",
    "First Class Free",
  ],
} as const;

export const howItWorksConfig = {
  title: "Three Steps to Start Drumming",
  description: "Begin your journey into West African rhythm. No experience needed — just show up ready to hit something.",
  steps: [
    {
      title: "Show Up & Feel the Beat",
      description: "Your first class is free. Bring your drum or rent on the spot. You bring energy, curiosity, and clothes you don't mind sweating in. We'll teach you the basics, the first rhythms, and how to play in a group.",
    },
    {
      title: "Learn Dundun & Djembe",
      description: "Unlike most schools that only teach Djembe, we also teach Dunduns, the bass drums, from day one. They are the heartbeat. Djembe is the fire on top. Together, they tell the full story of West African percussion.",
    },
    {
      title: "Sweat, Smile & Repeat",
      description: "This is basically sports. You'll work hard, get calluses, and go home with your hands buzzing. But you'll also feel energised, grounded, and part of something bigger than yourself.",
    },
  ],
  cta: {
    text: "Book Your Free First Class",
    href: "mailto:mail@andresilva.online",
  },
} as const;

export const featuresConfig = {
  title: "Why Bush Taxi Is Different",
  description: "Most schools teach Djembe and call it a day. We also teach Dunduns. Because in West Africa, these instruments are almost never played separate.",
  features: [
    {
      number: "01",
      title: "Learn Dundun & Djembe",
      description: "Dundun provides the deep bass heartbeat. Djembe adds the melody and fire. Culturally and traditionally, they cannot live without each other — and neither should your learning. We teach both from your very first class.",
      image: "/img/about2.jpg",
    },
    {
      number: "02",
      title: "Rooted in West African Tradition",
      description: "This music is played daily for baptisms, weddings, funerals, harvest festivals, and coming-of-age ceremonies. It's not a hobby — it's a living culture. We respect the tradition while making it accessible to everyone.",
      image: "/img/about6.jpg",
    },
    {
      number: "03",
      title: "Sweat, Drum & Feel Alive",
      description: "Drumming is probably the only instrument you can hit as hard as you want and you won't break it. It's physical. It's cathartic. It's a full-body workout that leaves you energised, grounded, and grinning.",
      image: "/img/about14.webp",
    },
  ],
} as const;

export const statsConfig = {
  title: "Numbers That Matter",
  description: "Two decades of drumming. Thousands of hours of practice. A passion that keeps growing.",
  stats: [
    { number: "2002", label: "Playing Since", description: "Over 20 years of deep immersion in West African percussion" },
    { number: "1000s", label: "Hours Played", description: "At the peak, practicing 6 to 8 hours every week" },
    { number: "4", label: "Countries Taught In", description: "Australia, Germany, Portugal and Brazil — plus studying in West Africa" },
    { number: "∞", label: "Joy Delivered", description: "The only instrument you can hit as hard as you want" },
  ],
} as const;

export const testimonialsConfig = {
  title: "What Drummers Are Saying",
  testimonials: [
    {
      quote: "I came for a workout and found a community. Andre makes every class feel like a celebration, not a lesson.",
      name: "Sarah M.",
      role: "Student, 6 months",
    },
    {
      quote: "Learning both Dundun and Djembe together changed everything. I finally understand how the rhythm actually works.",
      name: "Marcus T.",
      role: "Student, 1 year",
    },
    {
      quote: "I've never sweat so much and smiled so hard. This is the most fun you can have while basically doing sports.",
      name: "Jen K.",
      role: "Student, 3 months",
    },
  ],
} as const;

export const pricingConfig = {
  title: "Choose Your Rhythm",
  description: "Start with a free class. Then pick the plan that fits your groove.",
  tiers: [
    {
      name: "Single Class",
      price: "$25",
      period: "per class",
      description: "Drop in when you can. Perfect for busy schedules or trying it out after your free class.",
      features: ["All instruments provided", "Learn Dundun & Djembe", "All skill levels welcome", "No commitment"],
      cta: { text: "Book a Class", href: "mailto:mail@andresilva.online" },
    },
    {
      name: "10-Class Pass",
      price: "$220",
      period: "per pass",
      badge: "Best Value",
      description: "Save $30 and commit to your rhythm. Valid for 3 months. This is where the real progress happens.",
      features: ["All instruments provided", "Learn Dundun & Djembe", "All skill levels welcome", "Valid for 3 months", "Priority booking for weekend intensives"],
      cta: { text: "Get Your Pass", href: "mailto:mail@andresilva.online" },
    },
    {
      name: "Weekend Intensive",
      price: "$160",
      period: "per workshop",
      description: "6 hours of immersive drumming. Go deep into a specific rhythm, technique, or tradition. For those who want to accelerate.",
      features: ["6-hour immersive session", "Deep dive into specific rhythms", "All instruments provided", "Small group, personal attention", "Meals & refreshments included"],
      cta: { text: "Join the Intensive", href: "mailto:mail@andresilva.online" },
    },
  ],
  note: "All prices in AUD. First class is always free. No equipment needed — we provide the drums. Cash or bank transfer accepted.",
} as const;

export const faqConfig = {
  title: "Common Questions",
  faqs: [
    {
      question: "Do I need any musical experience?",
      answer: "Not at all. Most of our students start from zero. If you can tap your foot, you can learn. Andre breaks everything down step by step, and the group energy carries everyone forward.",
    },
    {
      question: "Do I need to bring my own drum?",
      answer: "No — we provide all instruments. Dunduns and Djembes are available in class. Just bring yourself, water, and clothes you don't mind sweating in.",
    },
    {
      question: "Why do you teach both Dundun and Djembe?",
      answer: "Because in West Africa, they never exist without each other. Dundun is the deep heartbeat — the foundation. Djembe is the melody and fire on top. Learning both gives you the full picture of the rhythm, not just half the story.",
    },
    {
      question: "Where and when are the classes?",
      answer: "Palmwoods (Rhythm Culture): Tuesdays, 5:30 PM — advertised on their site. Pomona (Bush Taxi): Thursdays, 5:30 PM to 7:00 PM — coming soon (not yet confirmed).",
    },
    {
      question: "What should I wear?",
      answer: "Comfortable clothes you can move and sweat in. This is basically sports. You'll be sitting, standing, and moving around the drums. Leave your rings and watches at home.",
    },
    {
      question: "Can I really hit the drum as hard as I want?",
      answer: "Yes! That's the beauty of it. Drumming is probably the only instrument you can hit as hard as you can and you won't break it. It's designed for release, energy, and joy.",
    },
    {
      question: "Are weekend intensives for beginners?",
      answer: "Weekend intensives welcome all levels, but they're designed for people who want to go deeper. If you've done a few regular classes first, you'll get more out of it. Beginners are absolutely welcome though — Andre adapts to the group.",
    },
    {
      question: "How do I pay?",
      answer: "Cash or bank transfer on the day. No complicated booking systems. Just show up, drum, and pay.",
    },
  ],
  contact: {
    text: "Still have questions? Call or email Andre.",
    cta: {
      text: "Get in Touch",
      href: "mailto:mail@andresilva.online",
    },
  },
} as const;

export const finalCtaConfig = {
  headline: "Ready to Feel the Rhythm?",
  description: "Your first class is free. The drums are waiting. The only thing missing is you. Come and groove, sweat a little, and go home with your hands buzzing and your heart full.",
  cta: {
    text: "Book Your Free Class",
    href: "mailto:mail@andresilva.online",
  },
  note: "No experience needed. All instruments provided. Just bring yourself and your energy.",
} as const;

export const aboutConfig = {
  title: "The Bush Taxi Story",
  subtitle: "Over 20 years of obsession, travel, study, and joy. It started with a single drum and a lot of curiosity.",
  sections: [
    {
      title: "2002 — The Spark",
      body: "Andre started playing in 2002. What began as casual interest quickly became something deeper. He found himself rehearsing 6 to 8 hours a week, listening to CDs on repeat, trying to mimic the masters — and falling completely in love with the instrument.",
      image: "/img/about10.png",
      caption: "This was 2014 in Berlin, don't have photos of 2002 😅",
    },
    {
      title: "Learning from the Masters",
      body: "Over the years, Andre studied with countless Jembe Folas (master drummers) across Europe and West Africa. Key teachers include Mohammed Bangura in West Africa, Buba Diakite in Berlin, and Nathan Berg at Beat Etage in Berlin — close friends and musical companions who shaped his path.",
      image: "/img/guinea1.jpg",
      caption: "Conakry 2013 with Mohammed Bangoura",
    },
    {
      title: "The Dundun Difference",
      body: "From the very beginning, Andre learned the Dunduns alongside the Djembe. That decision 'pushed his musicality to the moon.' While most drummers focus only on Djembe, Andre was thought from the very beginning that the Dunduns are the heartbeat — without them, the rhythm has no foundation.",
      image: "/img/about13.webp",
      caption: "The Dundun player at ADC 2018: Dundund, Sangban and Kenkeni",
    },
    {
      title: "Teaching Across 4 Countries",
      body: "Andre's teaching journey spans Brazil, Australia (school incursions in Brisbane & Sunshine Coast with Rhythm Culture), Germany (school incursions in Berlin, gigs with Nathan Berg at Beat Etage), and Portugal (co-organizer of Aldeia Djembe Camp, a week-long drum & dance event with international guests).",
      image: "/img/about13.jpg",
      caption: "Kids session at Aldeia Djembe Camp in Portugal 2019",
    },
    {
      title: "West Africa — In the Flesh",
      body: "Andre traveled to West Africa to study where this music was born. He played in several ballets (traditional drum and dance ensembles) and experienced firsthand what this music means to the artists there — and how deeply it is woven into their culture and daily life.",
      image: "/img/about5.jpg",
      caption: "Playing in with Ballet Sourakhata in Conakry",
    },
  ],
  philosophy: {
    quote: "It's a long way. It's a hard instrument to learn. It's not 'bunkaraba, bunkaraba, cantipa.' It's not a bongo. It is a Jembe. It carries the weight of its culture. And if you get into it — really into it — it's just really fun.",
    pillars: [
      { title: "Physical", description: "You'll sweat. This is basically sports." },
      { title: "Joyful", description: "Laughter and good energy are non-negotiable." },
      { title: "Respectful", description: "We honor the tradition while making it accessible." },
      { title: "Inclusive", description: "All levels, all backgrounds, all welcome." },
      { title: "Both Instruments", description: "Dundun and Djembe, always together." },
    ],
  },
  closingQuote: "I am hoping that with Bush Taxi here in the Noosa Hinterland, we can welcome people into this culture and into this world of Jembe and Dunduns and Malinke West African culture. So yes — come on, let's have some fun. Enrol now.",
  contact: {
    headline: "Join the Rhythm",
    description: "Your first class is free. Come find out why Andre has dedicated over 20 years to this music.",
    cta: {
      text: "Book Your Free Class",
      href: "mailto:mail@andresilva.online",
    },
  },
} as const;

export const footerConfig = {
  description: "Bush Taxi Drumming School — Learn Dundun & Djembe in the Noosa Hinterland. Weekly classes, weekend intensives, and a whole lot of rhythm.",
  cta: {
    text: "Join the Mailing List",
    href: "https://sendfox.com/lp/3oxljv",
  },
  links: {
    classes: [
      { label: "Weekly Classes", href: "#" },
      { label: "Weekend Intensives", href: "#" },
      { label: "Pricing", href: "#pricing" },
      { label: "FAQ", href: "#faq" },
    ],
    info: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Contact", href: "mailto:mail@andresilva.online" },
    ],
  },
  contact: {
    location: "Noosa Hinterland, QLD",
    email: "mail@andresilva.online",
    palmwoods: "Tuesdays, 5:30 PM (Rhythm Culture)",
    pomona: "Thursdays, 5:30–7:00 PM (Coming Soon)",
  },
  copyright: `© ${new Date().getFullYear()} Bush Taxi Drumming School.`,
} as const;

/**
 * Feature Flags
 *
 * Toggle features on/off for easy customization.
 */
export const features = {
  smoothScroll: true,
  darkMode: false,
  ditherCursor: true,
  statsSection: true,
} as const;

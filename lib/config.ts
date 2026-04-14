/**
 * Site Configuration
 *
 * Central configuration file for easy customization.
 * Update these values to personalize your template.
 */

export const siteConfig = {
  name: "Bush Taxi",
  tagline: "Learn the rhythms, feel the culture",
  description: "West African Drumming School — immersive classes, workshops, and cultural experiences rooted in tradition.",
  url: "https://example.com",
  social: {
    twitter: "@bushtaxi",
    github: "https://github.com/bushtaxi",
  },
  nav: {
    cta: {
      text: "Get Started",
      href: "#",
    },
    signIn: {
      text: "Sign in",
      href: "#",
    },
  },
} as const;

export const heroConfig = {
  headline: {
    prefix: "Feel the",
    accent: "Rhythm",
    suffix: "of West Africa",
  },
  description: "Immersive drumming classes, workshops, and cultural experiences rooted in tradition.",
  cta: {
    primary: {
      text: "Start Learning",
      href: "#",
    },
    secondary: {
      text: "See How It Works",
      href: "#how-it-works",
    },
  },
  carousel: [
    "Djembe",
    "Dunun",
    "Balafon",
    "Kora",
    "Workshops",
    "Group Classes",
    "Private Lessons",
    "Cultural Events",
    "Performances",
    "Retreats",
    "Kids Classes",
    "Master Classes",
  ],
} as const;

export const howItWorksConfig = {
  title: "Three steps to start drumming",
  description: "Begin your journey into West African rhythm in minutes.",
  cta: {
    text: "Start Learning",
    href: "#",
  },
} as const;

export const featuresConfig = {
  title: "Everything you need",
  description: "Comprehensive drumming education rooted in authentic West African tradition.",
} as const;

export const statsConfig = {
  title: "Trusted by drummers worldwide",
  description: "Join the growing community of rhythm seekers.",
} as const;

export const testimonialsConfig = {
  title: "What People Are Saying",
} as const;

export const pricingConfig = {
  title: "Pricing",
  description: "Start for free and upgrade to unlock more features.",
  cta: {
    primary: {
      text: "Go Pro",
      href: "#",
    },
    secondary: {
      text: "Start For Free",
      href: "#",
    },
  },
} as const;

export const faqConfig = {
  title: "Common Questions",
  contact: {
    text: "Still have questions? We're here to help.",
    cta: {
      text: "Get in Touch",
      href: "mailto:hello@bushtaxi.com",
    },
  },
} as const;

export const finalCtaConfig = {
  headline: "Ready to feel the rhythm?",
  description: "Join our community of drummers. Start your journey into West African music today.",
  cta: {
    text: "Start Learning",
    href: "#",
  },
} as const;

export const footerConfig = {
  description: "Bush Taxi Drumming School — immersive classes, workshops, and cultural experiences rooted in West African tradition.",
  cta: {
    text: "Get Started",
    href: "#",
  },
  links: {
    product: [
      { label: "Classes", href: "#" },
      { label: "Workshops", href: "#" },
      { label: "Events", href: "#" },
      { label: "Private Lessons", href: "#" },
    ],
    company: [
      { label: "About", href: "#" },
      { label: "Blog", href: "#" },
      { label: "Instructors", href: "#" },
      { label: "Contact", href: "#" },
    ],
  },
  contact: {
    location: "West Africa",
    address: "Bush Taxi Drumming School",
    hours: "Mon-Sat 9:00 am - 6:00 pm",
    email: "hello@bushtaxi.com",
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

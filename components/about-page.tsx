"use client";

import { motion, useInView } from "motion/react";
import { ChevronRightIcon, Drum, Heart, Users, Music, Globe } from "lucide-react";
import Image from "next/image";
import { useRef, type ReactNode } from "react";
import { aboutConfig, siteConfig } from "@/lib/config";

const easeOut = [0.16, 1, 0.3, 1] as const;

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return { ref, isInView };
}

const pillarIcons: Record<string, ReactNode> = {
  Physical: <Drum className="h-6 w-6" />,
  Joyful: <Heart className="h-6 w-6" />,
  Respectful: <Music className="h-6 w-6" />,
  Inclusive: <Users className="h-6 w-6" />,
  "Both Instruments": <Globe className="h-6 w-6" />,
};

function AboutHero(): ReactNode {
  const { ref, isInView } = useReveal();

  return (
    <section className="relative flex min-h-[70vh] flex-col items-center justify-center overflow-hidden px-6 pt-32 pb-20 md:pt-40 md:pb-32">
      <motion.div
        ref={ref}
        className="relative z-10 mx-auto max-w-4xl text-center"
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <span className="text-muted-foreground mb-6 inline-block rounded-md border-2 border-black px-3 py-1 text-sm font-medium uppercase tracking-wider">
          About {siteConfig.name}
        </span>
        <h1 className="font-display mb-8 text-5xl font-medium tracking-tight uppercase md:text-7xl lg:text-8xl">
          {aboutConfig.title}
        </h1>
        <p className="text-muted-foreground mx-auto max-w-2xl text-xl leading-relaxed md:text-2xl">
          {aboutConfig.subtitle}
        </p>
      </motion.div>
    </section>
  );
}

function TimelineSection({
  section,
  index,
}: {
  section: (typeof aboutConfig.sections)[number];
  index: number;
}): ReactNode {
  const { ref, isInView } = useReveal();
  const isEven = index % 2 === 0;

  return (
    <motion.div
      ref={ref}
      className="grid grid-cols-1 items-center gap-8 md:grid-cols-2 md:gap-16"
      initial={{ opacity: 0, y: 50 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.7, ease: easeOut }}
    >
      <div className={isEven ? "md:order-1" : "md:order-2"}>
        <div className="group relative overflow-hidden rounded-md border-2 border-black">
          <div className="relative aspect-[4/3] w-full bg-muted">
            <Image
              src={section.image}
              alt={section.title}
              fill
              className="object-cover transition-transform duration-700 group-hover:scale-105"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          <div className="bg-background border-t-2 border-black px-4 py-3">
            <p className="text-muted-foreground text-sm italic">
              {section.caption}
            </p>
          </div>
        </div>
      </div>

      <div className={isEven ? "md:order-2" : "md:order-1"}>
        <span className="text-accent font-display mb-3 block text-6xl font-medium tracking-tight opacity-20 md:text-7xl">
          {String(index + 1).padStart(2, "0")}
        </span>
        <h2 className="font-display mb-4 text-2xl font-medium tracking-tight uppercase md:text-3xl lg:text-4xl">
          {section.title}
        </h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          {section.body}
        </p>
      </div>
    </motion.div>
  );
}

function QuoteSection(): ReactNode {
  const { ref, isInView } = useReveal();

  return (
    <section className="bg-accent relative overflow-hidden rounded-md border-2 border-black px-6 py-20 md:px-12 md:py-28">
      <motion.div
        ref={ref}
        className="relative z-10 mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={isInView ? { opacity: 1, scale: 1 } : {}}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <blockquote className="font-display mb-8 text-2xl font-medium leading-relaxed tracking-tight text-black md:text-3xl lg:text-4xl">
          &ldquo;{aboutConfig.philosophy.quote}&rdquo;
        </blockquote>
        <div className="mx-auto h-px w-24 bg-black/30" />
      </motion.div>
    </section>
  );
}

function PillarsSection(): ReactNode {
  const { ref, isInView } = useReveal();

  return (
    <section className="px-6 py-16 md:py-32">
      <motion.div
        ref={ref}
        className="mx-auto max-w-6xl"
        initial={{ opacity: 0 }}
        animate={isInView ? { opacity: 1 } : {}}
        transition={{ duration: 0.6, ease: easeOut }}
      >
        <div className="mb-12 text-center md:mb-16">
          <h2 className="font-display mb-4 text-3xl font-medium tracking-tight uppercase md:text-4xl lg:text-5xl">
            The Bush Taxi Way
          </h2>
          <p className="text-muted-foreground text-lg">
            What to expect in every class
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {aboutConfig.philosophy.pillars.map((pillar, index) => (
            <motion.div
              key={pillar.title}
              className="bg-muted group rounded-md border-2 border-black p-6 transition-colors duration-300 hover:bg-accent/10 md:p-8"
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{
                duration: 0.5,
                delay: index * 0.1,
                ease: easeOut,
              }}
            >
              <div className="bg-accent mb-4 flex h-12 w-12 items-center justify-center rounded-md border-2 border-black text-black transition-transform duration-300 group-hover:scale-110">
                {pillarIcons[pillar.title] ?? <Music className="h-6 w-6" />}
              </div>
              <h3 className="font-display mb-2 text-xl font-medium tracking-tight uppercase">
                {pillar.title}
              </h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                {pillar.description}
              </p>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}

function ClosingQuote(): ReactNode {
  const { ref, isInView } = useReveal();

  return (
    <section className="bg-accent-blue px-6 py-20 md:px-12 md:py-28">
      <motion.div
        ref={ref}
        className="mx-auto max-w-3xl text-center"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <blockquote className="font-display mb-8 text-xl font-medium leading-relaxed tracking-tight text-black md:text-2xl lg:text-3xl">
          &ldquo;{aboutConfig.closingQuote}&rdquo;
        </blockquote>
        <p className="text-black/60 text-sm uppercase tracking-wider">
          — Andre Silva, Founder
        </p>
      </motion.div>
    </section>
  );
}

function ContactCTA(): ReactNode {
  const { ref, isInView } = useReveal();

  return (
    <section className="px-6 py-24 text-center md:py-36">
      <motion.div
        ref={ref}
        className="mx-auto max-w-2xl"
        initial={{ opacity: 0, y: 30 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.7, ease: easeOut }}
      >
        <h2 className="font-display mb-4 text-3xl font-medium tracking-tight uppercase md:text-4xl">
          {aboutConfig.contact.headline}
        </h2>
        <p className="text-muted-foreground mb-8 text-lg">
          {aboutConfig.contact.description}
        </p>
        <a
          href={aboutConfig.contact.cta.href}
          className="bg-accent group inline-flex items-center justify-center gap-3 rounded-md border-2 border-black py-3 pr-3 pl-5 font-medium text-black shadow-lg transition-all duration-500 ease-out hover:rounded-[50px] hover:shadow-xl"
        >
          <span>{aboutConfig.contact.cta.text}</span>
          <span className="bg-background text-foreground flex h-10 w-10 items-center justify-center rounded-full border-2 border-black transition-all duration-300 group-hover:scale-110">
            <ChevronRightIcon className="relative left-px h-4 w-4" />
          </span>
        </a>
      </motion.div>
    </section>
  );
}

export function AboutPage(): ReactNode {
  return (
    <main id="main-content" className="flex-1">
      <AboutHero />

      <section className="bg-background px-6 py-16 md:py-32">
        <div className="mx-auto max-w-6xl space-y-20 md:space-y-32">
          {aboutConfig.sections.map((section, index) => (
            <TimelineSection key={section.title} section={section} index={index} />
          ))}
        </div>
      </section>

      <QuoteSection />
      <PillarsSection />
      <ClosingQuote />
      <ContactCTA />
    </main>
  );
}

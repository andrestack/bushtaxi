"use client";

import { motion, useInView } from "motion/react";
import { ChevronRightIcon } from "lucide-react";
import Image from "next/image";
import { useRef, useState, useEffect, type ReactNode } from "react";
import { aboutConfig, siteConfig } from "@/lib/config";
import ClickStack from "@/components/react-bits/click-stack";

const easeOut = [0.16, 1, 0.3, 1] as const;

function useReveal() {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.3 });
  return { ref, isInView };
}

// Map pillars to brand SVG elements (cycling through element1-3.svg)
const pillarSvgs: Record<string, string> = {
  Physical: "/img/element1.svg",
  Joyful: "/img/element2.svg",
  Respectful: "/img/element3.svg",
  Inclusive: "/img/element1.svg",
  "Both Instruments": "/img/element2.svg",
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
  const containerRef = useRef<HTMLDivElement>(null);
  // Fixed card size: 600x400 but responsive with max constraints
  const [cardSize, setCardSize] = useState({ width: 600, height: 400 });

  // Responsive sizing: max 600x400, scales down on smaller screens
  useEffect(() => {
    const updateSize = () => {
      if (containerRef.current) {
        const { offsetWidth, offsetHeight } = containerRef.current;
        // Max 600x400, but responsive
        const maxWidth = Math.min(600, offsetWidth * 0.9);
        const maxHeight = Math.min(400, offsetHeight * 0.9);
        setCardSize({
          width: Math.round(maxWidth),
          height: Math.round(maxHeight),
        });
      }
    };

    updateSize();
    window.addEventListener("resize", updateSize);
    return () => window.removeEventListener("resize", updateSize);
  }, []);

  const pillarCards = aboutConfig.philosophy.pillars.map((pillar) => (
    <div
      key={pillar.title}
      className="group relative flex h-full w-full overflow-hidden bg-[#F5D5A0]"
    >
      {/* Two Column Layout */}
      <div className="flex h-full w-full">
        {/* Left: Image Area */}
        <div className="relative h-full w-1/2 overflow-hidden">
          <Image
            src={pillar.image}
            alt={pillar.title}
            fill
            className="object-cover transition-transform duration-500 group-hover:scale-105"
            sizes="300px"
          />
          {/* Hover overlay */}
          <div className="absolute inset-0 bg-black/0 transition-colors duration-300 group-hover:bg-black/5" />
        </div>

        {/* Right: Content Area */}
        <div className="flex h-full w-1/2 flex-col justify-center p-4">
          {/* Row 1: Icon + Heading */}
          <div className="mb-3 flex items-center gap-3">
            <Image
              src={pillarSvgs[pillar.title] || "/img/element1.svg"}
              alt={pillar.title}
              width={34}
              height={34}
              className="h-[34px] w-[34px] object-contain"
            />
            <h3 className="font-display text-4xl font-medium tracking-tight uppercase text-black">
              {pillar.title}
            </h3>
          </div>

          {/* Row 2: Description */}
          <p className="leading-relaxed text-black/80">
            {pillar.description}
          </p>
        </div>
      </div>
    </div>
  ));

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
            What to expect in every class — click the stack to explore
          </p>
        </div>

        {/* Container for bento layout - adjust height for responsiveness */}
        <div
          ref={containerRef}
          className="relative flex h-[350px] w-full items-center justify-center sm:h-[400px] md:h-[500px] lg:h-[550px]"
        >
          {/* Slot for bento grid background - can add photos here later */}
          <div className="pointer-events-none absolute inset-0 grid grid-cols-4 grid-rows-4 gap-2 opacity-0">
            {/* Placeholder for bento grid items */}
            {Array.from({ length: 16 }).map((_, i) => (
              <div key={i} className="rounded-md bg-black/5" />
            ))}
          </div>

          <ClickStack
            items={pillarCards}
            cardWidth={cardSize.width}
            cardHeight={cardSize.height}
            spreadX={36}
            spreadY={-26}
            borderRadius={18}
            cardColor="#F5D5A0"
            shadowBlur={20}
            shadowOpacity={0.25}
            visibleCount={5}
            depthScale={0.06}
            depthOpacity={0.15}
            className="cursor-pointer z-10"
          />
        </div>
      </motion.div>
    </section>
  );
}

// function ClosingQuote(): ReactNode {
//   const { ref, isInView } = useReveal();

//   return (
//     <section className="bg-accent-blue px-6 py-20 md:px-12 md:py-28">
//       <motion.div
//         ref={ref}
//         className="mx-auto max-w-3xl text-center"
//         initial={{ opacity: 0, y: 30 }}
//         animate={isInView ? { opacity: 1, y: 0 } : {}}
//         transition={{ duration: 0.8, ease: easeOut }}
//       >
//         <blockquote className="font-display mb-8 text-xl font-medium leading-relaxed tracking-tight text-black md:text-2xl lg:text-3xl">
//           &ldquo;{aboutConfig.closingQuote}&rdquo;
//         </blockquote>
//         <p className="text-black/60 text-sm uppercase tracking-wider">
//           — Andre Silva, Founder
//         </p>
//       </motion.div>
//     </section>
//   );
// }

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
      {/* <ClosingQuote /> */}
      <ContactCTA />
    </main>
  );
}

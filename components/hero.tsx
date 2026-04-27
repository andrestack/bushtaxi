"use client";

import { ChevronRight as ChevronRightIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { useRef, type ReactNode } from "react";
import RotatingCards, { type Card } from "./rotating-cards";

const easeOut = [0.16, 1, 0.3, 1] as const;
const headlineText = "Learn Djembe & Dunduns";

const cardData = [
  { label: "Bush Taxi", image: "/img/bushtaxi2.svg" },
  { label: "Hari", image: "/img/hari.svg" },
  { label: "Bush Taxi", image: "/img/bushtaxi2.svg" },
  { label: "Lenke", image: "/img/lenke.svg" },
  { label: "Bush Taxi", image: "/img/bushtaxi2.svg" },
  { label: "Hari", image: "/img/hari.svg" },
  { label: "Bush Taxi", image: "/img/bushtaxi2.svg" },
  { label: "Lenke", image: "/img/lenke.svg" },
  { label: "Bush Taxi", image: "/img/bushtaxi2.svg" },
  { label: "Hari", image: "/img/hari.svg" },
  { label: "Bush Taxi", image: "/img/bushtaxi2.svg" },
];

const carouselCards: Card[] = cardData.map((card, index) => ({
  id: index + 1,
  content: (
    <div className="relative h-full w-full">
      <Image
        src={card.image}
        alt={card.label}
        fill
        className="object-contain"
      />
    </div>
  ),
}));

export function Hero(): ReactNode {
  const sectionRef = useRef<HTMLElement>(null);

  return (
    <section
      ref={sectionRef}
      className="relative flex min-h-dvh flex-col items-center justify-start overflow-hidden px-6 pt-40 sm:pt-82"
    >
      <div className="relative z-10 mx-auto md:text-center">
        <h1 className="font-display mb-8 text-8xl font-medium tracking-[-0.09em] uppercase md:text-8xl lg:text-10xl">
          {headlineText.split("").map((char, index) => (
            <motion.span
              key={index}
              initial={{ opacity: 0, filter: "blur(10px)" }}
              animate={{ opacity: 1, filter: "blur(0px)" }}
              transition={{
                duration: 0.4,
                delay: index * 0.03,
                ease: "easeOut",
              }}
              className="inline-block"
              style={{ whiteSpace: char === " " ? "pre" : "normal" }}
            >
              {char}
            </motion.span>
          ))}
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{
            duration: 0.8,
            delay: 0.8,
            ease: "easeOut",
          }}
          className="text-muted-foreground mx-auto mt-6 max-w-xl text-2xl leading-12 tracking-tight md:text-3xl"
        >
          {/* <span className="text-foreground inline-block rounded-md border-2 border-black px-2 py-0.5 leading-10">
            Play more
          </span>{" "}
          &{" "}
          <span className="text-foreground inline-block rounded-md border-2 border-black px-4 py-0.5 leading-10">
            hear more  
          </span>{" "} */}
          Learn to play{" "}
          <span className="text-foreground inline-block rounded-md border-2 border-black px-2 py-0.5 leading-10">
            West African Percussion
          </span>{" "}
          every week in the Noosa Hinterland.
        </motion.p>
      </div>

      {/* Carousel */}
      <div
        className="relative -mx-6 mt-2 h-100 w-screen overflow-hidden sm:h-125 md:h-137.5 lg:h-150 xl:h-175"
        style={{
          maskImage:
            "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
          WebkitMaskImage:
            "linear-gradient(to bottom, black 0%, black 60%, transparent 100%)",
        }}
      >
        <div className="absolute top-25 left-1/2 -translate-x-1/2 sm:top-30 lg:top-35 xl:top-40">
          <div className="origin-top scale-[0.6] lg:scale-[0.7] xl:scale-100">
            <RotatingCards
              cards={carouselCards}
              radius={1000}
              cardClassName="!border-0 !shadow-none !bg-transparent !rounded-none"
              cardWidth={350}
              cardHeight={275}
              duration={100}
              pauseOnHover={true}
              autoPlay={true}
              initialRotation={-90}
              showTrackLine={false}
              trackLineOffset={25}
            />
          </div>
        </div>
      </div>

      <motion.div
        className="relative z-10 flex flex-col items-center px-6 pb-24 text-center"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.8, ease: easeOut }}
      >
        <h2 className="font-display max-w-3xl text-3xl font-medium tracking-tight uppercase md:text-5xl lg:text-6xl">
          Sweat, Drum & Tears <br />
          of Happiness
        </h2>
        <motion.a
          href="#"
          className="bg-accent group shadow-accent/25 hover:shadow-accent/40 mt-8 inline-flex w-full items-center justify-center gap-3 rounded-md border-2 border-black py-3 pr-3 pl-5 font-medium text-black shadow-lg transition-all duration-500 ease-out hover:rounded-[50px] hover:shadow-xl sm:w-auto"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.5 }}
          transition={{ duration: 0.6, ease: easeOut, delay: 0.2 }}
        >
          <span>More Info</span>
          <span className="bg-background text-foreground flex h-10 w-10 items-center justify-center rounded-full border-2 border-black transition-all duration-300 group-hover:scale-110">
            <ChevronRightIcon className="relative left-px h-4 w-4" />
          </span>
        </motion.a>
      </motion.div>

    </section>
  );
}

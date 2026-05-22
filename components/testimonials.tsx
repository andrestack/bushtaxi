"use client";

import { useRef, useState, useEffect, useCallback } from "react";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { motion } from "motion/react";
import { testimonialsConfig } from "@/lib/config";

const easeOut = [0.16, 1, 0.3, 1] as const;

interface Testimonial {
  quote: string;
  name: string;
  role: string;
}

const testimonials: Testimonial[] = testimonialsConfig.testimonials.map((t) => ({
  quote: t.quote,
  name: t.name,
  role: t.role,
}));

export function Testimonials() {
  const scrollRef = useRef<HTMLDivElement>(null);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [fadeOpacity, setFadeOpacity] = useState(1);

  const updateScrollState = useCallback(() => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const maxScroll = scrollWidth - clientWidth;
      const remainingScroll = maxScroll - scrollLeft;

      setCanScrollLeft(scrollLeft > 1);
      setCanScrollRight(scrollLeft < maxScroll - 1);

      // Fade out the gradient when approaching the end (last 150px of scroll)
      const fadeThreshold = 150;
      setFadeOpacity(Math.min(1, remainingScroll / fadeThreshold));
    }
  }, []);

  useEffect(() => {
    const container = scrollRef.current;
    if (!container) {
      return;
    }
    updateScrollState();
    container.addEventListener("scroll", updateScrollState);
    window.addEventListener("resize", updateScrollState);
    return () => {
      container.removeEventListener("scroll", updateScrollState);
      window.removeEventListener("resize", updateScrollState);
    };
  }, [updateScrollState]);

  const scroll = (direction: "left" | "right") => {
    if (scrollRef.current) {
      const container = scrollRef.current;
      const cardWidth = container.children[0]
        ? (container.children[0] as HTMLElement).offsetWidth
        : 400;
      const gap = 24;
      const stride = cardWidth + gap;
      const currentScroll = container.scrollLeft;
      const currentIndex = Math.round(currentScroll / stride);

      const targetIndex =
        direction === "left"
          ? Math.max(0, currentIndex - 1)
          : Math.min(testimonials.length - 1, currentIndex + 1);

      const targetScroll = targetIndex * stride;

      container.scrollTo({
        left: targetScroll,
        behavior: "smooth",
      });
    }
  };

  return (
    <section className="bg-background py-16 text-foreground overflow-hidden md:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <motion.div
          className="flex flex-col md:flex-row items-start md:items-center justify-between mb-8 gap-4 md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <h2 className="font-display text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight uppercase text-foreground">
            {testimonialsConfig.title}
          </h2>

          <div className="flex items-center gap-4">
            <button
              onClick={() => scroll("left")}
              disabled={!canScrollLeft}
              className="cursor-pointer p-3 rounded-md border-2 border-black bg-accent text-black transition-all duration-200 hover:scale-110 hover:bg-accent/80 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Scroll left"
            >
              <ArrowLeft className="w-5 h-5" />
            </button>
            <button
              onClick={() => scroll("right")}
              disabled={!canScrollRight}
              className="cursor-pointer p-3 rounded-md border-2 border-black bg-accent text-black transition-all duration-200 hover:scale-110 hover:bg-accent/80 focus:outline-none disabled:opacity-40 disabled:cursor-not-allowed disabled:hover:scale-100"
              aria-label="Scroll right"
            >
              <ArrowRight className="w-5 h-5" />
            </button>
          </div>
        </motion.div>

        <div className="relative -mx-6 md:mx-0">
          <div
            ref={scrollRef}
            className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4 px-6 md:px-0"
            style={{ scrollPaddingInline: "1.5rem" }}
          >
            {testimonials.map((item, index) => (
              <div
                key={index}
                className="flex-none w-[calc(100vw-3rem)] md:w-100 h-112.5 bg-muted rounded-md border-2 border-black p-8 md:p-10 flex flex-col justify-between snap-start"
              >
                <div className="flex-1 flex items-center">
                  <p className="text-muted-foreground text-xl md:text-2xl leading-relaxed italic">
                    &ldquo;{item.quote}&rdquo;
                  </p>
                </div>
                <div>
                  <p className="font-medium text-foreground text-lg">{item.name}</p>
                  <p className="text-sm text-muted-foreground">{item.role}</p>
                </div>
              </div>
            ))}
          </div>
          <div
            className="pointer-events-none absolute right-0 top-0 h-full w-32 transition-opacity duration-300 hidden md:block"
            style={{
              opacity: fadeOpacity,
              background: "linear-gradient(to right, transparent, var(--background))",
            }}
          />
        </div>
      </div>
    </section>
  );
}

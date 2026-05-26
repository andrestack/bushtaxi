"use client";

import { motion, useInView, useSpring, useTransform } from "motion/react";
import { useEffect, useRef, type ReactNode } from "react";
import { statsConfig } from "@/lib/config";

const easeOut = [0.16, 1, 0.3, 1] as const;

const stats = statsConfig.stats.map((stat) => ({
  value: stat.number,
  label: stat.label,
  description: stat.description,
}));

function isNumeric(str: string): boolean {
  return /^\d+$/.test(str);
}

function AnimatedNumber({
  value,
}: {
  value: string;
}): ReactNode {
  const ref = useRef<HTMLSpanElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  const numericValue = isNumeric(value) ? parseInt(value, 10) : null;

  const spring = useSpring(0, {
    stiffness: 50,
    damping: 30,
    restDelta: 0.001,
  });

  const display = useTransform(spring, (current) =>
    Math.floor(current).toString()
  );

  useEffect(() => {
    if (isInView && numericValue !== null) {
      spring.set(numericValue);
    }
  }, [isInView, spring, numericValue]);

  useEffect(() => {
    if (numericValue === null) return;
    const unsubscribe = display.on("change", (latest) => {
      if (ref.current) {
        ref.current.textContent = latest;
      }
    });
    return () => unsubscribe();
  }, [display, numericValue]);

  if (numericValue === null) {
    return <span ref={ref}>{value}</span>;
  }

  return <span ref={ref}>0</span>;
}

function StatCard({
  stat,
  index,
}: {
  stat: (typeof stats)[0];
  index: number;
}): ReactNode {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="text-center transition-all duration-300 hover:-translate-y-2 cursor-pointer group"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: easeOut,
      }}
      whileHover={{ scale: 1.05 }}
    >
      <div className="font-display text-foreground text-5xl font-medium tracking-tight md:text-6xl lg:text-7xl transition-transform duration-300 group-hover:scale-110">
        <AnimatedNumber value={stat.value} />
      </div>
      <p className="text-muted-foreground mt-3 text-base md:text-lg">
        {stat.label}
      </p>
    </motion.div>
  );
}

export function Stats(): ReactNode {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

  return (
    <section className="bg-background px-6 py-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={headerRef}
          className="mb-12 text-center md:mb-20"
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <h2 className="font-display text-3xl font-medium tracking-tight uppercase md:text-4xl lg:text-5xl">
            {statsConfig.title}
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            {statsConfig.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-2 gap-8 md:grid-cols-4 md:gap-12">
          {stats.map((stat, index) => (
            <StatCard key={stat.label} stat={stat} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

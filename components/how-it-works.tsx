"use client";

import { ChevronRightIcon } from "lucide-react";
import { motion, useInView } from "motion/react";
import Image from "next/image";
import type { ReactNode } from "react";
import { useRef } from "react";
import { howItWorksConfig } from "@/lib/config";

const easeOut = [0.16, 1, 0.3, 1] as const;

const stepIcons = ["/img/element1.svg", "/img/element2.svg", "/img/element3.svg"];

const steps = howItWorksConfig.steps.map((step, index) => ({
  icon: stepIcons[index] || "/img/element1.svg",
  ...step,
}));

function StepCard({
  step,
  index,
}: {
  step: (typeof steps)[0];
  index: number;
}): ReactNode {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref, { once: true, amount: 0.5 });

  return (
    <motion.div
      ref={ref}
      className="bg-muted min-h-70 rounded-md border-2 border-black p-6 md:p-8 flex flex-col transition-all duration-300 hover:-translate-y-2 hover:shadow-xl cursor-pointer"
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
      transition={{ duration: 0.6, delay: index * 0.1, ease: easeOut }}
    >
      <div className="text-foreground mb-6">
        <Image
          src={step.icon}
          alt=""
          width={48}
          height={48}
          className="h-12 w-12"
        />
      </div>
      <h3 className="font-display mb-3 text-xl font-medium tracking-tight uppercase md:text-2xl mt-auto">
        {step.title}
      </h3>
      <p className="text-muted-foreground text-base leading-relaxed">
        {step.description}
      </p>
    </motion.div>
  );
}

export function HowItWorks(): ReactNode {
  const headerRef = useRef<HTMLDivElement>(null);
  const isHeaderInView = useInView(headerRef, { once: true, amount: 0.5 });

  return (
    <section id="how-it-works" className="bg-background px-6 py-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          ref={headerRef}
          className="mb-8 text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isHeaderInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <h2 className="font-display text-3xl font-medium tracking-tight uppercase md:text-4xl lg:text-5xl">
            {howItWorksConfig.title}
          </h2>
          <p className="text-muted-foreground mt-4 text-lg max-w-2xl mx-auto">
            {howItWorksConfig.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-6">
          {steps.map((step, index) => (
            <StepCard key={step.title} step={step} index={index} />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.3, ease: easeOut }}
        >
          <a
            href={howItWorksConfig.cta.href}
            className="bg-accent group inline-flex items-center justify-center gap-3 rounded-md border-2 border-black py-3 pr-3 pl-5 font-medium text-black transition-all duration-500 ease-out hover:rounded-[50px] sm:w-auto"
          >
            <span>{howItWorksConfig.cta.text}</span>
            <span className="bg-background text-foreground flex h-10 w-10 items-center justify-center rounded-full border-2 border-black transition-all duration-300 group-hover:scale-110">
              <ChevronRightIcon className="relative left-px h-4 w-4" />
            </span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}

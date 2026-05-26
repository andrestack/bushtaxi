"use client";

import { ArrowUpRight } from "lucide-react";
import { motion } from "motion/react";
import { Link } from "next-view-transitions";
import Image from "next/image";
import type { ReactNode } from "react";
import { featuresConfig } from "@/lib/config";

const easeOut = [0.16, 1, 0.3, 1] as const;

interface Feature {
  number: string;
  title: string;
  description: string;
  image: string;
}

const features: Feature[] = featuresConfig.features.map((f) => ({
  number: f.number,
  title: f.title,
  description: f.description,
  image: f.image,
}));

function FeatureCard({
  feature,
  index,
}: {
  feature: Feature;
  index: number;
}): ReactNode {
  return (
    <motion.div
      className="bg-muted grid grid-cols-1 gap-2 overflow-hidden rounded-md border-2 border-black p-2 md:grid-cols-2 transition-colors duration-300 hover:bg-muted/80"
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.01 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        duration: 0.6,
        delay: index * 0.1,
        ease: easeOut,
      }}
    >
      <div className="px-4 py-28">
        <span className="text-muted-foreground mb-4 block w-fit rounded-md border-2 border-black px-2 py-1 text-sm font-medium transition-colors duration-300">
          {feature.number}
        </span>
        <h3 className="font-display mb-4 text-2xl font-medium tracking-tight uppercase md:text-3xl">
          {feature.title}
        </h3>
        <p className="text-muted-foreground max-w-md text-sm leading-relaxed">
          {feature.description}
        </p>
      </div>

      <div className="relative aspect-4/3 w-full self-stretch overflow-hidden rounded-md border-2 border-black md:aspect-auto">
        <Image
          src={feature.image}
          alt={feature.title}
          fill
          sizes="(max-width: 768px) 100vw, 50vw"
          className="relative! h-full! w-full! object-cover md:absolute!"
        />
      </div>
    </motion.div>
  );
}

export function Features(): ReactNode {
  return (
    <section className="bg-background px-6 py-16 md:py-32">
      <div className="mx-auto flex max-w-6xl flex-col gap-12 lg:flex-row lg:items-start lg:gap-16">
        {/* Sticky left column */}
        <motion.div
          className="lg:sticky lg:top-60 lg:w-96 lg:shrink-0"
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <h2 className="font-display mb-4 text-2xl font-medium tracking-tight uppercase md:mb-6 md:text-3xl lg:text-4xl">
            {featuresConfig.title}
          </h2>
          <p className="text-muted-foreground mb-6 max-w-sm text-base md:mb-8 md:text-lg">
            {featuresConfig.description}
          </p>
          <Link
            href="/about"
            className="group inline-flex items-center gap-2 text-sm font-medium text-foreground transition-all duration-300 hover:gap-3"
          >
            <span className="underline underline-offset-4">Read our story</span>
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </Link>
        </motion.div>

        {/* Scrolling right column */}
        <div className="flex min-w-0 flex-1 flex-col gap-6 md:gap-32">
          {features.map((feature, index) => (
            <FeatureCard key={feature.number} feature={feature} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}

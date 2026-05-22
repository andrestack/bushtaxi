"use client";

import { Check, ChevronRightIcon } from "lucide-react";
import { motion } from "motion/react";
import type { ReactNode } from "react";
import { pricingConfig } from "@/lib/config";

const easeOut = [0.16, 1, 0.3, 1] as const;

function PlanCard({ plan }: { plan: (typeof pricingConfig.tiers)[number] }): ReactNode {
  return (
    <motion.div
      className={`rounded-md border-2 border-black p-6 md:p-8 ${
        "badge" in plan && plan.badge
          ? "bg-accent-blue transition-shadow duration-300 hover:shadow-lg"
          : "bg-background transition-[background-color] duration-300 hover:bg-background/80"
      }`}
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -4 }}
      viewport={{ once: true, amount: 0.3 }}
      transition={{
        opacity: { duration: 0.6, ease: easeOut },
        y: { duration: 0.3, ease: easeOut },
      }}
    >
      <div className="mb-6">
        <div className="flex items-center gap-2">
          <h3 className="font-display text-lg font-medium uppercase">{plan.name}</h3>
          {"badge" in plan && plan.badge && (
            <span className="bg-accent rounded px-2 py-0.5 text-xs font-medium text-black uppercase">
              {plan.badge}
            </span>
          )}
        </div>
        <p className="text-muted-foreground text-sm">{plan.description}</p>
      </div>

      <div className="mb-8 flex items-baseline gap-1">
        <span className="font-display text-4xl font-medium tracking-tight md:text-5xl">
          {plan.price}
        </span>
        <span className="text-muted-foreground text-sm">/ {plan.period}</span>
      </div>

      <ul className="space-y-3">
        {plan.features.map((feature) => (
          <li key={feature} className="flex items-start gap-3 text-sm">
            <Check className="text-foreground mt-0.5 h-4 w-4 shrink-0" />
            <span>{feature}</span>
          </li>
        ))}
      </ul>

      <a
        href={plan.cta.href}
        className={`group mt-8 inline-flex w-full items-center justify-center gap-3 rounded-md border-2 border-black py-3 pr-3 pl-5 font-medium transition-all duration-500 ease-out hover:rounded-[50px] ${
          "badge" in plan && plan.badge
            ? "bg-foreground text-background hover:bg-foreground/90"
            : "bg-accent text-black hover:bg-accent/90"
        }`}
      >
        <span>{plan.cta.text}</span>
        <span className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-black transition-all duration-300 group-hover:scale-110 bg-background text-foreground">
          <ChevronRightIcon className="h-4 w-4 relative left-px" />
        </span>
      </a>
    </motion.div>
  );
}

export function Pricing(): ReactNode {
  return (
    <section id="pricing" className="bg-muted px-6 py-16 md:py-32">
      <div className="mx-auto max-w-6xl">
        <motion.div
          className="mb-12 text-center md:mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, ease: easeOut }}
        >
          <h2 className="font-display mb-4 text-3xl font-medium tracking-tight uppercase md:text-4xl lg:text-5xl">
            {pricingConfig.title}
          </h2>
          <p className="text-muted-foreground text-lg">
            {pricingConfig.description}
          </p>
        </motion.div>

        <div className="grid grid-cols-1 items-start gap-6 md:grid-cols-3 md:gap-8">
          {pricingConfig.tiers.map((plan) => (
            <PlanCard key={plan.name} plan={plan} />
          ))}
        </div>

        <motion.div
          className="mt-12 text-center"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2, ease: easeOut }}
        >
          <p className="text-muted-foreground text-sm">
            {pricingConfig.note}
          </p>
        </motion.div>
      </div>
    </section>
  );
}

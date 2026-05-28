"use client";

import { ChevronRightIcon } from "lucide-react";
import { motion } from "motion/react";
import Image from "next/image";
import { Link } from "next-view-transitions";
import { useState, type ReactNode } from "react";
import { footerConfig, siteConfig } from "@/lib/config";

const easeOut = [0.16, 1, 0.3, 1] as const;

const fadeInUp = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, amount: 0.5 },
  transition: { duration: 0.8, ease: easeOut },
};

const classesLinks = footerConfig.links.classes.map((link) => ({
  label: link.label,
  href: link.href,
}));

const infoLinks = footerConfig.links.info.map((link) => ({
  label: link.label,
  href: link.href,
}));

export function Footer(): ReactNode {
  const [year] = useState(() => new Date().getFullYear());

  return (
    <footer className="bg-accent rounded-tl-4xl rounded-tr-4xl border-t-2 border-black px-6 py-16 text-black md:px-12 lg:px-20">
      <div className="mx-auto max-w-6xl">
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div className="max-w-md" {...fadeInUp}>
            <Image
              src="/img/bushtaxi2.svg"
              alt={siteConfig.name}
              width={200}
              height={80}
              className="mb-6 h-20 w-auto"
            />
            <p className="text-lg leading-relaxed text-black/80">
              {footerConfig.description}
            </p>
            <Link
              href={footerConfig.cta.href}
              target="_blank"
            
              className="group mt-8 inline-flex items-center gap-3 rounded-md border-2 border-black bg-white py-3 pr-3 pl-4 font-medium shadow-lg shadow-black/10 transition-all duration-500 ease-out hover:rounded-[50px] hover:bg-white/90 hover:shadow-xl hover:shadow-black/20"
            >
              <span>{footerConfig.cta.text}</span>
              <span className="bg-accent flex h-10 w-10 items-center justify-center rounded-full border-2 border-black text-black transition-all duration-300 group-hover:scale-110">
                <ChevronRightIcon className="relative left-px h-4 w-4" />
              </span>
            </Link>
          </motion.div>

          <div className="grid grid-cols-2 gap-8 lg:justify-items-end">
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
            >
              <h4 className="font-display mb-4 text-sm font-semibold tracking-wider text-black/50 uppercase">
                Classes
              </h4>
              <ul className="space-y-3">
                {classesLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block text-black/80 transition-all duration-300 hover:translate-x-1 hover:text-black"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
            <motion.div
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.2 }}
            >
              <h4 className="font-display mb-4 text-sm font-semibold tracking-wider text-black/50 uppercase">
                Info
              </h4>
              <ul className="space-y-3">
                {infoLinks.map((link) => (
                  <li key={link.label}>
                    <Link
                      href={link.href}
                      className="inline-block text-black/80 transition-all duration-300 hover:translate-x-1 hover:text-black"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>
        </div>

        <div className="my-16 h-px bg-black/20" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-20">
          <motion.div className="flex flex-col justify-between h-full" {...fadeInUp}>
            <Image
              src="/img/tinab.png"
              alt="This is not a bongo"
              width={721}
              height={333}
              className="w-full max-w-xs md:max-w-sm lg:max-w-md h-auto"
            />
            <p className="text-sm text-black/50 mt-4">
              &copy; {year} {siteConfig.name}            </p>
          </motion.div>

          <div className="flex flex-col justify-between gap-8 lg:items-end lg:text-right">
            <motion.div
              className="space-y-6"
              {...fadeInUp}
              transition={{ ...fadeInUp.transition, delay: 0.1 }}
            >
              <div>
                <h4 className="mb-1 font-semibold">Palmwoods</h4>
                <p className="text-black/70">
                  {footerConfig.contact.palmwoods}
                </p>
              </div>
              <div>
                <h4 className="mb-1 font-semibold">Pomona</h4>
                <p className="text-black/70">
                  {footerConfig.contact.pomona}
                </p>
              </div>
              <a
                href={`mailto:${footerConfig.contact.email}`}
                className="inline-block text-lg font-medium underline underline-offset-4 transition-opacity hover:opacity-70"
              >
                {footerConfig.contact.email}
              </a>
            </motion.div>
          </div>
        </div>
      </div>
    </footer>
  );
}

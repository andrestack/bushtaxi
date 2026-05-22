"use client";

import { ArrowUpRight } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import React, { useState, useSyncExternalStore, type ReactNode } from "react";
import { siteConfig } from "@/lib/config";

const easeOut = [0.16, 1, 0.3, 1] as const;
const easeInOut = [0.65, 0, 0.35, 1] as const;
const spring = { type: "spring", stiffness: 100, damping: 20, mass: 1 } as const;
const DESKTOP_BREAKPOINT = 700;

function useIsDesktop(): boolean {
  return useSyncExternalStore(
    (callback) => {
      const mq = window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`);
      mq.addEventListener("change", callback);
      return () => mq.removeEventListener("change", callback);
    },
    () => window.matchMedia(`(min-width: ${DESKTOP_BREAKPOINT}px)`).matches,
    () => true
  );
}

const menuCards = [
  {
    id: "classes",
    title: "CLASSES",
    links: [
      { label: "Weekly Classes", href: "#", badge: null },
      { label: "Weekend Intensives", href: "#", badge: null },
      { label: "Pricing", href: "#pricing", badge: null },
      { label: "FAQ", href: "#faq", badge: null },
    ],
  },
  {
    id: "info",
    title: "INFO",
    links: [
      { label: "About", href: "#", badge: null },
      { label: "Blog", href: "#", badge: null },
      { label: "Contact", href: "mailto:mail@andresilva.online", badge: null },
    ],
  },
  {
    id: "contact",
    title: "CONTACT",
    links: [],
  },
];

function HamburgerIcon({ isOpen }: { isOpen: boolean }): ReactNode {
  return (
    <div className="relative flex h-2.5 w-7 cursor-pointer flex-col justify-between">
      <motion.span
        className="block h-0.5 w-full origin-center rounded-full bg-current"
        animate={isOpen ? { rotate: 45, y: 4 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.4, ease: easeOut }}
      />
      <motion.span
        className="block h-0.5 w-full origin-center rounded-full bg-current"
        animate={isOpen ? { rotate: -45, y: -4 } : { rotate: 0, y: 0 }}
        transition={{ duration: 0.4, ease: easeOut }}
      />
    </div>
  );
}

function MenuCard({ card }: { card: (typeof menuCards)[number] }): ReactNode {
  return (
    <motion.div
      className="bg-menu-card min-h-50 rounded-md border-2 border-black p-6 min-[1080px]:min-h-80"
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.8, ease: easeOut },
        },
      }}
    >
      <span className="font-display text-background/50 text-xs font-medium tracking-widest uppercase">
        {card.title}
      </span>

      {card.id === "contact" && (
        <div className="mt-6 flex h-[calc(100%-2rem)] flex-col justify-between pb-4">
          <Link
            href="mailto:mail@andresilva.online"
            className="text-background hover:text-background/70 text-xl font-semibold transition-colors md:text-2xl"
          >
            mail@andresilva.online
          </Link>
          <div className="mt-4 text-background/70 text-sm">
            <p>Palmwoods: Tuesdays 5:30 PM</p>
            <p>Pomona: Thursdays 5:30–7 PM (Coming Soon)</p>
          </div>
        </div>
      )}

      {card.links.length > 0 && (
        <ul className="mt-6">
          {card.links.map((link, index) => (
            <li key={link.label}>
              <Link
                href={link.href}
                className="group text-background hover:text-background/70 flex items-center justify-between py-4 text-xl font-semibold transition-all duration-300 md:text-2xl"
              >
                <span className="flex items-center gap-3 transition-transform duration-300 group-hover:translate-x-1">
                  {link.label}
                  {link.badge && (
                    <span className="bg-accent rounded px-2 py-0.5 text-xs font-medium text-black uppercase">
                      {link.badge}
                    </span>
                  )}
                </span>
                <ArrowUpRight className="h-5 w-5 opacity-50 transition-all duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 group-hover:opacity-100" />
              </Link>
              {index < card.links.length - 1 && (
                <div className="bg-background/10 h-px" />
              )}
            </li>
          ))}
        </ul>
      )}
    </motion.div>
  );
}

function MobileSignUpButton(): ReactNode {
  return (
    <motion.div
      className="col-span-full flex items-center justify-center gap-2 pt-2"
      variants={{
        hidden: { opacity: 0, y: 20 },
        visible: {
          opacity: 1,
          y: 0,
          transition: { duration: 0.6, ease: easeOut },
        },
      }}
    >
      <Link
        href="mailto:mail@andresilva.online"
        className="text-background rounded-md border-2 border-white/20 bg-background/10 px-6 py-3 text-xl font-medium tracking-tight transition-colors"
      >
        Contact
      </Link>
      <Link
        href={siteConfig.nav.cta.href}
        className="group bg-accent relative rounded-md border-2 border-black px-6 py-3 text-xl font-medium tracking-tight text-black transition-all duration-500 hover:rounded-[50px]"
      >
        <span
          className="relative block h-[1.25em] overflow-hidden"
          style={{
            maskImage:
              "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
            WebkitMaskImage:
              "linear-gradient(to bottom, transparent, black 25%, black 75%, transparent)",
          }}
        >
          <span className="flex flex-col duration-0 ease-[cubic-bezier(0.16,1,0.3,1)] group-hover:-translate-y-2/3 group-hover:transition-transform group-hover:duration-300">
            <span className="block leading-[1.25em]">{siteConfig.nav.cta.text}</span>
            <span className="block leading-[1.25em]">{siteConfig.nav.cta.text}</span>
            <span className="block leading-[1.25em]">{siteConfig.nav.cta.text}</span>
          </span>
        </span>
      </Link>
    </motion.div>
  );
}

export function Header(): ReactNode {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [hasScrolled, setHasScrolled] = useState(false);
  const [scrollbarWidth, setScrollbarWidth] = useState(0);
  const isDesktop = useIsDesktop();
  const heightDelay = isDesktop ? 0.2 : 0;
  const cardsDelay = isDesktop ? 0.7 : 0.2;

  React.useEffect(() => {
    const wrapper = document.querySelector('.h-screen.overflow-y-auto') as HTMLElement;
    if (wrapper) {
      setScrollbarWidth(wrapper.offsetWidth - wrapper.clientWidth);
    }

    const handleScroll = () => {
      const scrollY = wrapper ? wrapper.scrollTop : window.scrollY;
      setHasScrolled(scrollY > 50);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });
    wrapper?.addEventListener("scroll", handleScroll, { passive: true });

    return () => {
      window.removeEventListener("scroll", handleScroll);
      wrapper?.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3, ease: easeOut }}
            onClick={() => setIsMenuOpen(false)}
            aria-hidden="true"
          />
        )}
      </AnimatePresence>

      <motion.header
        className="fixed top-0 left-0 z-50 flex w-full justify-center px-4 pt-4"
        style={{ 
          paddingRight: `calc(1rem + ${scrollbarWidth}px)`,
        }}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{
          duration: 0.8,
          delay: 0.3,
          ease: easeOut,
        }}
      >
        <motion.nav
          className="bg-foreground shadow-2xl/20 flex max-w-6xl flex-col overflow-hidden rounded-md border-2 border-black"
          initial={false}
          animate={{ 
            width: isMenuOpen ? "100%" : hasScrolled ? "56rem" : "42rem",
          }}
          transition={{ ...spring, delay: isMenuOpen ? 0 : 0.15 }}
        >
          <div className="flex w-full items-center justify-between py-2 pr-2 pl-4">
            <Link href="/" className="flex items-center gap-2">
              <Image
                src="/img/banner.svg"
                alt="Bush Taxi"
                width={120}
                height={32}
                className="h-8 w-auto"
              />
            </Link>

            <button
              className="text-background/80 hover:text-background flex h-full cursor-pointer items-center gap-2 rounded-md px-2 transition-colors hover:bg-white/10"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              <HamburgerIcon isOpen={isMenuOpen} />
              <span className="text-xl font-medium tracking-tight">Menu</span>
            </button>
          </div>

          <AnimatePresence>
            {isMenuOpen && (
              <motion.div
                className="overflow-hidden"
                style={{ maxHeight: "calc(100vh - 6rem)" }}
                initial={{ height: 0 }}
                animate={{
                  height: "auto",
                  transition: {
                    duration: 0.5,
                    ease: easeInOut,
                    delay: heightDelay,
                  },
                }}
                exit={{
                  height: 0,
                  transition: { duration: 0.4, ease: easeInOut },
                }}
              >
                <div
                  className="scrollbar-hide max-h-[calc(100vh-6rem)] overflow-y-auto"
                  data-lenis-prevent
                >
                  <motion.div
                    className="grid grid-cols-1 gap-6 p-6 min-[1080px]:grid-cols-3"
                    initial="hidden"
                    animate="visible"
                    exit="hidden"
                    variants={{
                      hidden: {
                        transition: {
                          staggerChildren: 0.05,
                          staggerDirection: -1,
                        },
                      },
                      visible: {
                        transition: {
                          staggerChildren: 0.1,
                          delayChildren: cardsDelay,
                        },
                      },
                    }}
                  >
                    {menuCards.map((card) => (
                      <MenuCard key={card.id} card={card} />
                    ))}
                    <MobileSignUpButton />
                  </motion.div>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.nav>
      </motion.header>
    </>
  );
}

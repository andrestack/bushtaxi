import type { Metadata } from "next";
import { AboutPage } from "@/components/about-page";
import { createMetadata } from "@/lib/metadata";
import { siteConfig } from "@/lib/config";

export const metadata: Metadata = createMetadata({
  title: `About — ${siteConfig.name}`,
  description: "The Bush Taxi Story — Over 20 years of West African drumming. From Berlin to Brisbane, Portugal to West Africa.",
  path: "/about",
});

export default function About() {
  return <AboutPage />;
}

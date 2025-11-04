import { FeatureSection } from "@/components/feature-1";
import { EmblaCarousel2 } from "@/components/carousel-2";
import { Hero } from "@/components/hero-1";

export default function Home() {
  return (
    <main className="mx-auto max-w-7xl px-4">
      <div className="flex flex-col items-center gap-12">
        <Hero />
        <EmblaCarousel2 />
        <FeatureSection />
      </div>
    </main>
  );
}

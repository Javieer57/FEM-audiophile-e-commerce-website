import { AboutAudiophile } from "./components/shared/AboutAudiophile";
import { FeaturedProducts } from "./components/home/FeaturedProducts";
import { HeroSection } from "./components/home/HeroSection";
import { ProductCategories } from "./components/home/ProductCategories";

export default function Home() {
  return (
    <main>
      <HeroSection />
      <div className="pt-10 pb-30 md:py-24 lg:pt-30 lg:pb-50">
        <div className="mb-30 md:mb-24 lg:mb-42">
          <ProductCategories />
        </div>
        <div className="mb-30 md:mb-24 lg:mb-50">
          <FeaturedProducts />
        </div>
        <div>
          <AboutAudiophile />
        </div>
      </div>
    </main>
  );
}

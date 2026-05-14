import { AboutAudiophile } from "./AboutAudiophile";
import { FeaturedProducts } from "./FeaturedProducts";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { HeroSection } from "./HeroSection";
import { ProductCategories } from "./ProductCategories";

export default function Home() {
  return (
    <>
      <Header />
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
      <Footer />
    </>
  );
}

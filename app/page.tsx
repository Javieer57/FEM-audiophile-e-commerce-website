import { AboutAudiophile } from "./AboutAudiophile";
import { FeaturedProducts } from "./FeaturedProducts";
import { Footer } from "./Footer";
import { Header } from "./Header";

export default function Home() {
  return (
    <>
      <Header />
      <div className="h-[200dvh]"></div>
      <main className="pb-30 md:pb-24 lg:pb-50">
        {/* <section aria-labelledby="home-hero-title">
          <div>
            <p>NEW PRODUCT</p>
            <h1 id="home-hero-title">XX99 MARK II HEADPHONES</h1>
            <p>
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
            <a href="/product/xx99-mark-two-headphones">SEE PRODUCT</a>
          </div>
          <div>
            <img src="#" alt="XX99 Mark II Headphones product" />
          </div>
        </section> */}
        {/* <section aria-label="Shop by category">
          <ul>
            <li>
              <img src="#" alt="Headphones" />
              <h2>
                <a href="/headphones">HEADPHONES</a>
              </h2>
              <a href="/headphones" aria-label="Shop headphones">
                SHOP
              </a>
            </li>
            <li>
              <img src="#" alt="Speakers" />
              <h2>
                <a href="/speakers">SPEAKERS</a>
              </h2>
              <a href="/speakers" aria-label="Shop speakers">
                SHOP
              </a>
            </li>
            <li>
              <img src="#" alt="Earphones" />
              <h2>
                <a href="/earphones">EARPHONES</a>
              </h2>
              <a href="/earphones" aria-label="Shop earphones">
                SHOP
              </a>
            </li>
          </ul>
        </section> */}

        <FeaturedProducts />
        <AboutAudiophile />
      </main>
      <Footer />
    </>
  );
}

import { AboutAudiophile } from "./AboutAudiophile";
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
        {/* <section aria-labelledby="zx9-title">
          <article>
            <img src="#" alt="ZX9 Speaker product" />
            <div>
              <h2 id="zx9-title">ZX9 SPEAKER</h2>
              <p>
                Upgrade to premium speakers that are phenomenally built to
                deliver truly remarkable sound.
              </p>
              <a href="/product/zx9-speaker">SEE PRODUCT</a>
            </div>
          </article>
        </section> */}
        {/* <section aria-label="Featured products">
          <article>
            <img src="#" alt="ZX7 Speaker product" />
            <h3>ZX7 SPEAKER</h3>
            <a href="/product/zx7-speaker">SEE PRODUCT</a>
          </article>
          <article>
            <img src="#" alt="YX1 Earphones product" />
            <h3>YX1 EARPHONES</h3>
            <a href="/product/yx1-earphones">SEE PRODUCT</a>
          </article>
        </section> */}
        <AboutAudiophile />
      </main>
      <Footer />
    </>
  );
}

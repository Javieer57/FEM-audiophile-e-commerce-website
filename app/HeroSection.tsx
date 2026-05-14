import { SeeProductLink } from "./components/SeeProductLink";

export function HeroSection() {
  return (
    <section
      aria-labelledby="home-hero-title"
      className="relative aspect-[1/1.6] bg-black pt-23.25 text-white md:aspect-[1/0.9493] lg:aspect-[1/0.50625]"
    >
      <div className="general-container relative z-10 grid h-full gap-7.5 lg:grid-cols-12">
        <div className="col-start-1 space-y-10 self-center max-lg:text-center lg:col-end-6">
          <div className="mx-auto grid gap-6 max-lg:max-w-96 lg:mx-0">
            <p className="text-sm tracking-[0.625rem] uppercase opacity-50">
              NEW PRODUCT
            </p>
            <h1
              id="home-hero-title"
              className="text-4xl font-bold tracking-[0.075rem] md:text-[3.5rem] md:leading-14.5 md:tracking-[0.125rem]"
            >
              XX99 MARK II HEADPHONES
            </h1>
            <p className="font-medium text-balance opacity-75 lg:max-w-none">
              Experience natural, lifelike audio and exceptional build quality
              made for the passionate music enthusiast.
            </p>
          </div>
          <SeeProductLink
            href="/product/xx99-mark-two-headphones"
            variant="primary"
            ariaLabel="See product: XX99 mark II headphones"
          />
        </div>
      </div>

      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/images/home/desktop/image-hero.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/images/home/tablet/image-hero.jpg"
        />
        <img
          src="/images/home/mobile/image-hero.jpg"
          alt=""
          className="absolute inset-0 inline-block h-full w-full object-cover object-center"
        />
      </picture>
    </section>
  );
}

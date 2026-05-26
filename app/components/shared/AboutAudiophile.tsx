export function AboutAudiophile() {
  return (
    <section aria-labelledby="about-title" className="general-container">
      <div className="grid items-center gap-10 md:gap-16 lg:grid-cols-12 lg:gap-7.5">
        <div className="space-y-8 max-lg:order-2 max-lg:text-center md:max-lg:mx-auto md:max-lg:max-w-11/12 lg:col-span-5">
          <h2
            id="about-title"
            className="text-[1.75rem] font-bold tracking-[0.06rem] uppercase md:text-[2.5rem] md:leading-11 md:tracking-[0.09rem]"
          >
            BRINGING YOU THE <span className="text-primary">BEST</span> AUDIO
            GEAR
          </h2>
          <p className="font-medium opacity-50 max-lg:text-balance">
            Located at the heart of New York City, Audiophile is the premier
            store for high end headphones, earphones, speakers, and audio
            accessories. We have a large showroom and luxury demonstration rooms
            available for you to browse and experience a wide range of our
            products. Stop by our store to meet some of the fantastic people who
            make Audiophile the best place to buy your portable audio equipment.
          </p>
        </div>

        <div className="hidden lg:block"></div>

        <div className="lg:col-span-6">
          <picture>
            <source
              media="(min-width: 1024px)"
              srcSet="/images/shared/desktop/image-best-gear.jpg"
            />
            <source
              media="(min-width: 768px)"
              srcSet="/images/shared/tablet/image-best-gear.jpg"
            />
            <img
              src="/images/shared/mobile/image-best-gear.jpg"
              alt="Person listening with Audiophile headphones"
              className="mx-auto overflow-hidden rounded-lg"
            />
          </picture>
        </div>
      </div>
    </section>
  );
}

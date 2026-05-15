import { SeeProductLink } from "../shared/SeeProductLink";

export function FeaturedProductZX9() {
  return (
    <article className="bg-primary grid gap-8 overflow-hidden rounded-lg px-6 py-14 md:gap-16 md:pb-16 lg:aspect-2/1 lg:grid-cols-12 lg:gap-7.5 lg:px-0 lg:py-0">
      <div className="relative self-end text-center lg:col-start-2 lg:col-end-7">
        <img
          src="/images/home/desktop/pattern-circles.svg"
          alt=""
          aria-hidden="true"
          className="absolute top-1/2 left-1/2 aspect-square w-139.5 max-w-none -translate-x-1/2 -translate-y-1/2 md:w-248.5 lg:top-4/5"
        />
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/images/home/desktop/image-speaker-zx9.png"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/home/tablet/image-speaker-zx9.png"
          />
          <img
            src="/images/home/mobile/image-speaker-zx9.png"
            alt="ZX9 Speaker product"
            className="relative inline-block w-full max-w-43 md:max-w-49.25 lg:-mb-4 lg:max-w-102.5"
          />
        </picture>
      </div>
      <div className="relative mx-auto space-y-6 self-center max-lg:max-w-88 max-lg:text-center md:space-y-10 lg:col-start-8 lg:col-end-12">
        <h3 className="text-4xl leading-10 font-bold tracking-[0.09rem] text-white md:text-[3.25rem] md:leading-14 md:tracking-[0.125rem]">
          ZX9 <br /> SPEAKER
        </h3>
        <p className="font-medium text-white opacity-75">
          Upgrade to premium speakers that are phenomenally built to deliver
          truly remarkable sound.
        </p>
        <SeeProductLink
          href="/product/zx9-speaker"
          variant="dark"
          ariaLabel="See product: ZX9 speaker"
        />
      </div>
    </article>
  );
}

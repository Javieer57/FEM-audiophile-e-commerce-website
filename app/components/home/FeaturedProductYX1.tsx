import { SeeProductLink } from "../shared/SeeProductLink";

export function FeaturedProductYX1() {
  return (
    <article className="grid gap-6 md:grid-cols-2 md:gap-3 lg:gap-7.5">
      <div className="bg-light-gray aspect-[1/0.6116] overflow-hidden rounded-lg md:aspect-[1/0.9439] lg:aspect-video">
        <picture>
          <source
            media="(min-width: 1024px)"
            srcSet="/images/home/desktop/image-earphones-yx1.jpg"
          />
          <source
            media="(min-width: 768px)"
            srcSet="/images/home/tablet/image-earphones-yx1.jpg"
          />
          <img
            src="/images/home/mobile/image-earphones-yx1.jpg"
            alt="YX1 Earphones product"
            className="h-full w-full object-cover object-center"
          />
        </picture>
      </div>

      <div className="bg-light-gray flex rounded-lg px-6 py-10 md:items-center md:px-10 lg:px-24">
        <div className="space-y-8">
          <h3 className="text-[1.75rem] font-bold tracking-[0.125rem] uppercase">
            YX1 EARPHONES
          </h3>

          <SeeProductLink
            href="/product/yx1-earphones"
            ariaLabel="See product: YX1 earphones"
          />
        </div>
      </div>
    </article>
  );
}

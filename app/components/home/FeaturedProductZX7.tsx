import { SeeProductLink } from "../shared/SeeProductLink";

export function FeaturedProductZX7() {
  return (
    <article className="bg-light-gray relative grid gap-6 overflow-hidden rounded-lg max-md:aspect-square md:aspect-[1/0.4644] md:gap-3 lg:aspect-[1/0.2882]">
      <picture>
        <source
          media="(min-width: 1024px)"
          srcSet="/images/home/desktop/image-speaker-zx7.jpg"
        />
        <source
          media="(min-width: 768px)"
          srcSet="/images/home/tablet/image-speaker-zx7.jpg"
        />
        <img
          src="/images/home/mobile/image-speaker-zx7.jpg"
          alt="ZX7 Speaker product"
          className="h-full w-full object-cover object-center"
        />
      </picture>

      <div className="absolute inset-0 z-10 flex items-center px-6 md:px-16 lg:px-24">
        <div className="space-y-8">
          <h3 className="text-[1.75rem] font-bold tracking-[0.125rem] uppercase">
            ZX7 SPEAKER
          </h3>
          <SeeProductLink
            href="/product/zx7-speaker"
            ariaLabel="See product: ZX7 speaker"
          />
        </div>
      </div>
    </article>
  );
}

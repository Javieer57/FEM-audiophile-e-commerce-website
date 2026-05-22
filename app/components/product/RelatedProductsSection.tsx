import type { Products } from "@mytypes/products";
import { SeeProductLink } from "../shared/SeeProductLink";

type RelatedProductsSectionProps = {
  productData: Products;
};

export function RelatedProductsSection({
  productData,
}: RelatedProductsSectionProps) {
  return (
    <section aria-labelledby="you-may-also-like-title">
      <div className="general-container grid gap-10 lg:gap-16">
        <h2
          id="you-may-also-like-title"
          className="text-center text-2xl font-bold tracking-[0.055rem] uppercase md:text-[2rem] lg:tracking-[0.075rem]"
        >
          You May Also Like
        </h2>

        <ul className="grid gap-14 md:grid-cols-3 md:gap-2.5 lg:gap-7.5">
          {productData.others.map((item, index) => (
            <li key={index}>
              <article className="flex flex-col items-center gap-8 lg:gap-10">
                <div className="bg-light-gray overflow-hidden rounded-lg">
                  <picture>
                    <source
                      media="(min-width: 1024px)"
                      srcSet={item.image.desktop}
                    />
                    <source
                      media="(min-width: 768px)"
                      srcSet={item.image.tablet}
                    />
                    <img
                      src={item.image.mobile}
                      alt={item.name}
                      className="h-full w-full object-contain lg:object-cover"
                    />
                  </picture>
                </div>

                <div className="grid gap-8 text-center">
                  <h3 className="text-2xl font-bold uppercase max-lg:tracking-[0.107rem]">
                    {item.name}
                  </h3>
                  <SeeProductLink
                    href={`/product/${item.slug}`}
                    ariaLabel={`See ${item.name} product`}
                    variant="primary"
                  />
                </div>
              </article>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}

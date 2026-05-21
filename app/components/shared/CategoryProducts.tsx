import { Products } from "@mytypes/products";
import { SeeProductLink } from "./SeeProductLink";

type CategoryProductsProps = {
  products: Products[];
};

export function CategoryProducts({ products }: CategoryProductsProps) {
  return (
    <div className="grid gap-30 lg:gap-40">
      {products.map((product) => (
        <article
          key={product.id}
          className="group grid items-center justify-between gap-8 lg:grid-cols-12 lg:gap-7.5"
        >
          <div
            className="lg:col-span-6 lg:group-even:order-last"
            aria-hidden="true"
          >
            <div className="bg-light-gray aspect-[0.9289] overflow-hidden rounded-lg md:aspect-[1/0.5108] lg:aspect-square">
              <picture>
                <source
                  media="(min-width: 1024px)"
                  srcSet={product.categoryImage.desktop}
                />
                <source
                  media="(min-width: 768px)"
                  srcSet={product.categoryImage.tablet}
                />
                <img
                  src={product.categoryImage.mobile}
                  alt={product.name}
                  className="h-full w-full object-contain lg:object-cover"
                />
              </picture>
            </div>
          </div>

          <div className="hidden lg:block"></div>

          <div className="max-lg:text-center md:max-lg:mx-auto md:max-lg:max-w-11/12 lg:col-span-5 lg:group-even:order-first">
            <div className="mb-6 grid gap-6 lg:mb-8 lg:gap-4">
              {product.new && (
                <p className="text-primary text-sm tracking-[0.625rem] uppercase">
                  New Product
                </p>
              )}
              <h3 className="text-[1.75rem] font-bold tracking-[0.0625rem] uppercase lg:text-[2.5rem] lg:leading-11 lg:tracking-[0.09rem]">
                {product.name}
              </h3>
            </div>
            <p className="mb-6 leading-6.5 font-medium text-balance opacity-50 lg:mb-10">
              {product.description}
            </p>
            <SeeProductLink
              href={`/product/${product.slug}`}
              variant="primary"
              ariaLabel={`See product: ${product.name}`}
            />
          </div>
        </article>
      ))}
    </div>
  );
}

import { formatCurrency } from "@utils/formatCurrency";
import type { Products } from "@mytypes/products";
import { GoBackButton } from "../shared/GoBackButton";
import { ProductActions } from "./ProductActions";

type ProductSummarySectionProps = {
  productData: Products;
};

export function ProductSummarySection({
  productData,
}: ProductSummarySectionProps) {
  return (
    <section aria-labelledby="product-title">
      <div className="mb-6 lg:mb-14">
        <GoBackButton fallbackHref={`/${productData.category}`} />
      </div>

      <div className="grid items-center justify-between gap-8 md:grid-cols-12 md:gap-2.5 lg:gap-7.5">
        <div className="md:col-span-5 lg:col-span-6">
          <div className="bg-light-gray overflow-hidden rounded-lg lg:aspect-square">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={productData.image.desktop}
              />
              <source
                media="(min-width: 768px)"
                srcSet={productData.image.tablet}
              />
              <img
                src={productData.image.mobile}
                alt={productData.name}
                className="h-full w-full object-contain lg:object-cover"
              />
            </picture>
          </div>
        </div>

        <div className="hidden md:block"></div>

        <div className="md:col-span-6 lg:col-span-5">
          <div className="mb-6 grid gap-6 md:gap-4.5 lg:mb-8 lg:gap-4">
            {productData.new && (
              <p className="text-primary text-sm tracking-[0.625rem] uppercase">
                New Product
              </p>
            )}
            <h1
              id="product-title"
              className="text-[1.75rem] font-bold tracking-[0.0625rem] uppercase lg:text-[2.5rem] lg:leading-11 lg:tracking-[0.09rem]"
            >
              {productData.name}
            </h1>
          </div>

          <p className="mb-6 leading-6.5 font-medium opacity-50 max-lg:text-balance lg:mb-8">
            {productData.description}
          </p>

          <p className="mb-12 text-lg font-bold tracking-[0.08125rem]">
            {formatCurrency(productData.price)}
          </p>

          <ProductActions />
        </div>
      </div>
    </section>
  );
}

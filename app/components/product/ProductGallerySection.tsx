import type { Products } from "@mytypes/products";

type ProductGallerySectionProps = {
  productData: Products;
};

export function ProductGallerySection({
  productData,
}: ProductGallerySectionProps) {
  return (
    <section aria-labelledby="gallery-title">
      <h2 id="gallery-title" className="sr-only">
        Gallery
      </h2>

      <div className="grid gap-5 md:grid-cols-12 md:gap-2.5 lg:gap-7.5">
        <div className="md:col-span-5">
          <div className="aspect-[1/0.5321] overflow-hidden rounded-lg md:aspect-[1/0.6281] lg:aspect-[1/0.6292]">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={productData.gallery.first.desktop}
              />
              <source
                media="(min-width: 768px)"
                srcSet={productData.gallery.first.tablet}
              />
              <img
                src={productData.gallery.first.mobile}
                alt=""
                className="h-full w-full object-contain lg:object-cover"
              />
            </picture>
          </div>
        </div>
        <div className="md:col-span-5 md:row-start-2">
          <div className="aspect-[1/0.5321] overflow-hidden rounded-lg md:aspect-[1/0.6281] lg:aspect-[1/0.6292]">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={productData.gallery.second.desktop}
              />
              <source
                media="(min-width: 768px)"
                srcSet={productData.gallery.second.tablet}
              />
              <img
                src={productData.gallery.second.mobile}
                alt=""
                className="h-full w-full object-contain lg:object-cover"
              />
            </picture>
          </div>
        </div>
        <div className="md:col-span-7 md:col-start-6 md:col-end-13 md:row-start-1 md:row-end-3">
          <div className="aspect-[1/1.1253] h-full w-full overflow-hidden rounded-lg md:aspect-[1/0.5108] lg:aspect-auto">
            <picture>
              <source
                media="(min-width: 1024px)"
                srcSet={productData.gallery.third.desktop}
              />
              <source
                media="(min-width: 768px)"
                srcSet={productData.gallery.third.tablet}
              />
              <img
                src={productData.gallery.third.mobile}
                alt=""
                className="h-full w-full object-cover"
              />
            </picture>
          </div>
        </div>
      </div>
    </section>
  );
}

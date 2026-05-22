import type { Products } from "@mytypes/products";

type ProductFeaturesSectionProps = {
  productData: Products;
};

export function ProductFeaturesSection({
  productData,
}: ProductFeaturesSectionProps) {
  return (
    <section className="general-container grid gap-22 md:gap-30 lg:grid-cols-12 lg:gap-7.5">
      <section aria-labelledby="features-title" className="lg:col-span-7">
        <div className="grid gap-6 lg:gap-8">
          <h2
            id="features-title"
            className="text-[2rem] font-bold tracking-[0.075rem] uppercase"
          >
            Features
          </h2>
          <p className="whitespace-pre-line opacity-50">
            {productData.features}
          </p>
        </div>
      </section>
      <div className="hidden lg:block"></div>
      <section aria-labelledby="in-the-box-title" className="lg:col-span-4">
        <div className="grid gap-6 md:gap-2.5 md:max-lg:grid-cols-2 lg:gap-8">
          <h2
            id="in-the-box-title"
            className="text-[2rem] font-bold tracking-[0.075rem] uppercase"
          >
            In the Box
          </h2>
          <ul className="grid gap-2">
            {productData.includes.map((item, index) => (
              <li key={index} className="flex gap-6">
                <span className="text-primary font-bold">{item.quantity}x</span>{" "}
                <span className="font-medium opacity-50">{item.item}</span>
              </li>
            ))}
          </ul>
        </div>
      </section>
    </section>
  );
}

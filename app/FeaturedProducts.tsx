import { FeaturedProductZX9 } from "@/app/components/FeaturedProductZX9";
import { FeaturedProductZX7 } from "@/app/components/FeaturedProductZX7";
import { FeaturedProductYX1 } from "@/app/components/FeaturedProductYX1";

export function FeaturedProducts() {
  return (
    <section
      aria-labelledby="featured-products-title"
      className="general-container grid gap-6 pt-40 pb-50"
    >
      <h2 id="featured-products-title" className="sr-only">
        Featured products
      </h2>

      <FeaturedProductZX9 />
      <FeaturedProductZX7 />
      <FeaturedProductYX1 />
    </section>
  );
}

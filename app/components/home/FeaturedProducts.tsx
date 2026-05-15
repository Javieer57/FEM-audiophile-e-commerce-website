import { FeaturedProductZX9 } from "./FeaturedProductZX9";
import { FeaturedProductZX7 } from "./FeaturedProductZX7";
import { FeaturedProductYX1 } from "./FeaturedProductYX1";

export function FeaturedProducts() {
  return (
    <section
      aria-labelledby="featured-products-title"
      className="general-container grid gap-6"
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

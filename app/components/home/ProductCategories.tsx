import { CategoryCard } from "../shared/CategoryCard";
import { categories } from "../categories";

export function ProductCategories() {
  return (
    <section aria-labelledby="categories-title">
      <h2 id="categories-title" className="sr-only">
        Shop by category
      </h2>

      <ul className="general-container grid gap-4 md:grid-cols-3 md:gap-2.5 lg:gap-7.5">
        {categories.map((item) => (
          <CategoryCard key={item.name} {...item} />
        ))}
      </ul>
    </section>
  );
}

import { ProductCategories } from "../components/home/ProductCategories";
import { AboutAudiophile } from "../components/shared/AboutAudiophile";
import { CategoryProducts } from "../components/shared/CategoryProducts";
import data from "../data.json";

export async function generateStaticParams() {
  const categories = data.filter((item) => item.category);

  const uniqueCategories = Array.from(
    new Set(categories.map((item) => item.category)),
  );

  return uniqueCategories.map((category) => ({
    category,
  }));
}

export default async function Page({
  params,
}: {
  params: Promise<{ category: string }>;
}) {
  const { category } = await params;
  const filteredData = data
    .filter((item) => item.category === category)
    .reverse();

  return (
    <>
      <section
        className="bg-black pt-23.25 text-white"
        aria-labelledby="category-title"
      >
        <div className="general-container">
          <h1
            id="category-title"
            className="py-8 text-center text-[1.75rem] leading-11 font-bold tracking-[0.09rem] uppercase md:py-24.5 md:text-[2.5rem]"
          >
            {category}
          </h1>
        </div>
      </section>

      <div className="grid gap-30 py-30 lg:gap-40 lg:py-40">
        <section
          className="general-container"
          aria-labelledby="products-in-category-title"
        >
          <h2 id="products-in-category-title" className="sr-only">
            Products in {category}
          </h2>

          <CategoryProducts products={filteredData} />
        </section>

        <ProductCategories />
        <AboutAudiophile />
      </div>
    </>
  );
}

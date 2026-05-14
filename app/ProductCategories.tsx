import Link from "next/link";
import { ArrowRightIcon } from "./components/icons/ArrowRightIcon";

const categories = [
  {
    name: "HEADPHONES",
    href: "/headphones",
    imageSrc: "/images/shared/desktop/image-category-thumbnail-headphones.png",
    imageAlt: "Headphones",
  },
  {
    name: "SPEAKERS",
    href: "/speakers",
    imageSrc: "/images/shared/desktop/image-category-thumbnail-speakers.png",
    imageAlt: "Speakers",
  },
  {
    name: "EARPHONES",
    href: "/earphones",
    imageSrc: "/images/shared/desktop/image-category-thumbnail-earphones.png",
    imageAlt: "Earphones",
  },
];

export function ProductCategories() {
  return (
    <section aria-labelledby="categories-title">
      <h2 id="categories-title" className="sr-only">
        Shop by category
      </h2>

      <ul className="general-container grid gap-4 md:grid-cols-3 md:gap-2.5 lg:gap-7.5">
        {categories.map((item) => (
          <li key={item.name} className="relative pt-12 lg:pt-18.5">
            <img
              src={item.imageSrc}
              alt={item.imageAlt}
              className="absolute top-0 left-1/2 max-h-33 -translate-x-1/2 lg:max-h-50"
            />
            <div className="bg-light-gray rounded-lg px-6 pt-22 pb-5.5 lg:pt-29 lg:pb-7.5">
              <div className="flex flex-col items-center gap-4">
                <h3 className="font-bold tracking-[0.08rem] uppercase lg:text-lg">
                  {item.name}
                </h3>
                <Link
                  href={item.href}
                  aria-label={`Shop ${item.imageAlt.toLowerCase()}`}
                  className="hover:text-primary focus-visible:text-primary group flex items-center gap-3 text-sm font-bold tracking-[0.06rem] transition-colors duration-300 focus-visible:outline-none"
                >
                  <span className="opacity-50 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
                    SHOP
                  </span>
                  <ArrowRightIcon />
                </Link>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
}

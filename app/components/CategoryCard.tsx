import Link from "next/link";
import { ArrowRightIcon } from "./icons/ArrowRightIcon";

type CategoryCardProps = {
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export function CategoryCard({
  name,
  href,
  imageSrc,
  imageAlt,
}: CategoryCardProps) {
  return (
    <li className="relative pt-12 lg:pt-18.5">
      <img
        src={imageSrc}
        alt={imageAlt}
        className="absolute top-0 left-1/2 max-h-33 -translate-x-1/2 lg:max-h-50"
      />
      <div className="bg-light-gray rounded-lg px-6 pt-22 pb-5.5 lg:pt-29 lg:pb-7.5">
        <div className="flex flex-col items-center gap-4">
          <h3 className="font-bold tracking-[0.08rem] uppercase lg:text-lg">
            {name}
          </h3>
          <Link
            href={href}
            aria-label={`Shop ${imageAlt.toLowerCase()}`}
            className="group hover:text-primary focus-visible:text-primary flex items-center gap-3 text-sm font-bold tracking-[0.06rem] transition-colors duration-300 focus-visible:outline-none"
          >
            <span className="opacity-50 transition-opacity duration-300 group-hover:opacity-100 group-focus-visible:opacity-100">
              SHOP
            </span>
            <ArrowRightIcon />
          </Link>
        </div>
      </div>
    </li>
  );
}

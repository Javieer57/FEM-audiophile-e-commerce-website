export type Category = {
  name: string;
  href: string;
  imageSrc: string;
  imageAlt: string;
};

export const categories: Category[] = [
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

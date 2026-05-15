import Link from "next/link";

type SeeProductLinkProps = {
  href: string;
  ariaLabel: string;
  variant?: "dark" | "outline" | "primary";
};

const baseClassName =
  "inline-block border px-7.5 py-4 text-sm font-bold tracking-[0.06rem] transition-colors duration-300 focus-visible:outline-none";

const variantClassNames = {
  dark: "border-black bg-black text-white hover:border-medium-gray hover:bg-medium-gray focus-visible:border-medium-gray focus-visible:bg-medium-gray",
  primary:
    "border-primary bg-primary text-white hover:bg-accent focus-visible:bg-accent",
  outline:
    "border-black text-black hover:bg-black hover:text-white focus-visible:bg-black focus-visible:text-white",
};

export function SeeProductLink({
  href,
  ariaLabel,
  variant = "outline",
}: SeeProductLinkProps) {
  return (
    <Link
      href={href}
      aria-label={ariaLabel}
      className={`${baseClassName} ${variantClassNames[variant]}`}
    >
      SEE PRODUCT
    </Link>
  );
}

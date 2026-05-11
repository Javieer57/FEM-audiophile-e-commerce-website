import Link from "next/link";
import { CartIcon, HamburgerMenuIcon } from "./components/icons";

const headerNavLinks = [
  { href: "/", label: "Home" },
  { href: "/headphones", label: "Headphones" },
  { href: "/speakers", label: "Speakers" },
  { href: "/earphones", label: "Earphones" },
];

export function Header() {
  return (
    <header className="sticky top-0 z-50 bg-black text-white">
      <div className="general-container">
        <div className="grid grid-cols-[auto_1fr_auto] items-center gap-5 pt-9 pb-8 md:gap-11 lg:grid-cols-[1fr_auto_1fr] lg:gap-5">
          <div className="lg:hidden">
            <button
              aria-label="Open menu"
              className="flex items-center justify-center"
            >
              <HamburgerMenuIcon />
            </button>
          </div>

          <div className="justify-self-center md:justify-self-start">
            <Link href="/" aria-label="Audiophile home">
              <img src="/images/shared/logo.svg" alt="Audiophile logo" />
            </Link>
          </div>

          <nav
            aria-label="Primary navigation"
            className="hidden justify-self-center lg:block"
          >
            <ul className="flex gap-8 text-sm tracking-[0.125rem] uppercase">
              {headerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="hover:text-primary focus-visible:text-primary font-bold transition-colors duration-300 focus-visible:outline-none"
                  >
                    {link.label.toUpperCase()}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div className="justify-self-end">
            <button
              aria-label="View cart"
              className="flex items-center justify-center"
            >
              <CartIcon />
            </button>
          </div>
        </div>
      </div>
      <div className="general-container max-md:px-0">
        <div className="border-b border-white/20"></div>
      </div>
    </header>
  );
}

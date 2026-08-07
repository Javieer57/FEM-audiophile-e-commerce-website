"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { CartIcon, HamburgerMenuIcon } from "@icons/index";
import { CartDialog } from "./CartDialog";
import { MobileMenuDialog } from "./MobileMenuDialog";
import { categories } from "../../categories";
import { cn } from "@utils/cn";

const headerNavLinks = [
  { href: "/", label: "Home" },
  { href: "/headphones", label: "Headphones" },
  { href: "/speakers", label: "Speakers" },
  { href: "/earphones", label: "Earphones" },
];

export function Header() {
  const pathname = usePathname();
  const isHomePage = pathname === "/";
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);

  const isOverlayOpen = isMenuOpen || isCartOpen;
  const isTransparentHeader = isHomePage && !isOverlayOpen;

  useEffect(() => {
    setIsMenuOpen(false);
  }, [pathname]);

  const toggleMenu = () => {
    if (isMenuOpen) {
      setIsMenuOpen(false);
      return;
    }

    setIsCartOpen(false);
    setIsMenuOpen(true);
  };

  const toggleCart = () => {
    if (isCartOpen) {
      setIsCartOpen(false);
      return;
    }

    setIsMenuOpen(false);
    setIsCartOpen(true);
  };

  return (
    <>
      <header
        className={cn(
          "z-50 w-full text-white transition-colors duration-300",
          isTransparentHeader ? "bg-transparent" : "bg-black",
          isHomePage ? "absolute top-0 z-50" : "relative",
        )}
      >
        <div className="general-container">
          <div className="grid grid-cols-[auto_1fr_auto] items-center gap-5 pt-9 pb-8 md:gap-11 lg:grid-cols-[1fr_auto_1fr] lg:gap-5">
            <div className="lg:hidden">
              <button
                type="button"
                aria-label={isMenuOpen ? "Close menu" : "Open menu"}
                aria-expanded={isMenuOpen}
                aria-controls="mobile-nav"
                className="flex items-center justify-center"
                onClick={toggleMenu}
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
                type="button"
                aria-label={isCartOpen ? "Close cart" : "View cart"}
                aria-expanded={isCartOpen}
                aria-controls="cart-dialog"
                className="flex items-center justify-center"
                onClick={toggleCart}
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

      <MobileMenuDialog
        open={isMenuOpen}
        onClose={setIsMenuOpen}
        categories={categories}
      />

      <CartDialog open={isCartOpen} onClose={setIsCartOpen} />
    </>
  );
}

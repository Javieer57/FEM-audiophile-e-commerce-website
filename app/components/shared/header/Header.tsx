"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import { CartIcon, HamburgerMenuIcon } from "../../icons";
import { CartDialog, type CartProduct } from "./CartDialog";
import { MobileMenuDialog } from "./MobileMenuDialog";
import { categories } from "../../categories";

const headerNavLinks = [
  { href: "/", label: "Home" },
  { href: "/headphones", label: "Headphones" },
  { href: "/speakers", label: "Speakers" },
  { href: "/earphones", label: "Earphones" },
];

const mockCartProducts: CartProduct[] = [
  {
    id: "xx99-mark-two-headphones",
    name: "XX99 MK II",
    unitPrice: 2999,
    quantity: 1,
  },
  { id: "xx59-headphones", name: "XX59", unitPrice: 899, quantity: 2 },
  { id: "yx1-earphones", name: "YX1", unitPrice: 599, quantity: 1 },
];

// const mockCartProducts: CartProduct[] = [];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartProducts, setCartProducts] =
    useState<CartProduct[]>(mockCartProducts);

  useEffect(() => {
    let throttleTimeout: NodeJS.Timeout | null = null;

    const handleScroll = () => {
      if (throttleTimeout) return;

      throttleTimeout = setTimeout(() => {
        setIsScrolled(window.scrollY > 0);
        throttleTimeout = null;
      }, 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
      if (throttleTimeout) clearTimeout(throttleTimeout);
    };
  }, []);

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
        className={`fixed top-0 z-50 w-full text-white transition-colors duration-300 ${
          isScrolled || isMenuOpen || isCartOpen ? "bg-black" : "bg-transparent"
        }`}
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

      <CartDialog
        open={isCartOpen}
        onClose={setIsCartOpen}
        products={cartProducts}
        onRemoveAll={() => setCartProducts([])}
      />
    </>
  );
}

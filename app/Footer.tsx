import Link from "next/link";
import { FacebookIcon, TwitterIcon, InstagramIcon } from "./components/icons";

const footerNavLinks = [
  { href: "/", label: "Home" },
  { href: "/headphones", label: "Headphones" },
  { href: "/speakers", label: "Speakers" },
  { href: "/earphones", label: "Earphones" },
];

const socialLinks = [
  {
    href: "https://facebook.com",
    label: "Facebook",
    ariaLabel: "Visit Audiophile on Facebook",
    icon: FacebookIcon,
  },
  {
    href: "https://twitter.com",
    label: "Twitter",
    ariaLabel: "Visit Audiophile on Twitter",
    icon: TwitterIcon,
  },
  {
    href: "https://instagram.com",
    label: "Instagram",
    ariaLabel: "Visit Audiophile on Instagram",
    icon: InstagramIcon,
  },
];

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="general-container">
        <div className="relative flex flex-col gap-12 pt-13 pb-10 md:gap-8 md:pt-15 md:pb-11.5 lg:gap-9 lg:pt-19 lg:pb-12">
          <div className="bg-primary absolute top-0 h-1 w-25 max-md:left-1/2 max-md:-translate-x-1/2 max-md:transform"></div>

          <div className="flex flex-col flex-wrap items-center gap-12 md:items-start lg:flex-row lg:justify-between">
            <img src="/images/shared/logo.svg" alt="Audiophile logo" />

            <nav aria-label="Footer navigation">
              <ul className="flex flex-col items-center gap-x-8 gap-y-4 text-sm tracking-[0.125rem] uppercase md:flex-row">
                {footerNavLinks.map((link) => (
                  <li key={link.href}>
                    <Link
                      href={link.href}
                      className="hover:text-primary focus-visible:text-primary font-bold transition-colors duration-300 focus-visible:outline-none"
                    >
                      {link.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
          </div>

          <div className="grid gap-12 max-md:text-center md:grid-cols-2 md:gap-20 lg:gap-14">
            <p className="font-medium opacity-50 md:col-span-2 lg:col-span-1">
              Audiophile is an all in one stop to fulfill your audio needs.
              We&apos;re a small team of music lovers and sound specialists who
              are devoted to helping you get the most out of personal audio.
              Come and visit our demo facility - we&apos;re open 7 days a week.
            </p>

            <p className="font-bold opacity-50 lg:order-3">
              Copyright {new Date().getFullYear()}. All Rights Reserved
            </p>

            <div className="flex items-center justify-center gap-4 self-center md:justify-end lg:row-span-2">
              {socialLinks.map((link) => {
                const IconComponent = link.icon;
                return (
                  <a
                    key={link.href}
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={link.ariaLabel}
                    className="hover:text-primary focus-visible:text-primary text-white transition-colors duration-300 focus-visible:outline-none"
                  >
                    <IconComponent className="transition-colors duration-300" />
                  </a>
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}

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
      <div className="flex flex-col gap-12 md:gap-8 lg:gap-9 max-w-289 mx-auto px-6 md:px-10 lg:px-6 pb-10 pt-13 md:pb-11.5 md:pt-15 lg:pb-12 lg:pt-19 relative">
        <div className="bg-primary h-1 w-25 absolute top-0 max-md:left-1/2 max-md:transform max-md:-translate-x-1/2"></div>

        <div className="flex flex-col lg:flex-row lg:justify-between md:items-start items-center gap-12 flex-wrap">
          <img src="/images/shared/logo.svg" alt="Audiophile logo" />

          <nav aria-label="Footer navigation">
            <ul className="flex-col text-sm uppercase flex gap-y-4 items-center tracking-[0.125rem] gap-x-8 md:flex-row">
              {footerNavLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="font-bold transition-colors duration-300 hover:text-primary focus-visible:text-primary focus-visible:outline-none"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
        </div>

        <div className="grid gap-12 md:gap-20 lg:gap-14 md:grid-cols-2 max-md:text-center">
          <p className="opacity-50 md:col-span-2 font-medium lg:col-span-1">
            Audiophile is an all in one stop to fulfill your audio needs.
            We&apos;re a small team of music lovers and sound specialists who
            are devoted to helping you get the most out of personal audio. Come
            and visit our demo facility - we&apos;re open 7 days a week.
          </p>

          <p className="opacity-50 font-bold lg:order-3">
            Copyright {new Date().getFullYear()}. All Rights Reserved
          </p>

          <div className="flex justify-center gap-4 items-center md:justify-end lg:row-span-2 self-center">
            {socialLinks.map((link) => {
              const IconComponent = link.icon;
              return (
                <a
                  key={link.href}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={link.ariaLabel}
                  className="text-white transition-colors duration-300 hover:text-primary focus-visible:text-primary focus-visible:outline-none"
                >
                  <IconComponent className="transition-colors duration-300" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}

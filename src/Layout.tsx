import type { ReactNode } from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";

type LayoutProps = {
  children: ReactNode;
};

const headerData = {
  logo: "AUREL",
  logoLink: "/",
  navLinks: [
    { label: "Home", href: "/" },
    { label: "Collection", href: "/collections" },
    { label: "About", href: "/about" },
    { label: "Contact", href: "/contact" },
  ],
  language: "EN / EUR",
  cartCount: 0,
  accountLink: "/account",
  cartLink: "/cart",
  searchLink: "/search",
};

const footerData = {
  logo: "AUREL",

  description: [
    "Fewer pieces. More possibility.",
    "A considered wardrobe, made to stay.",
  ],

  columns: [
    {
      title: "EXPLORE",
      links: [
        { label: "Collection", href: "/collections" },
        { label: "Our story", href: "/about" },
        { label: "The journal", href: "/journal" },
        { label: "Contact", href: "/contact" },
      ],
    },
    {
      title: "CLIENT CARE",
      links: [
        { label: "Shipping & returns", href: "/shipping-returns" },
        { label: "Size guide", href: "/size-guide" },
        { label: "Care guide", href: "/care-guide" },
        { label: "FAQs", href: "/faq" },
      ],
    },
  ],

  email: "hello@aurel.studio",
  location: "Paris, France",

  copyright: "© 2026 Aurel Studio. Made with intention.",

  legalLinks: [
    { label: "Privacy", href: "/privacy-policy" },
    { label: "Terms", href: "/terms-conditions" },
    { label: "Cookies", href: "/cookies" },
  ],

  locale: "France / EUR",
};

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <Header {...headerData} />
      {children}
      <Footer {...footerData} />
    </>
  );
}

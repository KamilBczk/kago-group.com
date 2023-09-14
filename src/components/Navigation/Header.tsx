"use client";
import { useState } from "react";
import Image from "next/image";
import logoFull from "../../assets/logo/logo-full.svg";

const Header = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { id: "accueil", label: "Accueil", href: "/#home" },
    { id: "a-propos", label: "À Propos", href: "/#about" },
    { id: "portfolio", label: "Portfolio", href: "/#portfolio" },
    { id: "nos-tarifs", label: "Nos Tarifs", href: "/#pricing" },
    { id: "blog", label: "Blog", href: "/blog" },
    { id: "contact", label: "Contact", href: "/#contact" },
  ];

  return (
    <header
      className={`fixed bg-black/[.3] w-full z-50 ${
        isMenuOpen && "bg-kago-blue"
      }`}
    >
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <div className="h-8 mb-3">
                <Image src={logoFull} alt="" height="32" width="100" />
              </div>
            </a>
          </div>
          <div className="md:flex md:items-center">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-l">
                {links.map((link) => (
                  <li key={link.id}>
                    <a
                      href={link.href}
                      className="text-white transition hover:text-gray-300"
                    >
                      {link.label}
                    </a>
                  </li>
                ))}
              </ul>
            </nav>
            <div className="flex items-center">
              <div className="block md:hidden">
                <button
                  onClick={toggleMenu}
                  className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth="2"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Afficher le menu si isMenuOpen est true */}
      {isMenuOpen && (
        <div className="md:hidden bg-kago-blue text-white absolute w-full">
          <ul className="py-4">
            {links.map((link) => (
              <li key={link.id} className="px-4 py-2">
                <a
                  href={link.href}
                  className="text-white transition hover:text-gray-300"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;

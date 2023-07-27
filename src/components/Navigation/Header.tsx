"use client";
import { useState, useEffect } from "react";
import Image from "next/image";
import logoFull from "../../assets/logo/logo-full.svg";

const Header = () => {
  const [activeLink, setActiveLink] = useState("accueil");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleScroll = () => {
    // La même logique de scroll que précédemment
    // ...
  };

  useEffect(() => {
    // Ajouter un écouteur d'événement pour le scroll
    // ...
  }, []);

  const scrollToSection = (section: string) => {
    // La même logique de scroll que précédemment
    // ...
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const links = [
    { id: "accueil", label: "Accueil" },
    { id: "a-propos", label: "À Propos" },
    { id: "portfolio", label: "Portfolio" },
    { id: "nos-tarifs", label: "Nos Tarifs" },
    { id: "contact", label: "Contact" },
  ];
  console.log(logoFull);

  return (
    <header className="fixed bg-black/[.3] w-full z-50">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex-1 md:flex md:items-center md:gap-12">
            <a className="block text-teal-600" href="/">
              <span className="sr-only">Home</span>
              <div className="h-8">
                <Image src={logoFull} alt="" height="32" />
              </div>
            </a>
          </div>
          <div className="md:flex md:items-center">
            <nav aria-label="Global" className="hidden md:block">
              <ul className="flex items-center gap-6 text-l">
                {links.map((link) => (
                  <li key={link.id}>
                    <a
                      href="https://google.com"
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
                <button className="rounded bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
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
    </header>
  );
};

export default Header;

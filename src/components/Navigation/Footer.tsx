import React from "react";
import Image from "next/image";
import logoFull from "@/assets/logo/logo-full.svg";

function Footer() {
  return (
    <footer className="bg-kago-blue">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:px-6 lg:px-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <div className="flex justify-center text-teal-600 sm:justify-start w-28">
            <Image alt="logo" src={logoFull} loading="lazy" />
          </div>

          <p className="mt-4 text-center text-sm text-white lg:mt-0 lg:text-right">
            Copyright &copy; 2023. Tous droits réservés.
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;

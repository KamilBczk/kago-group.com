import React from "react";
import Image from "next/image";
import bildConstruct from "@/assets/portfolio/bild-construct.png";
import recreATifs from "@/assets/portfolio/recre-a-tifs.png";
import tmfCompta from "@/assets/portfolio/tmf-compta.png";
import vasiConstruct from "@/assets/portfolio/vasi-construct.png";
import eliteSolutions from "@/assets/portfolio/elite-solutions.png";

export default function Portfolio() {
  const cases = [
    {
      image: bildConstruct,
      placeholderText: "Bild Construct SRL",
      href: "https://bildconstructsrl.com",
    },
    {
      image: recreATifs,
      placeholderText: "Récré à tifs",
      href: "#portfolio",
    },
    {
      image: tmfCompta,
      placeholderText: "TMF Compta",
      href: "https://tmfcompta.be",
    },
    {
      image: vasiConstruct,
      placeholderText: "Vasi Construct SRL",
      href: "#portfolio",
    },
    // {
    //   image: eliteSolutions,
    //   placeholderText: "Elite Solutions",
    //   href: "https://elite-solutions.be/",
    // },
  ];

  return (
    <div
      className="my-16 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8"
      id="portfolio"
    >
      <h2 className="text-2xl font-bold sm:text-3xl text-center my-5">
        Portfolio
      </h2>
      {/* Première ligne */}
      <div className="flex gap-4">
        {cases.map((caseElem) => (
          <a
            key={caseElem.placeholderText}
            href={caseElem.href}
            target={caseElem.href === "#portfolio" ? "" : "_blank"}
          >
            <div key={caseElem.href} className="relative overflow-hidden group">
              <Image
                src={caseElem.image}
                alt=""
                className="h-full w-full object-cover rounded-lg transition-opacity duration-300"
                loading="lazy"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
                <p className="text-white text-lg font-bold">
                  {caseElem.placeholderText}
                </p>
              </div>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
}

import React from "react";

function HeroSection() {
  return (
    <section
      className="relative bg-[url(../assets/hero-section/bg-image.png)] bg-cover bg-center bg-no-repeat"
      id="home"
    >
      <div className="absolute inset-0 sm:bg-transparent ltr:sm:bg-gradient-to-r rtl:sm:bg-gradient-to-l"></div>

      <div className="relative mx-auto max-w-screen-xl px-4 py-32 sm:px-6 lg:flex lg:h-screen lg:items-center lg:px-8">
        <div className="max-w-xl ltr:sm:text-left rtl:sm:text-right">
          <h1 className="text-3xl font-extrabold sm:text-5xl text-white">
            Votre entreprise,
            <strong className="block font-extrabold text-kago-blue">
              Une marque
            </strong>
          </h1>

          <p className="mt-4 max-w-lg sm:text-xl/relaxed text-white">
            Découvrez nos solutions sur mesure et réinventez votre expérience
            digitale dès aujourd’hui
          </p>

          <div className="mt-8 flex flex-wrap gap-4 text-center">
            <a
              href="#about"
              className="block w-full rounded bg-white px-12 py-3 text-sm font-medium text-kago-blue shadow hover:text-kago-blue-500 focus:outline-none focus:ring active:text-kago-blue sm:w-auto"
            >
              En savoir plus
            </a>
            <a
              href="#pricing"
              className="block w-full rounded bg-kago-blue px-12 py-3 text-sm font-medium text-white shadow hover:bg-kago-blue-500 focus:outline-none focus:ring active:bg-kago-blue-500 sm:w-auto"
            >
              Nos solutions
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;

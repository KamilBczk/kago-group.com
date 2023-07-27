import React from "react";

function About() {
  return (
    <section>
      <div className="my-16 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:h-400 lg:grid-cols-2">
          <div className="relative z-10 lg:py-16">
            <div className="relative h-64 sm:h-80 lg:h-full">
              <img
                alt="House"
                src="https://images.unsplash.com/photo-1553877522-43269d4ea984?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80"
                className="absolute inset-0 h-full w-full object-cover z-10"
              />
            </div>
          </div>

          <div className="relative flex items-center bg-gray-100">
            <span className="hidden lg:absolute lg:inset-y-0 lg:-start-16 lg:block lg:w-16 lg:bg-gray-100"></span>

            <div className="p-8 sm:p-16 lg:p-24">
              <h2 className="text-2xl font-bold sm:text-3xl">
                Qui sommes nous?
              </h2>

              <p className="mt-4 text-gray-600">
                KAGO a été fondé par deux entrepreneurs passionnés et
                professionnels pour combler le manque de présence en ligne des
                entreprises. Notre mission : les conseiller et les accompagner
                dans leur transformation digitale. Avec une équipe expérimentée
                de développeurs, project managers et designers, nous collaborons
                étroitement avec nos clients pour analyser leurs besoins et
                défis, offrant ainsi des solutions sur mesure : création de
                sites web pro, stratégies de marketing numérique, formations, et
                bien plus.
              </p>

              <a
                href="#"
                className="mt-8 inline-block rounded border border-kago-blue bg-kago-blue px-12 py-3 text-sm font-medium text-white hover:bg-transparent hover:text-kago-blue focus:outline-none focus:ring active:text-kago-blue"
              >
                Get in Touch
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default About;

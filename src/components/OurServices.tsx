import React from "react";
import { VscSymbolColor } from "react-icons/vsc";
import { BiBadgeCheck } from "react-icons/bi";
import { TbWorld } from "react-icons/tb";

export default function OurServices() {
  return (
    <section className="bg-kago-blue text-white">
      <div className="mx-auto max-w-screen-xl px-4 py-8 sm:py-12 sm:px-6 lg:py-16 lg:px-8">
        <div className="mx-auto max-w-lg text-center">
          <h2 className="text-3xl font-bold sm:text-4xl">Nos services</h2>

          <p className="mt-4 text-gray-300">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit.
            Consequuntur aliquam doloribus nesciunt eos fugiat. Vitae aperiam
            fugit consequuntur saepe laborum.
          </p>
        </div>

        <div className="mt-8 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
          <a
            className="block rounded-xl border border-white p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-white/10"
            href="/services/digital-campaigns"
          >
            <VscSymbolColor size={30} />

            <h2 className="mt-4 text-xl font-bold text-white">Design</h2>

            <p className="mt-1 text-sm text-gray-300">
              Nous proposons des templates de sites modernes et qualitatifs que
              l&apos;on peut améliorer avec du développement sur mesure.
            </p>
          </a>

          <a
            className="block rounded-xl border border-white p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-white/10"
            href="/services/digital-campaigns"
          >
            <BiBadgeCheck size={30} />

            <h2 className="mt-4 text-xl font-bold text-white">Branding</h2>

            <p className="mt-1 text-sm text-gray-300">
              Nous écoutons vos besoins et fournissons une réelle image de
              marque digitale afin que vous soyez plus proches de vos clients!
            </p>
          </a>

          <a
            className="block rounded-xl border border-white p-8 shadow-xl transition hover:border-pink-500/10 hover:shadow-white/10"
            href="/services/digital-campaigns"
          >
            <TbWorld size={30} />
            <h2 className="mt-4 text-xl font-bold text-white">Site web</h2>

            <p className="mt-1 text-sm text-gray-300">
              Nos designers et experts IT collaborent afin de réaliser les
              développements les plus compliqués afin de satisfaire votre
              demande.
            </p>
          </a>
        </div>

        <div className="mt-12 text-center">
          <a
            href="#"
            className="inline-block rounded bg-white px-12 py-3 text-sm font-medium text-kago-blue transition hover:bg-pink-700 focus:outline-none focus:ring focus:ring-yellow-400"
          >
            Get Started Today
          </a>
        </div>
      </div>
    </section>
  );
}

import React from "react";
import { MdEmail } from "react-icons/md";
import { BsPhoneFill } from "react-icons/bs";
import { FaLocationDot } from "react-icons/fa6";

export default function ContactInfo() {
  const informationContact = [
    {
      id: "mail",
      content: "info@kago-group.com",
      icon: MdEmail,
    },
    {
      id: "phone",
      content: "+32 (0)4 84 44 69 93",
      icon: BsPhoneFill,
    },
    {
      id: "location",
      content: "Boulevard Industriel 9, 1070 Bruxelles",
      icon: FaLocationDot,
    },
  ];

  return (
    <section className="bg-white">
      <div className="my-16 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8 gap-8 items-center md:grid md:grid-cols-2">
        <div className="mt-4 md:mt-0">
          <h2 className="text-2xl font-bold sm:text-3xl">
            Nos informations de contact
          </h2>
          <ul className="mt-5">
            {informationContact.map((elem) => (
              <li className="mb-1" key={elem.id}>
                <a className="w-fill flex rounded-lg my-8">
                  {
                    <elem.icon className="flex-none w-7 h-full text-kago-blue" />
                  }
                  <span className="ml-5 text-xl truncate">{elem.content}</span>
                </a>
              </li>
            ))}
          </ul>
        </div>
        <section>
          <iframe
            className="border-none"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d173.73955672071315!2d4.317146098596023!3d50.82828215072227!2m3!1f0!2f39.487987346286616!3f0!3m2!1i1024!2i768!4f35!3m3!1m2!1s0x47c3c5c81a5c0b3b%3A0x5fed3372cb7204f5!2sKago%20Group%20SRL!5e1!3m2!1sfr!2sbe!4v1691329328631!5m2!1sfr!2sbe"
            width="100%"
            height="450"
            allowFullScreen={false}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </section>
      </div>
    </section>
  );
}

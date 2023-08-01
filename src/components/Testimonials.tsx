import React from "react";
import Image from "next/image";
import { AiFillStar } from "react-icons/ai";
import aurelienSaelens from "@/assets/testimonials/aurelien-saelens.jpg";
import iuliusBold from "@/assets/testimonials/iulius-bold.png";
import alexisDomelounksen from "@/assets/testimonials/alexis-domelounksen.jpg";

export default function Testimonials() {
  const reviews = [
    {
      imageUrl: aurelienSaelens,
      name: "Aurélien Saelens",
      comment:
        "Je suis tellement content du design que Kago a réalisé pour nous ! C'est exactement ce que nous voulions, simple et élégant. Merci pour leur travail exceptionnel!",
    },
    {
      imageUrl: iuliusBold,
      name: "Iulius Bold",
      comment:
        "Kago a créé un site web incroyable pour nous ! Nous adorons le design et la facilité d'utilisation. C'est exactement ce que nous voulions, merci !",
    },
    {
      imageUrl: alexisDomelounksen,
      name: "Alexis Domelounksen",
      comment:
        "Super expérience avec Kago ! Notre site est magnifique et nos clients l'adorent. Merci pour le super boulot !",
    },
  ];

  return (
    <section className="bg-kago-blue">
      <div className="my-16 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="py-16 sm:py-24">
          <h2 className="text-center text-2xl font-bold tracking-tight sm:text-2xl text-white">
            Ce qu&apos;on dit de nous
          </h2>

          <div className="mt-12 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-8">
            {reviews.map((review) => (
              <blockquote className="rounded-lg bg-gray-100 p-8">
                <div className="flex items-center gap-4">
                  <Image
                    alt={review.name}
                    src={review.imageUrl}
                    className="h-16 w-16 rounded-full object-cover"
                    loading="lazy"
                  />

                  <div>
                    <div className="flex gap-0.5 text-kago-blue">
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                      <AiFillStar />
                    </div>

                    <p className="mt-1 text-lg font-medium text-gray-700">
                      {review.name}
                    </p>
                  </div>
                </div>

                <p className="line-clamp-2 sm:line-clamp-none mt-4 text-gray-500">
                  {review.comment}
                </p>
              </blockquote>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

import React from "react";

export default function Portfolio() {
  return (
    <div className="my-16 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
      <h2 className="text-2xl font-bold sm:text-3xl text-center my-5">
        Portfolio
      </h2>
      <div className="container mx-auto py-8 grid grid-cols-2 md:grid-cols-4 gap-4">
        {/* Première ligne */}
        <div className="grid gap-4">
          <div className="relative overflow-hidden group">
            <img
              src="https://placehold.co/600x400"
              alt=""
              className="h-full w-full object-cover rounded-lg transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-white text-lg font-bold">Texte 1</p>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src="https://placehold.co/600x400"
              alt=""
              className="h-full w-full object-cover rounded-lg transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-white text-lg font-bold">Texte 2</p>
            </div>
          </div>
        </div>

        {/* Deuxième ligne */}
        <div className="grid gap-4">
          <div className="relative overflow-hidden group">
            <img
              src="https://placehold.co/600x400"
              alt=""
              className="h-full w-full object-cover rounded-lg transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-white text-lg font-bold">Texte 3</p>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src="https://placehold.co/600x400"
              alt=""
              className="h-full w-full object-cover rounded-lg transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-white text-lg font-bold">Texte 4</p>
            </div>
          </div>
        </div>

        {/* Troisième ligne */}
        <div className="grid gap-4">
          <div className="relative overflow-hidden group">
            <img
              src="https://placehold.co/600x400"
              alt=""
              className="h-full w-full object-cover rounded-lg transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-white text-lg font-bold">Texte 5</p>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src="https://placehold.co/600x400"
              alt=""
              className="h-full w-full object-cover rounded-lg transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-white text-lg font-bold">Texte 6</p>
            </div>
          </div>
        </div>

        {/* Quatrième ligne */}
        <div className="grid gap-4">
          <div className="relative overflow-hidden group">
            <img
              src="https://placehold.co/600x400"
              alt=""
              className="h-full w-full object-cover rounded-lg transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-white text-lg font-bold">Texte 7</p>
            </div>
          </div>
          <div className="relative overflow-hidden group">
            <img
              src="https://placehold.co/600x400"
              alt=""
              className="h-full w-full object-cover rounded-lg transition-opacity duration-300"
            />
            <div className="absolute inset-0 flex items-center justify-center bg-black bg-opacity-60 opacity-0 transition-opacity duration-300 group-hover:opacity-100">
              <p className="text-white text-lg font-bold">Texte 8</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

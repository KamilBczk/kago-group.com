"use client";
import React, { useEffect } from "react";

export default function Contact() {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://server.fillout.com/embed/v1/";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
    };
  }, []);

  return (
    <>
      <div className="bg-kago-blue" id="contact">
        <section className="my-16 mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div
            className="w-100 h-750px"
            data-fillout-id="vSsSeTsiJwus"
            data-fillout-embed-type="standard"
            // style="width:100%;height:500px;"
            data-fillout-inherit-parameters
            data-fillout-dynamic-resize
          ></div>
        </section>
      </div>
    </>
  );
}

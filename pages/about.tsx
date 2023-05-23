import AboutLanding from "@/modules/about/about-landing";
import AboutTestimonial from "@/modules/about/about-testimonial";
import React, { useEffect } from "react";

export default function About() {
  useEffect(() => {
    document.querySelector("header")?.classList.add("with-bg");
    return () => {
      document.querySelector("header")?.classList.remove("with-bg");
    };
  }, []);
  return (
    <section id="about">
      <AboutLanding />
      <AboutTestimonial />
    </section>
  );
}

import ServiceProcess from "@/modules/services/service-process";
import ServicesTypes from "@/modules/services/services-types";
import { useEffect } from "react";

export default function Services() {
  useEffect(() => {
    document.querySelector("header")?.classList.add("with-bg");
    return () => {
      document.querySelector("header")?.classList.remove("with-bg");
    };
  }, []);

  return (
    <section id="services">
      <ServicesTypes />
      <ServiceProcess />
    </section>
  );
}

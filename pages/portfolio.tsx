import PortfolioGallery from "@/modules/portfolio/portfolio-gallery";
import PortfolioOptions from "@/modules/portfolio/portfolio-options";
import { useEffect } from "react";

export default function Portfolio() {
  useEffect(() => {
    document.querySelector("header")?.classList.add("with-bg");
    return () => {
      document.querySelector("header")?.classList.remove("with-bg");
    };
  }, []);
  return (
    <section id="portfolio">
      <PortfolioOptions />
      <PortfolioGallery />
    </section>
  );
}

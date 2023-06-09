import { useEffect, useRef } from "react";
import { GetStaticProps } from "next";
import gqlclient from "@/gql/client";
import { categoryItems } from "@/gql/queries";
import { PortfolioProps } from "@/interface-file";
import PortfolioGallery from "@/modules/portfolio/portfolio-gallery";
import PortfolioOptions from "@/modules/portfolio/portfolio-options";

export const getStaticProps: GetStaticProps = async () => {
  const categoryData: any = await gqlclient.request(categoryItems);
  return {
    props: { data: categoryData?.portfolioCategoriesCollection?.items ?? [] },
    revalidate: 60 * 60 * 6,
  };
};

export default function Portfolio({ data }: PortfolioProps) {
  useEffect(() => {
    document.querySelector("header")?.classList.add("with-bg");
    document.querySelector(".footer")?.classList.add("with-bg");
    return () => {
      document.querySelector("header")?.classList.remove("with-bg");
      document.querySelector(".footer")?.classList.remove("with-bg");
    };
  }, []);

  const compRef = useRef<HTMLDivElement>(null);

  return (
    <section id="portfolio">
      <PortfolioOptions
        sliderRef={compRef}
        data={data.map((item) => ({
          title: item.title,
          image: {
            src: item.bannerImage.url,
            alt: item.title,
          },
        }))}
      />
      <div className="galleries-container-wrapper">
        <div className="galleries-container" ref={compRef}>
          {data.map((item, ind) => {
            return (
              <div className="galleries" key={ind}>
                <PortfolioGallery
                  images={item.galleryCollection.items.map((item, ind) => ({
                    src: item.url,
                    alt: data[ind]?.title ?? "",
                  }))}
                  heading={"/ " + item.heading}
                  subText={item.subHeading}
                />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

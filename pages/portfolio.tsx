import gqlclient from "@/gql/client";
import { categoryItems } from "@/gql/queries";
import PortfolioGallery from "@/modules/portfolio/portfolio-gallery";
import PortfolioOptions from "@/modules/portfolio/portfolio-options";
import { GetStaticProps } from "next";
import { useEffect, useRef } from "react";

export const getStaticProps: GetStaticProps = async () => {
  const categoryData: any = await gqlclient.request(categoryItems);
  return {
    props: { data: categoryData?.portfolioCategoriesCollection?.items ?? [] },
    revalidate: 60 * 60 * 6,
  };
};

interface PortfolioProps {
  data: {
    title: string;
    bannerImage: {
      url: string;
    };
    heading: string;
    subHeading: string;
    galleryCollection: {
      items: {
        url: string;
      }[];
    };
  }[];
}

export default function Portfolio({ data }: PortfolioProps) {
  useEffect(() => {
    document.querySelector("header")?.classList.add("with-bg");
    return () => {
      document.querySelector("header")?.classList.remove("with-bg");
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
              <div className="galleries-container" key={ind}>
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

import Image from "next/image";
import { GetStaticProps } from "next";
import { companyName } from "@/common-data";
import gqlclient from "@/gql/client";
import { homePageItems } from "@/gql/queries";
import Gallery from "@/modules/home/gallery";
import Landing from "@/modules/home/landing";
import { HomePageProps } from "@/interface-file";

export const getStaticProps: GetStaticProps = async () => {
  const homePageData: any = await gqlclient.request(homePageItems);
  return {
    props: { data: homePageData?.homePageCollection?.items ?? [] },
    revalidate: 60 * 60 * 6,
  };
};

export default function Home({ data }: HomePageProps) {
  return (
    <section id="home">
      <Image
        src="/assets/images/kiss.png"
        alt="background image"
        fill
        sizes="100%"
      ></Image>
      <Landing
        heading={data[0]?.heading ?? ""}
        subHeading={data[0]?.subHeading ?? ""}
        tagline={data[0]?.tagline?.json}
      />
      <Gallery
        galleryData={
          data[0]?.carouselCollection?.items.map((item) => ({
            image: {
              src: item.url,
              alt: companyName + " | " + data[0]?.tagline,
            },
          })) ?? []
        }
      />
    </section>
  );
}

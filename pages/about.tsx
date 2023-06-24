import gqlclient from "@/gql/client";
import { aboutArtistItems, aboutTestimonialItems } from "@/gql/queries";
import AboutLanding from "@/modules/about/about-landing";
import AboutTestimonial from "@/modules/about/about-testimonial";
import { GetStaticProps } from "next";
import React, { useEffect } from "react";

export const getStaticProps: GetStaticProps = async () => {
  const aboutArtistData: any = await gqlclient.request(aboutArtistItems);
  const aboutTestimonialData: any = await gqlclient.request(
    aboutTestimonialItems
  );
  return {
    props: {
      selfdata: aboutArtistData?.aboutCollection?.items[0] ?? {},
      testidata: aboutTestimonialData?.testimonialsCollection?.items ?? [],
    },
    revalidate: 60 * 60 * 6,
  };
};

interface AboutArtistProps {
  selfdata: {
    aboutUs: string;
    data1: string;
    dataNumber1: number;
    data2: string;
    dataNumber2: number;
    data3: string;
    dataNumber3: number;
    data4: string;
    dataNumber4: number;
  };
  testidata: {
    author: string;
    feedback: string;
    picture: {
      url: string;
    };
  }[];
}

export default function About({ selfdata, testidata }: AboutArtistProps) {
  useEffect(() => {
    document.querySelector("header")?.classList.add("with-bg");
    document.querySelector(".footer")?.classList.add("with-bg");
    return () => {
      document.querySelector("header")?.classList.remove("with-bg");
      document.querySelector(".footer")?.classList.remove("with-bg");
    };
  }, []);
  return (
    <section id="about">
      <AboutLanding sdata={selfdata ?? {}} />
      <AboutTestimonial tdata={testidata ?? []} />
    </section>
  );
}

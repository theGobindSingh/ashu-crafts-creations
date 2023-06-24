import gqlclient from "@/gql/client";
import { aboutArtistItems, aboutTestimonialItems } from "@/gql/queries";
import { AboutArtistProps } from "@/interface-file";
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

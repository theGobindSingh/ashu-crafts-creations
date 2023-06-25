import { useEffect } from "react";
import { GetStaticProps } from "next";
import gqlclient from "@/gql/client";
import { aboutServiceProcessItems, aboutServiceTypeItems } from "@/gql/queries";
import { ServiceTypes } from "@/interface-file";
import ServiceProcess from "@/modules/services/service-process";
import ServicesTypes from "@/modules/services/services-types";

export const getStaticProps: GetStaticProps = async () => {
  const aboutServiceTypeData: any = await gqlclient.request(
    aboutServiceTypeItems
  );
  const aboutServiceProcessData: any = await gqlclient.request(
    aboutServiceProcessItems
  );
  return {
    props: {
      typeData: aboutServiceTypeData?.servicesCollection?.items ?? [],
      processData: aboutServiceProcessData?.processCollection?.items ?? [],
    },
    revalidate: 60 * 60 * 6,
  };
};

export default function Services({ typeData, processData }: ServiceTypes) {
  useEffect(() => {
    document.querySelector("header")?.classList.add("with-bg");
    document.querySelector(".footer")?.classList.add("with-bg");
    return () => {
      document.querySelector("header")?.classList.remove("with-bg");
      document.querySelector(".footer")?.classList.remove("with-bg");
    };
  }, []);

  return (
    <section id="services">
      <ServicesTypes tdata={typeData ?? []} />
      <ServiceProcess pdata={processData ?? []} />
    </section>
  );
}

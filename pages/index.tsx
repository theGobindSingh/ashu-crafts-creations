import Gallery from "@/modules/home/gallery";
import Landing from "@/modules/home/landing";
import Image from "next/image";

export default function Home() {
  return (
    <section id="home">
      <Image
        src="/assets/images/kiss.png"
        alt="background image"
        fill
        sizes="100%"
      ></Image>
      <Landing />
      <Gallery />
    </section>
  );
}

import ContactUsBox from "@/modules/contact-us/contact-us-box";
import Image from "next/image";

export default function ContactUs() {
  return (
    <section id="contact-us">
      <Image
        src="/assets/images/kiss.png"
        alt="back-ground-image"
        fill
        sizes="100%"
      />
      <ContactUsBox />
    </section>
  );
}

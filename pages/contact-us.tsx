import Image from "next/image";
import ContactUsBox from "@/modules/contact-us/contact-us-box";

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

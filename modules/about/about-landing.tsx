import Image from "next/image";
import { SelfData } from "@/interface-file";

export default function AboutLanding({ sdata }: SelfData) {
  return (
    <div className="about-landing">
      <Image
        src="/assets/images/kiss.png"
        alt="about-landing-background"
        fill
        sizes="100%"
      />
      <div className="about-landing-text">
        <div className="text1">
          <h3>{sdata.dataNumber1}+</h3>
          <span>{sdata.data1}</span>
        </div>
        <div className="text2">
          <h3>{sdata.dataNumber2}+</h3>
          <span>{sdata.data2}</span>
        </div>
        <div className="text3">
          <h3>{sdata.dataNumber3}+</h3>
          <span>{sdata.data3}</span>
        </div>
        <div className="text4">
          <h3>{sdata.dataNumber4}+</h3>
          <span>{sdata.data4}</span>
        </div>
      </div>
      <div className="about-landing-prose">
        <h3>/ About</h3>
        <p>{sdata.aboutUs}</p>
        <span>Ashu</span>
      </div>
    </div>
  );
}

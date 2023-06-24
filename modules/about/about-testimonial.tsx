import { phoneNumber } from "@/common-data";
import Slider from "@/components/slider";
import {
  KeyboardDoubleArrowDown,
  KeyboardDoubleArrowUp,
} from "@mui/icons-material";
import Image from "next/image";
import Link from "next/link";
import { useRef } from "react";

const test = Array(4).fill({
  para: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Utenim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
  writer: "William Dafoe",
  image: {
    src: "/assets/images/kiss.png",
    alt: "feedback-image",
  },
});

interface TestData {
  tdata: {
    author: string;
    feedback: string;
    picture: {
      url: string;
    };
  }[];
}

export default function AboutTestimonial({ tdata }: TestData) {
  const btn1 = useRef<any>(null);
  const btn2 = useRef<any>(null);

  const message = "Hey, I would like to order a comission.";

  return (
    <div className="about-testimonial">
      <h2>/ People say</h2>
      <div className="feedback-section">
        <KeyboardDoubleArrowUp className="arroup" ref={btn1} />
        <Slider
          breakpoints={[
            {
              min: 0,
              max: 9000,
              items: 1,
            },
          ]}
          nextBtnRef={btn2}
          prevBtnRef={btn1}
        >
          {tdata.map((items, index) => {
            return (
              <div className="feedback" key={index}>
                <div className="text-container">
                  <p>{items.feedback}</p>
                  <span>{items.author}</span>
                </div>
                <div className="img-container">
                  <Image
                    src={items.picture.url}
                    alt={items.author + `photo`}
                    fill
                    sizes="100%"
                  />
                </div>
              </div>
            );
          })}
        </Slider>
        <KeyboardDoubleArrowDown className="arrodown" ref={btn2} />
      </div>
      <Link href={`https://wa.me/${phoneNumber}?text=${message}`}>Hire us</Link>
    </div>
  );
}

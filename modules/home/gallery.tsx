import Image from "next/image";
import { useRef } from "react";
import {
  KeyboardDoubleArrowUp,
  KeyboardDoubleArrowDown,
} from "@mui/icons-material";
import Slider from "@/components/slider";

export default function Gallery() {
  const btn1 = useRef<HTMLDivElement>(null);
  const btn2 = useRef<HTMLDivElement>(null);

  return (
    <div className="gallery-container">
      <div className="arrow" ref={btn1}>
        <KeyboardDoubleArrowUp />
      </div>
      <Slider
        breakpoints={[
          {
            min: 0,
            max: 900,
            items: 1,
          },
          {
            min: 900,
            max: 9000,
            items: 3,
          },
        ]}
        nextBtnRef={btn2}
        prevBtnRef={btn1}
      >
        {Array(8)
          .fill({ src: "/assets/images/kiss.png", alt: "img" })
          .map((imgProp, index) => {
            return (
              <div className="img-container" key={index}>
                <Image
                  src={imgProp.src}
                  alt={imgProp.alt}
                  fill
                  sizes="100%"
                ></Image>
              </div>
            );
          })}
      </Slider>
      <div className="arrow" ref={btn2}>
        <KeyboardDoubleArrowDown />
      </div>
    </div>
  );
}

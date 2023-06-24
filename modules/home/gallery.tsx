import Image from "next/image";
import { useRef } from "react";
import {
  MdOutlineKeyboardDoubleArrowDown,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";
import Slider from "@/components/slider";

export default function Gallery({
  galleryData,
}: {
  galleryData: {
    image: {
      src: string;
      alt: string;
    };
  }[];
}) {
  const btn1 = useRef<HTMLDivElement>(null);
  const btn2 = useRef<HTMLDivElement>(null);

  return (
    <div className="gallery-container">
      <div className="arrow" ref={btn1}>
        <MdOutlineKeyboardDoubleArrowUp />
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
        {galleryData.map((imgProp, index) => {
          return (
            <div className="img-container" key={index}>
              <Image
                src={imgProp.image.src}
                alt={imgProp.image.alt}
                fill
                sizes="100%"
              ></Image>
            </div>
          );
        })}
      </Slider>
      <div className="arrow" ref={btn2}>
        <MdOutlineKeyboardDoubleArrowDown />
      </div>
    </div>
  );
}

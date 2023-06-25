import { useEffect, useRef } from "react";
import Link from "next/link";
import Image from "next/image";
import {
  MdOutlineKeyboardDoubleArrowDown,
  MdOutlineKeyboardDoubleArrowUp,
} from "react-icons/md";
import { message, phoneNumber } from "@/common-data";
import Slider from "@/components/slider";
import { TestData } from "@/interface-file";

export default function AboutTestimonial({ tdata }: TestData) {
  const btn1 = useRef<HTMLDivElement>(null);
  const btn2 = useRef<HTMLDivElement>(null);

  return (
    <div className="about-testimonial">
      <h2>/ People say</h2>
      <div className="feedback-section">
        <div className="arroup" ref={btn1}>
          <MdOutlineKeyboardDoubleArrowUp />
        </div>
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
        <div className="arrodown" ref={btn2}>
          <MdOutlineKeyboardDoubleArrowDown />
        </div>
      </div>
      <Link href={`https://wa.me/${phoneNumber}?text=${message}`}>Hire us</Link>
    </div>
  );
}

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
  const btn1 = useRef<any>(null);
  const btn2 = useRef<any>(null);

  const aboutTestiRef = useRef<any>(null);

  useEffect(() => {
    const arrowUp = aboutTestiRef.current?.querySelector(".arroup");
    const arrowDown = aboutTestiRef.current?.querySelector(".arrodown");
    btn1.current = arrowUp;
    btn2.current = arrowDown;
  }, []);

  return (
    <div className="about-testimonial" ref={aboutTestiRef}>
      <h2>/ People say</h2>
      <div className="feedback-section">
        <MdOutlineKeyboardDoubleArrowUp className="arroup" />
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
        <MdOutlineKeyboardDoubleArrowDown className="arrodown" />
      </div>
      <Link href={`https://wa.me/${phoneNumber}?text=${message}`}>Hire us</Link>
    </div>
  );
}

import { RefObject, useRef } from "react";
import { MdStart as StartIcon } from "react-icons/md";
import Image from "next/image";

export default function PortfolioOptions({
  sliderRef,
  data,
}: {
  sliderRef: RefObject<HTMLDivElement>;
  data: {
    image: {
      src: string;
      alt: string;
    };
    title: string;
  }[];
}) {
  const optionsRef = useRef<HTMLDivElement>(null);

  return (
    <div className="options" ref={optionsRef}>
      <h3>/ Categories</h3>
      <div className="suboptions">
        {data.map((data, index) => {
          return (
            <div
              className="option-container"
              key={index}
              onClick={() => {
                if (sliderRef.current) {
                  sliderRef.current.style.transform = `translateY(calc(${
                    -1 * index
                  } * (100vh - var(--header-height))))`;
                }
              }}
              onMouseOver={() => {
                if (optionsRef.current) {
                  optionsRef.current.style.setProperty(
                    "--trans-value",
                    "all 0.3s ease-in-out"
                  );
                }
              }}
              onMouseOut={() => {
                if (optionsRef.current) {
                  optionsRef.current.style.setProperty(
                    "--trans-value",
                    "all 0.3s ease-in-out 0.75s"
                  );
                }
              }}
            >
              <button type="button" className="span-container">
                <StartIcon className="arrowright" />
                <span>{data.title}</span>
              </button>
              <div className="img-container _1">
                <Image
                  src={data.image.src}
                  alt={data.image.alt}
                  fill
                  sizes="100%"
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

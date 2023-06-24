import { PortfolioGalleryProps } from "@/interface-file";
import Image from "next/image";

export default function PortfolioGallery({
  images,
  heading,
  subText,
}: PortfolioGalleryProps) {
  return (
    <div className="portfolio-gallery-container">
      <div className="gallery">
        {images.map((img, ind) => {
          return (
            <div className={`img-container _${ind + 1}`} key={ind}>
              <Image src={img.src} alt={img.alt} fill sizes="100%"></Image>
            </div>
          );
        })}
      </div>
      <div className="gallery-text">
        <p>{subText}</p>
        <h1>{heading}</h1>
      </div>
    </div>
  );
}

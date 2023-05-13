import Image from "next/image";

export default function PortfolioGallery() {
  return (
    <div className="portfolio-gallery-container">
      <div className="gallery">
        <div className="img-container _1">
          <Image
            src="/assets/images/kiss.png"
            alt="gal-img-1"
            fill
            sizes="100%"
          ></Image>
        </div>
        <div className="img-container _2">
          <Image
            src="/assets/images/kiss.png"
            alt="gal-img-2"
            fill
            sizes="100%"
          ></Image>
        </div>
        <div className="img-container _3">
          <Image
            src="/assets/images/kiss.png"
            alt="gal-img-3"
            fill
            sizes="100%"
          ></Image>
        </div>
        <div className="img-container _4">
          <Image
            src="/assets/images/kiss.png"
            alt="gal-img-4"
            fill
            sizes="100%"
          ></Image>
        </div>
      </div>
      <div className="gallery-text">
        <p>Hand drawn dual portraits</p>
        <h1>/ Models: Lovebirds</h1>
      </div>
    </div>
  );
}

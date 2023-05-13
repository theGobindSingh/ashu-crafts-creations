import StartIcon from "@mui/icons-material/Start";
import Image from "next/image";

export default function PortfolioComponent() {
  const portfolioOptionsObj = [
    { options: "Portraits", source: "/assets/images/kiss.png" },
    { options: "Landscapes", source: "/assets/images/kiss.png" },
    { options: "Albums", source: "/assets/images/kiss.png" },
    { options: "Cards", source: "/assets/images/kiss.png" },
    { options: "Home Décor", source: "/assets/images/kiss.png" },
    { options: "Custom", source: "/assets/images/kiss.png" },
  ];

  return (
    <>
      {portfolioOptionsObj.map((data, index) => {
        return (
          <button type="button" className="option-container" key={index}>
            <div className="span-container">
              <StartIcon className="arrowright" />
              <span>{data.options}</span>
            </div>
            <div className="img-container _1">
              <Image src={data.source} alt="option-img-1" fill sizes="100%" />
            </div>
          </button>
        );
      })}
    </>
  );
}

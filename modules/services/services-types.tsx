import Link from "next/link";

export default function ServicesTypes() {
  const serviceOptions = [
    {
      name: "Lite",
      desc1: "Consultation",
      desc2: "1 hour shooting",
      desc3: "50 retouched photos",
      desc4: "Deliver in 2 weeks",
      price: "$59",
    },
    {
      name: "Standard",
      desc1: "Consultation",
      desc2: "2 hour shooting",
      desc3: "100 retouched photos",
      desc4: "Deliver in 1 week",
      price: "$89",
    },
    {
      name: "Premium",
      desc1: "Consultation",
      desc2: "3 hour shooting",
      desc3: "150 retouched photos",
      desc4: "Deliver in 2 weeks",
      price: "$149",
    },
  ];

  const mapper = (data: any, index: number) => {
    return (
      <div className="service-type" key={index}>
        <h2>{data.name}</h2>
        <div className="span-bank">
          <span>{data.desc1}</span>
          <span>{data.desc2}</span>
          <span>{data.desc3}</span>
          <span>{data.desc4}</span>
        </div>
        <h2>{data.price}</h2>
        <Link href="/services" className="service-container">
          I want this package
        </Link>
      </div>
    );
  };

  return (
    <div className="service-main-container">
      <h1>Services</h1>
      <div className="service-types">{serviceOptions.map(mapper)}</div>;
    </div>
  );
}

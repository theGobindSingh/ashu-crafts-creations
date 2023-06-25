import Link from "next/link";
import { phoneNumber } from "@/common-data";
import { Types } from "@/interface-file";

export default function ServicesTypes({ tdata }: Types) {
  const message = tdata[0].whatsappText;
  const mapper = (data: Types["tdata"][0], index: number) => {
    return (
      <div className="service-type" key={index}>
        <h2>{data.title}</h2>
        <div className="span-bank">
          <span>{data.step1}</span>
          <span>{data.step2}</span>
          <span>{data.step3}</span>
          <span>{data.step4}</span>
        </div>
        <h2>₹{data.price}</h2>
        <Link
          href={`https://wa.me/${phoneNumber}?text=${message}`.replace(
            "<PACKAGE_NAME>",
            data.title
          )}
          className="service-container"
        >
          I want this package
        </Link>
      </div>
    );
  };

  return (
    <div className="service-main-container">
      <h1>Services</h1>
      <div className="service-types">{tdata.map(mapper)}</div>;
    </div>
  );
}

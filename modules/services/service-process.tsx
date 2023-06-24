import { Process } from "@/interface-file";

export default function ProcessComponent({ pdata }: Process) {
  const mapper = (data: Process["pdata"][0], index: number) => {
    return (
      <div className="process-step" key={index}>
        <h3>{data.step}</h3>
        <h3>/</h3>
        <div className="step-description">
          <span>{data.heading}</span>
          <span>{data.subHeading}</span>
        </div>
      </div>
    );
  };

  return (
    <div className="process-container">
      <h2>/ Process</h2>
      <div className="process-steps">{pdata.map(mapper)}</div>
    </div>
  );
}

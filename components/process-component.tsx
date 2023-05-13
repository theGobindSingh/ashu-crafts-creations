export default function ProcessComponent() {
  const mapper = (data: any, index: any) => {
    return (
      <div className="process-step" key={index}>
        <h3>{data.num}</h3>
        <h3>/</h3>
        <div className="step-description">
          <span>{data.head}</span>
          <span>{data.decr}</span>
        </div>
      </div>
    );
  };

  const serviceProcessObj = [
    {
      num: "01",
      head: "Acquaintance",
      decr: "Through call or meeting to know each other better aiming a productive collaboration.",
    },
    {
      num: "02",
      head: "Briefing",
      decr: "Discussion of shooting details, time & date, places & decorations, payment steps and more.",
    },
    {
      num: "03",
      head: "Shooting",
      decr: "We shoot photos as per the selected package, you choose the ones that will be retouched.",
    },
    {
      num: "04",
      head: "Delivery",
      decr: "As soon as the photos are ready, you get the download link.",
    },
  ];

  return <div className="process-steps">{serviceProcessObj.map(mapper)}</div>;
}

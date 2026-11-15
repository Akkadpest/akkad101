import React from "react";
const facing_pest = [
  {
    emoji: "😣",
    heading: "Skin and Eye Irritation",
    desc: "Pests can cause allergic reactions, leading to irritation.",
  },
  {
    emoji: "👃",
    heading: "Unusual Odors",
    desc: "Strange smells may indicate the presence of pests.",
  },
  {
    emoji: "💩",
    heading: "Pest Droppings",
    desc: "Finding droppings is a clear sign of pests in your home.",
  },
  {
    emoji: "👂",
    heading: "Strange Sounds",
    desc: "Scratching or rustling noises often mean pests are nearby.",
  },
  {
    emoji: "🏚️",
    heading: "Property Damage",
    desc: "Pests can chew through wood, wires, and other materials.",
  },
];
const Infestation = () => {
  return (
    <div className="container container-max-width my-5">
        <h5 className="text-center text-muted">Signs You May Be Facing a Pest Infestation 🐛
        </h5>
      <div className="row d-flex flex-wrap justify-content-center">
        {facing_pest.map((item, index) => (
          <div className="infestation-box">
            <div className="fs-1">{item.emoji}</div>
            <h3>{item.heading}</h3>
            <p className="fs-6 text-muted">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Infestation;

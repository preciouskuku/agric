import React from "react";
import "./Card.css";

import farmerIcon from "../assets/truck.png";
import vegetableIcon from "../assets/hand.png";
import agricultureIcon from "../assets/agri.png";
import guaranteeIcon from "../assets/plant.png";

const CardSection = () => {
  const cards = [
    { icon: farmerIcon, title: "Professional Farmers", text: "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices." },
    { icon: vegetableIcon, title: "Fresh Vegetables", text: "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices." },
    { icon: agricultureIcon, title: "Agriculture Products", text: "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices." },
    { icon: guaranteeIcon, title: "100% Guaranteed", text: "Nullam porta enim vel tellus commodo, eget laoreet odio ultrices." },
  ];

  return (
    <section className="card-section">
      {cards.map((card, index) => (
        <div className="card" key={index}>
          <div className="icon-circle">
            <img src={card.icon} alt={card.title} />
          </div>
          <h3>{card.title}</h3>
          <hr />
          <p>{card.text}</p>
          <div className="cut-shape">
            <div className="arrow-btn">↗</div>
          </div>
        </div>
      ))}
    </section>
  );
};

export default CardSection;

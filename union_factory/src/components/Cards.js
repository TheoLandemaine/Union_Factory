import React from "react";
import "../css/cards.css";
import CardsGen from "./CardsGen";

const Cards = ({ cards }) => (
  <div className="cards-container">
    {cards.map((card) => (
      <CardsGen card={card} />
    ))}
  </div>
);

export default Cards;
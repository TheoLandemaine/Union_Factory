import React from "react";
import "../css/cards.css";
import CardsGen from "./CardsGen";

const Cards = ({ cards }) => (
  <>
    <div className="cards-container">
      {cards.map((card) => ( <CardsGen card={card} /> ))}
    </div>
    {/* <div id="no_assos" class="hidden">
      Aucune association ne correspond à votre recherche
    </div> */}

  </>
);

export default Cards;
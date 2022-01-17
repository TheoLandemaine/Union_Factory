import React from "react";
import "../css/cards.css";
import CardsGen from "./CardsGen";
import SearchBar from "./SearchBar"

const Search = ({ cards }) => (
    <div >
        <div>
        </div>
        <div className="cards-container">
        <SearchBar />
            {cards.map((card) => (
        <CardsGen card={card} />
        ))}
        </div>
        
    </div>
);

export default Search;
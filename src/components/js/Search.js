import React from "react";
import "../css/cards.css";
import CardsGen  from "./CardsGen";
import SearchBar from "./SearchBar";

const Search = ({ cards }) => (
    <>
        <div className="cards-container">
            <SearchBar />
            {cards.map((card) => ( <CardsGen card={card} /> ))}
        </div>
        
    </>
);

export default Search;

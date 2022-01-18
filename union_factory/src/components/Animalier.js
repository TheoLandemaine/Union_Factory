// import React from 'react';
// import "../css/Categories.css";

// const Animalier = () => (
//     <>
//         <div className="nomPage">
//             <h1 id="AnimalierTitrePage">Animalier </h1>
//         </div>

//     </>
// )
    
// export default Animalier;

import React from "react";
import "../css/cards.css";
import CardsGen from "./CardsGen";
import SearchBar from "./SearchBar"


const Animalier = ({ cards }) => (
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

export default Animalier;
import {BrowserRouter, Switch, Route} from 'react-router-dom';

import "../css/cards.css";
import "../css/Categories.css";

import Cards from "./Cards";
import React from "react";
import asso  from './Assos';


const Animalier = () => (
    <div >
         <div className="nomPage">
             <h1 id="AnimalierTitrePage">Animalier</h1>
        </div>

        <div className="cardCategories">
            <BrowserRouter>
            <Switch>
                <Route
                path="/:filter?"
                render={(props) => <Cards {...props} cards={asso} />}
                />
            </Switch>
            </BrowserRouter>
        </div>
    </div>
);

export default Animalier;

window.addEventListener("DOMContentLoaded", function() {
    // do stuff

    let card = document.querySelector(".Humanitaire").parentNode.parentNode
    console.log(card)
    card.style.display = "none"
    // console.log(document.querySelector(".Humanitaire").parentNode.parentNode)

}, false);

import {BrowserRouter, Switch, Route} from 'react-router-dom';

import "../css/cards.css";
import "../css/Categories.css";

import Cards from "./Cards";
import React from "react";
import asso  from './Assos';



const Humanitaire = ({ cards }) => (
    <>
        <div className="nomPage">
            <h1 id="HumanitaireTitrePage">Humanitaire </h1>
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

    </>
)
    


export default Humanitaire;

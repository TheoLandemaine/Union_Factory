import {BrowserRouter, Switch, Route} from 'react-router-dom';

import "../css/cards.css";
import "../css/Categories.css";

import Cards from "./Cards";
import React from "react";
import asso  from './Assos';
import useScript from "./UseScript";


const Environement = () => {
    useScript('./assets/js/environnementScript.js');

    return (
        <>
            <div className="nomPage">
                <h1 id="EnvironnementTitrePage">Environnement </h1>
            </div>
            <div className="cardCategories">
                <BrowserRouter>
                    <Switch>
                        <Route
                            path="/:filter?"
                            render={(props) => <Cards {...props} cards={asso}/>}
                        />
                    </Switch>
                </BrowserRouter>
            </div>
        </>
    )
}


export default Environement;

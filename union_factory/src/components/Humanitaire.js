import {BrowserRouter, Switch, Route} from 'react-router-dom';

import "../css/cards.css";
import "../css/Categories.css";

import Cards from "./Cards";
import React from "react";
import asso  from './Assos';
import useScript from "../javaScript/UseScript";


class Humanitaire extends React.Component {
// const Humanitaire = () => {
//     useScript('./assets/js/humanitaireScript.js');

    componentDidMount() {
        console.log('c\'est monter')
        var card = document.querySelectorAll(".Environnement,.Animalier")

        console.log(card)

        for (var i = 0; i < card.length; i++){
            card[i].parentNode.parentNode.style.display ="none";
        }
    }
    render(){
    return (
        <>
            <div className="nomPage">
                <h1 id="HumanitaireTitrePage">Humanitaire </h1>
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
    )}
}

export default Humanitaire;

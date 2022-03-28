import React from 'react';
import {Link} from 'react-router-dom'
import "./css/style.css";

//JS de Rui pour les Cards 

const Accueil = () => (
    <>
    <div className="tamere">
        <div className="PhraseAccueil">
            <h1>Tu veux les aider ? <br />  Qu'attends-tu ?</h1>
        </div>
        <div>
            <Link to="/recherche">
                <button id="bouton" >Renseigne toi</button>
            </Link>
        </div>
    </div>

    </>
)
    


export default Accueil;

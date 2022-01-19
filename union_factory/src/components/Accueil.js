import React from 'react';
import {Link} from 'react-router-dom'

//JS de Rui pour les Cards 

const Accueil = () => (
    <>
        <div className="PhraseAccueil">
            <h1>Tu veux les aider ? <br />  Qu'attends-tu ?</h1>
        </div>
        <div>
            <Link to="/search">
                <button id="bouton" >Renseigne toi</button>
            </Link>
        </div>
        

    </>
)
    


export default Accueil;

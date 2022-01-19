import React from 'react';
import imgEnvironnement from "../images/fondEnvironnementApp.jpeg";
import imgHumanitaire from "../images/fondHumanitaireApp.png"
import imgAnimalier from "../images/fondAnimalApp.jpeg"
import "../css/Categories.css";
import {Link} from 'react-router-dom'


//JS de Rui pour les Cards 

const Categories = () => (
    <>
        <div className="nomPage">
            <h1 id="Categories">Catégories </h1>
        </div>

        <div id="CategorieContainer">

            <div id="Environnement" className="image">
                <Link to="/environnement">
                    <img src={imgEnvironnement} id="EnvironnementImage" alt="Environnement"/>
                </Link>
                <h2 id="EnvironnementTitre">Environnement</h2>
            </div>

            <div id="Humanitaire" className="image">
                <Link to="/humanitaire">
                    <img src={imgHumanitaire} id="HumanitaireImage" alt="Humanitaire"/>
                </Link>
                <h2 id="HumanitaireTitre">Humanitaire</h2>
            </div>

            <div id="Animalier" className="image">
                <Link to="/animalier">
                    <img src={imgAnimalier} id="AnimalierImage" alt="Animalier"/>
                </Link>
                <h2 id="AnimalierTitre">Animalier</h2>
            </div>

        </div>
    </>
)


export default Categories;

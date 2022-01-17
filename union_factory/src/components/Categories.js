import React from 'react';
import imgEnvironnement from "../images/fondEnvironnementApp.jpeg";
import imgHumanitaire from "../images/fondHumanitaireApp.png"
import imgAnimalier from "../images/fondAnimalApp.jpeg"
import "../css/Categories.css";

//JS de Rui pour les Cards 

const Categories = () => (
    <>
        <div className="nomPage">
            <h1 id="Categories">Catégories </h1>
        </div>

        <div id="CategorieContainer">

            <div id="Environnement" className="image">
                <img src={imgEnvironnement} id="EnvironnementImage"></img>
                <h2 id="EnvironnementTitre">Environnement</h2>
            </div>

            <div id="Humanitaire" className="image">
                <img src={imgHumanitaire} id="HumanitaireImage"></img>
                <h2 id="HumanitaireTitre">Humanitaire</h2>
            </div>

            <div id="Animalier" className="image">
                <img src={imgAnimalier} id="AnimalierImage"></img>
                <h2 id="AnimalierTitre">Animalier</h2>
            </div>

        </div>
    </>
)


export default Categories;

import React from 'react';
import imgEnvironnement from "../images/fondEnvironnementApp.jpeg";
import imgHumanitaire from "../images/fondHumanitaireApp.png"
import imgAnimalier from "../images/fondAnimalApp.png"
import "../css/Categories.css";

//JS de Rui pour les Cards 

const Categories = () => (
    <>
        <h1>Catégories </h1>

        <div id="CategorieContainer">

            <div id="Environnement" class="image">
                <img src={imgEnvironnement}></img>
            </div>

            <div id="Humanitaire" class="image">
                <img src={imgHumanitaire}></img>
            </div>

            <div id="Animalier" class="image">
                <img src={imgAnimalier}></img>
            </div>

        </div>
    </>
)


export default Categories;

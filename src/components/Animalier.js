import React from 'react';
import {useState , useEffect} from 'react';
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import ".../css/cards.css";
import Footer from "./Footer";

function Animalier() {

    const [data, setData] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3003/api/get')
            .then(res => res.json())
            .then(json => setData(json))
    }, []);

    return (
        <>
            <div className="nomPage">
                <h1 id="AnimalierTitrePage">Animalier </h1>
            </div>
            <div className="container">
                <div className="cards-container">
                    {data.filter((association)=>{
                        return association.a_categorie.toString().toLowerCase().includes('Animalier'.toString().toLowerCase());
                    }).map(association => {
                        // console.log(association.a_titre);
                        return (
                            <div className="card" key={association.a_assoID} id={association.a_assoID}>
                                <div className="card-image">
                                    <img src={association.a_image} alt="association"/>
                                </div>
                                <div className="card-text">
                                    <span className="association">{association.a_titre}</span>
                                    <p className={association.a_categorie}>{association.a_description}</p>
                                    <a className="inc button" href={association.a_lien} target="_blank" rel="noreferrer">
                                        Cliquez pour visiter
                                    </a>
                                    <i className="heart-filled"><AiFillHeart/></i>
                                    <i className="heart-unfilled" hidden><AiOutlineHeart/></i>
                                </div>
                            </div>
                        );
                    })}
                </div>
                <p className="no-results" hidden>Aucun résultat</p>
            </div>
            <Footer />
        </>
    );
}

export default Animalier;

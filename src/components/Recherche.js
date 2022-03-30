import React from 'react';
import {useState , useEffect} from 'react';
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import { FaSearch } from "react-icons/fa";

import "../css/cards.css";
import Footer from "./Footer";

function Recherche() {

    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3003/api/get')
            .then(res => res.json())
            .then(json => setData(json))
    }, []);

    const handleSearchTerm = (e) => {
        let value = e.target.value;
        setSearchTerm(value);
    }

function changeHeart(e) {

    let actualHeart = e.target.parentNode.parentNode;
    // let card = e.target.parentNode.parentNode.parentNode.parentNode;

    if(actualHeart.classList.contains('heart-filled')) {
        let otherHeart = actualHeart.parentNode.childNodes[4]
        // console.log('heart-filled');
        // console.log(actualHeart);
        // console.log(otherHeart);
        otherHeart.classList.remove('hidden');
        actualHeart.classList.add('hidden');

    } else {
        let actualHeart = e.target.parentNode;
        let otherHeart = actualHeart.parentNode.childNodes[3]
        // console.log('heart-unfilled');
        // console.log(actualHeart);
        // console.log(otherHeart);
        otherHeart.classList.remove('hidden');
        actualHeart.classList.add('hidden');
    }
}

    // console.log(searchTerm);
    return (
        <>
            <div className="searchBar" id="barSearch">
                <input type="text"
                       name="searchBar"
                       id="searchBar"
                       placeholder="Rechercher une association"
                       onChange={handleSearchTerm}
                />
                <i><FaSearch /></i>
            </div>
            <div className="container">
                <div className="cards-container">
                    {data.filter((association)=>{
                        return association.a_titre.toString().toLowerCase().includes(searchTerm.toString().toLowerCase());
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
                                    <i className="heart-filled hidden " onClick ={(e)=> changeHeart(e) }><AiFillHeart/></i>
                                    <i className="heart-unfilled " onClick ={(e)=> changeHeart(e) }><AiOutlineHeart/></i>
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

export default Recherche;

import React from 'react';
import {useState , useEffect, useContext} from 'react';
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import {UserContext} from '../context/userContext';

import "../css/cards.css";
import Footer from "./Footer";

function Recherche() {

    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);

    useEffect(() => {
        fetch('http://localhost:3002/api/get')
            .then(res => res.json())
            .then(json => setData(json))
    }, []);

    const handleSearchTerm = (e) => {
        let value = e.target.value;
        setSearchTerm(value);
    }

    // console.log(searchTerm);

    const {modalState, toggleModals} = useContext(UserContext);
    console.log(modalState, toggleModals);
    return (
        <>
            <div className="searchBar" id="barSearch">
                <i><FaSearch /></i>
                <input type="text"
                       name="searchBar"
                       id="searchBar"
                       placeholder="Rechercher une association"
                       onChange={handleSearchTerm}

                />
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
                                        Cliquez pour visiter le site
                                    </a>
                                    {modalState.heartField &&(
                                            <i className="heart-filled" onClick={()=> toggleModals("heartUnField")}><AiFillHeart/></i>
                                    )}
                                    {modalState.heartUnField &&(
                                        <i className="heart-unfilled" onClick={()=> toggleModals("heartField")}><AiOutlineHeart/></i>
                                    )}

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

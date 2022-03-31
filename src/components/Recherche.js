import React from 'react';
import {useState , useEffect} from 'react';
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";
import { FaSearch } from "react-icons/fa";
import Axios from 'axios';

import "../css/cards.css";
import Footer from "./Footer";

function Recherche() {

    // GET USER NAME FROM BACKEND
    const [loginStatus, setLoginStatus] = useState('')

    useEffect(() =>{
        Axios.get("http://localhost:3003/login").then((response) =>{
          if (response.data.loggedIn === true) {
            setLoginStatus(response.data.user[0].username);
          }
        })
    }, [])

    const [data, setData] = useState([]);
    const [searchTerm, setSearchTerm] = useState([]);
    Axios.defaults.withCredentials = true;

    useEffect(() => {
        fetch('http://localhost:3003/api/get')
            .then(res => res.json())
            .then(json => setData(json))
    }, []);

    const handleSearchTerm = (e) => {
        let value = e.target.value;
        setSearchTerm(value);
    }


    const insertCard = (id) => {
        Axios.post("http://localhost:3003/fav/insert", {
            card_id: id
        }).then((response) => {
            console.log(response.data);
        })
    }

    const deleteCard = (id) => {
        Axios.post("http://localhost:3003/fav/delete", {
            card_id: id
        }).then((response) => {
            console.log(response.data);
        })
    }






    function changeHeart(e){

    let actualHeart = e.target.parentNode.parentNode;
    let card = e.target.parentNode.parentNode.parentNode.parentNode;
    let cardid = card.getAttribute("id");
    
    if(actualHeart.classList.contains('heart-filled')) {
        let otherHeart = actualHeart.parentNode.childNodes[4]

        otherHeart.classList.remove('hidden');
        actualHeart.classList.add('hidden');

        console.log("Card deleted from favorites || Card id: ",cardid) 
        deleteCard(cardid);
    } else {
        let card = e.target.parentNode.parentNode.parentNode;
        let cardid = card.getAttribute("id");

        let actualHeart = e.target.parentNode;
        let otherHeart = actualHeart.parentNode.childNodes[3]

        otherHeart.classList.remove('hidden');
        actualHeart.classList.add('hidden');

        console.log("Card added to favorites || Card id: ",cardid);
        insertCard(cardid);
    }


}

    // console.log(searchTerm);
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
            <h1>Hello {loginStatus}</h1>
            <div className="container">
                <div className="cards-container">
                    {data.filter((association)=>{
                        return association.a_titre.toString().toLowerCase().includes(searchTerm.toString().toLowerCase());
                    }).map(association => {
                        // console.log(association.a_titre);
                        return (
                            <div label = "card_id" className="card" key={association.a_assoID} id={association.a_assoID}>
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

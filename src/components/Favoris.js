import React, {useEffect, useState} from 'react';
import "../css/favoris.css";
import Footer         from './Footer';
import Axios from "axios";
import {AiFillHeart, AiOutlineHeart} from "react-icons/ai";


function Favoris (){

    const [data, setData] = useState([]);
    Axios.defaults.withCredentials = true;

    // GET USER NAME FROM BACKEND
    const [loginStatus, setLoginStatus] = useState('')

    useEffect(() =>{
        Axios.get("http://localhost:3003/login").then((response) =>{
            if (response.data.loggedIn === true) {
                setLoginStatus(response.data.user[0].username);
                console.log('je suis connecté')

            }
        })

            Axios.get('http://localhost:3003/api/get/fav').then((response )=> {
                    setData(response.data);
                    console.log('data', data);
                    console.log('response', response.data);
            })

    }, [])

    console.log('loginStatus',loginStatus)
    console.log('data',data);

    const deleteCard = (id) => {
        Axios.post("http://localhost:3003/fav/delete", {
            card_id: id
        }).then((response) => {
            console.log(response.data);
        })
    }


    function changeHeart(e) {

        let actualHeart = e.target.parentNode.parentNode;
        let card = e.target.parentNode.parentNode.parentNode.parentNode;
        let cardid = card.getAttribute("id");
        console.log(actualHeart);
        console.log(card);
        console.log(cardid);
        console.log("Card deleted from favorites || Card id: ", cardid)
        deleteCard(cardid);

    }


    try {
        return(
            <>
                <div className="nomPage">
                    <h1 id="Favoris">Favoris </h1>
                </div>
                <h1>Hello {loginStatus}</h1>

                <div className="container">
                    <div className="cards-container">
                        {data.map(association => {
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
                                        <i className="heart-filled  " onClick ={(e)=> changeHeart(e)}><AiFillHeart/></i>
                                        {/*<i className="heart-unfilled " ><AiOutlineHeart/></i>*/}
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                    <p className="no-results" hidden>Aucun résultat</p>
                </div>


                <Footer />

            </>
        )
    }
    catch (e) {
        console.log(e);
        return (
            <>
                <div className="nomPage">
                    <h1 id="Favoris">Favoris </h1>
                </div>
                <div className="containerFavoris">
                    <div className="errorFavoris">
                        <h1>Vous devez vous connectez</h1>
                    </div>
                </div>
                {/*<Footer />*/}
            </>
        )
    }
}
    


export default Favoris;

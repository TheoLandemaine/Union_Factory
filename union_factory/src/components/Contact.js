import React from 'react';
import "../css/contact.css";

const Contact = () => (
    <>
        <div className="h1-contact">
            <h1 id="Contacter">Pour nous contacter </h1>
        </div>

        <form action="action.html">
            <div className="contact-container">

                <div className="information-container">
                    <p><span className="titre-contact">Civilité :</span>
                        <input type="checkbox" id="masculin"/> Masculin
                        <input type="checkbox" id="feminin"/> Feminin
                    </p>

                    <p id="inputNom" ><span className="titre-contact">Nom :</span> <input type="text" placeholder="Entrer votre nom" required/>   </p>
                    <p id="inputAdresse" ><span className="titre-contact">Adresse :</span> <input type="text" placeholder="Entrer votre adresse" required/>    </p>
                    <p id="inputEmail" ><span className="titre-contact">E-mail :</span>  <input type="email" placeholder="Entrer votre E-mail" required/>    </p>

                    <div className="dropdown-list" >
                        <p id="inputCountry"><span className="titre-contact">Pays :</span>   </p>

                        <div className="bloc">
                            <div className="select">
                                <select id="country" name="country">
                                    <option value="unselected">Votre pays</option>
                                    <option value="allemange">Allemange</option>
                                    <option value="angleterre">Angleterre</option>
                                    <option value="espagne">Espagne</option>
                                    <option value="france">France</option>
                                </select>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="msg-container">
                    <p id="inputSujet"><span className="titre-contact sujet">Sujet :</span> <input type="text" placeholder="Entrer votre sujet" required/> </p>
                    <p className="msg-message"><span className="titre-contact">Message :</span> <textarea type="text" placeholder="Entrer votre message" id="msg-message" required/> </p>
                </div>
            </div>
            <input type="submit" value="Valider"/>
        </form>
    </>
)
    


export default Contact;


// document.getElementById("masculin").addEventListener("click", () => {
//     console.log('test')
// })
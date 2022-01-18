import React from 'react';
import "../css/contact.css";

const Contact = () => (
    <>
        <h1>Contact </h1>

        <div className="contact-container">

            <div className="information-container">
                <p><span className="titre-contact">Civilité :</span>
                    <input type="checkbox" id="masculin"/> Masculin
                    <input type="checkbox" id="feminin"/> Feminin
                </p>

                <p><span className="titre-contact">Nom :</span> <input type="text" placeholder="Entrer votre nom" required/>   </p>
                <p><span className="titre-contact">Adresse :</span> <input type="text" placeholder="Entrer votre adresse" required/>    </p>
                <p><span className="titre-contact">E-mail :</span>  <input type="email" placeholder="Entrer votre E-mail" required/>    </p>
                <p><span className="titre-contact">Pays :</span>        </p>
            </div>
            <div className="msg-container">
                <p><span className="titre-contact sujet">Sujet :</span> <input type="text" placeholder="Entrer votre sujet" required/> </p>
                <p className="msg-message"><span className="titre-contact">Message :</span> <input type="text" placeholder="Entrer votre message" id="msg-message" required/> </p>
            </div>
        </div>
    </>
)
    


export default Contact;


// document.getElementById("masculin").addEventListener("click", () => {
//     console.log('test')
// })
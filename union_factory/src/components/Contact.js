import React from 'react';
import "../css/contact.css";

const Contact = () => (
    <>
        <div className="contact-container">
            <h1>Contact </h1>
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
        </div>
    </>
)
    


export default Contact;

import React from 'react';
import emailjs from 'emailjs-com';
import "../css/contact.css";
import { BsPeopleFill } from "react-icons/bs";
import { AiOutlineMail } from "react-icons/ai";
import { MdFindInPage } from "react-icons/md";


export default function AjoutAssos() {

    function sendEmail(e) {

        e.preventDefault();

        emailjs.sendForm('service_9nw72ob', 'template_7m465k8', e.target, 'WJ6KchGMbE_lWsGgR')
        alert("Votre message à bien été envoyé")
        e.target.reset();
    }

    return(
        <div>
            <div className="h1-contact">
                <h1 id="Contacter">Vous voulez vous joindre à nous ?</h1>
            </div>
            {/* <div className="contact-container"> */}
            <div>
                <form onSubmit={sendEmail}>
                    <div>
                        <div className="rowNameEmail">
                            <div className="ensembleLogoInput">
                                <input type="text" className="inputNameEmail" id="inputName" placeholder="Nom association" name="titre" required/>
                                <div className="logoContact" id="logoNom">
                                    <BsPeopleFill />
                                </div>
                            </div>
                            <div className="ensembleLogoInput">
                                <input type="email" className="inputNameEmail" id="inputEmail" placeholder="Email" name="email" required/>
                                <div className="logoContact" id="logoEmail">
                                    <AiOutlineMail />
                                </div>
                            </div>
                        </div>
                    
                        <div className="ensembleLogoInput">
                            <input type="text" className="titre-contact" id="inputSujet" placeholder="Lien de votre site" name="lien" required/>
                            <div className="logoContact" id="logoSujet">
                                <MdFindInPage />
                            </div>
                        </div>
                        <div className="msg-container">
                            <textarea className="msg-message" id="" cols="30" rows="8" id="inputMessage" placeholder="Description" name="description" required></textarea>
                        </div>
                        <div className="btn-container">
                            <input type="submit" className="btnEnvoyer" value="Envoyez"></input>
                        </div>
                        </div>
                </form>
            </div>
        </div>
    )

}
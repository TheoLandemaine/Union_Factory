import React from 'react';
import {FaUserCircle} from 'react-icons/fa'
import Footer         from './Footer';


const Profil = () => (
    <>
        <div className="profilBody">
           
            <section className="container">
                <div className="cadreConnection">
                    <div>
                        <FaUserCircle id="ConnectionLogo"/>
                    </div>

                    <div className='mail'>
                  
                        <div className="div_AdresseMail">
                            <h2 id="TitreAdresseMail">Adresse-mail :</h2>
                            <input type='text' placeholder="Entrer votre E-mail" id="InputAdresseMail" required/>
                        </div>

                        <div className='mdp'>
                            <h2 id="TitreMotDePasse"> Mot de passe :</h2>
                            <input type='text' placeholder="Entrer votre mot de passe" id="InputMotDePasse" required/>
                        </div>

                        <button className="btn_connection">Se connecter</button>

                        <div className="text_inscription">
                            <span className="sign-up"> Vous n'avez pas de compte ? </span>
                            <a id="BoutonIncription" href="#"> S'inscire ici </a>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer />

    </>
)
    


export default Profil;

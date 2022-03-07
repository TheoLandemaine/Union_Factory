import React from 'react';
import {FaUserCircle} from 'react-icons/fa'

const Profil = () => (
    <>
        <div className="profilBody">
            <div className="nomPage">
                <h1 id="connect">Connectez-vous</h1>     
            </div>
           
            <section className="container">
                <div className="cadre">
                    <div>
                        <FaUserCircle id="ConnectionLogo"/>
                    </div>

                    <div className='mail'>
                  
                        <div>
                            <h2 id="TitreAdresseMail">Adresse-mail:</h2>
                            <input type='text' placeholder="Entrer votre E-mail" id="InputAdresseMail" required/>
                        </div>

                        <div className='mdp'>
                            <h2 id="TitreMotDePasse"> Mot de passe:</h2>
                            <input type='text' placeholder="Entrer votre mot de passe" id="InputMotDePasse" required/>
                            
                        </div>

                        <div className="DivCheckbox">
                            <input type='checkbox' name="mdp" id="CheckMotDePasse"></input>
                            <label for="mdp">Mémoriser mot de passe </label> 
                        </div>

                        <input type="button" value="Se connecter" id="BoutonConnection"/>

                        <div className='DivIncription'> 
                            <label for="sign-up">Vous n'avez pas de compte ? </label>
                            <input id="BoutonIncription" type="button" value="S'inscire ici"/>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    </>
)
    


export default Profil;

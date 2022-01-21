import React from 'react';
import {FaUserCircle} from 'react-icons/fa'

const Profil = () => (
    <>
        <div className="profilBody">
            <div className="titre">
                <h1>Connectez-vous</h1>
                
            </div>
           
            <section className="container">
                <div className="cadre">
                <div>
                    <FaUserCircle id="ConnectionLogo"/>
                </div>

                <div className='mail'>
                  
                  <div>
                      <h2>Adresse-mail:</h2>
                      <input type='text' placeholder="entrer votre E-mail" required/>

                 

                  </div>
                  <div className='mdp'>
                      <h2>Mot de passe:</h2>
                      <input type='text' placeholder="entrer votre mot de passe" required/>
                 
                    
                  </div>



                  <div>

                  <input type='checkbox' name="mdp"></input> 
                  <label for="mdp">Mémoriser mot de passe </label>

                  <input class="login"
                         type="button"
                         value="Se connecter"/>
                           <label for="sign-up">Vous n'avez pas de compte ? </label>


                 <input class="sign-up"
                 
                 
                            type="button"
                            value="S'inscire ici"/>
                            
                          

                              

                            
                          








                        






                  
                   </div>
                 

                
                 
                       
                  
        

               

                 
                 
              </div>
                </div>

               
            
            </section>
           
             


        </div>


    </>
)
    


export default Profil;

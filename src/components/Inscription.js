import React, {useState} from 'react';
import Axios from 'axios';
import '../App.css';
import {FaUserCircle} from 'react-icons/fa';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {Link} from 'react-router-dom';

toast.configure()
function App_Register() {

  const [usernameReg, setUsernameReg] = useState('')
  const [emailReg, setEmailReg] = useState('')
  const [passwordReg, setPasswordReg] = useState('')
  const [prenomReg, setPrenomReg] = useState('')
  const [nomReg, setNomReg] = useState('')
  const [dateNaissanceReg, setDateNaissanceReg] = useState('')


  const [registerStatus, setRegisterStatus] = useState('')

  Axios.defaults.withCredentials = true;

  const inscription = () => {
    Axios.post("http://localhost:3003/inscription", 
    { 
      username: usernameReg,
      email: emailReg, 
      password: passwordReg,
      prenom: prenomReg, 
      nom: nomReg,
      dateNaissance: dateNaissanceReg,
    }).then((response) => {

      const notify = () => {
        toast.info(response.data.message, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000})
      }
      
      console.log(response.data);
      if(response.data.message){
        // setRegisterStatus(response.data.message)
        notify();
      } else {
        // setRegisterStatus(response.data.message)
        notify();
      }
    })
  }
  return (
    <>
      <div className="App">

        <div className="profilBody">
        <section className="container">
            <div className="cadreInscription">
          <div>
              <FaUserCircle id="ConnectionLogo"/>
          </div>
         

              <div className='mail'>

                <div className="insert-username">
                    <div class="text-input-container">
                        <input class="text-input" type="text" onChange={(e) => { setUsernameReg(e.target.value); } }
                                placeholder=" " id="InputAdresseMail" required/>
                        <div class="input-underline"></div>
                        <div class="label-container">
                            <span class="input-label">Username :</span>
                        </div>
                    </div>
                </div>

                    <div className="insert-mail">
                        <div class="text-input-container">
                            <input class="text-input" type="text" onChange={(e) => { setEmailReg(e.target.value); } }
                                    placeholder=" " id="InputAdresseMail" required/>
                            <div class="input-underline"></div>
                            <div class="label-container">
                                <span class="input-label">Adresse-mail :</span>
                            </div>
                        </div>
                    </div>
                    <div className="mdp">
                        <div class="text-input-container">
                            <input class="text-input" type="text" onChange={(e) => { setPasswordReg(e.target.value); } }
                                    placeholder=" " id="InputAdresseMail" required/>
                            <div class="input-underline"></div>
                            <div class="label-container">
                                <span class="input-label">Mot de passe:</span>
                            </div>
                        </div>
                    </div>

                    <div className="mdp">
                        <div class="text-input-container">
                            <input class="text-input" type="text" onChange={(e) => { setPrenomReg(e.target.value); } }
                                    placeholder=" " id="InputAdresseMail" required/>
                            <div class="input-underline"></div>
                            <div class="label-container">
                                <span class="input-label">Prénom :</span>
                            </div>
                        </div>
                    </div>
                    <div className="mdp">
                        <div class="text-input-container">
                            <input class="text-input" type="text" onChange={(e) => { setNomReg(e.target.value); } } 
                                    placeholder=" " id="InputAdresseMail" required/>
                            <div class="input-underline"></div>
                            <div class="label-container">
                                <span class="input-label">Nom :</span>
                            </div>
                        </div>
                    </div>

                <div className='mdp'>
                  <h2>Date de Naissance:</h2>
                  <input type='date' onChange={(e) => { setDateNaissanceReg(e.target.value); } } placeholder="entrer votre mot de passe" required />
                </div>


                <div className="cadre-low">
                  <div className="check-mdp">
                    <input type='checkbox' className="mdp-memorise"></input>
                    <label for="mdp-memorise">Mémoriser mot de passe </label>
                  </div>

                  <button className="btn_connection register" onClick={inscription()}>S'inscrire</button>

                    <div class="text-center">
                        <span class="txt1"> Vous avez deja un compte ? </span>

                        <Link to="/Profil">
                            <h2 class="txt2"> Connectez Vous </h2>
                        </Link>
                    </div>

                  {/* <label id="text-sign-up">Vous avez deja un compte?</label>
                  <a href="./App_Login.js">Connectez Vous</a> */}
                </div>
              </div>
            </div>
          </section>
        </div>
      </div>
      </>
  );
}

export default App_Register;

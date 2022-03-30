import React, {useState} from 'react';
import Axios from 'axios';
import '../App.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { useHistory } from 'react-router-dom';
import {FaUserCircle} from 'react-icons/fa';
import {Link} from 'react-router-dom';


toast.configure()
function Inscription() {

  let history = useHistory();


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
        notify();
      } else {
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
            <div className="text-input-container">
                <input className="text-input" type="text" onChange={(e) => { setUsernameReg(e.target.value); } }
                        placeholder=" " id="InputAdresseMail" required/>
                <div className="input-underline"></div>
                <div className="label-container">
                    <span className="input-label">Username :</span>
                </div>
            </div>
        </div>

            <div className="insert-mail">
                <div className="text-input-container">
                    <input className="text-input" type="text" onChange={(e) => { setEmailReg(e.target.value); } }
                            placeholder=" " id="InputAdresseMail" required/>
                    <div className="input-underline"></div>
                    <div className="label-container">
                        <span className="input-label">Adresse-mail :</span>
                    </div>
                </div>
            </div>
            <div className="mdp">
                <div className="text-input-container">
                    <input className="text-input" type="text" onChange={(e) => { setPasswordReg(e.target.value); } }
                            placeholder=" " id="InputAdresseMail" required/>
                    <div className="input-underline"></div>
                    <div className="label-container">
                        <span className="input-label">Mot de passe:</span>
                    </div>
                </div>
            </div>

            <div className="mdp">
                <div className="text-input-container">
                    <input className="text-input" type="text" onChange={(e) => { setPrenomReg(e.target.value); } }
                            placeholder=" " id="InputAdresseMail" required/>
                    <div className="input-underline"></div>
                    <div className="label-container">
                        <span className="input-label">Prénom :</span>
                    </div>
                </div>
            </div>
            <div className="mdp">
                <div className="text-input-container">
                    <input className="text-input" type="text" onChange={(e) => { setNomReg(e.target.value); } } 
                            placeholder=" " id="InputAdresseMail" required/>
                    <div className="input-underline"></div>
                    <div className="label-container">
                        <span className="input-label">Nom :</span>
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

          <button className="inscription btn_connection" onClick={()=>{inscription(); history.push('/home')}}>S'inscrire</button>

            <div className="text-center">
                <span className="txt1"> Vous avez deja un compte ? </span>

                <Link to="/Profil">
                    <h2 className="txt2"> Connectez Vous </h2>
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

export default Inscription;

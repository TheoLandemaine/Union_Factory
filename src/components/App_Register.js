import React, {useState} from 'react';
import Axios from 'axios';
import '../App.css';
// import {FaUserCircle} from 'react-icons/fa';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

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

  const register = () => {
    Axios.post("http://localhost:3003/register", 
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
        <h1>UNION FACTORY</h1>

        <div className="profilBody">
          <div className="connect-vous">
            <h1 id="connect">Connectez-vous</h1>
          </div>
          <section className="container">
            <div className="cadre">
              <div>
                {/* <FaUserCircle id="ConnectionLogo" /> */}
              </div>

              <div className='mail'>

                <div className="insert-username">
                  <h2>Username:</h2>
                  <input type='text' onChange={(e) => { setUsernameReg(e.target.value); } } placeholder="entrer votre username" required />
                </div>
                <div className="insert-mail">
                  <h2>Adresse-mail:</h2>
                  <input type='email' onChange={(e) => { setEmailReg(e.target.value); } } placeholder="entrer votre E-mail" required />
                </div>
                <div className='mdp'>
                  <h2>Mot de passe:</h2>
                  <input type='password' onChange={(e) => { setPasswordReg(e.target.value); } } placeholder="entrer votre mot de passe" required />
                </div>
                <div className='mdp'>
                  <h2>Prenom:</h2>
                  <input type='text' onChange={(e) => { setPrenomReg(e.target.value); } } placeholder="entrer votre mot de passe" required />
                </div>
                <div className='mdp'>
                  <h2>Nom:</h2>
                  <input type='text' onChange={(e) => { setNomReg(e.target.value); } } placeholder="entrer votre mot de passe" required />
                </div>
                <div className='mdp'>
                  <h2>Date de Naissance:</h2>
                  <input type='date' onChange={(e) => { setDateNaissanceReg(e.target.value); } } placeholder="entrer votre mot de passe" required />
                </div>

                {/* <h1>{registerStatus}</h1> */}


                <div className="cadre-low">
                  <div className="check-mdp">
                    <input type='checkbox' className="mdp-memorise"></input>
                    <label for="mdp-memorise">Mémoriser mot de passe </label>
                  </div>

                  <button className="register" onClick={register}>S'inscrire</button>

                  <label id="text-sign-up">Vous avez deja un compte?</label>
                  <a href="./App_Login.js">Connectez Vous</a>
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

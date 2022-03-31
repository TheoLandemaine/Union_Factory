import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import {FaUserCircle} from 'react-icons/fa'
import Footer         from './Footer';
import {Link} from 'react-router-dom';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import  { useHistory } from 'react-router-dom';



function Profil() {


    let history = useHistory();

    const [username, setUsername] = useState('')
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const [loginStatus, setLoginStatus] = useState('')

    Axios.defaults.withCredentials = true;

    const login = () => {
        Axios.post("http://localhost:3003/login", 
        { 
        email: email, 
        password: password,
        }).then((response) => {

        const notify = () => {
            toast.info(response.data.message, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000})
        }
        // console.log(response.data);

        if(response.data.message){
            setLoginStatus(response.data.message)
            notify();
        } else {
            // setLoginStatus("User logged" + response.data[0].username)
            toast.info("Welcome " + response.data[0].username, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000})
        }
        })
    }

    useEffect(() =>{
        Axios.get("http://localhost:3003/login").then((response) =>{
            if (response.data.loggedIn === true) {
                setLoginStatus("User logged: " + response.data.user[0].username);
            }
        })
    }, [])

    return (
    <>
        <div className="profilBody">
           
            <section className="container">
                <div className="cadreConnection">
                    <div>
                        <FaUserCircle id="ConnectionLogo"/>
                    </div>

                    <div className='mail'>
                        
                        <div className="div_AdresseMail">
                            <div className="text-input-container">
                                <input className="text-input" type="text"onChange={(e) => { setEmail(e.target.value);}} 
                                        placeholder=" " id="InputAdresseMail" required/>
                                <div className="input-underline"></div>
                                <div className="label-container">
                                    <span className="input-label">Adresse-mail :</span>
                                </div>
                            </div>
                        </div>

                        <div className="mdp">
                            <div className="text-input-container">
                                <input className="text-input" type="password" onChange={(e) => { setPassword(e.target.value);}}
                                 placeholder=" " id="InputAdresseMail" required/>
                                <div className="input-underline"></div>
                                <div className="label-container">
                                    <span className="input-label">Mot de passe :</span>
                                </div>
                            </div>
                        </div>

                        <button className="btn_connection" onClick={()=>{ login(); history.push('/home')}}>Se connecter</button>

                        <div className="text-center">
                            <span className="txt1"> Vous n'avez pas de compte ? </span>
                            <h1>{loginStatus}</h1>

                            <Link to="/Inscription">
                                <a className="txt2" href="#"> S'inscire ici </a>
                            </Link>
                        </div>
                    </div>
                </div>
            </section>
        </div>
        <Footer />

    </>
    );

}
    


export default Profil;

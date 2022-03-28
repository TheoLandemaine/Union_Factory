import React, {useState, useEffect} from 'react';
import Axios from 'axios';
import '../../App.css';
import {toast} from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import  { useHistory } from 'react-router-dom';


function App_Login() {

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
                // localStorage.setItem('user', response.data.user[0].username)
            // }else if(response.data.loggedIn === false) {
            //     localStorage.clear();
            }
        })
    }, [])



    // 
    return (
        <>
        <div className="login">
            <h3>Login :</h3>
            <label>Email:</label>
            <input type="text" onChange={(e) => { setEmail(e.target.value); } }></input>
            <label>Password:</label>
            <input type="password" onChange={(e) => { setPassword(e.target.value); } }></input>
            {/* <button onClick={login}>Login</button> */}
            <button onClick={()=>{ login(); history.push('/home')}}>Login</button>
            <h1>{loginStatus}</h1>
        </div>
        </>
    )
}


export default App_Login;

import React, {useState,useEffect} from 'react';
import Axios from 'axios';
import  { useHistory } from 'react-router-dom';
import 'react-toastify/dist/ReactToastify.css';
import {toast} from 'react-toastify';



function Home() {

  let history = useHistory();

  const [loginStatus, setLoginStatus] = useState('')

  Axios.defaults.withCredentials = true;

  // GET THE USERNAME PASSING BY useEFFEC AND axios
  useEffect(() =>{
    Axios.get("http://localhost:3003/login").then((response) =>{
      if (response.data.loggedIn === true) {
        setLoginStatus(response.data.user[0].username);
      }
    })
  }, [])

  const logout = () => {
    try {
      Axios.get('http://localhost:3003/logout').then((response) => {
        if (response.data.message){
          toast.info(response.data.message, {position: toast.POSITION.TOP_RIGHT, autoClose: 5000})
        }
        localStorage.clear();
      })

    }catch (error) {
      console.log(error)
    }
  }


  return (
      <div className="App">
          <h1>Hello {loginStatus || localStorage.getItem("name")}</h1>
          <img src ={localStorage.getItem("profilePic")}/>
          <form action="/logout" method="GET">
            <button onClick = {() => {logout(); history.push('/profil')}}>Logout</button>
            
          </form>
      </div>
  );
}


export default Home;

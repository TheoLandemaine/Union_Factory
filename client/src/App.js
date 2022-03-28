import React, {useState,useEffect} from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import App_Register from './components/js/App_Register';
import App_Login from './components/js/App_Login';
import Home from './routes/Home';
import Choise from './routes/Buttons'
import Axios from 'axios';


function App() {


  const [loginStatus, setLoginStatus] = useState('');
  Axios.defaults.withCredentials = true;


  // GET THE USERNAME PASSING BY useEFFECT AND axios
  useEffect(() =>{
    Axios.get("http://localhost:3003/login").then((response) =>{
      if (response.data.loggedIn === true) {
        setLoginStatus("User logged: " + response.data.user[0].username);
      }
    })
  }, [])

  return (
      <Router>
        <Switch>
            <Route path="/login">
              <App_Login/>
            </Route>
            <Route path="/register">
              <App_Register/>
            </Route>
            <Route path="/home">
              <Home/>
            </Route>
            <Route path="/choise">
              <Choise/>
            </Route>
          </Switch>
      </Router>
  );
}


export default App;

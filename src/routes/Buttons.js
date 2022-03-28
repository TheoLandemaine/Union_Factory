import React from 'react';
import {signWithGoogle} from '../components/Firebase';
import  { useHistory } from 'react-router-dom';

function Choise() {
  let history = useHistory();

    return (
    <div className="App">
        <h1>UNION FACTORY</h1>
        <div className="App_Home_Buttons">
            <button><a href="/login">Login</a></button>
            <button><a href ="/register">Register</a></button>
            <button onClick ={()=>{ signWithGoogle(); history.push('/home')}}>Login with google</button>
        </div>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
    </div>
    );
}

export default Choise;
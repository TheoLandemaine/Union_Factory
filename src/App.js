import React, {useState,useEffect} from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import App_Register from './components/js/App_Register';

import Home from './routes/Home';
import Choise from './routes/Buttons'
import Header         from './components/js/Header';
import Cards          from './components/js/Cards';
import Accueil        from './components/js/Accueil';

import Recherche      from './components/js/Recherche';
import Search         from './components/js/Search';

import Categories     from './components/js/Categories';
import Favoris        from './components/js/Favoris';
import Contact        from './components/js/Contact';
import Profil         from './components/js/Profil';
import Inscription    from './components/js/Inscription';
import InfosCard      from './components/js/InfosCard';
// import asso           from './Assos';
import SearchBar      from './components/js/SearchBar';
import Environnement  from './components/js/Environnement';
import Humanitaire    from './components/js/Humanitaire';
import Animalier      from './components/js/Animalier';
import Footer         from './components/js/Footer';
import Propos         from './components/js/Propos';
import AjoutAssos     from './components/js/AjoutAssos';


import Axios from 'axios';


class App extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      items: [],
      isLoaded: false,
    }
  }
  componentDidMount() {
    fetch('http://localhost:3003/api/get')
        .then(res => res.json())
        .then(json => {
          this.setState({
            isLoaded: true,
            items: json,
          })
        });
  }


  // const [loginStatus, setLoginStatus] = useState('');
  // Axios.defaults.withCredentials = true;


  // // GET THE USERNAME PASSING BY useEFFECT AND axios
  // useEffect(() =>{
  //   Axios.get("http://localhost:3003/login").then((response) =>{
  //     if (response.data.loggedIn === true) {
  //       setLoginStatus("User logged: " + response.data.user[0].username);
  //     }
  //   })
  // }, [])

  render() {
    // html
    var {items} = this.state;

    return (

      <>
        <div className="background-component">
          <BrowserRouter>
          <Header />
            <Switch>

              <Route path="/recherche"        exact component={Recherche}/>
              {/*  <Route path="/:filter?" render={(props) => <Recherche {...props} cards={items . isLoaded} />}/>*/}
              {/*</Route>*/}

              <Route path="/search"        exact component={Search}>
                <SearchBar />
                <Route path="/:filter?" render={(props) => <Cards {...props} cards={items} />}/>
              </Route>
              <Route path="/categories"    exact component={Categories} />
              <Route path="/favoris"       exact component={Favoris} />
              <Route path="/contact"       exact component={Contact} />
              <Route path="/infos-card"    exact component={InfosCard} />
              <Route path="/profil"        exact component={Profil} />
              <Route path="/"              exact component={Accueil} />
              <Route path="/inscription"   exact component={Inscription} />
              <Route path="/cards"         exact component={Cards} />
              <Route path="/environnement" exact component={Environnement} />
              <Route path="/humanitaire"   exact component={Humanitaire} />
              <Route path="/animalier"     exact component={Animalier} />
              <Route path="/propos"        exact component={Propos} />
              <Route path="/ajoutassos"    exact component={AjoutAssos} />
              <Route path="/register"      exact component={App_Register}/>
              <Route path="/home"          exact component={Home} />
              <Route path="/choise"        exact component={Choise} />
              
            </Switch>
          </BrowserRouter>

        </div>
      </>
    )
  }
}


export default App;

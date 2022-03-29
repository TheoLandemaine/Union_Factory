import React, {useState,useEffect} from 'react';
import {
  BrowserRouter,
  Switch,
  Route
} from "react-router-dom";
import './App.css';
import App_Register from './components/App_Register';

import Home from './routes/Home';
import Choise from './routes/Buttons'
import Header         from './components/Header';
import Cards          from './components/Cards';
import Accueil        from './components/Accueil';

import Recherche      from './components/Recherche';
import Search         from './components/Search';

import Categories     from './components/Categories';
import Favoris        from './components/Favoris';
import Contact        from './components/Contact';
import Profil         from './components/Profil';
import Inscription    from './components/Inscription';
import InfosCard      from './components/InfosCard';
// import asso           from './Assos';
import SearchBar      from './components/SearchBar';
import Environnement  from './components/Environnement';
import Humanitaire    from './components/Humanitaire';
import Animalier      from './components/Animalier';
import Footer         from './components/Footer';
import Propos         from './components/Propos';
import AjoutAssos     from './components/AjoutAssos';
import EasterEgg      from './components/EasterEgg';



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
              <Route path="/easterEgg"     exact component={EasterEgg} />
              
            </Switch>
          </BrowserRouter>

        </div>
      </>
    )
  }
}


export default App;

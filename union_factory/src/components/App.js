import React          from 'react';
import Header         from './Header';
import Cards          from './Cards';
import Accueil        from './Accueil';
import Search         from './Search';
import Categories     from './Categories';
import Favoris        from './Favoris';
import Contact        from './Contact';
import Profil         from './Profil';
import Inscription    from './Inscription';
import InfosCard      from './InfosCard';
import asso           from './Assos';
import SearchBar      from './SearchBar';
import Environnement  from './Environnement';
import Humanitaire    from './Humanitaire';
import Animalier      from './Animalier';

import {BrowserRouter, Switch, Route} from 'react-router-dom';


class App extends React.Component {
  render() {
    return (
      // html
      <>
        <div className="background-component">
          <BrowserRouter>
          <Header />
            <Switch>
              
              
              <Route path="/search"      exact component={Search}>
                <SearchBar />
                <Route path="/:filter?" render={(props) => <Cards {...props} cards={asso} />}/>
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
              
            </Switch>
          </BrowserRouter>

        </div>
      </>
    )
  }
}

export default App

/*
<BrowserRouter>
    <Switch>
        <Route path="/recherche"   render={(props) => <Search {...props}      />} />
        <Route path="/categories"  render={(props) => <Categories {...props}  />} />
        <Route path="/favoris"     render={(props) => <Favoris {...props}     />} />
        <Route path="/contact"     render={(props) => <Contact {...props}     />} />
        <Route path="/infos-card"  render={(props) => <InfosCard {...props}   />} />
        <Route path="/profil"      render={(props) => <Profil {...props}      />} />
        <Route path="/accueil"     render={(props) => <Accueil {...props}     />} />
        <Route path="/inscrption"  render={(props) => <Inscription {...props} />} />
    </Switch>
</BrowserRouter>
*/

//  {/* <Cards/> */
//           {/* <Accueil /> */}
//           {/* <Search /> */}
//           {/* <Categories /> */}
//           {/* <Favoris /> */}
//           {/* <Contact /> */}
//           // <Profil />
//           {/* <Inscription /> */}
//           {/* <InfosCard /> */}
  
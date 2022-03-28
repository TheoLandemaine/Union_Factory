import {BrowserRouter, Switch, Route} from 'react-router-dom';
import useScript from './UseScript';

import "../css/cards.css";
import "../css/Categories.css";

import Cards from "./Cards";
import asso  from './Assos';


const Animalier = () => {
    useScript('./assets/js/animalierScript.js');

    return(
    <div>

        <div className="nomPage">
            <h1 id="AnimalierTitrePage">Animalier</h1>
        </div>

        <div className="cardCategories">
            <BrowserRouter>
                <Switch>
                    <Route
                        path="/:filter?"
                        render={(props) => <Cards {...props} cards={asso}/>}
                    />
                </Switch>
            </BrowserRouter>
        </div>
    </div>
    )
}

export default Animalier;


import React from 'react';
import {Link} from 'react-router-dom'


const Footer = () => (
    <>
    <footer>
        <div className="container_footer">
            <h3 className="text_footer">Union Factory | Répertoire d'associations</h3>
            <div className="">
                <ul className="LienFooter">
                    <Link to="/Propos">
                        <li > À propos de nous</li>
                    </Link>
                </ul>
                {/* <h3 className="text_footer">À propos de nous </h3> */}
            </div>
            <h3 className="text_footer">Copyright 2022 © Union Factory | Tous droits réservés</h3>
        </div>
        </footer>
    </>
)
    


export default Footer;
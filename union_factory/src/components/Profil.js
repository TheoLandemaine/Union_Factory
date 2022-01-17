import React from 'react';
import {FaUserCircle} from 'react-icons/fa'

const Profil = () => (
    <>
        <div className="profilBody">
            <div className="titre">
                <h1>Connectez-vous</h1>
            </div>
            <section className="container">
                <div className="cadre"></div>
                <div>
                    <FaUserCircle id="ConnectionLogo"/>
                </div>
                
            </section>
        </div>
    </>
)
    


export default Profil;

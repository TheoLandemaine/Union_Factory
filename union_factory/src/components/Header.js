import React from 'react';
import {FaUserCircle, FaFoursquare} from 'react-icons/fa'
import { GiEarthAmerica } from "react-icons/gi";
import {Link} from 'react-router-dom'

const Header = () => (
    <>
    <header>
        <div className="header-container" id="fond">
            <div className="logo-container">
                <div className="logo">
                    <figure>
                        <Link to="/" style={{textDecoration: 'none'}}>
                            {/* <li className="title" ><FaFoursquare /></li> */}
                            <li className="title" ><GiEarthAmerica /></li>
                        </Link>
                    </figure>
                </div>
                <div className="name">
                    <Link to="/" style={{textDecoration: 'none'}}>
                        <li className="title" >Union Factory</li>
                    </Link> 
                </div>
            </div>
            <div className="nav-profilpic">
                <nav>
                    <div className="navbar-container">
                        <div className="categories">
                            <ul className="Separation">
                                <Link to="/search">
                                    <li> Recherche</li>
                                </Link>
                                <Link to="/categories">
                                    <li> Catégories</li>
                                </Link>
                                <Link to="/favoris">
                                    <li> Favoris</li>
                                </Link>
                                <Link to="/contact">
                                    <li> Contact</li>
                                </Link>
                                <Link to="/profil">
                                    <li> <FaUserCircle id="profil"/></li>
                                </Link>
                            </ul>
                        </div>
                    </div>
                </nav>
                <div className="profil-pic">
                    <figure>
                        <ion-icon className="login-logo" name="person-circle"/>
                    </figure>
                </div>
            </div>
        </div>
    </header>
    </>
)
export default Header;

/*
<li><a to="/categories"  id="categories" > Catégories</a></li>
<li><a to="/favoris"     id="favoris"    >  Favoris  </a></li>
<li><a to="/contact"     id="contact"    >  Contact  </a></li>
<li><a to="/profil"     > <FaUserCircle id="profil"/></a></li>
*/
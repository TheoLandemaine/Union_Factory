import React from 'react';
import {FaSearch} from 'react-icons/fa'

const SearchBar = () =>{
    return(
        <>
            <div className="searchBar">
                <input type="text" name="searchBar" id="searchBar" placeholder="Rechercher"></input> 
            </div>
        </>
    )
}

export default SearchBar
import React from 'react';
import { useState } from "react";
import { FaSearch } from "react-icons/fa";



// function Search() {
//     const [datas] = useState([]);
//     const [searchTerm, setSearchTerm] = useState("");

//     const handleSearchTerm = (e) => {
//         let value = e.target.value;
//         setSearchTerm(value);
//     }

//     console.log(searchTerm)

//     return (
//         <>
//              <div className="searchBar">
//                 <input type="text" name="searchBar" id="searchBar" placeholder="Rechercher" onChange={handleSearchTerm}></input> 
//             </div>

//             <div clasName="search_results">
//                 {datas 
//                     .filter((val) => {
//                         return val.title.includes(searchTerm)
//                     })
//                     .map((val) => {
//                         return (
//                             <div className="search_result" key={val.id}>
//                                 {val.title}
//                             </div>
//                         )
//                     })}
//             </div>
//         </>
//     )
// }

// export default Search


const SearchBar = () =>{
    return(
        <>
            <div className="searchBar">
                <input type="text" name="searchBar" id="searchBar" placeholder="Rechercher" ></input> 
                <i><FaSearch /></i>
            </div>
        </>
    )
}
export default SearchBar
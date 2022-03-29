import React from "react";
import "../css/easter_egg.css";
import useScript from "./UseScript.js";

const EasterEgg  = () => { 

    useScript('./assets/js/easter_egg.js');

    return( 
        <>
            <canvas id="c"></canvas>
        </>
    )

}

export default EasterEgg;

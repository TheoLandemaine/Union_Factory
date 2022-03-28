// window.addEventListener("DOMContentLoaded", function() {
//     // do stuff
//     console.log('oui')
//     let card = document.querySelector(".Humanitaire").parentNode.parentNode
//     console.log(card)
//     card.style.display = "none"
//     console.log(document.querySelector(".Humanitaire").parentNode.parentNode)
//
// }, false);

var pathname = window.location.pathname;

// if (pathname ==="/animalier"){
    console.log('oui')
    var card = document.querySelectorAll(".Humanitaire,.Environnement")
        // .parentNode.parentNode
    console.log(card)
    for (var i = 0; i < card.length; i++){
        // console.log(card[i])
        card[i].parentNode.parentNode.parentNode.style.display ="none";
    }


    // card.style.display = "none"



// }else {
//     console.log('non')
//     document.addEventListener("keyup", ()=>{
//         console.log('testtetetste')
//         let card = document.querySelector(".Humanitaire").parentNode.parentNode
//         console.log(card)
//         card.style.display = "none"
//     })
// }



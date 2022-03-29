let img    = document.querySelector("body");
let word = '';
document.addEventListener( 'keypress', function( event ) {

    let currentLetter = event.key;

    word += currentLetter;

    if( word.length > 7 ) {
        
        if( word.includes( 'invaders' ) ) {
            document.location.href = "./easterEgg";
            word = '';
        } 
    }
});
let img    = document.querySelector("body");
let word = '';
document.addEventListener( 'keypress', function( event ) {
    document.querySelector("body").style.background = "";

    let currentLetter = event.key;

    word += currentLetter;

    if( word.length > 3 ) {
        if( word.includes( 'easter' ) ) {
            window.open('../src/easterEgg/easter_egg.html');
        } 
    }
});
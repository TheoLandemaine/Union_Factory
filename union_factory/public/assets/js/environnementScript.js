
var pathname = window.location.pathname;

console.log('oui')

var card = document.querySelectorAll(".Humanitaire,.Animalier")

console.log(card)

for (var i = 0; i < card.length; i++){
    card[i].parentNode.parentNode.parentNode.style.display ="none";
}
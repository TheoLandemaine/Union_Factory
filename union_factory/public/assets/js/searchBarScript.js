console.log("SearchBar unable");


 var card2 = document.querySelectorAll('.heart-filled,.heart-unfilled')


for (var i = 0; i < card2.length; i++){
    console.log(card2[i])
    console.log('yooo');
    card2[i].addEventListener('click', e =>{
        console.log('oui')

        console.log(e.target.style.color='red')
        // console.log(e.target.style.display='none')

    });
}
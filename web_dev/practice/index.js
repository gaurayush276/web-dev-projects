let value = document.getElementById('counter') ; 

let image = document.getElementById('pic') ; 

function increment(){
       let temp = parseInt(value.innerText) ; 
       temp  = temp + 1 ; 
       value.innerText = temp ; 
        image.style.transform = `scale(${temp})`;
        image.style.transitionDuration = '3s' ;

}

function decrement(){
       let temp = parseInt(value.innerText) ; 
       temp  = temp - 1 ; 
       value.innerText = temp ;
       image.style.transform = `scale(${temp})`; 
       
}

let change = document.getElementsByClassName('container')[0] ; 
 
function lightMode () {
    change.style.background = 'red' ; 
    change.style.transitionDuration = '3s' ; 
    change_logo.style.border = '2px solid black' ; 

}
function darkMode () {
    change.style.background = 'black' ;
    change.style.transitionDuration = '3s' ; 
 
}
let hover = document.getElementById('pic') ; 

function todo() {
    hover.style.boxShadow = '0 0 40px aqua';
}

hover.addEventListener('mouseover' , todo) ; 
hover.addEventListener('mouseout' , function  () {
    hover.style.boxShadow = 'none';
}) ; 


function move ()  {
    hover.style.transform = 'rotate(360deg)' ; 
}
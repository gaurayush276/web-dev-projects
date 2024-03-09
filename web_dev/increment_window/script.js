let value = document.getElementById('counter');


function increment(){
    let temp = parseInt(value.innerText) ; 
    temp = temp + 1 ; 
    value.innerText  = temp ;

}

function decrement(){
    let temp = parseInt(value.innerText) ; 
    temp = temp - 1 ; 
    value.innerText  = temp ;

}


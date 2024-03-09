 

function add () {
    let a = parseInt ( document.getElementById('first_val').value)  ; 

let b = parseInt ( document.getElementById('second_val').value)  ;  
if( !isNaN(a)  &&  !isNaN(b) )
    document.getElementById('result').innerText = a+ b ; 

    else
    document.getElementById('result').innerText = "try only with the numbers";
}
function sub () { 
    let a = parseInt ( document.getElementById('first_val').value)  ; 

let b = parseInt ( document.getElementById('second_val').value)  ;  
    document.getElementById('result').innerText = a- b ; 
}
function mul () {
    let a = parseInt ( document.getElementById('first_val').value)  ; 

let b = parseInt ( document.getElementById('second_val').value)  ;   
    document.getElementById('result').innerText = a *b ; 
}
function div () {
    let a = parseInt ( document.getElementById('first_val').value)  ; 

let b = parseInt ( document.getElementById('second_val').value)  ;   
    document.getElementById('result').innerText = a / b ; 
}

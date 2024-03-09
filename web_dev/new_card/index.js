let temp = document.getElementById('pic') ; 
temp.addEventListener('click', function  (){
    temp.style.boxShadow = '0 0 40px red' ; }) ; 

     let mydiv = document('div') ; 
     function parastatus( event ) {
        console.log("para" + event.target.text.content) ;

     }

     mydiv.addEventListener('click', parastatus) ; 
     for ( let  i =1 ; i <= 100 ; i++) {
        let element = document.createElement('p') ; 
        element.textContent = "this is para" + i ; 
        mydiv.appendChild(element) ; 

     }

     document.body.appendChild(mydiv) ;
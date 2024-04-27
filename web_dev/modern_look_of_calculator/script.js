function num1(){
    let a = document.getElementById('one').innerText;
    let b =document.querySelector('.screen').innerText ; 
    document.querySelector('.screen').innerText = b+ a ; 
}
 
function num2(){
    let a = document.getElementById('two').innerText;
    let b =document.querySelector('.screen').innerText ; 
    document.querySelector('.screen').innerText = b+ a ;}
 
function num3(){
    let a = document.getElementById('three').innerText;
    let b =document.querySelector('.screen').innerText ; 
    document.querySelector('.screen').innerText = b+ a  ;}
 
function num4(){
    let a = document.getElementById('four').innerText;
    let b =document.querySelector('.screen').innerText ; 
    document.querySelector('.screen').innerText = b+ a ;}
 
function num5(){
    let a = document.getElementById('five').innerText;
    let b =document.querySelector('.screen').innerText ; 
    document.querySelector('.screen').innerText = b+ a ;}
 
function num6(){
    let a = document.getElementById('six').innerText;
    let b =document.querySelector('.screen').innerText ; 
    document.querySelector('.screen').innerText = b+ a  ;}
 
function num7(){
    let a = document.getElementById('seven').innerText;
    let b =document.querySelector('.screen').innerText ; 
    document.querySelector('.screen').innerText = b+ a  ;}
 
function num8(){
    let a = document.getElementById('eight').innerText;
    let b =document.querySelector('.screen').innerText ; 
    document.querySelector('.screen').innerText = b+ a  ;}
 
function num9(){
    let a = document.getElementById('nine').innerText;
    let b =document.querySelector('.screen').innerText ; 
    document.querySelector('.screen').innerText = b+ a ;}
 
function num_add(){
    let a = document.getElementById('plus').innerText;
    let b =document.querySelector('.screen').innerText ; 
    document.querySelector('.screen').innerText = b + a ;}
 
function num_div(){
    let a = document.getElementById('divide').innerText;
    let b =document.querySelector('.screen').innerText ; 
    document.querySelector('.screen').innerText = b+ a ;}
 
function num_mul(){
    let a = document.getElementById('pro').innerText;
    let b =document.querySelector('.screen').innerText ; 
    document.querySelector('.screen').innerText = b+ a ;}
 
function num_sub(){
    let a = document.getElementById('minus').innerText;
    let b =document.querySelector('.screen').innerText ; 
    document.querySelector('.screen').innerText = b+ a ;}
 

    function clearScreen() {
        document.querySelector('.screen').innerText = '' ;
    }

    

    function num_eq() {
        let a =  document.querySelector('.screen').innerText ;
         document.querySelector('.result').innerText = Solution(a) ;
       
               
          
    }
    function Solution(s) {
        let stack = [];
        let sign = '+';
        let temp = 0;
        
        for (let i = 0; i < s.length; i++) {
            if (s[i].match(/\d/)) { // Checks if the character is a digit
                temp = temp * 10 + (s[i] - '0');
            }
    
            if ((!s[i].match(/\d/) && s[i] !== ' ') || i === s.length - 1) {
                if (sign === '+') {
                    stack.push(temp);
                } else if (sign === '-') {
                    stack.push(-temp);
                } else {
                    let result;
                    if (sign === '*') {
                        result = stack.pop() * temp;
                    } else {
                        result = stack.pop() / temp;
                    }
                    stack.push(result);
                }
    
                temp = 0;
                sign = s[i];
            }
        }
    
        let sum = 0;
        while (stack.length > 0) {
            sum += stack.pop();
        }
    
        return sum;
    
    }
    
    

// function num1() {
//     let a = document.getElementById('one').innerText;
//     document.getElementsByClassName('screen')[0].innerText = a;
// }

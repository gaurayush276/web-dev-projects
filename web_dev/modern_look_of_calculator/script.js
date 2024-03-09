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
    function Solution(expression) {
        let operands = expression.split(/[\+\-\*\/]/);
        let operators = expression.split(/[0-9\.]+/).filter(Boolean);
    
        let result = parseFloat(operands[0]);
    
        for (let i = 0; i < operators.length; i++) {
            let operator = operators[i];
            let operand = parseFloat(operands[i + 1]);
    
            switch (operator) {
                case '+':
                    result += operand;
                    break;
                case '-':
                    result -= operand;
                    break;
                case '*':
                    result *= operand;
                    break;
                case '/':
                    result /= operand;
                    break;
            }
        }
    
        return result;
    }
    
    

// function num1() {
//     let a = document.getElementById('one').innerText;
//     document.getElementsByClassName('screen')[0].innerText = a;
// }

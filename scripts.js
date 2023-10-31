let numsEntered = [];
let whichNum = false;
let rightNum = '';
let leftNum = '';
let opSign = '';
// const buttons = document.querySelectorAll(".number");
const buttons = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const operators = document.querySelectorAll(".op");
const equals = document.querySelector('.equals');

buttons.forEach(changeDisplay); 
operators.forEach(changeSide);
function changeDisplay(button){
    button.addEventListener("click", function(){
        if (whichNum == false) {
            if(numsEntered.length > 7){
            } else{
                numsEntered.push(button.textContent);
            }
    
            display.textContent = numsEntered.join('');
            leftNum = +(numsEntered.join(''));
            if (leftNum.toString().length > 7){    
            } else {
                if (button.textContent == '.'){
                    leftNum += '.'
                }else{
                    leftNum = +(numsEntered.join(''));
                }
    
            }
        
        } else if(whichNum == true){
            if(numsEntered.length > 7){
            } else{
                numsEntered.push(button.textContent);
                display.textContent = numsEntered.join('');
            }
    
            rightNum = numsEntered.join('');
            if (rightNum.toString().length > 7){    
            } else {
                if (button.textContent == '.'){
                    rightNum += '.'
                }else{
                    rightNum = +(numsEntered.join(''));
                }
    
            }
        }
    })
};

function changeSide(operator){
    operator.addEventListener("click", function(){
        let arr = operator.className.split(" ")
        if (arr[0] == 'divide'){
            opSign = '/';
        } else if (arr[0] == 'multiply'){
            opSign = '*';
        }else if (arr[0] == 'subract'){
            opSign = '-';
        }else if (arr[0] == 'add'){
            opSign = '+';
        }else {

        }
        if (whichNum == false){
            whichNum = true;
            numsEntered = [];
        } else{

        }
    });
}

function completeOperation(){

}

let numsEntered = [];
let whichNum = false;
let rightNum = '';
let leftNum = '';
let opSign = '';
let finalNum = 0;
let numOfDots = 0;

// const buttons = document.querySelectorAll(".number");
const buttons = document.querySelectorAll(".number");
const display = document.querySelector(".display");
const operators = document.querySelectorAll(".op");
const equals = document.querySelector('.equals');
const clear = document.querySelector('.clear');
const posNeg = document.querySelector('.pos-neg');
const decimal = document.querySelector('.decimal');

buttons.forEach(changeDisplay); 
operators.forEach(changeSide);
completeOperation(equals);
clear.addEventListener("click", function(e) {
    whichNum = false;
    numsEntered.splice(0, 5);
    display.textContent = 0;
    leftNum = '';
});
posNeg.addEventListener("click", function(e){
    console.log(numsEntered);
    if (numsEntered[0] == '-'){
        numsEntered.splice(0, 1);
        display.textContent = numsEntered.join('');
        if (whichNum == false){
            leftNum = numsEntered.join('');
        } else{
            rightNum = numsEntered.join('');
        }
    } else {
        numsEntered.splice(0, 0, '-');
        display.textContent = numsEntered.join('');
        if (whichNum == false){
            leftNum = numsEntered.join('');
        } else{
            rightNum = numsEntered.join('');
        }
    } 
      
});

decimal.addEventListener("click", function(e){
    let temp = +(numsEntered.join(''));
    if ((temp / 100).toString().length > 6){
        temp /= 100;
        temp = temp.toFixed(3)
    }else if ((temp % 100).toString().length == 6){
        console.log("nothing");
    }else {
        numsEntered = (temp/100).toString().split('');
    }
    display.textContent = numsEntered.join('');
    
    if (whichNum == false){
        leftNum = numsEntered.join('');
    } else {
        rightNum = numsEntered.join('');
    }
});

function changeDisplay(button){
    button.addEventListener("click", function(){
        if (whichNum == false) {
            if(numsEntered.length > 7){
                //numsEntered.splice(7,1);
            } else{
                numsEntered.push(button.textContent);
                display.textContent = numsEntered.join('');
            }
    
            leftNum = numsEntered.join('');
            if (leftNum.toString().length > 7){    
            } else {

                if ((button.textContent == '.')){
                    numOfDots = 0;
                    for (let i = 0; i < numsEntered.length; i++){
                        if (numsEntered[i] == '.'){
                            numOfDots += 1;
                        }
                    }

                    if (numOfDots > 1){
                        
                        let index = numsEntered.findIndex(element => element === '.');
                       // console.log(numOfDots);
                        numsEntered.splice(index, 7);
                        //numsEntered[1] = '.';
                        //console.log(numsEntered)
                        leftNum += '.';
                        display.textContent = numsEntered.join('');
                    }

            
                    if ((numsEntered.length + 1 == 0) || (numsEntered.length + 1 == 1)){
                        //console.log("Length: " + numsEntered.length)
                        numsEntered.splice(0, 5);
                        numsEntered[0] = 0;
                        numsEntered[1] = '.';
                        console.log(numsEntered)
                        leftNum += '.';
                        display.textContent = numsEntered.join('');
                    } else{
                        leftNum += '.';
                    }
                }else{
                    leftNum = +(numsEntered.join(''));
                }
    
            }
            console.log(numsEntered)


        } else if(whichNum == true){

            if(numsEntered.length > 7){
                //numsEntered.splice(7,1);
            } else{
                numsEntered.push(button.textContent);
                display.textContent = numsEntered.join('');
            }
    
            rightNum = numsEntered.join('');
            if (rightNum.toString().length > 7){    
            } else {

                if ((button.textContent == '.')){
                    numOfDots = 0;
                    for (let i = 0; i < numsEntered.length; i++){
                        if (numsEntered[i] == '.'){
                            numOfDots += 1;
                        }
                    }

                    if (numOfDots > 1){
                        
                        let index = numsEntered.findIndex(element => element === '.');
                       // console.log(numOfDots);
                        numsEntered.splice(index, 7);
                        //numsEntered[1] = '.';
                        //console.log(numsEntered)
                        rightNum += '.';
                        display.textContent = numsEntered.join('');
                    }

            
                    if ((numsEntered.length + 1 == 0) || (numsEntered.length + 1 == 1)){
                        //console.log("Length: " + numsEntered.length)
                        numsEntered.splice(0, 5);
                        numsEntered[0] = 0;
                        numsEntered[1] = '.';
                        console.log(numsEntered)
                        rightNum += '.';
                        display.textContent = numsEntered.join('');
                    } else{
                        rightNum += '.';
                    }
                }else{
                    rightNum = +(numsEntered.join(''));
                    console.log("i like being buggy")

                }
    
            }
            console.log(numsEntered)

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

function completeOperation(equals){
    equals.addEventListener("click", function(){
        console.log(leftNum)
        console.log(typeof(leftNum))
        console.log(rightNum)
        console.log(typeof(rightNum))
        console.log(opSign)
        if (whichNum == true){
            if (opSign == '/'){
                finalNum = (+(leftNum)) / (+(rightNum));
                console.log(opSign)
            } else if (opSign == '*'){
                finalNum = +(leftNum) * +(rightNum);
                console.log(opSign)

            } else if (opSign == '+'){
                finalNum = +(leftNum) + (+(rightNum));
                console.log(opSign)

            } else if (opSign == '-'){
                finalNum = +(leftNum) - (+(rightNum));
                console.log(opSign)

            }
            console.log(finalNum)
            if (finalNum.toString().length > 6){
                finalNum = finalNum.toFixed(3)
            }
            
            display.textContent = finalNum;
            leftNum = String(finalNum);
            numsEntered.splice(0, 5);
        }
    });
}

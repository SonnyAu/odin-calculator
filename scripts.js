let numsToUse = [];
let arr = [];
// const buttons = document.querySelectorAll(".number");
const buttons = document.querySelectorAll(".number");
const display = document.querySelector(".display");



buttons.forEach(changeDisplay); 

function changeDisplay(button){
    button.addEventListener("click", function(){
        display.textContent = button.textContent;
    })

};

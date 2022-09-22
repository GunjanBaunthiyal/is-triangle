const inputS = document.querySelectorAll(".input-text");
const HYBTN = document.querySelector("#submit-btn");
const Output = document.querySelector("#output");


function calculateSumOfSquares(a,b) {
    const sumOfSq = a*a + b*b;
    return sumOfSq;
}

function calcHY() {
    const sumOfSq = calculateSumOfSquares(Number(inputS[0].value), Number(inputS[1].value));
    Output.innerText = "The length of hypotenuse is "+Math.sqrt(sumOfSq);
}

HYBTN.addEventListener("click", calcHY);
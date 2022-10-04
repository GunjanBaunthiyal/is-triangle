const inputS = document.querySelectorAll(".input-text");
const HYBTN = document.querySelector("#submit-btn");
const Output = document.querySelector("#output");


function calculateSumOfSquares(a,b) {
    const sumOfSq = a*a + b*b;
    return sumOfSq;
}

function calcHY() {
    let b = Number(inputS[0].value);
    let p = Number(inputS[1].value);
    if(b>0&&p>0) {
    const sumOfSq = calculateSumOfSquares(b, p);
    Output.innerText = "The length of hypotenuse is "+Math.sqrt(sumOfSq);
} else{
    Output.innerText = "Enter values greater than 0."
}
}

HYBTN.addEventListener("click", calcHY);
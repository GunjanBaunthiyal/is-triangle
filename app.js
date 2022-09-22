const inputs = document.querySelectorAll(".angle-input");
const BTN = document.querySelector("#submit-btn");
const Output = document.querySelector("#output");


function calculateSum(a1,a2,a3) {
    const sum = a1+a2+a3;
    return sum;
}

function isTriangle() {
    var sumOfAngles = calculateSum(Number(inputs[0]), Number(inputs[1]), Number(inputs[2]));
    if(sumOfAngles === 180) {
        Output.innerText = "Yay, The angles form a triangle";
    } else {
        Output.innerText = "Oh no!! The angles don't form a triangle";
    }

}

BTN.addEventListener("click", isTriangle);
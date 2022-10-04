const input1 = document.querySelector("#angle-input1");
const input2 = document.querySelector("#angle-input2");
const input3 = document.querySelector("#angle-input3");
const BTN = document.querySelector("#submit-btn");
const Output = document.querySelector("#output");

function calculateSum(a1,a2,a3) {
    if(checkValid(a1,a2,a3)) {
        const sum = (a1+a2+a3);
        return sum;
}
}

function checkValid(a,b,c) {
    if(a+b <= c || a+c <=b || b+c <= a )
        return false;
    else
        return true;
}
function isTriangle() {
    const a = Number(input1.value);
    const b = Number(input2.value);
    const c = Number(input3.value);
    var sum = calculateSum(a, b, c);
    if(a > 0 && b > 0 && c > 0) {
        if(sum === 180) {
            Output.innerText = "Yay, These angles form a triangle";
        } else if (sum === 0 ){
            Output.innerText = "Please enter valid values.";
        } else {
            Output.innerText = "Oops, These angles don't form a triangle"
    }
} else {
    Output.innerText = "Enter values greater than 0";
    Output.style.borderColor = "red";
}

}

BTN.addEventListener("click", isTriangle);
const BaseInput = document.querySelector("#base-input");
const HeightInput = document.querySelector("#height-input");
const BTN = document.querySelector("#submit-btn");
const Output = document.querySelector("#output");

function mul(b,h) {
    const m = b*h;
    return m;
}

function area() {

    const a = 0.5*(mul(Number(BaseInput.value), Number(HeightInput.value)));
    Output.innerText = "Area of triangle: "+a;
}

BTN.addEventListener("click", area);
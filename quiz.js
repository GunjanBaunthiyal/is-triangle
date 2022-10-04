const QuizForm = document.querySelector(".quiz-form");
const SubmitBTN = document.querySelector("#submit-btn");
const Output = document.querySelector("#output");

const correctAns = ["90°", "Right-angled", "Pythagoras", "Trigonometry", "True"];

function calculateScore() {
    let score = 0;
    let i = 0;
    const formResult = new FormData(QuizForm);
    for(let value of formResult.values()) {
        if(value === correctAns[i]) {
            score = score + 1;
        }
        i++;
    }
    Output.innerText = "Your score is " + score;
}

SubmitBTN.addEventListener("click", calculateScore);
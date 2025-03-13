const questions = [
    { q: "¿Cuánto vale π aproximadamente?", options: ["3.14", "2.71", "1.61", "4.13"], correct: 0 },
    { q: "¿Qué día se celebra el Día de π?", options: ["14 de marzo", "22 de julio", "3 de febrero", "10 de junio"], correct: 0 },
    { q: "¿Qué letra griega representa π?", options: ["Ω", "Σ", "π", "Δ"], correct: 2 },
    { q: "¿Quién popularizó el uso de π?", options: ["Arquímedes", "Pitágoras", "Euclides", "Leonhard Euler"], correct: 3 },
    { q: "¿Cuál es una fracción cercana a π?", options: ["22/7", "3/2", "5/3", "7/4"], correct: 0 },
    { q: "¿Cuántas cifras decimales tiene π?", options: ["Infinitas", "100", "1,000", "10,000"], correct: 0 },
    { q: "¿Cuál es la relación entre π y la circunferencia?", options: ["π = C/d", "π = r²", "π = 2r", "π = d/2"], correct: 0 },
    { q: "¿Quién usó polígonos para calcular π?", options: ["Arquímedes", "Newton", "Gauss", "Euler"], correct: 0 },
    { q: "¿Cuántos grados tiene un círculo?", options: ["180", "90", "360", "270"], correct: 2 },
    { q: "¿Cuál es la forma decimal exacta de π?", options: ["No tiene", "3.1416", "22/7", "3.142"], correct: 0 },
    { q: "¿Qué número sigue después de 3.14 en π?", options: ["1", "2", "5", "9"], correct: 3 },
    { q: "¿Cómo se calcula el área de un círculo?", options: ["πr²", "2πr", "r²/π", "π/d"], correct: 0 },
    { q: "¿Cuál es el récord de memorización de decimales de π?", options: ["70,000", "50,000", "100,000", "30,000"], correct: 0 },
    { q: "¿Quién nació el Día de π?", options: ["Einstein", "Newton", "Euler", "Descartes"], correct: 0 },
    { q: "¿Qué evento ocurrió en el Día de π de 2018?", options: ["Stephen Hawking murió", "Descubrieron un nuevo decimal", "Einstein ganó un premio", "Se prohibió π"], correct: 0 }
];

let currentQuestionIndex = 0;
let score = 0;

const questionElement = document.getElementById("question");
const optionsElement = document.getElementById("options");
const nextButton = document.getElementById("next-btn");
const scoreElement = document.getElementById("score");
const correctSound = document.getElementById("correct-sound");
const incorrectSound = document.getElementById("incorrect-sound");

function loadQuestion() {
    let q = questions[currentQuestionIndex];
    questionElement.textContent = q.q;
    optionsElement.innerHTML = "";
    nextButton.disabled = true;

    q.options.forEach((option, index) => {
        let button = document.createElement("button");
        button.textContent = option;
        button.onclick = () => checkAnswer(index, button);
        optionsElement.appendChild(button);
    });
}

function checkAnswer(index, button) {
    let correctIndex = questions[currentQuestionIndex].correct;
    let buttons = document.querySelectorAll("#options button");

    if (index === correctIndex) {
        button.classList.add("correct");
        correctSound.play();
        score++;
    } else {
        button.classList.add("incorrect");
        buttons[correctIndex].classList.add("correct");
        incorrectSound.play();
    }

    buttons.forEach(btn => btn.disabled = true);
    nextButton.disabled = false;
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    currentQuestionIndex < questions.length ? loadQuestion() : scoreElement.textContent = `Puntuación: ${score} / ${questions.length}`;
});

loadQuestion();

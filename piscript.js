async function loadQuestions() {
    const response = await fetch('pisquestions.csv');
    const data = await response.text();
    const rows = data.trim().split('\n'); 

    if (rows.length < 2) {
        console.error("No questions found in CSV!");
        return [];
    }

    return rows.slice(1).map(row => {
        const columns = row.split('@');

        // Ensure there are at least 6 columns (1 question, 4 options, 1 correct answer)
        if (columns.length < 6) {
            console.warn("Skipping malformed row:", row);
            return null;
        }

        return {
            question: columns[0],
            answers: columns.slice(1, 5).map(option => ({
                text: option,
                correct: option === columns[5] // Compare answer to correct column
            }))
        };
    }).filter(q => q !== null); // Remove any malformed questions
}

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let questions = [];
let currentQuestionIndex = 0;

async function startQuiz() {
    questions = await loadQuestions();
    if (questions.length === 0) {
        alert("No valid questions found!");
        return;
    }

    currentQuestionIndex = 0;
    nextButton.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    questionElement.innerText = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerText = answer.text;
        button.classList.add("btn");
        if (answer.correct) {
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
        answerButtons.appendChild(button);
    });
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedButton = e.target;
    const correct = selectedButton.dataset.correct === "true";
    selectedButton.classList.add(correct ? "correct" : "wrong");

    Array.from(answerButtons.children).forEach(button => {
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });

    nextButton.style.display = "block";
}

nextButton.addEventListener("click", () => {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        alert("Quiz completed!");
        startQuiz();
    }
});

startQuiz();


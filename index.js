'use strict';

const DATA = [
    {
        number: 1,
        question: `What is the largest living shark?`,
        answers: [
            `Greenland Shark`,
            `Great White Shark`,
            `Whale Shark`,
            `Mark Cuban`
        ],
        correct: `Whale Shark`
    },
    {
        number: 2,
        question: `What is the terminology for baby sharks?`,
        answers: [
            `Breakfast`,
            `Hatchlings`,
            `Calves`,
            `Pups`
        ],
        correct: `Pups`
    },
    {
        number: 3,
        question: `Which species of shark was recently discovered to be able to eat and digest seagrass?`,
        answers: [
            `Zebra Shark`,
            `Bonnethead Shark`,
            `Vegan Shark`,
            `Basking Shark`
        ],
        correct: `Bonnethead Shark`
    },
    {
        number: 4,
        question: `What distinguishes sharks from all other fish?`,
        answers: [
            `Cartilaginous skeletons`,
            `They have more Instagram followers, on average`,
            `Longer lifespan`,
            `More gills`
        ],
        correct: `Cartilaginous skeletons`
    },
    {
        number: 5,
        question: `What does the hammerhead shark use its hammer-shaped head for?`,
        answers: [
            `Echolocation`,
            `Trapping prey`,
            `Mating rituals`,
            `Underwater carpentry`
        ],
        correct: `Trapping prey`
    },
    {
        number: 6,
        question: `How many species of shark have been discovered?`,
        answers: [
            `None. Sharks are mythical.`,
            `0-300`,
            `300-600`,
            `Over 600`
        ],
        correct: `300-600`
    },
    {
        number: 7,
        question: `What is the longest measured lifespan of the Greenland Shark?`,
        answers: [
            `124 years`,
            `372 years`,
            `512 years`,
            `Over 9,000`
        ],
        correct: `512 years`
    },
    {
        number: 8,
        question: `Besides the aptly-named River Shark, which other shark species can survive outside of saltwater?`,
        answers: [
            `Bull Shark`,
            `Lemon Shark`,
            `Loan Shark`,
            `Goblin Shark`
        ],
        correct: `Bull Shark`
    },
    {
        number: 9,
        question: `Which species of shark has the largest teeth in proportion to its body size?`,
        answers: [
            `Great White Shark`,
            `Blacktip Reef Shark`,
            `Left Shark`,
            `Cookiecutter Shark`
        ],
        correct: `Cookiecutter Shark`
    },
    {
        number: 10,
        question: `The Ampullae of Lorenzini are special sensory cells on a shark's nose that detect:`,
        answers: [
            `Blood`,
            `Electromagnetic fields`,
            `Bad fashion`,
            `Sound waves`
        ],
        correct: `Electromagnetic fields`
    }
];

let questionNumber = 0;
let userScore = 0;

function renderNextQuestion(){
    changeQuestionNumber();
    $('.quizBody').html(renderQuestion());
}

function renderQuestion() {
    return `
    <form id="quiz-question-page" class="js-quiz-window col-9">
        <div class="js-progress">
            <span class="js-quiz-progress">Question: ${questionNumber} / ${DATA.length}</span>
            <span class="js-quiz-score">Your Score: ${userScore} / ${questionNumber}</span>
        </div>
        <fieldset class="fieldsetClass">
            <legend><h2 class="quiz-question">${DATA[questionNumber - 1].question}</h2></legend>
            <label class="js-label" for="A">
                <input type="radio" id="A" name="answer" required>
                <span class="js-answer-option">${DATA[questionNumber - 1].answers[0]}</span>
            </label>
            <label class="js-label" for="B">
                <input type="radio" id="B" name="answer" required>
                <span class="js-answer-option">${DATA[questionNumber - 1].answers[1]}</span>
            </label>
            <label class="js-label" for="C">
                <input type="radio" id="C" name="answer" required>
                <span class="js-answer-option">${DATA[questionNumber - 1].answers[2]}</span>
            </label>
            <label class="js-label" for="D">
                <input type="radio" id="D" name="answer" required>
                <span class="js-answer-option">${DATA[questionNumber - 1].answers[3]}</span>
            </label>
            <button class="button js-submit-button">Submit</button>
        </fieldset>
    </form>

    <section class="shark-buddy">
        <img src="img/shark-buddy.png" alt="Henry The Shark">
    </section>
    `;
}

function checkUserAnswer() {
    let correctAnswer = DATA[questionNumber - 1].correct;
    let selectedAnswer = $('input[type="radio"]:checked').siblings('span').text();
    if (selectedAnswer === correctAnswer) {
        updateScore();
        renderCorrectTemplate();
    } else {
        renderIncorrectTemplate();
    }
}

function renderCorrectTemplate() {
    $('.quizBody').html(`
    <section class="js-quiz-window col-9">
        <div class="js-progress">
            <span class="js-quiz-progress">Question: ${questionNumber} / ${DATA.length}</span>
            <span class="js-quiz-score">Your Score: ${userScore} / ${questionNumber}</span>
        </div>
        <section class="js-feedback correct">
            <div class="js-correct-answer">
                <img src="img/correct.jpeg" alt="shark diver high five">
                <h2 class="quiz-feedback">Correct!</h2>
            </div>
            <button class="button js-next-button">Next Question</button>
        </section>
    </section>

    <section class="shark-buddy">
        <img src="img/shark-buddy.png" alt="Henry The Shark">
    </section>
    `);
}

function renderIncorrectTemplate() {
    $('.quizBody').html(`
    <section class="js-quiz-window col-9">
        <div class="js-progress">
            <span class="js-quiz-progress">Question: ${questionNumber} / ${DATA.length}</span>
            <span class="js-quiz-score">Your Score: ${userScore} / ${questionNumber}</span>
        </div>
        <section class="js-feedback incorrect">
            <div class="js-correct-answer">
                <img src="img/incorrect.gif" alt="Great White Shark Biting">
                <h2 class="quiz-feedback">Incorrect!</h2>
                <p>The correct answer is: <b>${DATA[questionNumber - 1].correct}</b></p>
            </div>
            <button class="button js-next-button">Next Question</button>
        </section>
    </section>

    <section class="shark-buddy">
        <img src="img/shark-buddy.png" alt="Henry The Shark">
    </section>
    `);
}

function renderResultsPage() {
    let finalScore = handleFinalPercentage();
    let resultsTemplate = `
    <section class="js-quiz-window col-9">
        <header><h1>End of Quiz!</h1></header>
        <section class="js-feedback">
            <div class="js-results-page">
                <p>You answered <b>${userScore}</b> questions correctly!</p>
                <h3 class="js-quiz-percentage">${finalScore}%</h3>
            </div>
            <button class="button js-restart-quiz">Restart Quiz</button>
        </section>
    </section>

    <section class="shark-buddy">
        <img src="img/shark-buddy.png" alt="Henry The Shark">
    </section>
    `;
    $('.quizBody').html(resultsTemplate);
}


// BUTTONS
function handleStartButton() {
    $('.js-quiz-window').on('click', '.js-start-quiz', function() {
        event.preventDefault();
        renderNextQuestion();
    });
}

function handleSubmitButton(answerChoice) {
    $('.quizBody').on('submit', '#quiz-question-page', function(event) {
        event.preventDefault();
        checkUserAnswer(answerChoice);
    });
}

function handleNextButton() {
    $('.quizBody').on('click', '.js-next-button', function(event) {
        event.preventDefault();
        if (questionNumber === DATA.length) {
            renderResultsPage();
        } else {
            renderNextQuestion();
        }
    });
}

function handleRestartButton() {
    $('.quizBody').on('click', '.js-restart-quiz', function(event) {
        location.reload();
    });
}


// ITERATORS
function changeQuestionNumber() {
    questionNumber++;
}

function updateScore() {
    userScore++;
}

function handleFinalPercentage() {
    let finalPercentage = Math.floor((userScore / DATA.length) * 100);
    return finalPercentage;
}




function renderQuiz() {
    handleStartButton();
    handleSubmitButton();
    handleNextButton();
    handleRestartButton();
}

$(renderQuiz);
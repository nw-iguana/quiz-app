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

// change question number
function changeQuestionNumber() {
    questionNumber++;
}

// calculate score so far
function updateScore() {
    userScore++;
}

// start quiz and render question template
function handleStartButton() {
    $('.js-quiz-window').on('click', '.js-start-quiz', function() {
        event.preventDefault();
        renderNextQuestion();
    });
}

// render the question
function renderNextQuestion(){
    changeQuestionNumber();
    $('.quizBody').html(renderQuestion());
}

// question template
function renderQuestion() {
    // console.log('current question: ', DATA[questionNumber - 1]);
    return `
    <form id="quiz-question-page" class="js-quiz-window col-8">
        <div class="progress">
            <span class="js-quiz-progress">Question ${questionNumber} / ${DATA.length}</span>
            <span class="js-quiz-score">Your Score: ${userScore} / ${questionNumber} correct</span>
        </div>
        <fieldset class="fieldsetClass">
            <legend><h2>${DATA[questionNumber - 1].question}</h2></legend>
            <label for="radio">
                <input type="radio" name="answer" required>
                    <span class="js-answer-option">${DATA[questionNumber - 1].answers[0]}</span>
                </input>
            </label>
            <label for="radio">
                <input type="radio" name="answer" required>
                    <span class="js-answer-option">${DATA[questionNumber - 1].answers[1]}</span>
                </input>
            </label>
            <label for="radio">
                <input type="radio" name="answer" required>
                    <span class="js-answer-option">${DATA[questionNumber - 1].answers[2]}</span>
                </input>
            </label>
            <label for="radio">
                <input type="radio" name="answer" required>
                    <span class="js-answer-option">${DATA[questionNumber - 1].answers[3]}</span>
                </input>
            </label>
            <button class="button js-submit-button">Submit</button>
        </fieldset>
    </form>
    `;
}

// submit answer
function handleSubmitAnswer(answerChoice) {
    $('.quizBody').on('submit', '#quiz-question-page', function(event) {
        event.preventDefault();
        checkUserAnswer(answerChoice);
    });
}

// see if correct/incorrect
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

// render template for if answer is correct
function renderCorrectTemplate() {
    $('.quizBody').html(`
    <section method="post" id="quiz-question-correct" class="js-quiz-window col-8">
        <div class="js-progress">
            <span class="js-quiz-progress">Question ${questionNumber} / ${DATA.length}</span>
            <span class="js-quiz-score">Your Score: ${userScore} / ${questionNumber} correct</span>
        </div>
        <section class="js-feedback correct">
            <h2>Correct!</h2>
            <button class="button js-next-button">Next Question</button>
        </section>
    </section>
    `);
}

// render template for if answer is incorrect
function renderIncorrectTemplate() {
    $('.quizBody').html(`
    <section method="post" id="quiz-question-incorrect" class="js-quiz-window col-8">
        <div class="js-progress">
            <span class="js-quiz-progress">Question ${questionNumber} / ${DATA.length}</span>
            <span class="js-quiz-score">Your Score: ${userScore} / ${questionNumber} correct</span>
        </div>
        <section class="js-feedback incorrect">
            <h2>Incorrect!</h2>
            <div class="js-correct-answer">
                <p>The correct answer is: <b>${DATA[questionNumber - 1].correct}</b></p>
            </div>
            <button class="button js-next-button">Next Question</button>
        </section>
    </section>
    `);
}

// render next question
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

// calculate final score
function handleFinalPercentage() {
    let finalPercentage = Math.floor((userScore / DATA.length) * 100);
    return finalPercentage;
}

// render results page (displaying final score)
function renderResultsPage() {
    let finalScore = handleFinalPercentage();
    let resultsTemplate = `
    <section method="post" id="quiz-end" class="js-quiz-window col-8">
        <section class="js-feedback">
            <h2>End of Quiz!</h2>
            <div class="js-results-page">
                <p>Your score is: <b>${userScore}</b></p>
                <h3 class="js-quiz-percentage">${finalScore}%</h3>
            </div>
            <button class="button js-restart-quiz">Restart Quiz</button>
        </section>
    </section>
    `;
    $('.quizBody').html(resultsTemplate);
}

// reload the page to restart quiz
function handleQuizRestart() {
    $('.quizBody').on('click', '.js-restart-quiz', function(event) {
        location.reload();
    });
}

function renderQuiz() {
    handleStartButton();
    handleSubmitAnswer();
    handleNextButton();
    handleQuizRestart();
}

$(renderQuiz);
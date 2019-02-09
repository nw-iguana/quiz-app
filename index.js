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

let questionNumber = 1;
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
function startButton() {
    $('.quiz-window').on('click', '.start-quiz', function() {
        event.preventDefault();
        renderNextQuestion();
    });
}

// renders question template
function renderQuestion() {
    return `
    <form id="quiz-question-page" class="quiz-window col-8">
        <div class="progress">
            <span class="quiz-progress">Question ${questionNumber} / 10</span>
            <span class="score">Your Score: 0 / 1 correct</span>
        </div>
        <fieldset class="fieldsetClass">
            <legend><h2>${DATA[questionNumber - 1].question}</h2></legend>
                <label for="radio">
                    <input type="radio" name="answer">
                    <span>${DATA[questionNumber - 1].answers[0]}</span>
                    </input>
                </label>
                <label for="radio">
                    <input type="radio" name="answer">
                    <span>${DATA[questionNumber - 1].answers[1]}</span>
                    </input>
                </label>
                <label for="radio">
                    <input type="radio" name="answer">
                    <span>${DATA[questionNumber - 1].answers[2]}</span>
                    </input>
                </label>
                <label for="radio">
                    <input type="radio" name="answer">
                    <span>${DATA[questionNumber - 1].answers[3]}</span>
                    </input>
                </label>
            <button class="button submit-button">Submit</button>
        </fieldset>
    </form>
    `;
}

// render the question
function renderNextQuestion(){
    $('.quizBody').html(renderQuestion());
}

// submit answer
function submitAnswer() {
    $('.quizBody').on('submit', '#quiz-question-page', function(event) {
        event.preventDefault();
        let selectedAnswer = $('input:checked').val();
        console.log(selectedAnswer);
        checkUserAnswer(selectedAnswer);
    });
}

// see if correct/incorrect
function checkUserAnswer(argument) {
    let correctAnswer = DATA[questionNumber - 1].correct;
    if (argument === correctAnswer) {
        renderCorrectTemplate();
    } else {
        renderIncorrectTemplate();
    }
}

// render template for if answer is correct
function renderCorrectTemplate() {
    $('.quizBody').html(`
    <section method="post" id="quiz-question-correct" class="quiz-window col-8">
        <div class="progress">
            <span class="quiz-progress">Question ${questionNumber} out of 10</span>
            <span class="score">Your Score: ${userScore} out of ${questionNumber} correct</span>
        </div>
        <section class="feedback correct">
            <h2>Correct!</h2>
            <button class="button next-button">Next Question</button>
        </section>
    </section>
    `);
}

// render template for if answer is incorrect
function renderIncorrectTemplate() {
    $('.quizBody').html(`
    <section method="post" id="quiz-question-incorrect" class="quiz-window col-8">
        <div class="progress">
            <span class="quiz-progress">Question ${questionNumber} out of 10</span>
            <span class="score">Your Score: ${userScore} out of ${questionNumber} correct</span>
        </div>
        <section class="feedback incorrect">
            <h2>Incorrect!</h2>
            <div class="correct-answer">
                <p>The correct answer is: <b>${DATA[questionNumber - 1].correct}</b></p>
            </div>
            <button class="button next-button">Next Question</button>
        </section>
    </section>
    `);
}


// render next question


// calculate final score


// render results page (displaying final score)


// reload the page to restart quiz


function renderQuiz() {
    startButton();
    submitAnswer();
}

$(renderQuiz);
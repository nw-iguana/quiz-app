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

// render quiz - question template
function startButton() {
    $('.quiz-window').on('click', 'button', function() {
        event.preventDefault();
        renderQuestion();
    });
}

function renderQuestion() {
    return `
    <form method="post" id="quiz-question-page" class="quiz-window col-8">
            <div class="progress">
                <span class="quiz-progress">Question 0 / 10</span>
                <span class="score">Your Score: 0 / 1 correct</span>
            </div>
            <fieldset>
                <legend><h2>${DATA.question}</h2></legend>
                    <label for="radio">
                        <input type="radio" name="radio" id="radio">
                        ${DATA.answers[0]}
                    </label>
                    <label for="radio">
                        <input type="radio" name="radio" id="radio">
                        ${DATA.answers[1]}
                    </label>
                    <label for="radio">
                        <input type="radio" name="radio" id="radio">
                        ${DATA.answers[2]}
                    </label>
                    <label for="radio">
                        <input type="radio" name="radio" id="radio">
                        ${DATA.answers[3]}
                    </label>
                <button class="button submit-button">Submit</button>
            </fieldset>
        </form>
    `;
}

function renderQuiz() {
    startButton();
    renderQuestion();
}

$(renderQuiz);

// set question number

// submit answer

// see if correct/incorrect
// calculate score so far

// render feedback template (correct/incorrect template)

// render next question
// increment question number

// calculate final score

// render results page (displaying final score)

// reload the page to restart quiz
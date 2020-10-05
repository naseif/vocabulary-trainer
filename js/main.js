let questionsAndAnswers = [
    {
        question: "Who is Donald Trump?",
        answer1: "A moron.",
        answer2: "A figure from a comic book.",
        answer3: "Its Bob.",
        rightAnswer: 1
    },
    {
        question: "Is javascript a programming language?",
        answer1: "Mmmh.",
        answer2: "Yes.",
        answer3: "What? What?",
        rightAnswer: 2
    },
    {
        question: "What is three in german?",
        answer1: "Eins",
        answer2: "Zwei",
        answer3: "Drei",
        rightAnswer: 3
    }
];

// declaring variables for HTML IDs

let choice1label = document.getElementById("choice1Label");
let choice2label = document.getElementById("choice2Label");
let choice3label = document.getElementById("choice3Label");
let choice1 = document.getElementById("choice1");
let choice2 = document.getElementById("choice2");
let choice3 = document.getElementById("choice3");
let mainquestion = document.getElementById("mainquestion");

// Currently selected question

let activeQuestion = 0;
let checkButton = document.getElementById("checkbutt")
checkButton = document.getElementById("checkbutt").addEventListener("click", questionProgress);

// changing the content of the html ids

mainquestion.innerText = questionsAndAnswers[activeQuestion].question;
choice1Label.innerText = questionsAndAnswers[activeQuestion].answer1;
choice2Label.innerText = questionsAndAnswers[activeQuestion].answer2;
choice3Label.innerText = questionsAndAnswers[activeQuestion].answer3;


function nextQuestion() {
    activeQuestion += 1;

    if ( activeQuestion > questionsAndAnswers.length-1 ) {
        activeQuestion = 0;
    }
}

function wrongAnswerMsg() {
    alert("Thats Wrong, Please try again!")
}

function fillTheChoices() {
    mainquestion.innerText = questionsAndAnswers[activeQuestion].question;
    choice1Label.innerText = questionsAndAnswers[activeQuestion].answer1;
    choice2Label.innerText = questionsAndAnswers[activeQuestion].answer2;
    choice3Label.innerText = questionsAndAnswers[activeQuestion].answer3;
}

function questionProgress() {
    if (choice1.checked && questionsAndAnswers[activeQuestion].rightAnswer === 1) {
        alert("You got the right answer!")
        nextQuestion();
        fillTheChoices();
        return;
    } else if (choice2.checked && questionsAndAnswers[activeQuestion].rightAnswer === 2) {
        alert("You got the right answer!")
        nextQuestion();
        fillTheChoices()
        return;
    } else if (choice3.checked && questionsAndAnswers[activeQuestion].rightAnswer === 3) {
        alert("You got the right answer!")
        nextQuestion();
        fillTheChoices();
        return;
    }
}
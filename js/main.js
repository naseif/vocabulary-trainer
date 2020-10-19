let questionsAndAnswers = [
    {
        questionType: "SingleChoice",
        question: "Who is Donald Trump?",
        answer1: "A moron.",
        answer2: "A figure from a comic book.",
        answer3: "Its Bob.",
        rightAnswer: 1
    },
    {
        questionType: "SingleChoice",
        question: "Is javascript a programming language?",
        answer1: "Mmmh.",
        answer2: "Yes.",
        answer3: "What? What?",
        rightAnswer: 2
    },
    {
        questionType: "SingleChoice",
        question: "What is three in german?",
        answer1: "Eins",
        answer2: "Zwei",
        answer3: "Drei",
        rightAnswer: 3
    },
    {
        questionType: "MultipleChoice",
        question: "Welche Buchstaben kommen in HTML vor?",
        answers: [
            { answer: "H", isRight: true },
              { answer: "T", isRight: true },
            { answer: "A", isRight: false }
        ]
    }
];


let mainquestion = document.getElementById("mainquestion");
let activeQuestion = 0;
let checkButton = document.getElementById("checkbutt")
checkButton = document.getElementById("checkbutt").addEventListener("click", questionProgress);

// Single Choice
function SingleChoiceQuestionType() {
    let api = {};

    let choice1label = document.getElementById("choice1Label");
    let choice2label = document.getElementById("choice2Label");
    let choice3label = document.getElementById("choice3Label");
    let choice1 = document.getElementById("choice1");
    let choice2 = document.getElementById("choice2");
    let choice3 = document.getElementById("choice3");

    api.showOrHideForm = function(question) {
        if ( question.questionType === "SingleChoice" ) {
            $("#singleChoiceForm").show();
        } else {
            $("#singleChoiceForm").hide();
        }
    }

    /* Here we fill the html elements with all the good stuff. */
    api.fillTheChoices = function(question) {
        choice1Label.innerText = question.answer1;
        choice2Label.innerText = question.answer2;
        choice3Label.innerText = question.answer3;
    }

    api.isCorrectlyAnswered = function(question) {
        if (choice1.checked && question.rightAnswer === 1) {
            return true;
        } else if (choice2.checked && question.rightAnswer === 2) {
            return true;
        } else if (choice3.checked && question.rightAnswer === 3) {
            return true;
        } else {
            return false;
        }
    }

    return api;
}

function MultipleChoiceQuestionType() {
    let api = {};

    api.showOrHideForm = function(question) {
        if ( question.questionType === "MultipleChoice" ) {
            $("#multipleChoiceForm").show();
        } else {
            $("#multipleChoiceForm").hide();
        }
    }

    api.fillTheChoices = function(question) {
        // ui needs the data
        mcfChoice1Label.innerText = question.answers[0].answer;
        mcfChoice2Label.innerText = question.answers[1].answer;
        mcfChoice3Label.innerText = question.answers[2].answer;
    }

    api.isCorrectlyAnswered = function(question) {
        if ( mcfChoice1.checked != question.answers[0].isRight ) {
            return false;
        } 

        if ( mcfChoice2.checked != question.answers[1].isRight ) {
            return false;
        } 

        if ( mcfChoice3.checked != question.answers[2].isRight ) {
            return false;
        } 

        return true;
    }

    return api;
}

// changing the content of the html ids

fillTheChoices();

function nextQuestion() {
    activeQuestion += 1;

    if (activeQuestion > questionsAndAnswers.length - 1) {
        activeQuestion = 0;
    }
}

function wrongAnswerMsg() {
    alert("Thats Wrong, Please try again!")
}

function ActivateTheUiThatMatchesTheQuestionTypeOfTheCurrentQuestion() {
    let questionTypes = [SingleChoiceQuestionType(),  MultipleChoiceQuestionType()];
    let question = questionsAndAnswers[activeQuestion];

    for (let i = 0; i < questionTypes.length; i++) {
        questionTypes[i].showOrHideForm(question);
    }
}

function GetQuestionType(questionTypeName) {
    if ( questionTypeName === "SingleChoice" )
    {
        return SingleChoiceQuestionType();
    }

    if ( questionTypeName === "MultipleChoice" ) 
    {
        return MultipleChoiceQuestionType();
    }
}

function fillTheChoices() {
    ActivateTheUiThatMatchesTheQuestionTypeOfTheCurrentQuestion();
    mainquestion.innerText = questionsAndAnswers[activeQuestion].question;

    let question = questionsAndAnswers[activeQuestion];
    let questionType = GetQuestionType(questionsAndAnswers[activeQuestion].questionType);

    questionType.fillTheChoices(question);
}

function questionProgress() {
    let question = questionsAndAnswers[activeQuestion];
    let questionType = GetQuestionType(questionsAndAnswers[activeQuestion].questionType);

    if (questionType.isCorrectlyAnswered(question)) {
        alert("You got the right answer!")
        nextQuestion();
        fillTheChoices();
    } else {
        wrongAnswerMsg();
    }
}
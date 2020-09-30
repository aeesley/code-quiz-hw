// PSEUDO CODE
/* 
Declare global variables, could include = 
Page opens main container that holds header, text, and start quiz option.   High scores and timer are visible at top left and top right respectively. Toggle logic would give user an option to start quiz. The toggle would trigger both the start of the quiz and the timer.

2. Quiz timer starts (setInterval function)
3. Declare object array with questions, answers, and correct answer

setInterval(someFunction, seconds*1000)
someFunction() {EVERYTHING}
   
*/

// Variables
const timeEl = document.querySelector(".time"); 
const mainEl = document.getElementById("main"); 

const quizContainer = document.querySelector("#quiz");
const resultsContainer = document.querySelector("#results");
const submitButton = document.querySelector("#submit");
var output = [];

// Defining quiz questions and answers
const myQuestions = [
    {
        question: "Who is the original OG of the OC?",
        answers: {
            a: "Vickie Gunvalson",
            b: "Tamara Barney",
            c: "Kelly Ripa",
            d: "Ramona Singer",
        },
        correctAnswer: "a"
    },
    {
        question: "Who infamously flipped a dinner table?",
        answers: {
        a: "Vickie Gunvalson",
        b: "Cynthia Bailey",
        c: "Theresa Giudice",
        d: "Andy Cohen",
        },
        correctAnswer: "c"
    },
    {
        question: "Which Real Housewives franchise only received 1 season?",
        answers: {
        a: "Orange County",
        b: "Washington DC",
        c: "Miami",
        d: "Chicago",
        },
        correctAnswer: "b"
    },
    {
        question: "Who has the longest running divorce on any franchise?",
        answers: {
        a: "Alexis Bellino",
        b: "Taylor Armstrong",
        c: "Ramona Singer",
        d: "Bethenny Frankel",
        },
        correctAnswer: "d"
    },
]

console.log(myQuestions); // this functions but it's coming back as an object

// Functions

function buildQuiz(){
    //storing answers
    var output = [];
    var answers;

    //by using for loops
    for (var i=0; i<myQuestions.length; i++){
        answers = [];
        for (letter in myQuestions[i].answers) {
            //radio button in html
            answers.push(
                `<label>`
                + `<input type="radio" name="question"` + i + `"value="` + letter + '">'
                + letter + ': '
                + myQuestions[i].answers[letter]
                +'</label>'
            );
        }
        // add to the q&a results
        output.push(
            '<div class="question">' + myQuestions[i].question + '</div>'
            + '<div class="answers">' + answers.join('') + '</div>'
        );
    }

    // join to HTML
    quizContainer.innerHTML = output.join('');
}

function showResults(){
    //collect answers
    var answerContainers = quizContainer.querySelectorAll('.answers');

    //count wrong answers
    var userAnswer = '';
    var numCorrect = 0;

    for (var i=0; i<myQuestions.length; i++){
        userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

        // if else loop, changing answer colors based on correct/incorrect
        if (userAnswer === myQuestions[i].correctAnswer){

            numCorrect++;
            answerContainers[i].style.color = 'lightgreen';
        }
        else {
            answerContainers[i].style.color = 'red';
        }
    }
    // show correct answers out of total
    resultsContainer.innerHTML = numCorrect + ' out of ' + myQuestions.length;
}

// Start Quiz
buildQuiz(); //display quiz right away

//Event Listeners
submitButton.addEventListener('click', showResults);

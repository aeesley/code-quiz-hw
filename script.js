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
        answers: ['Vickie Gunvalson', 'Tamara Barney', 'Kelly Ripa', 'Ramona Singer'],
        correctAnswer: '0'
    },
    {
        question: "Who infamously flipped a dinner table?",
        answers: ['Vickie Gunvalson', 'Cynthia Bailey', 'Theresa Giudice', 'Andy Cohen'], 
        correctAnswer: '2'
    },
    {
        question: "Which Real Housewives franchise only received 1 season?",
        answers: ['Orange County', 'Washington DC', 'Miami', 'Chicago'],
        correctAnswer: '1'
    },
    {
        question: "Who has the longest running divorce on any franchise?",
        answers: ['Alexis Bellino', 'Taylor Armstrong', 'Ramona Singer', 'Bethenny Frankel'],
        correctAnswer: '3'
    },
]

// Timer Functionality

var secondsLeft = 75; // defining totall time alloted to user taking quiz

function setTime() {
    var timerInterval = setInterval(function() {
        secondsLeft--; //shows that time will decrease
        timeEl.textContent = secondsLeft + " seconds left!"; // shows message that will display on page with time counting down

        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("Time is up! GAME OVER!") // shows that when second countdown reaches zero, a message will show that game is over
        }
    }, 1000); // denotes that time will decrease by one second at a time
    
}


// Other Functions

function buildQuiz(){
    setTime(); 
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
            `<div class="slide">`
                + '<div class="question">' + myQuestions[i].question + '</div>'
                + '<div class="answers">' + answers.join('') + '</div>'
            `</div>`
        );
    }

    // join to HTML
    quizContainer.innerHTML = output.join('');
}

function showResults() {
    //collect answers
    var answerContainers = quizContainer.querySelectorAll('.answers');

    //count wrong answers
    // var userAnswer = '';
    // var numCorrect = 0;

    // for (var i=0; i<myQuestions.length; i++){
    //     userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

    // keep track of answers
    let numCorrect = 0;

    myQuestions.forEach((currentQuestion, questionNumber) => {

        var answerContainer = answerContainers[questionNumber];
        var selector = `input[name=questions${questionNumber}]:checked`;
        var userAnswer = (answerContainer.querySelector(selector) || {}).value;

        // if else loop, changing answer colors based on correct/incorrect
        if (userAnswer === currentQuestion.correctAnswer) {

            numCorrect++;
            answerContainers[questionNumber].style.color = 'green';
        }
        else {
            answerContainers[questionNumber].style.color = 'red';
        }
    });
    // show correct answers out of total
    resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
}

// Start Quiz
buildQuiz(); //display quiz right away

//Event Listeners
submitButton.addEventListener('click', showResults);



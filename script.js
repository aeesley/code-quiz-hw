// PSEUDO CODE
/* 
Declare global variables, could include = 
Page opens main container that holds header, text, and start quiz option.   High scores and timer are visible at top left and top right respectively. Toggle logic would give user an option to start quiz. The toggle would trigger both the start of the quiz and the timer.

2. Quiz timer starts (setInterval function)
3. Declare object array with questions, answers, and correct answer

setInterval(someFunction, seconds*1000)
someFunction() {EVERYTHING}
   
*/


// Timer Functionality
const timeEl = document.querySelector(".time"); 
const mainEl = document.getElementById("main"); 

var secondsLeft = 30; // defining totall time alloted to user taking quiz

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


function Quiz(questions) {
    this.score = 0;
    this.questions = questions;
    this.questionIndex = 0;
}
 
Quiz.prototype.getQuestionIndex = function() {
    return this.questions[this.questionIndex];
}
 
Quiz.prototype.guess = function(answer) {
    if(this.getQuestionIndex().isCorrectAnswer(answer)) {
        this.score++;
    }
 
    this.questionIndex++;
}
 
Quiz.prototype.isEnded = function() {
    return this.questionIndex === this.questions.length;
}
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
setTime();
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // show question
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // show options
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
 
        showProgress();
    }
};
 
function guess(id, guess) {
    var button = document.getElementById(id);
    button.onclick = function() {
        quiz.guess(guess);
        populate();
    }
};
 
 
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
function showScores() {
    var gameOverHTML = "<h1>Result</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;
};
 
// create questions here
var questions = [
    new Question("Who is the original OG of the OC?", ['Vickie Gunvalson', 'Tamara Barney', 'Kelly Ripa', 'Ramona Singer'], "Vickie Gunvalson"),
    new Question("Who infamously flipped a dinner table?", ['Vickie Gunvalson', 'Cynthia Bailey', 'Theresa Giudice', 'Andy Cohen'], "Theresa Giudice"),
    new Question("Which Real Housewives franchise only received 1 season?", ['Orange County', 'Washington DC', 'Miami', 'Chicago'], "Washington DC"),
    new Question("Who has the longest running divorce on any franchise?", ['Alexis Bellino', 'Taylor Armstrong', 'Ramona Singer', 'Bethenny Frankel'], "Bethenny Frankel"),
    new Question("What network does the Real Housewives air on?", ["Style", "TLC", "Oxygen", "Bravo"], "Bravo")
];
 
// create quiz
var quiz = new Quiz(questions);
 
// display quiz
populate();






// Variables


// const quizContainer = document.querySelector("#quiz");
// const resultsContainer = document.querySelector("#results");
// const submitButton = document.querySelector("#submit");

// var output = [];

// //pagination variables
// const previousButton = document.querySelector("#previous");
// const nextButton = document.querySelector("#next");
// const slides = document.querySelectorAll(".slide");
// let currentSlide = 0;


// // // Defining quiz questions and answers
// const myQuestions = [
//     {
//     question: "Who is the original OG of the OC?",
//     answers: {
//         a: "Vickie Gunvalson", 
//         b: "Tamara Barney", 
//         c: "Kelly Ripa", 
//         d: "Ramona Singer",
//         },
//         correctAnswer: "a"
//     },
//     {
//         question: "Who infamously flipped a dinner table?",
//         answers: {
//             a: "Vickie Gunvalson", 
//             b: "Cynthia Bailey", 
//             c: "Theresa Giudice", 
//             d: "Andy Cohen",
//             },
//         correctAnswer: "c"
//     },
//     {
//         question: "Which Real Housewives franchise only received 1 season?",
//         answers: {
//             a: "Orange County", 
//             b: "Washington DC", 
//             c: "Miami", 
//             d: "Chicago",
//             },
//         correctAnswer: "b"
//     },
//     {
//         question: "Who has the longest running divorce on any franchise?",
//         answers: {
//             a: "Alexis Bellino", 
//             b: "Taylor Armstrong", 
//             c: "Ramona Singer", 
//             d: "Bethenny Frankel",
//             },
//         correctAnswer: "d"
//     },

//     // DIFFERENT VERSION QUESTION SETS
//     // {
//     //     question: "Who is the original OG of the OC?",
//     //     choices: ['Vickie Gunvalson', 'Tamara Barney', 'Kelly Ripa', 'Ramona Singer'],
//     //     correctAnswer: '0'
//     // },
//     // {
//     //     question: "Who infamously flipped a dinner table?",
//     //     choices: ['Vickie Gunvalson', 'Cynthia Bailey', 'Theresa Giudice', 'Andy Cohen'], 
//     //     correctAnswer: '2'
//     // },
//     // {
//     //     question: "Which Real Housewives franchise only received 1 season?",
//     //     choices: ['Orange County', 'Washington DC', 'Miami', 'Chicago'],
//     //     correctAnswer: '1'
//     // },
//     // {
//     //     question: "Who has the longest running divorce on any franchise?",
//     //     choices: ['Alexis Bellino', 'Taylor Armstrong', 'Ramona Singer', 'Bethenny Frankel'],
//     //     correctAnswer: '3'
//     // },
// ]



// // Other Functions

// function buildQuiz(){
//     setTime(); 

//     const output = [];

//     // for each question...
//     myQuestions.forEach(
//       (currentQuestion, questionNumber) => {

//         // variable to store the list of possible answers
//         const answers= [];

//         // and for each available answer...
//         for(letter in currentQuestion.answers){

//           // ...add an HTML radio button
//           answers.push(
//             `<label>
//               <input type="radio" name="question${questionNumber}" value="${letter}">
//               ${letter} :
//               ${currentQuestion.answers[letter]}
//             </label>`
//           );
//         }

//         // add this question and its answers to the output
//         output.push(
//           `<div class="slide">
//             <div class="question"> ${currentQuestion.question} </div>
//             <div class="choices"> ${answers.join("")} </div>
//           </div>`
//         );
//       }
//     );
//     //storing answers
//     //         var choices = [];

//     //         for(letter in currentQuestion.choices){

//     //             choices.push(
//     //                 `<label>
//     //                 <input = type="radio" name="questions${question.Number}" value="${letter}">
//     //                 ${letter} :
//     //                 ${currentQuestion.choices[letter]}
//     //                 </label>`
//     //             );
//     //         }
//     //         output.push(
//     //             `<div class="slide">
//     //                 <div class-"question"> ${currentQuestion.question} </div>
//     //                 <div class="answers"> ${choices.join("")} >/div>
//     //                 </div>`
//     //         );
//     //     }
//     // );

//     // join to HTML
//     quizContainer.innerHTML = output.join('');
// }


// function showResults() {
//     //collect answers
//     var answerContainers = quizContainer.querySelectorAll('.answers');

//     //count wrong answers
//     // var userAnswer = '';
//     // var numCorrect = 0;

//     // for (var i=0; i<myQuestions.length; i++){
//     //     userAnswer = (answerContainers[i].querySelector('input[name=question' + i + ']:checked') || {}).value;

//     // keep track of answers
//     let numCorrect = 0;

//     myQuestions.forEach((currentQuestion, questionNumber) => {

//         var answerContainer = answerContainers[questionNumber];
//         var selector = `input[name=questions${questionNumber}]:checked`;
//         var userAnswer = (answerContainer.querySelector(selector) || {}).value;

//         // if else loop, changing answer colors based on correct/incorrect
//         if (userAnswer === currentQuestion.correctAnswer) {

//             numCorrect++;
//             answerContainers[questionNumber].style.color = 'green';
//         }
//         else {
//             answerContainers[questionNumber].style.color = 'red';
//         }
//     });
//     // show correct answers out of total
//     resultsContainer.innerHTML = `${numCorrect} out of ${myQuestions.length}`;
// }

// // Function to get paginations with slides to work
// function showSlide(n){
//     slides[currentSlide].classList.remove('active-slide');
//     slides[n].classList.add('active-slide');
//     currentSlide = n;
//     if(currentSlide === 0){
//         previousButton.style.display = 'none';
//     }
//     else{
//         previousButton.style.display = 'inline=block';
//     }
//     if(currentSlide === slides.length-1){
//         nextButton.style.display = 'none';
//         submitButton.style.display = 'inline-block';
//     }
//     else{
//         nextButton.style.display = 'inline-block';
//         submitButton.style.display = 'none';
//     }
// }

// // Calling the buildQuiz function (Starting the Quiz
// buildQuiz();

// showSlide(currentSlide);

// function showNextSlide(){
//     showSlide(currentSlide + 1);
// }

// function showPreviousSlide(){
//     showSlide(currentSlide - 1);
// }



// //Event Listeners
// submitButton.addEventListener('click', showResults);
// previousButton.addEventListener("click", showPreviousSlide);
// nextButton.addEventListener("click", showNextSlide);


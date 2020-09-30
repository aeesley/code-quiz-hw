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
function showResults(){}

function buildQuiz(){
    // var output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];

            for(letter in currentQuestion.answers){
                answers.push(
                    `<label>
                        <input type="radio" name="questions${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                    </label>`
                );
            }

            output.push(
                `<section class="question"> ${currentQuestion.question} </section>
                <section class="answers"> ${answers.join('')} </section>`
            );
        }
    )
    
    quizContainer.textContent = output.join('');
    
};

localStorage.setItem("myQuestions", JSON.stringify(myQuestions));


// Start Quiz
buildQuiz(); //display quiz right away

//Event Listeners
submitButton.addEventListener('click', showResults);




//TIMER FUNCTIONALITY

// var secondsLeft = 75; // defining totall time alloted to user taking quiz

// function setTime() {
//     var timerInterval = setInterval(function() {
//         secondsLeft--; //shows that time will decrease
//         timeEl.textContent = secondsLeft + " seconds left!"; // shows message that will display on page with time counting down

//         if(secondsLeft === 0) {
//             clearInterval(timerInterval);
//             alert("Time is up! GAME OVER!") // shows that when second countdown reaches zero, a message will show that game is over
//         }
//     }, 1000); // denotes that time will decrease by one second at a time


    
// }

// setTime(); // this is calling the function so the timer actually runs


// JS GOES HERE
// Definying global variables
var timeEl = document.querySelector(".time"); 
var mainEl = document.getElementById("main"); 
var quizContainer = document.getElementsById('quiz');
var resultsContainer = document.getElementById('results');
var submitButton = document.getElementById('submit');

// Defining quiz questions and answers
var myQuestions = [
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

// Creating the build quiz function
function buildQuiz(){
    var output = [];

    myQuestions.forEach(
        (currentQuestion, questionNumber) => {
            const answers = [];
            for(letter in currentQuestion.answers){
                answers.push(
                    <label>
                        <input type="radio" name="questions${questionNumber}" value="${letter}">
                        ${letter} :
                        ${currentQuestion.answers[letter]}
                        </input>
                    </label>
                );
            }
            output.push(
                <section class="question"> ${currentQuestion.question}</section>
                <section class="answers"> ${answers.join('')}</section>
            )
        }
    )
};

quizContainer.innerHTML = output.join('');

function showResults(){

}


buildQuiz(); //display quiz right away

submitButton.addEventListener('click', showResults);





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


// PSEUDO CODE
/* 
1. Timer (setInterval) should start and run around all of the other quiz functions so that the timer is counting down while the user is playing the game. If timer gets to 0 before user finishes questions, alert will say "game over". Get time start by calling setInterval function inside of the quiz function.
2. Create array of objects with quiz questions, answer choices, and correct answer
3. 

Declare global variables, could include = 
Page opens main container that holds header, text, and start quiz option.   High scores and timer are visible at top left and top right respectively. Toggle logic would give user an option to start quiz. The toggle would trigger both the start of the quiz and the timer.

2. Quiz timer starts (setInterval function)
3. Declare object array with questions, answers, and correct answer

setInterval(someFunction, seconds*1000)
someFunction() {EVERYTHING}
   
*/

// Array of objects with each object being a new question with question, answer choices, and correct answer associated with it.
var questions = [
    new Question("Who is the original OG of the OC?", ['Vickie Gunvalson', 'Tamara Barney', 'Kelly Ripa', 'Ramona Singer'], "Vickie Gunvalson"),
    new Question("Who infamously flipped a dinner table?", ['Vickie Gunvalson', 'Cynthia Bailey', 'Theresa Giudice', 'Andy Cohen'], "Theresa Giudice"),
    new Question("Which Real Housewives franchise only received 1 season?", ['Orange County', 'Washington DC', 'Miami', 'Chicago'], "Washington DC"),
    new Question("Who has the longest running divorce on any franchise?", ['Alexis Bellino', 'Taylor Armstrong', 'Ramona Singer', 'Bethenny Frankel'], "Bethenny Frankel"),
    new Question("What network does the Real Housewives air on?", ["Style", "TLC", "Oxygen", "Bravo"], "Bravo")
];

// Timer Functionality
// Timer variables set to location on HTML page where the timer will appear
const timeEl = document.querySelector(".time"); 
const mainEl = document.getElementById("main"); 

// Total time we are alloting to game player (timer starts at 60 seconds)
var secondsLeft = 60; 

// Function using setInterval that will get the timer to display starting with 60 seconds and then decrease by 1 second, every 1 second until it reaches 0. 
function setTime() {
    var timerInterval = setInterval(function() {
        // shows that seconds left will be decreasing
        secondsLeft--;
        // Timer will show up in the timeEl element on the page with seconds left counting down + seconds left in text so the user understands what it means
        timeEl.textContent = secondsLeft + " seconds left!"; 

        // When the timer reaches 0 an alert will say "game over!"
        if(secondsLeft === 0) {
            clearInterval(timerInterval);
            alert("GAME OVER!") 
        }
    }, 1000); // denotes that time will decrease by one second at a time
    
 }
    
 // Score Penalty Logic
// THIS WOULD GO INSIDE THE setTime function
//  if(guess != isCorrectAnswer){
//     scorePenalty();
// }
// THEN WOULD CALL THE setTime function inside the populate function?


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

// Quiz.prototype.isEnded = function() {
//     if (currentQuestionNumber === questions.length) { // atempted to push answers to end.html
//         localStorage.setItem('mostRecentScore', score)
//         return window.location.assign("/end.htlm");
//     }
// }
 
 
function Question(text, choices, answer) {
    this.text = text;
    this.choices = choices;
    this.answer = answer;
}
 
Question.prototype.isCorrectAnswer = function(choice) {
    return this.answer === choice;
}
 
 
function populate() {
// calling timer function to start timer countdown
setTime();
    // when quiz is over, game will show user score
    if(quiz.isEnded()) {
        showScores();
    }
    else {
        // If game is not over (still running), the game will display the questions...
        var element = document.getElementById("question");
        element.innerHTML = quiz.getQuestionIndex().text;
 
        // ... and answer options as buttons. For loop shows it will run through all questions as user answers
        var choices = quiz.getQuestionIndex().choices;
        for(var i = 0; i < choices.length; i++) {
            var element = document.getElementById("choice" + i);
            element.innerHTML = choices[i];
            guess("btn" + i, choices[i]);
        }
        // this is calling the showProgress function to show user how many questions they have answered as they are running through the quiz
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
 
 // function that shows user progress as how many questions they have answered out of total questions as they move through the game
function showProgress() {
    var currentQuestionNumber = quiz.questionIndex + 1;
    var element = document.getElementById("progress");
    element.innerHTML = "Question " + currentQuestionNumber + " of " + quiz.questions.length;
};
 
// function that shows user score once they have completed the game 
// function showScores() {
//     var gameOverHTML = "<h1>Result</h1>";
//     gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
//     var element = document.getElementById("quiz");
//     element.innerHTML = gameOverHTML;
// };

function showScores() {
    var gameOverHTML = "<h1>finalScore</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;

    localStorage.setItem('mostRecentScore', score);

    return window.location.assign("/end.html");
};
 
 
// Defining the variable to create the quiz
var quiz = new Quiz(questions);
 
// Calling the function to populate the quiz so the user can start playing
populate();





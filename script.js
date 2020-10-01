// PSEUDO CODE
/* 
Start page should describe the quiz and give the users an option to start game or view high scores

When user clicks start game, page will go to the game.html and Timer (setInterval) should start and run around all of the other quiz functions so that the timer is counting down while the user is playing the game. If timer gets to 0 before user finishes questions, alert will say "game over". Get time start by calling setInterval function inside of the quiz function.

Create array of objects with quiz questions, answer choices, and correct answer

Call necessary global variables from html pages so correct js can map to the right places.

Write js functions for array of question/answer/correct answer objects getting everything to load on game.html page so that user answers one question at a time and computer also checks and logs their question after each answer so it's keeping score behind the scene.

Function that keeps track of where user is so it displays what number question they are on out of total question

When use completes game it refreshes to end.html with the users score

End.html also gives the user an option to save their score or play again

Save score option ports to highscores.html where the users saved name and score would show up on the page IF their score was high enough to make the list. Give list a max list count of 5 so only the 5 top scores overall show up. If the users score isn't high enough then they don't make the list.*/


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
 
function showScores() {
    var gameOverHTML = "<h1>finalScore</h1>";
    gameOverHTML += "<h2 id='score'> Your scores: " + quiz.score + "</h2>";
    var element = document.getElementById("quiz");
    element.innerHTML = gameOverHTML;

    localStorage.setItem('mostRecentScore', quiz.score); // sending quiz.score to local storage so we can grab it on the end.html page

    return window.location.assign("./end.html"); // this make it refresh and show in the end.html page instead of game.html
};
 
 
// Defining the variable to create the quiz
var quiz = new Quiz(questions);
 
// Calling the function to populate the quiz so the user can start playing
populate();





var timeEl = document.querySelector(".time");
console.log(timeEl);
var startButton = document.querySelector(".start-btn")

var timeLeft = 80;

var quizQuestions = { 
    question:   'Question 1',
    answers: [
        'Answer 1a',
        'Answer 1b',
        'Answer 1c',
        'Answer 1d'
    ],

    question: 'Question 2',
    answers: [
        'Answer 2a',
        'Answer 2b',
        'Answer 2c',
        'Answer 2d'
    ]
};

var quizSection = document.createElement("ul");
var listQnas = document.createElement("li");
var listQuestions = document.createTextNode(quizQuestions.question);
var listAnswers = document.createTextNode(quizQuestions.answers[i])



function startQuiz() {
    var timerInterval = setInterval(function() {
      timeLeft--;
      timeEl.textContent = "Time : " + timeLeft ;
  
      if(timeLeft === 0) {
        clearInterval(timerInterval);
       // sendMessage();
      }
  
    }, 1000);

    

    //hide button
    //grab section to show questions

    //function to show quiz questions
    //function showQuestions() {

    //}

    console.log(timeLeft);
    console.log(timeEl);
  }

startButton.addEventListener("click", function(){
    startQuiz();
})





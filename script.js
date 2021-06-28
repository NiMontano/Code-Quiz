var timeEl = document.querySelector(".time");
var startButton = document.querySelector(".start-btn")

var timeLeft = 80;

var quizQuestions = { 
    qNas: [
        {
            question:   'Question 1',
            answers: [
                'Answer 1a',
                'Answer 1b',
                'Answer 1c',
                'Answer 1d'
             ],
            correct: 'Answer 1b'
        },

        {             
            question: 'Question 2',
            answers: [
                 'Answer 2a',
                 'Answer 2b',
                 'Answer 2c',
                 'Answer 2d'
                ],
            correct: 'Answer 2d'
            }
        ],
    questionNumber: 0,
    score: 0
};

i = 0;

var qContainer = document.querySelector(".the-question");
var aContainer = document.querySelector(".the-answers");

var liAnswers = document.createElement("li");
var theAnswer = document.getElementsByName("li");
//var listAnswers = document.createTextNode(quizQuestions.answers[i])
var currentQuestion = quizQuestions.qNas[i].question;

var currentAnswers = quizQuestions.qNas[i].answers;
var allQuestions = quizQuestions.qNas;
var correctAnswer = quizQuestions.qNas[i].correct;
var currentScore = quizQuestions.score;
var nextQuestion = quizQuestions.questionNumber;

function startQuiz() {
    var startButton = document.querySelector(".start-btn")
    startButton.style.display = "none";


    var timerInterval = setInterval(function() {
      timeLeft--;
      timeEl.textContent = "Time : " + timeLeft ;
  
      if(timeLeft === 0) {
        clearInterval(timerInterval);
       // sendMessage();
      }
  
    }, 1000);

    showAnswers();
    showQuestion();
};


function showAnswers() {     
    j = 0;

    for ( let j = 0; j < quizQuestions.qNas[i].answers.length; j++) {
        var liAnswers = document.createElement("li");
        liAnswers.className = "ansClass";
        liAnswers.textContent = quizQuestions.qNas[i].answers[j];
        
    
        aContainer.appendChild(liAnswers);
        console.log(currentScore); 
        liAnswers.addEventListener("click",function(){
            if( this.innerHTML !== correctAnswer){
                timeLeft = timeLeft-5;
                i++;
                updateAnswers();
                updateQuestion();
                showQuestion();
                
            }
            else{
                currentScore++;
                i++;
                updateAnswers();
                updateQuestion();
                showQuestion();
            }
        });
    };
}

function updateAnswers(){
    var oldAnswers = document.querySelectorAll(".ansClass")

for (let i = 0; i < oldAnswers.length; i++){
        oldAnswers[i].remove();
    }
    showAnswers();
}


function showQuestion(){
    var liQuestion = document.createElement("li");
    console.log(i);
    console.log(quizQuestions.qNas);
    var currentQuestion = quizQuestions.qNas[i].question;
    liQuestion.className = "questClass";
    liQuestion.innerHTML = currentQuestion;
        
    qContainer.append(liQuestion);
    console.log(currentQuestion);

    
}

function updateQuestion(){
    var selectedAnswer = document.querySelectorAll(".ansClass");

    oldQuestion = document.querySelector(".questClass");

    console.log(liAnswers);

 
    oldQuestion.remove();
}


startButton.addEventListener("click", function(){
    startQuiz();
});

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
            },
        {             
            question: 'Question 3',
            answers: [
                     'Answer 3a',
                     'Answer 3b',
                     'Answer 3c',
                     'Answer 3d'
                    ],
            correct: 'Answer 3d'
            },
        ],
    questionNumber: 0,
    score: 0
};

i = 0;

myStorage = window.localStorage;

var saveForm = document.createElement("form");
   saveForm.setAttribute("method", "post");
   
   var submitName = document.createElement("input");

var timeEl = document.querySelector(".time");
var startButton = document.querySelector(".start-btn");
var scoreEl = document.querySelector(".score");
var timeLeft = 10;

var qContainer = document.querySelector(".the-question");
var aContainer = document.querySelector(".the-answers");
var oldAnswers = document.querySelectorAll(".ansClass")


var liAnswers = document.createElement("li");
var theAnswer = document.getElementsByName("li");
var endMessage = document.createElement("h2");
var endScore = document.createElement("h3");
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
    endMessage.remove();
    endScore.remove();
    console.log(submitName);
    //submitName.setAttribute("type", "hidden");

    
    timeLeft = 10;
    var timerInterval = setInterval(function() {
      timeLeft--;
      timeEl.textContent = "Time : " + timeLeft ;
  
      if(timeLeft <= 0) {
        timeLeft = 0;
        clearInterval(timerInterval);
        endGame();
      }
  
    }, 1000);

    showAnswers();
    showQuestion();
};


function showAnswers() {     
    j = 0;
    
    for ( let j = 0; j < quizQuestions.qNas[i].answers.length; j++) {
        var liAnswers = document.createElement("li");
        var correctAnswer = quizQuestions.qNas[i].correct;

        
        liAnswers.className = "ansClass";
        liAnswers.textContent = quizQuestions.qNas[i].answers[j];
        console.log(i);
        aContainer.appendChild(liAnswers);
        
        liAnswers.addEventListener("click",function(){
                           
            if( this.innerHTML !== correctAnswer){
                timeLeft = timeLeft-5;
                i++;
                console.log(i);
                var oldQuestion = document.querySelector(".questClass")
                console.log(i)
                console.log(oldQuestion);
                oldQuestion.remove();
            
                updateAnswers();
                showQuestion();
            }

            else if (this.innerHTML == correctAnswer){
                currentScore++;
                i++;
                console.log(i);
                var oldQuestion = document.querySelector(".questClass")
                console.log(i)
                console.log(currentScore);
                oldQuestion.remove();
                updateAnswers();
                showQuestion();
            }
        });

    };
}

function showQuestion(){
    var liQuestion = document.createElement("h2");
    showScore();
    var currentQuestion = quizQuestions.qNas[i].question;
    liQuestion.className = "questClass";
    liQuestion.innerHTML = currentQuestion;
    
    qContainer.append(liQuestion);
}

function updateAnswers(){
    var oldAnswers = document.querySelectorAll(".ansClass")
    console.log(i)

for (let i = 0; i < oldAnswers.length; i++){
        oldAnswers[i].remove();
    }
    showAnswers();
}

function updateQuestion(){
    var oldQuestion = document.querySelectorAll(".questClass")
        console.log(i)
        for (let i = 0; i < oldAnswers; i++){
            console.log(oldQuestion);
            oldQuestion[i].remove();
        }
        
        showQuestion();
}

function clearAnswers(){
    var oldAnswers = document.querySelectorAll(".ansClass")

for (let i = 0; i < oldAnswers.length; i++){
        oldAnswers[i].remove();
    }
}

function clearQuestion(){
    oldQuestion = document.querySelector(".questClass");
    console.log(oldQuestion);
    oldQuestion.remove();
}
function showScore(){
    console.log(currentScore);
    scoreEl.textContent = "Score: " + currentScore;
};

function endGame(){

   i = 0; 
   j = 0;

   var saveForm = document.createElement("form");
   //saveForm.setAttribute("method", "post");
   //saveForm.setAttribute("action", "submit.php")
   console.log(saveForm);

   var initials = document.createElement("input");
   initials.setAttribute("type", "text");
   initials.setAttribute("name", "initials");
   initials.setAttribute("placeholder", "Initals");

   var submitName = document.createElement("input");
    submitName.setAttribute("type", "submit");
    //saveForm.setAttribute("onsubmit", "return false");

   //submitName.setAttribute("value", "submit");

   saveForm.append(initials);
   saveForm.append(submitName);
   //ssaveSection.append(saveForm);
   console.log(submitName);

   document.querySelector("main").appendChild(saveForm);


    endMessage.textContent = "Game Over 🎮";
    endScore.textContent = "Total Score: " + currentScore;

    qContainer.append(endMessage);
    qContainer.append(endScore);
    //show section to save name and score

    console.log(currentScore)
    
    submitName.addEventListener("click", function(){
       saveForm.style.display = "none";
       myStorage.setItem(initials.value, currentScore);
        console.log(initials.value);
    })
    

    clearQuestion();
    clearAnswers();
    //console.log(i);
}

startButton.addEventListener("click", function(){
    startQuiz();
    currentScore = 0;

    //submitName.style.display = "none";

});
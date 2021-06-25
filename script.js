var timeEl = document.querySelector(".time");
console.log(timeEl);
var startButton = document.querySelector(".start-btn")

var timeLeft = 80;

function setTime() {
    var timerInterval = setInterval(function() {
      timeLeft--;
      timeEl.textContent = "Time : " + timeLeft ;
  
      if(timeLeft === 0) {
        clearInterval(timerInterval);
       // sendMessage();
      }
  
    }, 1000);
    console.log(timeLeft);
    console.log(timeEl);
  }
  
startButton.addEventListener("click", function(){
    setTime();
})





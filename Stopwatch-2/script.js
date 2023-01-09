var timeDisplay = document.querySelector('#time')
var time = 00; 
var startButton = document.querySelector('#start')
var stopButton = document.querySelector('#stop')
var Interval; 

startButton.onclick = () => {
  clearInterval(Interval); 
  Interval = setInterval(startTimer, 1000); 
}

stopButton.onclick = () => {
  stopTimer(); 
}

function startTimer(){
  appendTime();
}

function stopTimer(){
  clearInterval(Interval); 
}

function appendTime(){
  time++; 
  console.log(time); 
  timeDisplay.innerHTML = time;
}

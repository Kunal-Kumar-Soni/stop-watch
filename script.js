// Get elements from the DOM
const pauseBtn = document.getElementById("pause");
const startBtn = document.getElementById("start");
const resetBtn = document.getElementById("reset");

// Initialize variables
let hours = 0;
let minutes = 0;
let seconds = 0;
let milliseconds = 0;
let timerInterval;

// Function to pause the timer
function pauseTimer() {
  clearInterval(timerInterval);
  timerInterval = null;
}

// Function to start the timer
function startTimer() {
  if (!timerInterval) {
    timerInterval = setInterval(timerUpdate, 10);
  }
}

// Function to reset the timer
function resetTimer() {
  hours = 0;
  minutes = 0;
  seconds = 0;
  milliseconds = 0;
  clearInterval(timerInterval);
  timerInterval = null;
  result();
}

// Function to update the timer
function timerUpdate() {
  milliseconds += 10;
  if (milliseconds >= 1000) {
    milliseconds = 0;
    seconds++;
  }
  if (seconds >= 60) {
    seconds = 0;
    minutes++;
  }
  if (minutes >= 60) {
    minutes = 0;
    hours++;
  }
  result();
}

// Function to display the result
function result() {
  document.getElementById("time").innerText = `${String(hours).padStart(
    2,
    "0"
  )} : ${String(minutes).padStart(2, "0")} : ${String(seconds).padStart(
    2,
    "0"
  )} : ${String(Math.floor(milliseconds / 10)).padStart(2, "0")}`;
}

// Add event listeners to the buttons
pauseBtn.addEventListener("click", pauseTimer);
startBtn.addEventListener("click", startTimer);
resetBtn.addEventListener("click", resetTimer);

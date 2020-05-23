let playButton = document.getElementById("playButton");
let startButton = document.getElementById("startButton");
let replayButton = document.getElementById("replayButton");
let scoreBox = document.getElementById("scoreBox");
let timerBox = document.getElementById("timerBox");
let playButtonClickCounter = 0;
let seconds = 5;
let timerInterval = 0;

//start countdown when click start button and once 0 enables you to click play button set timeout
startButton.addEventListener("click", () => {
    timerInterval = setInterval(timerCountdown, 1000);
});

playButton.addEventListener("click", clicker);

function clicker () {
    playButtonClickCounter += 1;
    updateScoreBox(playButtonClickCounter);
}

function updateScoreBox(score) {
    scoreBox.textContent = "Score: " + playButtonClickCounter;
}

function replayButtonAppear() {
    replayButton.classList.add("replayButtonShow");
    replayButton.classList.remove("replayButtonHide");
}

function timerCountdown() {
    startButton.setAttribute("disabled", true);
    console.log(seconds);
    timerBox.textContent = "Timer: " + seconds;
    seconds--;

    if(seconds < 0) {
        let message = "";
        if (playButtonClickCounter<10 && playButtonClickCounter>=1) {
            message = `Time's up! ${name} You only scored ${playButtonClickCounter} points!`;
        } else if (playButtonClickCounter < 1) {
            message = "Time's up! Oh dear what happened!?! You scored zero!";
        } else {
            message = `Time's up! You're great! You got a score of: ${playButtonClickCounter} points!`;
        }
        playButton.removeEventListener("click", clicker);
        alert(message);
        clearInterval(timerInterval);
        seconds = 0;
        playButtonClickCounter = 0;
        updateScoreBox(playButtonClickCounter);
        replayButtonAppear();
        replayButton.addEventListener("click", ()=> {
            location.reload();
        })
    }
}


//got start as a button tag disabling and clicker as a div tag removing event listener

//grab the input from the name text field
// let name = document.getElementById("nameField").value

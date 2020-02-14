//display a counter for number of times the button is clicked

let playButton = document.getElementById("playButton")

let playButtonClickCounter = 0
let scoreBox = document.getElementById("scoreBox")

function clicker () {
    playButtonClickCounter += 1
    scoreBox.textContent = "Score: " + playButtonClickCounter
}

playButton.addEventListener("click", clicker)

let seconds = 3
let timerInterval = 0

//to stop the timer, declare a variable and put the set interval function in this variable then clear interval on this one
function timerCountdown() {
    timerInterval = setInterval(function() {
        seconds--
        document.getElementById("timerBox").textContent = "Timer: " + seconds
        if(!seconds) {
            if (playButtonClickCounter<10 && playButtonClickCounter>=1) {
                playButton.removeEventListener("click", clicker)
                clearInterval(timerInterval)
                alert("Time's up! Well you're crap at this! You only scored " + playButtonClickCounter + " points!")
            } else if (playButtonClickCounter < 1) {
                playButton.removeEventListener("click", clicker)
                clearInterval(timerInterval)
                alert("Time's up! Oh dear what happened!?! You scored zero!")
            } else {
                playButton.removeEventListener("click", clicker)
                clearInterval(timerInterval)
                alert("Time's up! You're great! You got a score of: " + playButtonClickCounter + " points!")
            }
        }
    }, 1000)
}

timerCountdown()
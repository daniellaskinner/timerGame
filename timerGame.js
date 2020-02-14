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

function timerCountdown() {
    timerInterval = setInterval(function() {
        seconds--
        document.getElementById("timerBox").textContent = "Timer: " + seconds
        if(!seconds) {
            playButton.removeEventListener("click", clicker)
            clearInterval(timerInterval)
            alert("Time's up!" + " You got a score of: " + playButtonClickCounter)

        }
    }, 1000)
}

timerCountdown()














//to stop the timer, declare a variable and put the set interval function in a variable then clear interval on this one
let secondsDisplay = document.getElementById("second")
let minutesDisplay = document.getElementById("minute")
let hoursDisplay = document.getElementById("hour")

let values = document.getElementById("values")

let seconds = 0
let minutes = 0
let hours = 0
let firstSecond = true
function stopWatch(){
    seconds++

    seconds < 10 ? secondsDisplay.innerHTML = "0" + seconds : secondsDisplay.innerHTML = seconds

    if(seconds/60 === 1){
        seconds = 0
        minutes += 1
        
        minutes < 10 ? minutesDisplay.innerHTML = "0" + minutes : minutesDisplay.innerHTML = minutes

        if(minutes/60 === 1){
        minutes = 0
        hours += 1

        hours < 10 ? hoursDisplay = "0" + hours : hoursDisplay.innerHTML = hours
        }
    }
}

let startStopButton = document.getElementById("startStop")
let resetButton = document.getElementById("reset")

let runningWatch

function playPause(){
    if(startStopButton.value === "Iniciar"){
        startStopButton.value = "Parar"
        startStopButton.classList.remove("start")
        startStopButton.classList.add("stop")

        runningWatch = window.setInterval(stopWatch, 1000)
    }else{
        startStopButton.value = "Iniciar"
        startStopButton.classList.remove("stop")
        startStopButton.classList.add("start")

        window.clearInterval(runningWatch)
    }
}

function toReset(){
    if(seconds > 0){
        seconds = 0
        secondsDisplay.innerHTML = "00"
    }

    if(minutes > 0){
        minutes = 0
        minutesDisplay.innerHTML = "00" 
    }

    if(hours > 0){
        hours = 0
        hoursDisplay.innerHTML = "00"
    }
}

startStopButton.addEventListener("click", playPause)
resetButton.addEventListener("click", toReset)
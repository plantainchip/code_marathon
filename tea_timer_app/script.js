console.log("hello")

let currentTime = 180;
var timerID;
var running;

function countDown(){
    currentTime--
    let min = Math.floor(currentTime/60);
    let sec = currentTime%60;
    if(sec < 10){
        sec = `0${sec}`
    }
    document.getElementById("timer").innerText = `0${min}:${sec}`;

    if(currentTime == 0){
        clearInterval(timerID);
        return
    }
}

function clickHandler(e){
    if (running) {
        clearInterval(timerID);
        e.target.textContent = "Start Timer";
        document.getElementById("timer").innerText = `03:00`;
        running = false;
        currentTime = 180;
        return;
    }
    // e.target.disabled = true;
    timerID = setInterval(countDown, 1000)
    console.log("click");
    running = true;
    e.target.textContent = "Stop Timer";
}

document.querySelector('#tea-timer-button').addEventListener("click", clickHandler);

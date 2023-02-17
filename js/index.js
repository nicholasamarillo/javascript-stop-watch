const hours = document.getElementById("hour");
const minutes = document.getElementById("min");
const seconds = document.getElementById("sec");
const startButton = document.querySelector("#str");
const resetButton = document.querySelector("#rst");
const stopButton = document.querySelector("#stp");

let hr = 0;
let mn = 0;
let sc = 0;

var interval;

startButton.onclick = function(){
    interval = setInterval(startTime, 1000);
}

resetButton.onclick = function(){
    clearInterval(interval);
    resetTime();     
}

stopButton.onclick = function(){
    clearInterval(interval);
    stopTime();
}

function startTime(){
    sc++;
    if (sc >= 60){
        mn++;
        sc = 0;
    }

    if (mn >= 60){
        hr++;
        mn = 0;
        
    };
    seconds.innerHTML = (sc);
    minutes.innerHTML = (mn);
    console.log(sc);
};

function resetTime(){
    sc = 0;
    mn = 0;
    hr = 0;
    clearInterval(interval);
    seconds.innerHTML = (sc);
    minutes.innerHTML = (mn);
    console.log("timer has been reset");
};

function stopTime(){
    clearInterval(interval);
    console.log("timer has stopped! Good job!")
};



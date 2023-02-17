// Lines 2-8 are getting the HTMl elements and setting them to new constants.
const hours = document.getElementById("hour");
const minutes = document.getElementById("min");
const seconds = document.getElementById("sec");
const startButton = document.querySelector("#str");
const resetButton = document.querySelector("#rst");
const stopButton = document.querySelector("#stp");
// We create variables to hold the hours, minutes, and seconds
let hr = 0;
let mn = 0;
let sc = 0;

var interval;


// This code here watches for a click on the start button. Once clicked, it sets interval to one second and then runs startTime function
startButton.onclick = function(){
    interval = setInterval(startTime, 1000);
}
// This code here watches for a click on the reset button. Once clicked, it clears the interval and runs resetTime function
resetButton.onclick = function(){
    clearInterval(interval);
    resetTime();     
}
// This code here watches for a click on the stop button. Once clicked, it clears the interval and runs stopTime function
stopButton.onclick = function(){
    clearInterval(interval);
    stopTime();
}
// This function adds time in intervals on one and checks if seconds and minutes reach a change in the time i.e. seconds to minutes & minutes to hour.
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
// Function changes all the time values to 0 and changes HTML elements.
function resetTime(){
    sc = 0;
    mn = 0;
    hr = 0;
    clearInterval(interval);
    seconds.innerHTML = (sc);
    minutes.innerHTML = (mn);
    console.log("timer has been reset");
};
// Function stops the stop watch.
function stopTime(){
    clearInterval(interval);
    console.log("timer has stopped! Good job!")
};



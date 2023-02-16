const hours = document.getElementById("hour");
const minutes = document.getElementById("min");
const seconds = document.getElementById("sec");
const startButton = document.querySelector("#str").addEventListener("click", startTime);
const resetButton = document.querySelector("#rst").addEventListener("click", resetTime);
const stopButton = document.querySelector("#stp").addEventListener("click", stopTime);

function startTime(){
    for (let i = 0; i < 60; i++){
        setTimeout(function(){
            seconds.innerHTML = (i);
        },1000)
        console.log(i)
        
    }
};

function resetTime(){

};

function stopTime(){

};

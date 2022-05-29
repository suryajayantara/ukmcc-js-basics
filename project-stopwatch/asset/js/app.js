let minutes = 00;
let seconds = 00;
let tens = 00;

// Init Clockcounter
let appendMinutes = document.querySelector('#minutes');
let appendSeconds = document.querySelector('#seconds');
let appendTens = document.querySelector('#tens');

// init button 
let btnStart = document.querySelector('#btn-start');
let btnStop = document.querySelector('#btn-stop');
let btnReset = document.querySelector('#btn-reset');

let interval;


btnStart.addEventListener('click',function(){
    clearInterval(interval);
    interval = setInterval(startTimer,10);
});

btnStop.addEventListener('click',function(){
    clearInterval(interval);
});

btnReset.addEventListener('click',function(){
    clearInterval(interval);
    minutes = "00";
    seconds = "00";
    tens = "00";
    appendMinutes.innerHTML = minutes;
    appendSeconds.innerHTML = seconds;
    appendTens.innerHTML = tens;
});
// Make convertion function
function startTimer(){
    tens++;

    if(tens <= 9){
        appendTens.innerHTML = "0" + tens;
    }

    if(tens > 9){
        appendTens.innerHTML = tens;
    }

    if(tens > 99){
        seconds++;
        appendSeconds.innerHTML = "0" + seconds;
        tens = 0;
        appendTens.innerHTML = "0" + 0;
    }

    if(seconds > 9){
        appendSeconds.innerHTML = seconds;
    }

    if(seconds > 60){
        minutes++;
        appendMinutes.innerHTML = "0" + minutes;
        seconds = 0;
        appendSeconds.innerHTML = "0" + 0;
    }
    if(minutes > 9){
        appendMinutes.innerHTML = minutes;
    }
}
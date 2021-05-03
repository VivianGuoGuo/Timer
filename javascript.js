var startButton = document.getElementById('start');
var stopButton = document.getElementById('stop');
var resetButton = document.getElementById('reset');

var timeMinute = document.getElementById('w_minutes');
var timeSecond = document.getElementById('w_seconds');

var breakMinute = document.getElementById('b_minutes');
var breakSecond = document.getElementById('b_seconds');

//store a reference to a timer variable
var startTimer;
var countClick=0;
startButton.addEventListener('click', function(){
    //set a count for click to check if resume to work and set vibrate
    countClick++;
    if(countClick>1){
        const hi=navigator.vibrate(5000);//vibrate 5second
        console.log(hi);}

    if(startTimer === undefined){
        startTimer = setInterval(timer, 1000)//will execute the "myTimer" function once every 1 second
        
    } else {
        alert("Timer is already running");
    }
})

resetButton.addEventListener('click', function(){
    timeMinute.value = 25;
    timeSecond.value = "00";

    breakMinute.value = 5;
    breakSecond.value = "00";

  //  document.getElementById('counter').innerText = 0;
    stopInterval()
    startTimer = undefined;
})

stopButton.addEventListener('click', function(){
    stopInterval();//stop count using stopInterval funcation
    startTimer = undefined;
})


//check the condition when timer running
function timer(){
 
    if(timeSecond.value != 0){
        timeSecond.value--;
    } else if(timeMinute.value != 0 && timeSecond.value == 0){
        timeSecond.value = 59;
        timeMinute.value--;
    }

    //Break Timer Countdown
    if(timeMinute.value == 0 && timeSecond.value == 0){
        if(breakMinute.value==5){
            const hi=navigator.vibrate(5000);//vibrate 5second
            console.log(hi);
        }

        if(breakSecond.value != 0){
            breakSecond.value--;
        } else if(breakMinute.value != 0 && breakSecond.value == 0){
            breakSecond.value = 59;
            breakMinute.value--;
        }

    }

    //when timer finished alter good jab and stopinterval.
    if(timeMinute.value == 0 && timeSecond.value == 0 && breakMinute.value == 0 && breakSecond.value == 0){
        timeMinute.value = 25;
        timeSecond.value = "00";

        breakMinute.value = 5;
        breakSecond.value = "00";
      
        alert('Good job');
        stopInterval();
        
    }
}

//Stop Timer Function
function stopInterval(){
    clearInterval(startTimer);//stop count when hit stop button

}


    // if (window.navigator && window.navigator.vibrate) {
    //   console.log("yes");
    //  } else {
    //    console.log('no');
    //  }
   

let stopBtn = document.getElementById('stopBtn');
let startBtn = document.getElementById('startBtn');
let resetBtn = document.getElementById('resetBtn');

let timeBtn = document.getElementById('time');

let msec = 00;
let sec = 00;
let min = 00;

let timerId = null;

let startfun = ()=>{
    msec++;
    if(msec == 100){
        msec = 0;
        sec++;
        if(sec == 60){
            sec = 0;
            min++;
        }
    }

    let msecString;
    if(msec <10){
        msecString = `0${msec}`;
    }else{
        msecString = msec;
    }

    let secString;
    if(sec<10){
        secString = `0${sec}`;
    }else{
        secString = sec;
    }

    let minString;
    if(min<10){
        minString = `0${min}`;
    }else{
        minString = min;
    }

    timeBtn.innerHTML = `${minString} : ${secString} : ${msecString}`
}

startBtn.addEventListener('click', ()=>{
    if(timerId !== null){
        clearInterval(timerId);
    }
    timerId = setInterval(startfun, 10)
})

stopBtn.addEventListener('click', ()=>{
    clearInterval(timerId);
})

resetBtn.addEventListener('click', ()=>{
    clearInterval(timerId);
    timeBtn.innerHTML = "00 : 00 : 00";
    msec = sec = min = 00;
})


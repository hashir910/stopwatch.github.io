//btn section//
const start = document.querySelector(`.start`);
const stop = document.querySelector(`.stop`);
const reset = document.querySelector(`.reset`);

//btn section close//
//box section ///
let min = document.querySelector(`.minute`)

let ghanta = document.querySelector(`.hour`)

let second = document.querySelector(`.second`)

let subsecond = document.querySelector(`.milisec`)

//box section close //
let milisec = 0;
let sec = 0;
let minute = 0;
let hour = 0
let time;


start.addEventListener(`click`, function () {

    time = setInterval(() => {
        milisec++;
        milisec = milisec <= 10 ? `0` + milisec : milisec;
        if (milisec >= 10) {
            sec++;
            sec = sec < 10 ? `0` + sec : sec
            milisec = `0` + 0;
            second.innerText = sec;
        }

        if (sec == 60) {
            minute++;
            minute = minute < 10 ? `0` + minute : minute
            sec = `0` + 0;
            min.innerText = minute;
        }
        if (min == 60) {
            hour++;
            hour = hour < 10 ? `0` + hour : hour
            min = `0` + 0;
            ghanta.innerText = hour;
        }


        subsecond.innerText = milisec;


    }, 100);
})



stop.addEventListener(`click`, function () {
    clearInterval(time);
})



reset.addEventListener(`click`, function () {
    milisec = `0` + 0;
    sec = `0` + 0;
    minute = `0` + 0;
    hour = `0` + 0;
    subsecond.innerText = `00`;
    second.innerText = `00`;
    min.innerText = `00`;
    ghanta.innerText = `00`;
    clearInterval(time)
})
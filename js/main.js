let deadline = '2019-11-11';

function getTimeRemaining(endtime) {
    let t = Date.parse(endtime) - Date.parse(new Date()),
        seconds = Math.floor((t/1000) % 60),
        minutes = Math.floor((t/1000/60) % 60),
        hours = Math.floor((t/(1000*60*60)));
    
    return {
        'total' : t,
        'hours' : hours,
        'minutes' : minutes,
        'seconds' : seconds
    };
}

function setClock(id, endtime) {
    let timer = document.getElementById(id),
        hours = timer.querySelector('.hours'),
        minutes = timer.querySelector('.minutes'),
        seconds = timer.querySelector('.seconds'),
        timeInterval = setInterval(updateClock, 1000);

    function updateClock() {
        let t = getTimeRemaining(endtime);
        
        hours.textContent = t.hours;
        if (t.minutes > 9) {
            minutes.textContent = t.minutes;
        } else {
            minutes.textContent = '0' + t.minutes;
        }

        if (t.seconds > 9) {
            seconds.textContent = t.seconds;
        } else {
            seconds.textContent = '0' + t.seconds;
        }

        if(t.total <= 0) {
            clearInterval(timeInterval);
        }
    }

}

setClock('timer', deadline);

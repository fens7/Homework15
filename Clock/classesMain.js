class Clock {
    timer = undefined;
    constructor({ startClock, clockContent, stopClock }) {
        this.clock = document.querySelector(clockContent);
        this.btnStart = document.querySelector(startClock);
        this.btnStop = document.querySelector(stopClock);
    }
    renderClock = () => {
        let date = new Date();
        let hours = date.getHours();
        let minutes = date.getMinutes();
        let seconds = date.getSeconds();
        if(hours < 10){hours = `0${hours}`}
        if(minutes < 10){minutes = `0${minutes}`}
        if(seconds < 10){seconds = `0${seconds}`}
        this.clock.innerHTML = `${hours}:${minutes}:${seconds}`
    };

    startClock = () => {
        this.btnStart.addEventListener('click', () => {
            this.timer = setInterval(this.renderClock, 1000);
        });
    };

    stopClock = () => {
        this.btnStop.addEventListener('click', () => {
            clearInterval(this.timer);
        });
    };
};

const clock1 = new Clock({
    startClock: '.js--start',
    clockContent: '.js--content',
    stopClock: '.js--stop'
})

clock1.startClock()
clock1.stopClock()

// function Clock(content) {
//     const clockContent = document.querySelector(content);
//     this.timer;
//     this.render = () => {
//             let date = new Date();
//             let hours = date.getHours();
//             let minutes = date.getMinutes();
//             let seconds = date.getSeconds();
//             if(hours < 10){hours = `0${hours}`}
//             if(minutes < 10){minutes = `0${minutes}`}
//             if(seconds < 10){seconds = `0${seconds}`}
//             clockContent.innerHTML = `${hours}:${minutes}:${seconds}`
//     };
// }

// Clock.prototype.clockStop = function(stopClock){
//     const stopBtn = document.querySelector(stopClock)
//     stopBtn.addEventListener('click', ()=>{
//         clearInterval(this.timer)
//     })
// }

// Clock.prototype.clockStart = function(startClock){
//     const startBtn = document.querySelector(startClock)
//     startBtn.addEventListener('click', ()=>{
//         this.timer = setInterval(this.render, 1000)
//     })
// }

// const clock1 = new Clock('.js--content');
// clock1.clockStart('.js--start')
// clock1.clockStop('.js--stop')

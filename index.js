class Timer {
    constructor(durationInput, startButton, pauseButton) {
        this.durationInput = durationInput;
        this.startButton = startButton; 
        this.pauseButton = pauseButton;

        this.startButton.addEventListener('click', this.start);
    }
// calling this.tick manually here will prevent any delay when the user clicks the timer
    start = () => {
        this.tick();
       setInterval(this.tick, 1000);
    };

    tick = () => {

    }
}


const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = newTimer(durationInput, startButton, pauseButton);
timer.start();
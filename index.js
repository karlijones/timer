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
        this.interval = setInterval(this.tick, 1000);
    };

    pause = () => {
        clearInterval(this.interval);
    };

    tick = () => {
        this.timeRemaining = timeRemaining - 1;
    };

    // getter
    // get keyword invokes timeRemaining without needing the ()
    get timeRemaining() {
        return parseFloat(this.durationInput.value);
    }

    //setter
    //timeRemaining - 1 is set equal to the arguement (time)
    set timeRemaining(time) {
        this.durationInput.value = time;
    }
}


const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');

const timer = newTimer(durationInput, startButton, pauseButton);
timer.start();
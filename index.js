class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton; 
        this.pauseButton = pauseButton;
        if (callbacks) {
          this.onStart = callbacks.onStart;  
        }
//callbacks are optional

        this.startButton.addEventListener('click', this.start);
    }
// calling this.tick manually here will prevent any delay when the user clicks the timer
    start = () => {
        if (this.onStart) {
          this.onStart();  
        }
        this.tick();
        this.interval = setInterval(this.tick, 1000);
    };

    pause = () => {
        clearInterval(this.interval);
    };

    tick = () => {
        if (this.timeRemaining <= 0) {
            this.pause();
        } else {
            this.timeRemaining = timeRemaining - 1;
        }
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

const timer = newTimer(durationInput, startButton, pauseButton {
    onStart() {
        console.log('Timer started');
    },
    onTick() {
        console.log('Timer just ticked down');
    },
    onComplete() {
        console.log('Timer is completed');
    }
});
timer.start();
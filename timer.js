// Separated out the timer to make the overall code more readable

class Timer {
    constructor(durationInput, startButton, pauseButton, callbacks) {
        this.durationInput = durationInput;
        this.startButton = startButton; 
        this.pauseButton = pauseButton;
        if (callbacks) {
          this.onStart = callbacks.onStart;
          this.onTick = callbacks.onTick;
          this.onComplete = callbacks.onComplete;  
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
            if (this.onComplete) {
                this.onComplete();
            }
        } else {
            this.timeRemaining = timeRemaining - 1;
            if (this.onTick) {
                this.onTick();
            }
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

const durationInput = document.querySelector('#duration');
const startButton = document.querySelector('#start');
const pauseButton = document.querySelector('#pause');
const circle = document.querySelector('circle');

circle.getAttribute('r') * 2 * Math.PI;

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
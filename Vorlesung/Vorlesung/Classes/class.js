class Clock { // define class
    #timer; //  real private -> current poor support / rarely seen in javascript
    currentTime; // optional

    constructor(currenTime = new Date()) {
        this.currentTime = currenTime; // create a public property
        this.start();
    }

    start() {
        this.#timer = setTimeout(() => {
            this.currentTime = new Date();
        }, 1000);
    }

    // ...
    stop() {
        clearInterval(this.#timer)
        this.#timer = null;
    }

    get time() {  // getter
        return this.currentTime;
    }

    set time(newTime) {  // setters
        return this.currentTime = newTime;
    }
}

const clock = new Clock();
console.log(clock.currentTime);
console.log(clock.time);

// console.log(clock.#time); -> error

class AlarmClock extends Clock { //  inheritance
    #timer

    constructor() {
        super(); // super call
    }

    registerAlarm(time, callback) {  // method
        if (+time > +this.currentTime && this.#timer) {
            this.#timer = setTimeout(() => {
                callback()
                this.#clearTimer();
            }, time - this.currentTime)
        }
    }

    set time(value) {
        this.#clearTimer();

        super.time = value; // super call
    }

    #clearTimer() {
        if (this.#timer) {
            clearTimeout(this.#timer);
            this.#timer = null;
        }
    }
}

const alarmClock = new AlarmClock();
const alarmTime = new Date(+new Date() + 2000) // 2 sec in future;
alarmClock.registerAlarm(alarmTime, () => console.log("ring, ring!"))
alarmClock.time = new Date();

console.log(alarmClock instanceof AlarmClock);
console.log(alarmClock instanceof Clock);
console.log(clock instanceof AlarmClock);
console.log(clock instanceof Clock);


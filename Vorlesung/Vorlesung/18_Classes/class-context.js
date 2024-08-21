
class Person {
    constructor(name) {
        this.name = name;
    }

    wackUp() {
        console.log(`${this.name} is awake!`)
    }
}

class Alarm  {
    registerAlarm(callback) {
        setTimeout(() => {
            callback()
        }, 1000);
    }
}

const person = new Person("Michael");
const alarm = new Alarm();

alarm.registerAlarm(person.wackUp);

// Questions: Why Cannot read property 'name' of undefined
// WHY:

// Solution 1: Context beibehalten:
alarm.registerAlarm(() => person.wackUp());
alarm.registerAlarm(person.wackUp.bind(person));


// Solution 2: Methode als "arrow"
class Person2 {
    constructor(name) {
        this.name = name;
    }

    wackUp = () => {
        console.log(`${this.name} is awake!`)
    }
}
const person2 = new Person2("Michael");
alarm.registerAlarm(person2.wackUp);


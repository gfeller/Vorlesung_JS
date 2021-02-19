class Person {
    constructor(name) {
        this.name = name;
    }

    describe() {
        return `Person named ${this.name}`;
    }
}

class Employee extends Person {
    constructor(name, title) {
        super(name);
        this.title = title;
    }

    describe() {
        return `${super.describe()} (${this.title})`;  // super call
    }
}
const person = new Person('Jane');
console.log(person.describe());

const jane = new Employee('Jane', 'CTO');
console.log(jane.describe());

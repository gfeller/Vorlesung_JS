const person = {
    name : "Michael",
    hallo : function(){
        return `Hallo ${this.name}`;
    }
};

person.hobby = "Hike";

person.hallo = function(){
    return `Hallo ${this.name} Hobby ${this.hobby}`;
};

console.log(person.hallo());

console.log("X");
console.log = value => {};
console.log("X");

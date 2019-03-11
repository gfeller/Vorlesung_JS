const person = {
    name : "Michael",
    hallo : function(){
        return `Hallo ${this.name}`;
    }
};

console.log(person.hallo());

person.name = "Bob";
console.log(person.hallo());


const mySimpleObject = {};
mySimpleObject.name = "Michael";
mySimpleObject.hallo =  function(){
    return "Hallo "+this.name;
};

console.log(mySimpleObject.hallo());

const [a, b] = [10, 20]; // array destructuring
console.log(a, b)

const {c, d} = {c: 10, d: 20}; // object destructuring
console.log(c, d)

function print({message}) { // object destructuring
    console.log(message);
}
print({message: "text", code: "error_1"})

function printWithDefaults({message = "message"} = {}) { // object destructuring
    console.log(message);
}

printWithDefaults({code: "error_1"})
printWithDefaults()

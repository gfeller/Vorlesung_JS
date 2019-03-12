let y = 3;
let x = 3 + y;
const value = add(x, y);

value > 10 ? console.log("Big") : console.log("Small");

function add(a, b) {
    /*debugger;*/
    return a + b;
}

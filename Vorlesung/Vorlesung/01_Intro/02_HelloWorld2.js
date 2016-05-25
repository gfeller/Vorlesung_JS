var y = 3;
var x = 3 + y;
var value = add(x, y);

value > 10 ? console.log("Big") : console.log("Small");

function add(a, b) {
    /*debugger;*/
    return a + b;
}
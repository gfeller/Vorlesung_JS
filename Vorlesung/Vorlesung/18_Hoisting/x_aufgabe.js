var x = 1;
var y = 2;
function print(x) {
    console.log(x); //I
    console.log(y); //II
    var x = 3;
    var y = 4;
}
print();

let a = 1;
let b = 2;
function print2(a) {
    console.log(a); //III
    console.log(b); //IV
    let a = 3;
    let b = 4;
}
print2();

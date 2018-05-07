var x = 1;
let y = 2;
function print(x) {
    console.log(x);  // I
    console.log(y);  // II
    var x = 3;
    var y = 4;
}
print();
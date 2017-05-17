let EPSILON = Math.pow(2, -53);
function epsEqu(x, y) {
    return Math.abs(x - y) < EPSILON;
}

console.log(0.1 + 0.2 == 0.3);
console.log(epsEqu(0.1 + 0.2, 0.3));

a = "A"; //wird auf das globale Objekt gelegt
var b = "B";  // wird auf den aktuellen Scope gelegt
let c = "C" // let, const werden nicht mehr auf das globale Objekt gelegt
function foo() {
    d = "D";
    var e = "E";
}

foo();

console.log(globalThis.a);
console.log(globalThis.b);
console.log(globalThis.c, c);
console.log(globalThis.d);
console.log(globalThis.e);

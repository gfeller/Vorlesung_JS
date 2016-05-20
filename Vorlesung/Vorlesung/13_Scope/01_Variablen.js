a = "A"; //wird auf das globale Objekt gelegt
var b = "B";  // wird auf den aktuellen Scope gelegt

function foo(){
    c = "C";
    var d = "D";
}
foo();

var globalObject = typeof(global) === "undefined" ? window : global; // browser oder node js
console.log(globalObject.a);
console.log(globalObject.b);
console.log(globalObject.c);
console.log(globalObject.d);
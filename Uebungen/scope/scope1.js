var globalObject = typeof(global) === "undefined" ? window : global; // browser oder node js

var a = 0;
b = 0;
var d = 5 ;

function scope(d)
{
    try {
        console.log(1, a, b,c ,d); // weshalb crasht c?
    }
    catch(e){
        console.log(1, a, b ,d);
        console.log(e);
    }
    var b = 10;
    c = "ABC";
    a++;
    b++;
    console.log(2, a, b, c, d);
}
scope();
console.log(3, a, b, c);
console.log(4, globalObject.a, globalObject.b, globalObject.c);
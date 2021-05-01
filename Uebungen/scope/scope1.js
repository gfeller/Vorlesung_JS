var a = 0;
b = 0;
function scope()
{
    try {
        console.log(1, c); // weshalb crasht c?
    }
    catch(e){
        console.log(1, e);
    }
    var b = 10;
    c = "ABC";
    a++;
    b++;
    console.log(2, a, b, c);
}
scope();
console.log(3, a, b, c);
console.log(4, globalThis.a, globalThis.b, globalThis.c);

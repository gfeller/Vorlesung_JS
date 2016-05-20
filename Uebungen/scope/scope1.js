var a = 0;
b = 0;

function scope()
{
    var b = 0;
    c = "ABC";
    a++;
    b++;
}

scope();
console.log(a,b, c);
console.log(global.a, global.b, global.c);
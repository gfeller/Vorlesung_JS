
function x(a,a){ //same parameter name
    //'use strict';
    {
        function b(){ //webstorm shows the error
            console.log("1",arguments.callee);
            console.log("2",arguments.caller);
        }
        b();
    }
}
x(1,2);

//this in strict mode
function logThis(){
    console.log("4", typeof(this));
}
logThis();

function logThisStrict(){
    'use strict';
    console.log("5", typeof(this));
}
logThisStrict();


//read only
var obj = {"a" : "a"};

Object.defineProperty( obj, 'prop', {
    get: function () {
        return "Hello!";
    }
});

function set() {
    obj.prop = "!"
}
set();

function setStrict() {
    'use strict';
    try{
        obj.prop = "!!"
    }
    catch(e){
        console.log("strict", e);
    }
}
setStrict();


function eval1() {
    var a=10;
    eval("var b = 2; a =  10 * b; console.log('eval 1', a)");
    console.log("eval 1a",a);
    console.log("eval 1b",b);

    eval("foo = 10");
    console.log("eval foo", global.foo);
}
eval1();

function eval1Strict() {
    'use strict';
    var a=10;
    eval("var b = 2; a =  10 * b; console.log('eval 2', a)");

    console.log("eval 2a", a);
    try{
        console.log("eval 2b",b);
    }
    catch(e){
        console.log("eval 2b",e);
    }
    try{
        eval("'use strict'; foo2 = 10");
        console.log("eval foo", global.foo2);
    }
    catch(e){
        console.log("eval strict",e);
    }
}
eval1Strict();

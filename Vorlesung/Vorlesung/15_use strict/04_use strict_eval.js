

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
    var a = 10;
    eval("var b = 2; a =  10 * b; console.log('eval 2', a)");

    console.log("eval 2a", a);
    try {
        console.log("eval 2b", b);
    } catch (e) {
        console.log("eval 2b - catch", e);
    }
    try {
        eval("'use strict'; foo2 = 10");
        console.log("eval foo", global.foo2);
    } catch (e) {
        console.log("eval strict - catch", e);
    }
}
eval1Strict();

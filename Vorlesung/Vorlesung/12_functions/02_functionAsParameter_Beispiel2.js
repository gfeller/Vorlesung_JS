function add(a, b){
    return a + b;
}

function minus(a, b){
    return a - b;
}

function calc(logFn, fn, a ,b){
    logFn(fn(a,b));
}

calc( console.log, add, 3, 4);
calc( console.error, minus, 3, 4);
function add(a, b){
    return a + b;
}

function minus(a, b){
    return a - b;
}

function calc(fn, a ,b){
    console.log(fn(a,b));
}

calc( add, 3, 4);
calc( minus, 3, 4);

/*
function addTo(a){
    return function(b){
        return a + b;
    }
}
const addTo3 = addTo(3);

console.log(addTo3(4));
*/

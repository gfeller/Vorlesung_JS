function counter(){
    let count = 10;

    function incr(){
        // incr is the inner function, a closure
        // has access to parent scope and keep the scope alive
        count++;
        return count;
    }
    return {incr};
}

const obj = counter();
const inc = counter().incr;
console.log(obj.count, obj.incr()); // undefined
console.log(inc()); // 11

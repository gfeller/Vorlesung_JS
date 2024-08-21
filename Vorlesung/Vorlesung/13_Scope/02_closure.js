function createCounter(){
    let count = 10;

    function incr(){
        // incr is the inner function, a closure
        // has access to parent scope and keep the scope alive
        count++;
        return count;
    }
    return incr;
}

const counter = createCounter();
console.log(counter(), counter()); // 11 12

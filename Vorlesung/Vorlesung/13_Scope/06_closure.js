function fn(){
    let i = 1;
}
console.log(i, fn.i); // --> error;


function createClosure() {
    let i = 1;
    const closure = () => i;
    return closure;
}
let closureFn = createClosure();
console.log(closureFn()); // --> Zugriff auf i vom Scope "closure2";

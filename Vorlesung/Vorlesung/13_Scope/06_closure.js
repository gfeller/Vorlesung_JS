function closure(){
    let i = 1;
}
console.log(i); // --> error;


function closure2() {
    let i = 1;
    return () => i;
}
let tmpClosure = closure2();
console.log(tmpClosure()); // --> Zugriff auf i vom Scope "closure2";

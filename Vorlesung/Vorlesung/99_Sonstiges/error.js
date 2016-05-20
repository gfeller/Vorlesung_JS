function funcA() {
    throw new Error("A");
}

var varB = function () {
    throw new Error("B");
};

try{
    funcA();
}
catch(e) {
    console.log(e.stack);
}

try{
    varB();
}
catch(e) {
    console.log(e.stack);
}

try{
    (function(){
        throw new Error("C");
    })()
}
catch(e) {
    console.log(e.stack);
}

/*
b();

var x = {};

x.hallo2 = () => { throw new Error("XX")}
x.hallo2();
//hallo();
    */
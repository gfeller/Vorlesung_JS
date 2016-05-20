var funcA = function(){
    var a = 1;
    var funcB = function(){
        var b = 2;
        console.log(a, b); // outputs: 1, 2
    };
    funcB();
    console.log(a, b); // Error! b is not defined
};
funcA();
funcB(); // Error! funcB is not defined
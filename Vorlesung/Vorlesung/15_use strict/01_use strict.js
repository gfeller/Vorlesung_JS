// 'use strict';
try {
    var a = 12;
    b = 12;
}
catch( error )
{
    console.log(error);
}

try {
    var obj2 = { get x() { return 17; } };
    obj2.x = 5;
}
catch( error )
{
    console.log(error);
}


function x(a,a){ //same parameter name
    {
        function b(){ //webstorm shows the error
            console.log("1",arguments.callee);
            console.log("2",arguments.caller);
        }
        b();
    }
}
x(1,2);



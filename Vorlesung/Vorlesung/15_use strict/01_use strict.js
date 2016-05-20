//'use strict';
try {
    var a = 12;
    b = 12;
}
catch( error )
{
    console.log(error);
}

try {
    undefined = "Hallo"
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



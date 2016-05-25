'use strict'
for(let x = 1; x < 10; ++x){
    console.log(x);
    if(x > 4){
        let x = 10; //wird vom for-loop ignoriert
        // var x = 10 // Identifier 'x' has already been declared
    }
}
//console.log(x); //ReferenceError: x is not defined


/*
'use strict';
for (var _x = 1; _x < 10; ++_x) {
    console.log(_x);
    if (_x > 4) {
        var _x2 = 10; //wird vom for-loop ignoriert
    }
}
console.log(x); //ReferenceError: x is not defined
*/
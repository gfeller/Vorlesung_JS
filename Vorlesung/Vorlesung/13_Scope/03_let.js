'use strict'
for(let x = 1; x < 10; ++x){
    console.log(1, x);
    if(x > 4){
        console.log(2, x); // x is not defined
        let x = 10; //wird vom for-loop ignoriert
        console.log(2, x);
        // var x = 10 // Identifier 'x' has already been declared
    }
}
//console.log(3, x); //ReferenceError: x is not defined

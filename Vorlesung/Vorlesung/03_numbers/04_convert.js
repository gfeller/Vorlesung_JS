console.log( +(true));               //1
console.log( +(false));              //0
console.log( +("1ab"));              //NaN
console.log( +("123"));              //123
console.log( +([]));                 //NaN
console.log( parseInt("1.2ab"));     //1
console.log( parseFloat("1.2ab"));   //1.2
console.log( parseInt("abc"));       //NaN

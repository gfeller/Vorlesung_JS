let div0 = 0 / 0;
console.log( div0);             //NaN
console.log( typeof(div0));     //number
console.log( parseInt("abc"));  //NaN
console.log( div0 == NaN);      //false
console.log( isNaN(div0));      //true


console.log( 3 / 0);              //Infinity
console.log( Math.pow(2,10000));  //Infinity
console.log( -Math.pow(2,10000)); //-Infinity

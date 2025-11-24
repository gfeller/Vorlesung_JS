'use strict'
/*
console.log(typeof toiletRollLength); // undefined undefined
toiletRollLength = 10; // -> error
*/

let toiletRollLength;
console.log(typeof toiletRollLength); // undefined

toiletRollLength = null
console.log(toiletRollLength, typeof toiletRollLength); // null object

toiletRollLength = 0
console.log(toiletRollLength, typeof toiletRollLength); // 0 number

toiletRollLength = 100;
console.log(toiletRollLength, typeof toiletRollLength); // 100 number

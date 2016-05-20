console.log([] == false);            //true
console.log("" == false);            //true
console.log(null == false);          //false
console.log(0 == "0");               //true
console.log(null == undefined);      //true
console.log([1,2] == "1,2");         //true
console.log(NaN == NaN);             //false
console.log([] == ![]);              //true
var array = [];
var object = {};
var fn = function(x){console.log(fn.a)};

array["a"] = "a";
array[4] = "a";
object["a"] = "a";
fn["a"] = "a";


console.log(array.length);
console.log(object.length);
console.log(fn.length);
fn();
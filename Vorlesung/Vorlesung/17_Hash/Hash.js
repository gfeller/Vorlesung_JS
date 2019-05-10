const array = [];
const object = {};
const fn = function(){console.log(fn.a)};

array["a"] = "a";
array[4] = "a";
object["a"] = "a";
fn["a"] = "a";


console.log(array, array.length);
console.log(object, object.length);
console.log(fn, fn.length);
fn();

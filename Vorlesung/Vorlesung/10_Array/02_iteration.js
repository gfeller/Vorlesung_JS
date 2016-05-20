var arr = [ 'a', 'b', 'c' ];
arr.forEach(function(elem, index){
    console.log(index +":"+elem);
});

var array = [1,2,3,4].map(function (x) { return x*x });
console.log(array);

var filteredArray = array.filter(function(elem){
    return elem > 5;
});
console.log(filteredArray);

console.log(array.every( function(elem){ return elem > 5}));

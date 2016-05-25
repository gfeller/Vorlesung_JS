var x = [1,2,3,4,5,6,7,8,9];
console.log("has negative", x.some(x=>x < 0));

var x = [1,2,3,4,5,6,7,8,9];
x.shift();
console.log("removed first item", x);

var x = [1,2,3,4,5,6,7,8,9];
console.log("filter", x.filter(x=>x % 2 == 0));

var x = [1,2,3,4,5,6,7,8,9];
console.log("filter", x.join("-"));
console.log("filter", x.join("-").split("-"));

console.log("filter", x.reduce(function(previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
}));

var x = [1,-2,-3,4,-5,6,-7,8,9];
x.sort();
console.log("sorted", x);
x.sort((x,y)=> x-y);
console.log("sorted", x);
x.sort((x,y)=>y-x);
console.log("sorted", x);
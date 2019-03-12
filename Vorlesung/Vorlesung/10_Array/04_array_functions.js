let x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("has negative", x.some(x => x < 0));

x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("filter", x.filter(x => x % 2 == 0));

x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
console.log("join 1", x.join("-"));
console.log("join 2", x.join("-").split("-"));

console.log("reduce", x.reduce(function (previousValue, currentValue, currentIndex, array) {
    return previousValue + currentValue;
}, 0));

x = [1, -2, -3, 4, -5, 6, -7, 8, 9];
x.sort();
console.log("sorted 1", x);
x.sort((x, y) => x - y);
console.log("sorted 2", x);
x.sort((x, y) => y - x);
console.log("sorted 3", x);

x = [1, 2, 3, 4, 5, 6, 7, 8, 9];
x.shift();
console.log("removed first item", x);

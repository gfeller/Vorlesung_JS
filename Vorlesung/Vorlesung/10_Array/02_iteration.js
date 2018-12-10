const arr = ['a', 'b', 'c'];
arr.forEach(function (elem, index) {
    console.log(index + ":" + elem);
});

const array = [1, 2, 3, 4].map(x => x * x);
console.log(array);

var filteredArray = array.filter(elem => elem > 5);
console.log(filteredArray);

console.log(array.every(elem =>  elem > 5));

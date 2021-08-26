const listA = [1, 2, 3]
const listB = [4, 5, 6]
const listAB = [...listA, ...listB]  // concatenate arrays
console.log(listAB); // [ 1, 2, 3, 4, 5, 6 ]

const objA = {firstName: "Michael"}
const objB = {firstLast: "Gfeller"}
const objAB = {...objA, ...objB}  // concatenate objects - no deepclone!
console.log(objAB); // { firstName: 'Michael', firstLast: 'Gfeller' }
console.log({...objA, objB}); // { firstName: 'Michael', objB: { firstLast: 'Gfeller' } }

function sum(a, b, c) {
    return a + b + c;
}

console.log(sum(...listA)); // 6

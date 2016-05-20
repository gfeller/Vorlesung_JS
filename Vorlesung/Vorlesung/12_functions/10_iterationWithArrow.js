[ 'a', 'b', 'c' ].forEach((elem, index) =>  console.log(index +":"+elem));

var array = [1,2,3,4].map(x => x*x);

var filteredArray = array.filter( elem => elem > 5);

console.log(array.every( elem => elem > 5));

console.log((()=>{
    var x = 9;
    var y = 11;
    return x + y;
})());


function range(start, count){
    count = count || 4
    return Array.from(Array(start + count).keys()).slice(start)
}

function func(){
    return [
        range(1), /*[1,2,3,4]*/
        range(2), /*[2,3,4,5]*/
        range(3), /*[3,4,5,6]*/
        range(4), /*[4,5,6,7]*/
    ]
}

var x =  func()
[-1, -2, 1, 2]
    .filter( x => x > 1)
    .map(x=> {
        console.log("1:", x)
        return x / 2
        }
    )

console.log("2:", x[0]);

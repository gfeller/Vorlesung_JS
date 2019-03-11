var arr = [ 'a', 'b', 'c' ];
var dummy = {name: "Hallo", date : Date.now()};

for( let i=0; i<arr.length; ++i )
{
    console.log("for",arr[i]);
}

for(let x in arr)
{
    console.log("for in", x + ":" + arr[x]);
}

for(let y in dummy)
{
    console.log("dummy has property", y);
}

for(let z of arr)
{
    console.log("for of", z);
}

/*
for(let y in "Hallo")
{
    console.log("String", y);
}

for(var y of "Hallo")
{
    console.log("String", y);
}
*/

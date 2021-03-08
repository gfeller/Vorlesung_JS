var arr = [ 'a', 'b', 'c' ];
var dummy = {name: "Hallo", date : Date.now()};

for( let i=0; i<arr.length; ++i )
{
    console.log("for",arr[i]);
}

for(const x in arr)
{
    console.log("for in", x + ":" + arr[x]);
}


for(const z of arr)
{
    console.log("for of", z);
}

/*

for(const y in dummy)
{
    console.log("dummy has property", y);
}

for(const y in "Hallo")
{
    console.log("String", y);
}

for(const y of "Hallo")
{
    console.log("String", y);
}
*/

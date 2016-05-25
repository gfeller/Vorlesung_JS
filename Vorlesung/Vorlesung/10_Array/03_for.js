var arr = [ 'a', 'b', 'c' ];
var dummy = {name: "Hallo", date : Date.now()};

for( var i=0; i<arr.length; ++i )
{
    console.log("for",arr[i]);
}

for(var x in arr)
{
    console.log("for in", x + ":" + arr[x]);
}

for(var y in dummy)
{
    console.log("dummy has property", y);
}

for(var z of arr)
{
    console.log("for of", z);
}

/*
for(var y in "Hallo")
{
    console.log("String", y);
}

for(var y of "Hallo")
{
    console.log("String", y);
}
*/
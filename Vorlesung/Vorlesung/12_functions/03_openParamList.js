function foo(name){
    console.log(name);
    console.log(arguments.length);
    // Ausgabe aller Parameter
    for(var i = 0; i<arguments.length; i++)
    {
        console.log(i, arguments[i]);
    }
    // oder als Array
    var array = Array.prototype.slice.call(arguments);
    console.log(array.join("\n"));
}

foo("Michael", "Gfeller", "HSR", "IFS");


function foo(name){
    console.log(name);
    console.log(arguments.length);
    // Ausgabe aller Parameter...
    for(let i = 0; i<arguments.length; i++)
    {
        console.log(i, arguments[i]);
    }
    // ...oder als Array
    console.log(Array.from(arguments).join("\n"));
}

foo("Michael", "Gfeller", "HSR", "IFS");


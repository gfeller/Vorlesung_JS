function foo(name, ...params){
    console.log(1,name);
    console.log(2,params.join(";"));
}

foo("Michael", "Gfeller", "HSR", "IFS");


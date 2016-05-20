function helloWorld(a){
    console.log(a || "No Data");
}

function helloWorld2(){
    console.log(arguments[0]);
}

var sayHello = function(fnOutput)
{
    fnOutput("Hallo")
};

sayHello(helloWorld);
sayHello(helloWorld2);

function framework(){
    console.log("framework", "error");
}
framework();

var log = console.log;

console.log = function(){
    console.error("intercept", ...arguments); //send to logging framework

    //console.log("intercept", ...arguments); //error!
    log.call(console, "intercept", ...arguments); //call sets *this* correctly
};
framework();


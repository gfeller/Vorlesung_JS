function framework(){
    console.log("framework", "error");
}
framework();

const log = console.log;

console.log = function(){
    log("server-call", ...arguments); //send to logging framework

    //console.log("intercept", ...arguments); //error!
    log.call(console, "intercept", ...arguments); //call sets *this* correctly
};
framework();


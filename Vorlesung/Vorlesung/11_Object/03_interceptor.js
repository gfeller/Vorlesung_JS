function framework(){
    console.log("framework", "error");
}
framework();

const log = console.log;

console.log = function(){
    console.error("[send to server]", ...arguments); //send to logging framework

    // call the original log-function
    log.call(console,  ...arguments); //call sets *this* correctly
};
framework();


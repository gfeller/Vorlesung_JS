function loadFile(file, callback, callbackError) {

    setTimeout(function () {
        if(file) {
            callback({message: "File found", content: "Hello World"});
        }else{
            callbackError({message: "Fehler!"})
        }
    }, 2000);
}


console.log("START");
loadFile("hello-world.pdf", (data) => console.log(data.message), (error) => console.error(error.message))
loadFile("", (data) => console.log(data.message), (error) => console.error(error.message))
console.log("END");

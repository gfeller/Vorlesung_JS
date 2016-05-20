function isGlobalThis()
{
    console.log(this == global);
}

var logEntry = {
    date : Date.now(),
    data : "System crash",
    isGlobalThis : isGlobalThis,
    showEntry : function(){
        return console.log(this.date +" : "+ this.data);
    }
};

global.date = "blabla";
global.data = "blabla";

isGlobalThis();
logEntry.isGlobalThis();

logEntry.showEntry();

var showEntry = logEntry.showEntry;
showEntry();
/*
console.log(logEntry.showEntry());
printer(logEntry.showEntry());


function printer(fnToPrint){
    console.log(fnToPrint);
}
*/
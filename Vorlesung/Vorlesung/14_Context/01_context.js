function isGlobalThis()
{
    console.log(this === global);
}

const logEntry = {
    date : Date.now(),
    data : "System crash",
    isGlobalThis : isGlobalThis,
    showEntry : function(){
        return console.log(this.date +" : "+ this.data);
    }
};

isGlobalThis();
logEntry.isGlobalThis();
logEntry.showEntry();

const showEntry = logEntry.showEntry;
showEntry();

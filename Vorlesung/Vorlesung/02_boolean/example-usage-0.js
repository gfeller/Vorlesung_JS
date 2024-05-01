const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question(`Welchen Service?\n0:Kündigung\n1:Bestellung\n2:Information\n`, selected => {
    if(Number(selected)){
        console.log("selected", selected);
    }
    else{
        console.log("nothing", selected);
    }
    rl.close();
});
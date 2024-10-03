const readline = require('node:readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});
rl.question(`Welchen Service?
0:Kündigung
1:Bestellung
2:Information
`, selected => {
    if(Number(selected)){  // was passiert bei einer '0'?
        console.log("selected", selected);
    }
    else{
        console.log("nothing", selected);
    }
    rl.close();
});
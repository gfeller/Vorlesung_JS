//Funktionen können definiert werden
function hallo(){
    console.log("Hallo");
}
hallo();

//Funktionen können einer Variable zugewiesen werden
var hallo2 = function(){
    console.log("Hallo2");
};
hallo2();

//Funktionen können einer Variable zugewiesen werden
const foo = hallo;
foo();

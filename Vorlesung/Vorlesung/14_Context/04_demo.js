name = "global!";
//what is this
console.log(this); //works in browser different

function hallo(){
    //console.log(this.toString());
    console.log(this.name);
}
hallo();


var dummy = {name : "Bob"};
dummy.hallo = hallo;
dummy.hallo();
//change hallo to => this.name;

//1 regel => object.foo() ist this => object
// --------

//2 regel => functionen ohne object haben this = global
var hallo2 = dummy.hallo;
hallo2();

//3 regel => mit new wird this gleich ein empty object;
new hallo();
// entspricht
function newHallo(){
    var self = {}; // self = this (this ist schreibgeschütz)
    console.log(self.name);
    return self;
}
var newHalloInstance = newHallo();

//..........................................................
var test = {name : "hallo"}
hallo();
hallo.call(test);

var bindHallo = hallo.bind(test);
bindHallo();

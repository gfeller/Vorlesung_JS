var fn = function(){ return "Michael"};
console.log(fn.name);                    //""
fn = function name(){ return "Michael"};
console.log(fn.name);                    //"name"
console.log(fn.length);                  //0

fn = function name(name){return name };
console.log(fn.length);                  //1
function sayHi(where){
    try{
        where("hi");
    }
    catch(e){
        console.log(e);
    }
}

sayHi((x)=>console.log(x));
sayHi(console.log);
sayHi(console.log());

console.fun = function(){
    this.log("haha");
};

console.fun();
sayHi(console.fun);
function sayHi(where){
    try{
        where("hi");
    }
    catch(e){
        console.log("error");
    }
}

sayHi((x)=>console.log(x));
sayHi(console.log);
sayHi(console.log());
sayHi((x)=>console.error(x));
sayHi(console.error);
sayHi(console.error());

console.fun = function(){
    this.log("haha");
};

console.fun();
sayHi(console.fun);
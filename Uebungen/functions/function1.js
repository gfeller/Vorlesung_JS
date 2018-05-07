function sayHi(where) {
    try {
        where("hi");
    }
    catch (e) {
        console.log("\x1b[31m", e.message, '\x1b[0m');
    }
}

sayHi((x) => console.log(x));
sayHi(console.log);
sayHi(console.log());

console.fun = function () {
    this.log("haha");
};

console.fun();
sayHi(console.fun);

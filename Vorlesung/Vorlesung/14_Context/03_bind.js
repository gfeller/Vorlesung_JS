const counter = {
    value: 0
};

counter.count =  (function () {
    this.value = this.value + 1;
}).bind(counter);

counter.count();
counter.count();
counter.count();
console.log(counter.value);

const fnCount = counter.count;
fnCount();
fnCount();
fnCount();
console.log(counter.value);


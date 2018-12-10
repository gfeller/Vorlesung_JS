const rect = {
    width: 100,
    height: 100,
    area: function () {
        return this.width * this.height;
    }
};

console.log(1, rect.area());
const areaFn = rect.area;

console.log(2, areaFn());
console.log(3, areaFn.apply(rect));

console.log(4, areaFn.apply({width : 33, height: 55}));

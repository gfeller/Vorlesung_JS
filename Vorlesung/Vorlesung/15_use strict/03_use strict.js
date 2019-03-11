//'use strict';
global.width = 33;
global.height = 44;
const rect = {
    width: 100,
    height: 100,
    area: function () {
        return this.width * this.height;
    }
};
const area = rect.area;
console.log(rect.area());
console.log(area());

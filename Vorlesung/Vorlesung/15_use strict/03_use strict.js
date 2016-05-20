//'use strict';
var rect = {
    width: 100,
    height: 100,
    area: function () {
        return this.width * this.height;
    }
};
var x = rect.area;
x();
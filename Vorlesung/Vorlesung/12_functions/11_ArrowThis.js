function Point(x, y){
    this.x = x;
    this.y = y;
    this.area = () => this.x + this.y;
}

const areaFn = new Point(10,50).area;
console.log(areaFn());

/*
function Point(x, y) {
    var _this = this;

    this.x = x;
    this.y = y;
    this.area = function () {
        return _this.x + _this.y;
    };
}
*/
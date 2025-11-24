class Point {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }

    areaFn() {
        return this.x + this.y
    };
    areaArrow = () => {
        return this.x + this.y;
    };
}

const areaFn = new Point(10, 50).areaFn;
const areaArrow = new Point(10, 50).areaArrow;
console.log(areaArrow()); // 60
console.log(areaFn()); // -> Cannot read properties of undefined (reading 'x')
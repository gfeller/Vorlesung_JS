function Rectangle(width, height){
    this.x = width; //public
    var y = height; // private
    this.area = () => this.x * y;
    this.toString = () => { return `X: ${this.x} Y: ${y}`  }
}

var rect = Rectangle(5, 5);
console.log(global.area.toString());
console.log(rect.area());
rect.x = 100;
rect.y = 100;
console.log(rect.area());

console.log(""+rect);
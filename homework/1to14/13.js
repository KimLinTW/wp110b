class Ratio {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(z) {
        return new Ratio(this.x * z.y + z.x * this.y, this.y * z.y)
    }
    toString() {
        return this.x + '/' + this.y;
    }
    mul(u) {
        return new Ratio(this.x * u.y - u.x * this.y, this.y * u.y)
    }
}
var a = new Ratio(0, 1);
var b = new Ratio(2, 3);
var c = a.mul(b);
console.log(c.toString());
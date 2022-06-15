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
}
var a = new Ratio(2, 9);
var b = new Ratio(2, 6);
var c = a.add(b);
console.log(c.toString());
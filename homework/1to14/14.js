class Ratio {
    constructor(x, y) {
        this.x = x;
        this.y = y;
    }
    add(z) {
        return new Ratio(this.x * z.y + z.x * this.y, this.y * z.y)
    }
    sub(z) {
        return new Ratio(this.x * z.y - this.y * z.x, this.y * z.y)
    }
    mul(z) {
        return new Ratio(this.x * z.x, this.y * z.y)
    }
    div(z) {
        return new Ratio(this.y * z.x, this.y * z.y)
    }
    toString() {
        return new Ratio(this.x, this.y)
    }
    reduce() {
        let m, i;
        if (this.x > this.y) m = this.y;
        else m = this.x;
        for (i = 2; i <= m; i++) {
            if (this.x % i == 0 && this.y % i == 0) {
                this.x = this.x / i;
                this.y = this.y / i;
                m = m / i;
                i = 2;
            }
        }
    }
}

var a = new Ratio(6, 9);
b.reduce();
console.log(c.toString());
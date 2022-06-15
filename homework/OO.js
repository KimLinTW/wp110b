class Point {

    constructor(array) {
        this.x = array;
    }

    length() {
        let count = 0;
        for (let i = 0; i < this.x.length; i++) count += this.x[i] * this.x[i];
        return Math.sqrt(count);
    }

    neg() {
        let t = [];
        for (let i = 0; i < this.x.length; i++) t[i] = this.x[i] * -1;
        return t;
    }

    add(v) {
        let t = [];
        for (let i = 0; i < this.x.length; i++) t[i] = this.x[i] + v[i];
        return t;
    }

    sub(v) {
        return this.add(v.neg())
    }

    dot(v) {
        let a = 0;
        for (let i = 0; i < this.x.length; i++) a += this.x[i] * v.x[i];
        return a;
    }

    distance(v) {
        return this.sub(v).length();
    }

    toString() {
        return "" + this.x;
    }
}

let p = new Point([1, 2, 3]);
let p2 = new Point([4, 5, 6]);
console.log(p.toString());
console.log(p.add(p2));
console.log(p.sub(p2));
console.log(p.distance(p2));
console.log(p.length());
console.log(p.dot(p2));
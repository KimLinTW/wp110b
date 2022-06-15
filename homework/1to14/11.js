class Ratio {
    constructor(a, b) {
        this.a = a;
        this.b = b;
    }

    toString() {
        return this.a + '/' + this.b;
    }
}

let r = new Ratio(1, 3);
console.log(r.toString());
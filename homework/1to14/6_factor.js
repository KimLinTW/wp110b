// 寫一個程式做因數分解。
// 範例： factor(45) => [3, 3, 5]

function factor(a) {
    var b = 2;
    var c = [];
    var count = 0;
    for (b; b <= a; b++) {
        while (a % b == 0) {
            c[count] = b;
            count++;
            a /= b;
        }
    }

    return c;
}
var a = parseInt(Deno.args[0])
console.log('factor(' + a + ') => [' + factor(a) + ']')

//deno run 6_factor.js 45
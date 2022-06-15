// 請將 a 到 b 之間無法被 3, 5, 7 整除的數字放到陣列中？
// 範例： filter357(5,10) = [8]
// 範例： filter357(5,15) = [8,11,13]
var temp = []
var count = 0

function filter357(a, b) {
    for (a; a < b; a++)
        if (!(a % 3 == 0 || a % 5 == 0 || a % 7 == 0)) {
            temp[count] = a;
            count++;
        }
    return temp;

}

var a = parseInt(Deno.args[0])
var b = parseInt(Deno.args[1])
console.log('filter357(' + a + ',' + b + ') = [' + filter357(a, b) + ']')
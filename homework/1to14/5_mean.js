// 請算出某陣列的平均值？
// 範例： mean([1, 2, 3, 4, 5]) => 3

function mean(a) {
    var i = 0;
    var toatal = 0;
    for (i; i < a.length; i++) {
        toatal += parseInt(a[i]);
    }
    return (toatal + 0.0) / a.length;
}


var n = (Deno.args)
console.log(mean(n))



//   deno run 5_mean.js 1 2 3 4 5
//   3
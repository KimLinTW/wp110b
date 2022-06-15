//請用遞迴寫一個函數印出費氏數列的第 n 個
// 範例： f(7) => 13
// 參考: 費波那契數


function f(a) {
    if (a == 1) return 1;
    else if (a == 0) return 0;
    else return f(a - 1) + f(a - 2);
}



var a = Deno.args;
console.log('f(' + a + ') = ' + f(a));

// deno run 9.js 6
// f(6) = 8
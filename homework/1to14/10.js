// (函數參數 callback) 請寫一個函數可以做任意函數的定積分
// 範例： integral((x) => x * x, 0, 1) => 0.333...function callback(a,b,c)


function callback(a, b, c) {
    let ans = 0;
    for (let i = b; i < c;) {
        ans += a(i) * 0.001;
        i += 0.001;
    }
    return ans;
}


console.log(callback((x) => x * x, 0, 1))
//請寫一個函數檢查某數是否為質數？ 範例： isPrime(17) => true
var check = 1
var i = 2

function isPrime(a) {
    for (i = 2; i < a; i++)
        if (a % i == 0) check++;
    if (a < 2) {
        console.log("NO,", a, "is not prime numbers");
        check = 1;
    } else if (check == 1) {
        console.log("YES,", a, "is prime numbers");
        check = 1;
    } else {
        console.log("NO,", a, "is not prime numbers")
        check = 1;
    }
}



var n = parseInt(Deno.args[0])
console.log(isPrime(n))



//   deno run 3_isPrime.js 5
function Factorial(a) {
    if (a == 0) return 1;
    return a * Factorial(a - 1);
}

var n = parseInt(Deno.args[0])
console.log('factoral(' + n + ') = ', Factorial(n))


//  deno run 2_Factorial.js 10
//     factoral(10) =  3628800
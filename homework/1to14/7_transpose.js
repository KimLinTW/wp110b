//寫一個程式把矩陣轉置。
//範例：transpose([[1,2,3], [3,2,1]]) => [[1,3], [2,2], [3,1]]


function transpose(a) {
    var outputMatrix = [];
    var count = 0;
    var matrix_number = a[0].length + 1;
    for (count; count < matrix_number; count++) {
        outputMatrix[count] = a.split(1);
    }

    return outputMatrix;
}

//[1,2,3],[3,2,1]

//split -> sort -> join


var a = Deno.args;
console.log('transpose([' + a + ']) => ', "[" + transpose(a) + "]")

// deno run 7_transpose.js [1,2,3],[3,2,1]
// transpose([[1,2,3], [3,2,1]]) => [[1,3], [2,2], [3,1]]


/*

1 2 3
3 2 1


1 3
2 2 
3 1

 */
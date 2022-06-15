//請寫一個函數計算兩矩陣相加？
//範例： add([[1,2],[3,4]], [[1,1],[1,1]]) => [[2,3], [4,5]]


function add(a) {
    var outputMatrix = [];
    var count = 0;
    var matrix_number = a[0].length + 1;
    for (count; count < matrix_number; count++) {
        outputMatrix[count] = a.split(1);
    }

    return outputMatrix;
}



//[1,2,3],[3,2,1]




var a = Deno.args;
console.log('add([' + a + ']) => ', "[" + transpose(a) + "]")

// deno run 8_add.js [1,2],[3,4]
// add([[1,2],[3,4]], [[1,1],[1,1]]) => [[2,3], [4,5]]


/*

1 2 3
3 2 1


1 3
2 2 
3 1

 */
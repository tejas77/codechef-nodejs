process.stdin.resume();
process.stdin.setEncoding('utf8');

var input = '';
process.stdin.on('data', function (chunk) {
    input += chunk;
});


process.stdin.on('end', function () {
    let inputArr=input.split('\n');
    let test=parseInt(inputArr.shift());
    for(let t=0;t<test;t++){
        var value = inputArr[t];
        var arr = [1];
        for (var i=1; i <= value; i++) {
            var tmp = 0;
            var x = 0;
            for(var j = 0;j < arr.length; j++) {
                x = arr[j]*i + tmp;
                arr[j] = Math.floor(x % 10);
                tmp = Math.floor(x / 10);
            }
            while (tmp > 0) {
                arr.push(Math.floor(tmp % 10));
                tmp = Math.floor(tmp / 10);
            }
        }
        console.log(arr.reverse().join(''));
    }
});

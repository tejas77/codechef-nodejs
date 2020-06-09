process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split(' ');
    var a = Number(arr[0]);
    var b = parseFloat(arr[1]);
    var temp = a + 0.50;
    if(a>0 && temp<=b && a%5===0){
        console.log((b-temp).toFixed(2));
    }else{
        console.log(b.toFixed(2));
    }
});

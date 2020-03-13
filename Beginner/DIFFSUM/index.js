process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var fNum = parseInt(arr.shift());
    var sNum = parseInt(arr.shift());
    fNum > sNum ? console.log(fNum - sNum) : console.log(fNum + sNum);
});

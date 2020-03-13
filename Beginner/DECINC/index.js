process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    var n = parseInt(arr);
    n % 4 === 0 ? console.log(n+1) : console.log(n-1);
});

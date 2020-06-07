process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var n = arr.shift().length;
    n > 3 ? console.log('More than 3 digits') : console.log(n);
});

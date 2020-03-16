process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = arr.shift();
    for (var i = 0; i < t; i++) {
      console.log(fact(parseInt(arr[i])));
    }
});

var fact = num => num === 0 ? 1 : num * fact(num - 1);

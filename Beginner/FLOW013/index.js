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
      var values = arr[i].split(' ').map(Number);
      values[0] + values[1] + values[2] === 180 ? console.log('YES') : console.log('NO');
    }
});

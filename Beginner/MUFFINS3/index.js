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
      var n = parseInt(arr[i]);
      if (n % 2 === 0) {
        console.log((n / 2) + 1);
      } else {
        console.log((n + 1) / 2);
      }
    }
});

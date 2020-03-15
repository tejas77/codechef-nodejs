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
      var numbers = arr[i].split(' ');
      var a = parseInt(numbers[0]);
      var b = parseInt(numbers[1]);
      console.log(a % b);
    }
});

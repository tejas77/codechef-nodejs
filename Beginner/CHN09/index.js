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
      var balloons = arr.shift();
      let a = 0, b = 0;
      for (var j = 0; j < balloons.length; j++) {
        balloons[j] === 'a' ? a++ : b++;
      }
      a >= b ? console.log(b) : console.log(a);
    }
});

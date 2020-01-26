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
      var n = arr.shift();
      let mean = 0, sum = 0;
      var numbers = arr.shift().split(' ').map(Number);
      for (var j = 0; j < n; j++) {
        sum += numbers[j];
      }
      var stealcoin = numbers.filter(num => num === (sum / n));
      stealcoin.length > 0 ? console.log(numbers.indexOf(stealcoin[0])+1) : console.log('Impossible');
    }
});

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
      var n = parseInt(arr.shift());
      var a = arr.shift().split(' ').map(Number);
      var b = arr.shift().split(' ').map(Number);
      let canCook = 0, timeToCook = a[0];
      b[0] <= timeToCook ? canCook++ : null;
      for (var j = 1; j < n; j++) {
        timeToCook = a[j] - a[j - 1];
        if (b[j] <= timeToCook) {
          canCook++;
        }
      }
      console.log(canCook);
    }
});

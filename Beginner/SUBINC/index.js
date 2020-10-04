process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = Number(arr.shift());
    loop: for (var i = 0; i < t; i++) {
      var n = Number(arr.shift());
      const array = arr.shift().split(' ').map(Number);
      let total = new Array(n).fill(1);
      for (var j = 1; j < n; j++) {
        if (array[j] >= array[j-1]) {
          total[j] += total[j-1];
        }
      }
      console.log(total.reduce((a,b) => a+b));
    }
});

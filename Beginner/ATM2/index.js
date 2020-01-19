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
      const nk = arr.shift().split(' ').map(Number);
      const n = nk[0];
      let k = nk[1];
      const a = arr.shift().split(' ').map(Number);
      const o = [];
      check: for (var j = 0; j < n; j++) {
        if (k - a[j] >= 0) {
          k -= a[j]
          o.push(1);
          continue check;
        }
        o.push(0);
      }
      console.log(o.join(''));
    }
});

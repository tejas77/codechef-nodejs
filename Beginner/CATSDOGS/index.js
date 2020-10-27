process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = arr.shift();
    loop: for (var i = 0; i < t; i++) {
      const [c,d,l] = arr[i].trim().split(' ').map(Number);
      if (l % 4 !== 0) {
        console.log('no');
      } else {
        if (c <= d * 2) {
          console.log((d * 4) <= l && l <= 4 * (c + d) ? 'yes' : 'no');
        } else {
          console.log((c - (d * 2)) * 4 + (d * 4) <= l && l <= 4 * (c + d) ? 'yes' : 'no');
        }
      }
    }
});

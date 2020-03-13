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
      const bk = arr.shift().split(' ').map(Number);
      const bn = bk[0];
      const k = bk[1];
      const b = arr.shift().split(' ').map(Number);
      let top = 0;
      for (var j = 0; j < b.length; j++) {
        let rem = b[j] % k;
        if (b[j] >= k) {
          top += (rem>k-rem)?(k-rem):rem;
        } else {
          top += k-rem;
        }
      }
      console.log(top);
    }
});

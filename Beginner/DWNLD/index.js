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
      let pay = 0;
      let r = 0;
      for (var j = 0; j < n; j++) {
        const td = arr.shift().split(' ').map(Number);
        let t = td[0];
        let d = td[1];
        if (t>=k) {
          t -= k;
          k = 0;
        } else {
          k -= t;
          t = 0;
        }
        pay+=(t*d);
      }
      console.log(pay);
    }
});

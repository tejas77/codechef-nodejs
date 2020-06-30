process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    loop: for (let s = 0; s < t; s++) {
      let n = Number(arr[s]);
      let count = 0;
      for (var i = 1; i <= n; i+=2) {
        let k = n - i + 1;
        count += (k*k);
      }
      console.log(count);
    }
});

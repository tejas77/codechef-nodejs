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
      const [n,k] = arr[s].split(' ').map(Number);
      let oArr = [];
      for (var i = n-k; i <= n; i++) {
        oArr.push(i);
      }
      for (i = n-k-1; i > 0; i--) {
        oArr.push(i);
      }
      console.log(oArr.join(' '));
    }
});

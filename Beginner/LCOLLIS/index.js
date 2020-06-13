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
      let [n,m] = arr.shift().split(' ').map(Number);
      let cols = new Array(m).fill(0);
      for (var i = 0; i < n; i++) {
        cols = arr.shift().split('').map((a, j) => +a + cols[j]);
      }
      cols = cols.map(a => (a*(a-1))/2).reduce((a,b) => a + b);
      console.log(Math.abs(cols));
    }
});

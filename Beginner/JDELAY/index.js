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
      const n = Number(arr.shift());
      let delayed = 0;
      for (var i = 0; i < n; i++) {
        const [s,j] = arr.shift().split(' ');
        if ((+j - +s) > 5) {
          delayed++;
        }
      }
      console.log(delayed);
    }
});

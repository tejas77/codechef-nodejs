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
      const [a,b,c,d] = arr[s].split(' ').map(Number);
      let count = 0;
      for (var i = a; i <= b; i++) {
        if (i < d) {
          if (i < c) {
            count += d-c+1;
          } else {
            count+=d-i;
          }
        }
      }
      console.log(count);
    }
});

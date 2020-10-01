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
      let mb = arr[s].split(' ');
      let m = Number(mb[0]),b = Number(mb[1]);
      while (m !== b || m === 0 || b === 0) {
        if (m<b) {
          b -= m;
        } else {
          m -= b;
        }
      }
      console.log(m+b);
    }
});

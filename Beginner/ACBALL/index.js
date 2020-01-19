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
      const x = arr[s*2];
      const y = arr[s*2+1];
      let z = '';
      for (var i = 0; i < x.length; i++) {
        if (x[i] === y[i]) {
          z += x[i] === 'W' ? 'B' : 'W';
        } else {
          z += 'B';
        }
      }
      console.log(z);
    }
});

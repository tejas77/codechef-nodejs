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
      const tt = arr[s];
      let k = true;
      for (var i = 1; i < tt.length; i++) {
        if ((i-1)%2 === 0 && i%2 === 1) {
          if (tt[i-1] === 'A' && tt[i] === 'A' || tt[i-1] === 'B' && tt[i] === 'B') {
            k = false;
            break;
          }
        }
      }
      console.log(k ? 'yes' : 'no');
    }
});

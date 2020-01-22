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
      const [n,m] = arr[s*2].split(' ').map(Number);
      const mArray = arr[s*2+1].split(' ').map(Number);
      let seq = new Array(n).fill(0), max = 0,min = 0;
      for (var i = 0; i < m; i++) {
        seq[mArray[i]-1] = seq[mArray[i]-1]+1;
        max = Math.max(max,seq[mArray[i]-1]);
        min = Math.min(...seq);
        if (max >= min+2) {
          console.log('NO');
          continue loop;
        }
      }
      console.log('YES');
    }
});

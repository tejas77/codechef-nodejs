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
      const n = Number(arr[s*2]);
      const nArray = arr[s*2+1].split(' ').map(Number).sort((a,b) => a-b);
      const diffs = [];
      for (var i = 1; i < n; i++) {
        diffs.push(nArray[i] - nArray[i-1]);
      }
      const indexP = diffs.indexOf(Math.min(...diffs));
      console.log(nArray[indexP+1]-nArray[indexP]);
    }
});

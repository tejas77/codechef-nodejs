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
      const [n,k] = arr[s*2].split(' ').map(Number);
      const nArray = arr[s*2+1].split(' ').map(Number);
      let steps = Math.floor((nArray[0]-1)/k);
      for (var i = 1; i < n; i++) {
        steps += Math.floor((nArray[i] - nArray[i-1]-1)/k);
      }
      console.log(steps);
    }
});

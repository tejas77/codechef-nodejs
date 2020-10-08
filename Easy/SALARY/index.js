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
      let nArray = arr[s*2+1].trim().split(' ').map(Number);
      const min = Math.min(...nArray);
      const steps = nArray.reduce((sum,val) => (sum + (val - min)), 0);
      console.log(steps);
    }
});

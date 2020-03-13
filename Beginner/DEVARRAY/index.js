process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let [n,t] = arr.shift().split(' ').map(Number);
    const nArray = arr.shift().split(' ').map(Number);
    let min = Infinity, max = -Infinity;
    for (var i = 0; i < n; i++) {
      min = min > nArray[i] ? nArray[i] : min;
      max = max < nArray[i] ? nArray[i] : max;
    }
    loop: for (let s = 0; s < t; s++) {
      const q = Number(arr[s]);
      console.log(q >= min && q <= max ? 'Yes' : 'No');
    }
});

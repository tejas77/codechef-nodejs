process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    let shift = 0;
    loop: for (let s = 0; s < t; s++) {
      let [n,x,swaps] = arr[shift].split(' ');
      let pos = x;
      swaps = Number(swaps);
      for (var i = 1; i <= swaps; i++) {
        const [a,b] = arr[shift+i].split(' ');
        pos = pos === a ? b : pos === b ? a : pos;
      }
      console.log(pos);
      shift += swaps+1;
    }
});

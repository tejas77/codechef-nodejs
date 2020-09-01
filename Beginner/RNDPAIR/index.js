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
      let a = nArray[n-1], b = nArray[n-2], c, d;
      if (a === b) {
        c = nArray.filter(x => x===a).length;
        c = (c-1)*c/2;
      } else {
        c = nArray.filter(x => x===a).length;
        d = nArray.filter(x => x===b).length;
        c = c*d;
      }
      console.log((c/(nArray.length*(nArray.length-1)/2)).toFixed(8));
    }
});

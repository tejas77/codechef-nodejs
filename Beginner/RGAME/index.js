process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    let c = 1000000007;
    loop: for (let s = 0; s < t; s++) {
      const n = Number(arr[s*2]);
      const nArray = arr[s*2+1].split(' ').map(Number);
      let t = 0, a = 2, b = 2 * nArray[0];
      for (var j of nArray.slice(1)) {
        t = parseInt((2 * t) + (j * b));
        b = parseInt(b + (a * j));
        a = parseInt((a * 2) % c);
      }
      console.log(parseInt(t%c));
    }
});

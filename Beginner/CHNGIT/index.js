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
      const nArray = arr[s*2+1].split(' ').map(Number);
      let d = {};
      for (let i in nArray) {
        if (d.hasOwnProperty(nArray[i])) {
          d[nArray[i]] += 1;
        } else {
          d[nArray[i]] = 1;
        }
      }
      let m = -1;
      for (let i in d) {
        m = Math.max(m,d[i]);
      }
      console.log(n-m);
    }
});

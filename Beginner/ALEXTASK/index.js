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
      let min = Math.pow(10,18);
      for (var i = 0; i < n; i++) {
        for (var j = i+1; j < n; j++) {
          min = Math.min(Math.floor(nArray[i] * nArray[j] / HCF(nArray[i], nArray[j])),min);
        }
      }
      console.log(min);
    }
});


const HCF = (a, b) => {
    if (b) {
        return HCF(b, a % b);
    } else {
        return Math.abs(a);
    }
};

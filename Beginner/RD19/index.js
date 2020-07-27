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
      let nArray = arr[s*2+1].split(' ').map(Number);
      let first = nArray[0];
      let d;
      for (var i = 1; i < n; i++) {
        d = HCF(first,nArray[i]);
      }
      console.log(d===1 ? 0 : -1);
    }
});

const HCF = (a, b) => {
    if (b) {
        return HCF(b, a % b);
    } else {
        return Math.abs(a);
    }
};

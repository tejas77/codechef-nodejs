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
      let m = nArray.filter(x => x<0).length;
      console.log(m > 0 ? `${Math.max(m,n-m)} ${Math.min(m,n-m)}` : `${Math.max(m,n-m)} ${Math.max(m,n-m)}`);
    }
});

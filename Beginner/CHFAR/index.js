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
      const nArray = arr[s*2+1].split(' ');
      let ones = nArray.filter(x => x === '1').length;
      console.log(n-ones <= k ? 'YES' : 'NO');
    }
});

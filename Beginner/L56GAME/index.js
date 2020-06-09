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
      const nOdd = arr[s*2+1].split(' ').map(Number).filter(x => x&1).length;
      console.log(n === 1 ? 1 : nOdd&1 ? 2 : 1);
    }
});

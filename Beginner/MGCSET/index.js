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
      const [n,m] = arr[s*2].split(' ').map(Number);
      const divL = arr[s*2+1].split(' ').map(Number).filter(x => x%m === 0).length;
      console.log(Math.pow(2,divL)-1);
    }
});

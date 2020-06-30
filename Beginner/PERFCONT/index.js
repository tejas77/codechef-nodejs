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
      const [n,p] = arr[s*2].split(' ').map(Number);
      const cwc = parseInt(p/2);
      const hc = parseInt(p/10);
      const pSolve = arr[s*2+1].split(' ').map(Number);
      let cakewalk = 0, hard = 0;
      for (var i = 0; i < n; i++) {
        if (pSolve[i] >= cwc) {
          cakewalk++;
        } else if (pSolve[i] <= hc) {
          hard++;
        }
      }
      console.log(cakewalk === 1 && hard === 2 ? 'yes' : 'no');
    }
});

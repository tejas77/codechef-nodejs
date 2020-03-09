process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    let t = Number(arr.shift());
    let shift = 0;
    loop: for (let s = 0; s < t; s++) {
      const [n,m,k,l,r] = arr[shift].split(' ').map(Number);
      let cheapestCoke = Infinity;
      for (var i = 1; i <= n; i++) {
        let [cokeC, cokeP] = arr[shift+i].split(' ').map(Number);
        if (cokeC < k) {
          cokeC = cokeC + m > k ? k : cokeC + m;
        } else if (cokeC > k) {
          cokeC = cokeC - m < k ? k : cokeC - m;
        }
        if (cokeC >= l && cokeC <= r && cokeP < cheapestCoke) {
          cheapestCoke = cokeP;
        }
      }
      console.log(cheapestCoke === Infinity ? -1 : cheapestCoke);
      shift += n+1;
    }
});

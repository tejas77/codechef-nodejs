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
      const kArray = arr[s*2+1].split(' ').map(Number);
      let impressG = 0;
      for (var i = 0; i+k <= n; i++) {
        let iVal = kArray.slice(i,k+i).reduce((a,b) => a+b);
        if (iVal > impressG) {
          impressG = iVal;
        }
      }
      console.log(impressG);
    }
});

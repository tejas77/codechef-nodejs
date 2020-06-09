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
      let n = Number(arr[s]);
      let sCount = 0;
      while (n!==0) {
        n-=Math.pow(Math.floor(Math.sqrt(n)),2);
        sCount++;
      }
      console.log(sCount);
    }
});

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
      const nArray = arr[s*2+1].split(' ').map(Number).sort((a,b) => a-b);
      let totalSum = 0;
      console.log(nArray);
      for(let i=0;i<n/2;i++){
        totalSum+=Math.abs(nArray[n-i-1]-nArray[i]);
      }
      console.log(totalSum);
    }
});

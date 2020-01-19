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
      const [r,c,k] = arr[s].split(' ').map(Number);
      let a,b,count=0;
      for(a=(r-k);a<=(r+k);a++) {
        for(b=(c-k);b<=(c+k);b++) {
          if((a>=1&&a<=8)&&(b>=1&&b<=8)) {
            count++;
          }
        }
      }
      console.log(count);
    }
});

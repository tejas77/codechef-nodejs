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
      let [n,minX,maxX] = arr[shift].split(' ').map(Number);
      let total = maxX - minX + 1;
      let x = 0, y = 1, spam = 0;
      let even,odd;
      for (var i = 1; i <= n; i++) {
        const [wi,bi] = arr[shift+i].split(' ').map(Number);
        x = ((wi*x)+bi)%2;
        y = ((wi*y)+bi)%2;
      }
      if ((((minX%2)!==0)&&((maxX%2)===0))||(((minX%2)===0)&&((maxX%2)!==0))) {
        even=total/2;
        odd=even;
      } else if (((minX%2)!==0)&&((maxX%2)!==0)) {
        even=total/2;
        odd=even+1;
      } else {
        even=total/2+1;
        odd=even-1;
      }
      if ((x%2) !== 0) {
        spam += parseInt(even);
      }
      if ((y%2) !== 0) {
        spam += parseInt(odd);
      }
      console.log(`${total-spam} ${spam}`);
      shift += n+1;
    }
});

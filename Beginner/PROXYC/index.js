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
      let nArray = arr[s*2+1].split('');
      let present = nArray.filter(val => val === 'P').length;
      let attReq = Math.ceil(0.75*n);
      let proxReq = attReq - present;
      let attendance = (present / n), proxy = 0;
      if (attendance >= 0.75) {
        console.log(0);
      } else {
        for (var i = 2; i < n-2; i++) {
          if (nArray[i] === 'A' && (nArray[i-1] === 'P' || nArray[i-2] === 'P') &&
              (nArray[i+1] === 'P' || nArray[i+2] === 'P')) {
              present++;
            }
        }
        console.log(present >= (0.75*n) ? proxReq : -1);
      }
    }
});

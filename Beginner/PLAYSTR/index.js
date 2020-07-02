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
      const n = Number(arr[s*3]);
      const sArray = arr[s*3+1].split('');
      const rArray = arr[s*3+2].split('');
      let sLength = 0, rLength = 0;
      for (var i = 0; i < n; i++) {
        sLength = sArray[i] === '1' ? sLength+1 : sLength;
        rLength = rArray[i] === '1' ? rLength+1 : rLength;
      }
      console.log(sLength === rLength ? 'YES' : 'NO');
    }
});

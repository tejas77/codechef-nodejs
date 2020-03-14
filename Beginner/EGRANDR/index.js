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
      const nArray = arr[s*2+1].split(' ').map(Number);
      let sum = 0, fullScore = false;
      for (var i = 0; i < n; i++) {
        if (nArray[i] === 2) {
          console.log('No');
          continue loop;
        } else if (nArray[i] === 5) {
          fullScore = true;
        }
        sum += nArray[i];
      }
      sum /= n;
      console.log(sum >= 4 && fullScore ? 'Yes' : 'No');
    }
});

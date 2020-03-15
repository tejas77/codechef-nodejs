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
      const sArray = arr[s*3+1];
      const uArray = arr[s*3+2];
      let score = 0;
      for (var i = 0; i < n; i++) {
        if (uArray[i] !== 'N') {
          sArray[i] === uArray[i] ? score++ : i++;
        }
      }
      console.log(score);
    }
});

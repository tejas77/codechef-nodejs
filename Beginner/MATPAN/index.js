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
      const price = arr[s*2].split(' ').map(Number);
      const str = arr[s*2+1];
      let sum = 0;
      for (var i = 97; i < 123; i++) {
        if (str.indexOf(String.fromCharCode(i)) === -1) {
          sum += price[i-97];
        }
      }
      console.log(sum);
    }
});

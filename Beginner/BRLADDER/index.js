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
      let [a,b] = arr[s].split(' ').map(Number);
      if (a > b) {
        a ^= b;
        b ^= a;
        a ^= b;
      }
      if (b-a === 2) {
        console.log('YES');
        continue loop;
      } else if ((a-1)/2 === (b-2)/2 && Number.isInteger((a-1)/2) && Number.isInteger((b-2)/2)) {
        console.log('YES');
        continue loop;
      }
      console.log('NO');
    }
});

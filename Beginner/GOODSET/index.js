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
      let j = 1;
      const goodSet = [];
      let n = Number(arr[s]);
      if (!(n&1)) {
        while (n>0) {
          goodSet.push(j);
          j+=3;
          n--;
        }
        console.log(goodSet.join(' '));
      } else {
        while (n>0) {
          goodSet.push(j);
          j+=2;
          n--;
        }
        console.log(goodSet.join(' '));
      }
    }
});

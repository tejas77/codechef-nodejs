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
      const [n,m] = arr[s*3].split(' ').map(Number);
      const alice = arr[s*3+1].split(' ');
      const berta = arr[s*3+2].split(' ');
      // const intersection = alice.filter(element => berta.includes(element)).length;
      let atw = 0;
      for (var i = 0; i < n; i++) {
        if (berta.indexOf(alice[i]) !== -1) {
          atw++;
        }
      }
      console.log(atw);
    }
});

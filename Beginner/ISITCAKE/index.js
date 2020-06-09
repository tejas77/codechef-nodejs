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
      const n = 10;
      let solved30 = 0;
      for (var i = 0; i < n; i++) {
        solved30 += arr[shift+i].split(' ').map(Number).filter(a => a <= 30).length;
      }
      console.log(solved30 >= 60 ? 'yes' : 'no');
      shift += n;
    }
});

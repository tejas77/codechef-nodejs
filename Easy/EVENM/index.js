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
      const n = Number(arr[s]);
      let isEven = false;
      let str;
      for (var i = 0; i < n; i++) {
        isEven = !isEven;
        str = "";
        for (var j = 1; j <= n; j++) {
          str += isEven ? i*n+j + " " : i*n+n+1-j + " ";
        }
        console.log(str);
      }
    }
});

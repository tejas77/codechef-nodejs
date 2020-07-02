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
      let [n, h, y1, y2, l] = arr[shift].split(' ').map(Number);
      let pass = 0;
      for (var i = 1; i <= n; i++) {
        const [type, b] = arr[shift+i].split(' ').map(Number);
        if (type === 1 && h - y1 <= b) {
          pass++;
        } else if (type === 2 && y2 >= b) {
          pass++;
        } else {
          l--;
          if (l) {
            pass++;
          } else {
            console.log(pass);
            shift += n+1;
            continue loop;
          }
        }
      }
      console.log(pass);
      shift += n+1;
    }
});

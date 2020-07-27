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
      const [r,c] = arr[shift].split(' ').map(Number);
      let table = [];
      for (var i = 1; i <= r; i++) {
        table.push(arr[shift+i].split(' '));
      }
      let f = 0;
      for (i = 0; i < r; i++) {
        for (var j = 0; j < c; j++) {
          let s = 0;
          i-1 >= 0 ? s++ : null;
          i+1 < r ? s++ : null;
          j-1 >= 0 ? s++ : null;
          j+1 < c ? s++ : null;
          if (s <= table[i][j]) {
            console.log('Unstable');
            shift += r+1;
            continue loop;
          }
        }
      }
      console.log('Stable');
      shift += r+1;
    }
});

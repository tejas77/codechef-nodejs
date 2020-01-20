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
      const games = Number(arr[shift]);
      for (var i = 1; i <= games; i++) {
        let [iS,n,q] = arr[shift+i].split(' ').map(Number);
        let afterGame = n >> 1;
        if ((afterGame << 1) < n && iS != q) {
          afterGame++;
        }
        console.log(afterGame);
      }
      shift += games+1;
    }
});

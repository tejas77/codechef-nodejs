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
      const [n,m] = arr[shift].split(' ').map(Number);
      let x = 0,y = 0, cake = [];
      for (var i = 1; i <= n; i++) {
        cake.push(arr[shift+i].split(''));
      }
      for (i = 0; i < n; i++) {
        for (var j = 0; j < m; j++) {
          (!((i+j)&1)) ? cake[i][j] === 'R' ? x+=5 : y+=3 : cake[i][j] === 'R' ? y+=5 : x+=3;
        }
      }
      console.log(Math.min(x,y));
      shift += n+1;
    }
});

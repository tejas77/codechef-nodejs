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
      const n = Number(arr[shift]);
      let knights = [],d=[],l=[];
      for (var i = 1; i <= n; i++) {
        const [x,y] = arr[shift+i].split(' ').map(Number);
        d.push(x+2);
        l.push(y+1);
        d.push(x+2);
        l.push(y-1);
        d.push(x-2);
        l.push(y+1);
        d.push(x-2);
        l.push(y-1);
        d.push(x+1);
        l.push(y+2);
        d.push(x+1);
        l.push(y-2);
        d.push(x-1);
        l.push(y+2);
        d.push(x-1);
        l.push(y+2);
      }
      let [t,k] = arr[shift+n+1].split(' ').map(Number);
      if (d.indexOf(t+1) !== -1 && d.indexOf(t-1) !== -1) {
        if (l.indexOf(k+1) !== -1 && l.indexOf(k-1) !== -1) {
          console.log('YES');
        } else {
          console.log('NO');
        }
      } else {
        console.log('NO');
      }
      shift += n+2;
    }
});

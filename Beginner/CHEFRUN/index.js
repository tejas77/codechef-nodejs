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
      const [x1,x2,x3,v1,v2] = arr[s].split(' ').map(Number);
      const t1 = (x3-x1)/v1, t2 = Math.abs(x3-x2)/v2;
      console.log(t1 < t2 ? 'Chef' : t1 > t2 ? 'Kefa' : 'Draw');
    }
});

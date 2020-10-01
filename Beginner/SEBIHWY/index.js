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
      const [spd,sg,fg,d,time] = arr[s].split(' ').map(Number);
      const ckh = ((d*180)/time) + spd;
      const dsg = Math.abs(ckh - sg);
      const dfg = Math.abs(ckh - fg);
      console.log(dsg === dfg ? 'DRAW' : dsg < dfg ? 'SEBI' : 'FATHER');
    }
});

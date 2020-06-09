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
      const [x,y,s] = arr[shift+1].split(' ').map(Number);
      let xArr = [], yArr = [];
      // console.log({n,m,x,y,s,shift});
      if (x !== 0) {
        xArr = arr[shift+2].split(' ');
      }
      if (y !== 0) {
        yArr = arr[shift+3].split(' ');
      }
      let xprev=0, yprev=0,sumx=0, sumy=0;
      for (var i = 0; i < x; i++) {
        sumx += Math.floor((xArr[i]-xprev-1)/s);
        xprev=xArr[i];
      }
      sumx += Math.floor((n-xprev)/s);
      for (var i = 0; i < y; i++) {
        sumy += Math.floor((yArr[i]-yprev-1)/s);
        yprev=yArr[i];
      }
      sumy += Math.floor((m-yprev)/s);
      console.log(sumx*sumy);
      shift += x !== 0;
      shift += y !== 0;
      shift += 2;
    }
});

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
      let [a,b,n] = arr[s].split(' ').map(Number);
      if (a<0&&n%2===0)
            a=a*(-1);
      if(b<0&&n%2===0)
          b=b*(-1);
      console.log(a>b ? 1 : a<b ? 2 : 0);
    }
});

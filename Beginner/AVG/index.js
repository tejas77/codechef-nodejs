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
      const [n,k,v] = arr[s*2].split(' ').map(Number);
      const nSum = arr[s*2+1].split(' ').map(Number).reduce((a,b) => a+b);
      const kVal = (((n+k)*v) - nSum)/k;
      console.log(kVal === parseInt(kVal) && kVal > 0 ? kVal : -1);
    }
});

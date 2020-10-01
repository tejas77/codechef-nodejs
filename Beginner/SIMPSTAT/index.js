process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = Number(arr.shift());
    loop: for (var i = 0; i < t; i++) {
      let [n,k] = arr.shift().split(' ').map(Number);
      let measurements = arr.shift().split(' ').map(Number).sort((a,b) => a-b);
      let m = n-(2*k);
      measurements.splice(0,k);
      measurements.splice(m,n);
      console.log(measurements.reduce((a,b) => a+b) / m);
    }
});

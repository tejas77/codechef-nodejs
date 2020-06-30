process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = Number(arr.shift());
    loop: for (var s = 0; s < t; s++) {
      let [n,m] = arr.shift().split(' ').map(Number);
      let sum=((n-1)+(m-1)+((n-1)*(m-1)*2));
      console.log(sum);
    }
});

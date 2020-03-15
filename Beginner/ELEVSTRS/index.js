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
      const [n,v1,v2] = arr.shift().split(' ').map(Number);
      (Math.sqrt(2) * n) / v1 > (2*n) / v2 ? console.log('Elevator') : console.log('Stairs');
    }
});

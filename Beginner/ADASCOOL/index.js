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
      n%2 === 1 && m%2 === 1 ? console.log('NO') : console.log('YES');
    }
});

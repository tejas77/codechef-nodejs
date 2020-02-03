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
      var [n,k] = arr.shift().split(' ').map(Number);
      const nArray = arr.shift().split(' ').map(Number).sort();
      console.log(nArray[parseInt((n+k)/2)]);
    }
});

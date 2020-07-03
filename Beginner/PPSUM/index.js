process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = arr.shift();
    for (var i = 0; i < t; i++) {
      var dn = arr.shift().split(' ').map(Number);
      var d = dn[0];
      let n = dn[1];
      for (var j = 0; j < d; j++) {
        n = (n*(n+1))/2;
      }
      console.log(n);
    }
});

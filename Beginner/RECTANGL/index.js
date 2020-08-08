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
      var n = arr.shift().split(' ').map(Number);
      const val = n.shift();
      let tmp = 0;
      for (var j = 0; j < n.length; j++) {
        if (val === n[j]) {
          n.splice(j,1);
          tmp = n[j];
          break;
        }
      }
      tmp === 0 ? console.log('NO') : n[0] === n[1] ? console.log('YES') : console.log('NO');
    }
});

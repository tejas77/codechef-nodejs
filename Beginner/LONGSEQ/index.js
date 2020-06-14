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
      var n = arr.shift().split('').map(Number);
      const true1 = n.filter(Boolean).length;
      const false0 = n.length - true1;
      true1 === 1 || false0 === 1 ? console.log('Yes') : console.log('No');
    }
});

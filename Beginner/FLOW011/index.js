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
      var sal = parseFloat(arr.shift());
      sal < 1500 ? console.log(`${parseFloat(sal*2.00).toFixed(2)}`): console.log(`${sal*1.98 + 500}`);
    }
});

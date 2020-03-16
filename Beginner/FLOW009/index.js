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
      var sale = arr[i].split(' ');
      sale[0] < 1000 ? console.log(`${parseFloat(sale[0]*sale[1]).toFixed(6)}`) :
      console.log(`${parseFloat(sale[0]*sale[1] * 0.9).toFixed(6)}`);
    }
});

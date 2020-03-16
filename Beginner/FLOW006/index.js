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
      var sumarr = arr[i].split('');
      console.log(arrSum(sumarr));
    }
});

var arrSum = arr => arr.reduce((a,b) => parseInt(a) + parseInt(b), 0);

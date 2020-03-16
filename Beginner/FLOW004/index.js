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
      console.log(parseInt(sumarr[0]) + parseInt(sumarr[sumarr.length - 1]));
    }
});

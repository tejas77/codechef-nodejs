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
      var n = parseInt(arr.shift());
      var info = arr.shift();
      info.split('I').length > 1 ?
       console.log('INDIAN') : info.split('Y').length > 1?
       console.log('NOT INDIAN') : console.log('NOT SURE');
    }
});

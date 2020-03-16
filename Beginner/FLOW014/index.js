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
      var properties = arr.shift().split(' ').map(Number);
      var hard = properties[0] > 50;
      var cc = properties[1] < 0.7;
      var ts = properties[2] > 5600;
      hard && cc && ts ? console.log('10') :
      hard && cc ? console.log('9') :
      cc && ts ? console.log('8') :
      hard && ts ? console.log('7') :
      hard || ts || cc ? console.log('6') : console.log('5');
    }
});

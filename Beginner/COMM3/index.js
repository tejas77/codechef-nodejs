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
      var range = parseInt(arr.shift());
      var c1 = arr.shift().split(' ').map(Number);
      var c2 = arr.shift().split(' ').map(Number);
      var c3 = arr.shift().split(' ').map(Number);
      let com12 = true, com13 = true, com23 = true;
      Math.sqrt(Math.pow(c1[0] - c2[0],2) + Math.pow(c1[1] - c2[1], 2)) > range ?
        com12 = false: null;
      Math.sqrt(Math.pow(c1[0] - c3[0],2) + Math.pow(c1[1] - c3[1], 2)) > range ?
        com13 = false: null;
      Math.sqrt(Math.pow(c3[0] - c2[0],2) + Math.pow(c3[1] - c2[1], 2)) > range ?
        com23 = false: null;
      com13 && com12 || com12 && com23 || com13 && com23 ? console.log('yes') : console.log('no');
    }
});

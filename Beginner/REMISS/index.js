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
      var guards = arr[i].split(' ');
      var gOne = parseInt(guards[0]);
      var gTwo = parseInt(guards[1]);
      if (gOne >= gTwo) {
        console.log(`${gOne} ${gOne+gTwo}`);
      } else {
        console.log(`${gTwo} ${gOne+gTwo}`);
      }
    }
});

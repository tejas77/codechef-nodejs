process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = Number(arr.shift());
    loop: for (var i = 0; i < t; i++) {
      const d1 = arr.shift().split(' ');
      const d2 = arr.shift().split(' ');
      let count = 0;
      for (var j = 0; j < d1.length; j++) {
        if (d2.indexOf(d1[j]) !== -1) {
          count++;
        }
      }
      count >= (d1.length/2) ? console.log('similar') : console.log('dissimilar');
    }
});

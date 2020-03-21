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
      var values = arr[i].split(' ').map(Number);
      let apple = values.shift();
      let orange = values.shift();
      let coins = values.shift();
      while (coins !== 0) {
        if (coins < 2 && apple === orange) {
          break;
        }
        if (apple > orange) {
          orange++;
          coins--;
        } else {
          apple++;
          coins--;
        }
      }
      let diff = apple - orange;
      diff = diff >= 0 ? diff : -diff;
      console.log(diff);
    }
});

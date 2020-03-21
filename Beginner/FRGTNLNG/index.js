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
      var values = arr.shift().split(' ').map(Number);
      var n = values[0], k = values[1];
      var used = new Array(n).fill('NO');
      var forgWords = arr.shift().split(' ');
      for (var j = 0; j < k; j++) {
        var sentence = arr.shift().split(' ');
        var words = sentence.splice(0,1)[0];
        sentence.forEach((word) => {
          forgWords.forEach((fword, i) => {
            if (word === fword) {
              used[i] = 'YES';
            }
          });
        });
      }
      console.log(used.join(' '));
    }
});

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
      let notes = 0;
      var currency = [100, 50, 10, 5, 2, 1];
      for (var j = 0; j < currency.length; j++) {
        let rem = 0;
        if (n >= currency[j]) {
          rem = parseInt(n / currency[j]);
          notes += rem;
          n -= rem * currency[j];
        }
      }
      console.log(notes);
    }
});

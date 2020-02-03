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
      let p = parseInt(arr[i]);
      let menu = 0;
      let order = 11;
      while (p !== 0) {
        if (p >= Math.pow(2, order)) {
          p -= Math.pow(2, order);
          menu++;
        } else {
          order--;
        }
      }
      console.log(menu);
    }
});

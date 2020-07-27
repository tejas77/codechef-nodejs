process.stdin.resume();
process.stdin.setEncoding('utf8');

var arr = '';
process.stdin.on('data', function (chunk) {
    arr += chunk;
});

process.stdin.on('end', function () {
    arr = arr.split('\n');
    var t = arr.shift();
    loop: for (var i = 0; i < t; i++) {
      const n = Number(arr.shift());
      const rainbow = arr.shift().split(' ').map(Number);
      let j = n - 1, c = 1, flag = 1;
      for (var k = 0; k <= j; k++) {
        if ((rainbow[k] !== rainbow[j]) || (rainbow[k] !== c)) {
          flag = 0;
          break;
        }
        if ((rainbow[k] < rainbow[k+1]) && (c<7)) {
          c++;
        }
        j--;
      }

    flag === 0 || c !== 7 ? console.log('no') : console.log('yes');
  }
});

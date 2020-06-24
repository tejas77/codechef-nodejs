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
    const lengths = arr.shift().split(' ').map(Number);
    const ratings = arr.shift().split(' ').map(Number);
    const res = lengths.map((val,i) => {
      return val * ratings[i];
    });
    let max = res[0], pos = 0;
    for (var j = 1; j < n; j++) {
      if (res[j] > max) {
        max = res[j];
        pos = j;
      }
    }
    for (var j = pos+1; j < n; j++) {
      if (res[j] === max) {
        if (ratings[j] > ratings[pos]) {
          pos = i;
        }
      }
    }
    console.log(pos+1);
  }
});
